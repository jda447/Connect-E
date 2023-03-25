<template>
  <div id="app">
    <div class="container">
      <div class="row justify-content-around">
        <div class="col-6 col-lg-5 card mb-3">
          <img :src="image" class="rounded-circle mx-auto col-4 my-2">
            <div class="card-body">
              <div class="card-title text-center mb-4">
                <label class="">Name</label>
                <div class="fw-bold">
                  {{  firstName + ' ' + lastName }}
                </div> 
              </div>
              <div class="text-center">
                <label class="">Position</label>
                <div class="fw-bold">
                  {{ position }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <form @submit.prevent="updateUser" enctype="multipart/form-data">
          <div class="fields border border-2 rounded-3 col-10 mx-auto">
            <div class="text-center">
              <label>First name</label><br>
              <input v-model="firstName" class="col-6 col-lg-8 text-center" id="firstName" type="text" required/>
            </div>
            <div class="text-center">
              <label>Last name</label><br>
              <input v-model="lastName" class="col-6 col-lg-8 text-center" id="lastName" type="text" required>
            </div>
            <div class="text-center">
              <label>Position</label><br>
              <select v-model="position" id="position" class="select col-6 col-lg-8 p-1 text-center" required>
                <option>Customer Service</option>
                <option>Manager</option>
                <option>CEO</option>
              </select>
            </div>
            <br>
            <div class="fields text-center mx-auto mb-2">
              <label class="btn fileUpload text-center mb-2">Add image
              <input
                type="file"
                ref="file"
                name="image"
                class="file-input col-11 my-1 mb-2"
                @change="onSelect"/>
              </label>
            </div>
            <div class="fields text-center mx-auto mb-2">
              <button class="btn uploadBtn border border-2 border-success">Upload</button>
            </div>
          </div>
        </form>
        <div class="text-center">
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
.btn:focus {
  outline: none;
  box-shadow: none;
}
.file-input {
  display: none;
}
.fileUpload {
  background-color: #0d3b66;
  color: white;
  border-radius: 50%;
  cursor: pointer;
}
</style>