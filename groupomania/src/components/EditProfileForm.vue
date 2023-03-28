<template>
  <div id="app">
    <div class="container">
      <div class="row justify-content-around">
        <div v-if="firstName || lastName || position || image" class="col-5 card mb-3">
          <img :src="image" class="rounded-circle mx-auto col-6 mt-3">
            <div class="card-body">
              <div class="card-title text-center">
                <div class="fw-bold fs-5">
                  {{  firstName + ' ' + lastName }}
                </div> 
              </div>
              <div class="text-center">
                <div class="fw-bold fs-6 mt-1">
                  {{ position }}
                </div>
              </div>
            </div>
          </div>
        </div>
      <form @submit.prevent="updateUser" enctype="multipart/form-data">
        <div v-if="image && firstName && lastName && position" class="fields text-center mx-auto mb-3">
          <button class="btn uploadBtn">Upload</button>
        </div>
        <div v-if="!firstName || !lastName || !position || !image" class="fields text-center mx-auto mt-3">
          <label class="btn fileUpload text-center mb-2">
            <font-awesome-icon :icon="['fa', 'user-large']" class="me-2" />Profile picture
          <input
            type="file"
            ref="file"
            name="image"
            class="file-input col-11 my-1 mt-2"
            @change="onSelect"/>
          </label>
        </div>
        <div v-if="!firstName || !lastName || !position || !image" class="fields col-lg-6 mx-auto">
          <div class="text-center">
            <label>First name</label><br>
            <input v-model="firstName" class="col-5 col-lg-8 text-center" id="firstName" type="text" required/>
          </div>
          <div v-if="!firstName || !lastName || !position || !image" class="text-center">
            <label>Last name</label><br>
            <input v-model="lastName" class="col-5 col-lg-8 text-center" id="lastName" type="text" required>
          </div>
          <div v-if="!firstName || !lastName || !position || !image" class="text-center mb-3">
            <label>Position</label><br>
            <select v-model="position" id="position" class="select col-5 col-lg-8 p-1 text-center" required>
              <option>Customer Service</option>
              <option>Manager</option>
              <option>CEO</option>
            </select>
          </div>
        </div>
      </form>
      <div v-if="!firstName || !lastName || !position || !image" class="text-center">
        <router-link to="/profile" class="btn profileBtn btn-lg fw-bold mt-4 mb-4 px-2">
          Profile
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      file: '',
      firstName: '',
      lastName: '',
      position: '',
      image: ''
    };
  },
  methods: {
    onSelect() {
      const file = this.$refs.file.files[0];
      this.image = URL.createObjectURL(file)
      this.file = file;
    },
    async updateUser () {
      const token = sessionStorage.getItem('token')
      const userId = sessionStorage.getItem('user')
      const formData = new FormData()
      formData.append('image', this.file)
      formData.append('firstName', this.firstName)
      formData.append('lastName', this.lastName)
      formData.append('position', this.position)
      formData.append('user_id', userId)
      const response = await fetch('http://localhost:3000/api/user', {
          method: 'PUT',
          headers: {
            'Authorization': 'Bearer ' + JSON.parse(token)
          },
          body: formData
        }
      )
      if (response.ok) {
        console.log(response)
        this.$router.push({ path: '/profile' })
      }
      if (!response.ok) {
        console.log(response)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.uploadBtn {
  color: white;
  background-color: #229631;
  text-decoration: none;
  font-weight: bold;
  transition: all 1s ease;
    &:hover {
    color:#229631;
    background-color: white;
    border: 1px solid #229631;
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
.btn:focus {
  outline: none;
  box-shadow: none;
}
.file-input {
  display: none;
}
.fileUpload {
  background-color: white;
  color: #0d3b66;
  font-weight: bold;
  border: 1px solid;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #0d3b66;
    border: 1px solid #0d3b66;
  }
}
</style>