<template>
<div id="app" class="col-lg-7 mx-auto">
  <ProfileNav></ProfileNav>
    <div class="container">
      <div class="row justify-content-around">
        <div class="col-6 col-lg-5 card">
          <div class="base-image-input rounded-circle mx-auto text-center col-4 col-md-4 col-lg-2 mt-2"
          :style="{ 'background-image': `url(${imageUrl || preimageUrl})` }"
          @click="chooseImage">
          <span v-if="!imageUrl" class="placeholder rounded-circle fs-6">
            Choose an Image
          </span>
          <input class="file-input rounded-circle" ref="fileInput" type="file" @input="onSelectFile">
        </div>
        <div class="card-body">
          <div class="card-title text-center mb-4">
            <label class="">
              Name
            </label>
            <div class="fw-bold">
              {{  firstName + ' ' + lastName }}
            </div> 
          </div>
          <div class="text-center">
            <label class="">
              Position
            </label>
            <div class="fw-bold">
              {{ position }}
            </div>
          </div>
        </div>
      </div>
    <div class="col-5">
      <form class="editProfileForm" @submit.prevent="onSubmit">
        <div class="text-center">
          <label>First name</label><br>
          <input v-model="firstName" class="col-11 col-lg-8 text-center" id="firstName" type="text" required/>
        </div>
        <div class="text-center">
          <label>Last name</label><br>
          <input v-model="lastName" class="col-11 col-lg-8 text-center" id="lastName" type="text" required>
        </div>
        <div class="text-center">
          <label>Position</label><br>
          <select v-model="position" id="position" class="select p-1 mb-2" required>
            <option>Customer Service</option>
            <option>Manager</option>
            <option>CEO</option>
          </select>
        </div>
        <div class="text-center">
          <input class="btn file-input col-11 mt-3" ref="fileInput" type="file" @input="onSelectFile"
          :style="{ 'display': 'initial' }">
        </div>
        <div class="text-center mt-2">
          <button v:on-click="onSubmit" class="btn uploadBtn border border-success border-2" type="submit">
            Upload
          </button>
        </div>
      </form>
    </div>
      <div class="text-center">
        <router-link to="/profile" class="btn profileBtn btn-lg fw-bold mt-4 px-2">
          Profile
        </router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ProfileNav from '../components/ProfileNav.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    ProfileNav
  },
  data() {
  return {
    preimageUrl: '',
    imageUrl: null,
    firstName: '',
    lastName: '',
    position: ''
    };
  },
  methods: {
    chooseImage () {
      this.$refs.fileInput.click()
    },
    onSelectFile () {
      const input = this.$refs.fileInput
      const files = input.files
      if (files && files[0]) {
        const reader = new FileReader
        reader.onload = e => {
          this.imageUrl = e.target.result
        }
        reader.readAsDataURL(files[0])
        this.$emit('input', files[0])
      }
    },
    async onSubmit () {
      const token = sessionStorage.getItem('token')
      const userId = sessionStorage.getItem('user')
      const response = await fetch('http://localhost:3000/api/user', {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(token)
          },
          body: new FormData() && JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName,
          position: this.position,
          userId: userId
        }),
        }
      )
      if (response.ok) {
        console.log('it worked!')
        let staffInfo = {
        firstName: this.firstName,
        lastName: this.lastName,
        position: this.position
        }
        this.$emit('info-submitted', staffInfo)
        this.$store.commit('ADD_FIRSTNAME', this.firstName)
        this.$store.commit('ADD_LASTNAME', this.lastName)
        this.$store.commit('ADD_POSITION', this.position)

        this.firstName = ''
        this.lastName = ''
        this.position = ''
        this.imageUrl = ''
      }
      if (!response.ok) {
        console.log('it did not work')
       }
    }
  },
  computed: {
    ...mapGetters(['staffFirstName', 'staffPosition', 'staffLastName'])
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Ubuntu, sans-serif;
  color: #0d3b66;
}
.uploadBtn {
  color: #229631;
  text-decoration: none;
  font-weight: bold;
  background: linear-gradient(to right, #229631 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 1s ease;
  border: #229631 5px;
    &:hover {
    background-position: left bottom;
    color:white;
  }
}
.card {
  background-color: #f8f8f8;
}

.profileBtn {
  background-color: #0d3b66;
  color: white;
  border: none;
  padding: 5px;
  box-shadow: 0 2px 4px darkslategray;
  cursor: pointer;
  transition: all 0.2s ease;
}

.profileBtn:active {
  background-color: #0d3b66;
  box-shadow: 0 0 2px darkslategray;
  transform: translateY(2px);
}

.profileBtn:not(:first-child) {
  margin-top: 10px;
}

.btn:focus {
  outline: none;
  box-shadow: none;
}
.base-image-input {
  width: 110px;
  height: 110px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
  border: dashed 1px
}
.placeholder {
  background: #F0F0F0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #333;
  font-size: 18px;
  font-family: Helvetica;
}
.placeholder:hover {
  background: #E0E0E0;
}
.file-input {
  display: none;
}
</style>