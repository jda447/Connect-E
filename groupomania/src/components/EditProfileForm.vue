<template>
  <h1>Edit Profile</h1>
  <div class="container">
    <div class="row justify-content-around">
      <div v-if="image && firstName && lastName && position"
      class="formContainer rounded mx-auto col-5 col-lg-4">
      <div class="text-center mt-2">
        <img :src="image"
          class="profileImage rounded-circle mx-auto col-6 mt-3"
          alt="Profile image">
          <div class="card-body">
            <div class="card-title text-center">
              <div class="fw-bold fs-5">
                {{  firstName + ' ' + lastName }}
              </div> 
            </div>
            <div class="text-center">
              <div class="fw-bold fs-6">
                {{ position }}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    <form @submit.prevent="updateUser"
      enctype="multipart/form-data"
      class="mx-auto col-7 col-lg-5">
      <div v-if="image && firstName && lastName && position"
        class="text-center mx-auto mb-3 mt-3">
        <button class="btn uploadBtn">
          Upload
        </button>
      </div>

        <div v-if="!firstName || !lastName || !position || !image"
          class="formContainer col rounded">
          <div class="text-center mt-3">
            <label class="fw-bold">First name<br>
              <input v-model="firstName"
              class="col-10 text-center"
              id="firstName"
              type="text"
              required/>
            </label>
          </div>
          <div v-if="!firstName || !lastName || !position || !image"
            class="text-center">
            <label class="fw-bold">Last name<br>
            <input v-model="lastName"
              class="col-10 text-center"
              id="lastName"
              type="text"
              required>
            </label>
          </div>
          <div v-if="!firstName || !lastName || !position || !image"
            class="text-center mb-1">
            <label class="fw-bold">Position<br>
              <select v-model="position"
                id="position"
                class="p-1 text-center"
                required>
                <option>Customer Service</option>
                <option>Manager</option>
                <option>CEO</option>
              </select>
            </label>
          </div>
        <div v-if="!firstName || !lastName || !position || !image">
          <label class="btn mb-4">
            <div class="fileUpload col-6 mb-1 mx-auto">
              <font-awesome-icon :icon="['fa', 'user-large']"
              class="me-2"/>Profile picture
            </div>
            <input
              type="file"
              ref="file"
              name="image"
              class="my-2 col-10 mx-auto"
              @change="onSelect"/>
          </label>
        </div>
      </div>
    </form>
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

h1 {
  color: white;
  font-size: 0.1rem;
}
.card {
  background-color: #f8f8f8;
  border: 1px solid #0d3b66;
}
.profileImage {
  height: 125px;
  width: 125px;
  border-radius: 50%;
}
.uploadBtn {
  font-family: Ubuntu, sans-serif;
  color: white;
  background-color: #229631;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid #229631;
    &:hover {
    color: #229631;
    background-color: white;
    border: 2px solid #229631;
  }
}

.uploadBtn:focus {
  background-color: #fafafa;
  color: #229631;
  border: 2px solid #229631;
}
/// form css

// .formContainer {
//   border: 1px solid #0d3b66;
// }

.fileUpload {
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #0d3b66;
  }
}
</style>