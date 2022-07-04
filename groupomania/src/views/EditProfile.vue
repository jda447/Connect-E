<template>
  <div id="app">
    <EditProfileNav></EditProfileNav>
      <form>
        <div class="mx-auto text-center col-4 col-md-4 col-lg-2 mt-2">
          <input ref="fileInput" type="file" @input="pickFile">
        </div>
        <div class="mx-auto col-4 col-md-4 col-lg-2 my-2">
          <label>Name</label>
          <input v-model="userName" class="userData" type="text" placeholder="Add your name" />
        </div>
        <div class="mx-auto col-4 col-md-4 col-lg-2 my-2">
        <label>Position</label><br>
        <select class="userData p-1" v-model="userPosition">
          <option class="userData" disabled value="">Add your position</option>
          <option class="userData">Customer Service</option>
          <option class="userData">Manager</option>
          <option class="userData">CEO</option>
        </select>
        </div>
        <div class="mx-auto col-4 col-md-4 col-lg-2 my-2">
          <label>Hobbies</label>
          <input v-model="userHobbies" class="userData" placeholder="Add your hobbies" type="text">
        </div>
        <div class="mx-auto text-center col-4 col-md-4 col-lg-2 my-2">
        <button class="btn btn-success px-3">Upload</button>
        </div>
      </form>
      <div class="text-center">
        <router-link to="/profile" class="btn btn-primary btn-lg mt-3">Profile</router-link>
      </div>
    <FooTer></FooTer>
  </div>
</template>

<script>
import EditProfileNav from '../components/EditProfileNav.vue'
import FooTer from '../components/FooTer.vue'

export default {
  name: 'App',
  components: {
    EditProfileNav,
    FooTer
  },
  data() {
      return {
        previewImage: null
      };
    },
  methods: {
      selectImage () {
          this.$refs.fileInput.click()
      },
      pickFile () {
        let input = this.$refs.fileInput
        let file = input.files
        if (file && file[0]) {
          let reader = new FileReader
          reader.onload = e => {
            this.previewImage = e.target.result
          }
          reader.readAsDataURL(file[0])
          this.$emit('input', file[0])
        }
      }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
  border: solid 10px white;
  font-family: Pacifico;
}
.imagePreviewWrapper {
    width: 250px;
    height: 250px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}

.btn-primary {
  background-color: #0275d8;
  color: white;
  &:hover {
    background-color: white;
    color: #0275d8;
  }
}
</style>