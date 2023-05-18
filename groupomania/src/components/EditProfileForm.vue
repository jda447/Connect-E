<template>
  <div id="app">
    <div class="container">
      <div class="row justify-content-around">
        <div v-if="image && firstName && lastName && position" class="card col-6 col-sm-5 col-md-4 mb-3">
          <img :src="image" class="profileImage rounded-circle mx-auto col-6 mt-3">
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
      <form @submit.prevent="updateUser"
        enctype="multipart/form-data"
        class="mx-auto col-8 col-lg-4">
        <div v-if="image && firstName && lastName && position" class="fields text-center mx-auto mb-3">
          <button class="btn border border-2 uploadBtn">Upload</button>
        </div>
          <div v-if="!firstName || !lastName || !position || !image">
            <div class="text-center">
              <label class="fw-bold">First name</label><br>
              <input v-model="firstName" class="col-8 col-lg-10 text-center" id="firstName" type="text" required/>
            </div>
            <div v-if="!firstName || !lastName || !position || !image" class="text-center">
              <label class="fw-bold">Last name</label><br>
              <input v-model="lastName" class="col-8 col-lg-10 text-center" id="lastName" type="text" required>
            </div>
            <div v-if="!firstName || !lastName || !position || !image" class="text-center mb-3">
              <label class="fw-bold">Position</label><br>
              <select v-model="position" id="position" class="select col-8 col-lg-10 p-1 text-center" required>
                <option>Customer Service</option>
                <option>Manager</option>
                <option>CEO</option>
              </select>
            </div>
            <div v-if="!firstName || !lastName || !position || !image" class="fields text-center mx-auto mt-3">
            <label class="btn fileUpload text-center mb-4">
              <font-awesome-icon :icon="['fa', 'user-large']" class="me-2" />Profile picture
            <input
              type="file"
              ref="file"
              name="image"
              class="file-input col-11 my-1 mt-2"
              @change="onSelect"/>
            </label>
          </div>
        </div>
      </form>
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
  font-weight: bold;
  border: 1px solid;
  cursor: pointer;
  &:hover {
    color: #0d3b66;
    background-color: white;
    border: 1px solid #0d3b66;
  }
}
.profileImage {
  height: 125px;
  width: 125px;
  border-radius: 50%;
}
</style>