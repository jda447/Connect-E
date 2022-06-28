<template>
  <div id="app">
      <div v-if="awesome">
      <ProfileNav></ProfileNav>
        <div class="mx-auto col-4 col-md-4 col-lg-2 my-3">
          <div class="imagePreviewWrapper" :style="{ 'background-image': `url(${previewImage})` }" @click="selectImage"> </div>
        </div>
      <div class="text-center labels">
        <div><label class="my-2">Name:</label></div>
        <div><label class="my-2">Position:</label></div>
        <div><label class="my-2">Hobbies:</label></div>
      </div>
      <div class="text-center">
        <button @click="toggle" class="btn btn-primary btn-lg mt-3">Edit</button>
      </div>
      </div>
      <div v-else>
      <EditProfileNav></EditProfileNav>
      <form>
        <div class="mx-auto col-4 col-md-4 col-lg-2 mt-5">
          <input ref="fileInput" type="file" @input="pickFile">
        </div>
        <div class="mx-auto col-4 col-md-4 col-lg-2 my-2"><label class="text-center">Name</label>
          <input type="text">
        </div>
        <div class="mx-auto col-4 col-md-4 col-lg-2 my-2"><label class="text-center">Position</label>
          <input type="text">
        </div>
        <div class="mx-auto col-4 col-md-4 col-lg-2 my-2"><label class="text-center">Hobbies</label>
          <input type="text">
        </div>
        <div class="mx-auto text-center col-4 col-md-4 col-lg-2 my-2">
        <button class="btn btn-success px-3">Upload</button>
        </div>
      </form>
      <div class="text-center">
        <button @click="toggle" class="btn btn-primary btn-lg mt-3">Profile</button>
      </div>
    </div>
    <FooTer></FooTer>
  </div>
</template>

<script>
import ProfileNav from '../components/ProfileNav.vue'
import EditProfileNav from '../components/EditProfileNav.vue'
// import EditProfileForm from '../components/EditProfileForm.vue'
import FooTer from '../components/FooTer.vue'

export default {
  name: 'App',
  components: {
    ProfileNav,
    EditProfileNav,
    // EditProfileForm,
    FooTer
  },
  data() {
    return {
      awesome: true,
      previewImage: null
    }
    },
  methods: {
    toggle() {
      this.awesome = !this.awesome
    },
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
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
  border: solid 10px white;
  font-family: Pacifico;
}

.labels {
  color: #0275d8;
}

.btn-primary {
  background-color: #0275d8;
  color: white;
  &:hover {
    background-color: white;
    color: #0275d8;
  }
}

.btn-success {
  font-family: Pacifico;
  background-color: #4c9173;
  color: white;
  &:hover {
    background-color: white;
    color: #4c9173;
  }
}

.imagePreviewWrapper {
    width: 150px;
    height: 150px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}
</style>