<template>
  <div id="app">
  <EditProfileNav></EditProfileNav>
  <div>
    <div class="imagePreviewWrapper" :style="{ 'background-image': `url(${previewImage})` }" @click="selectImage"> </div>
    <input ref="fileInput" type="file" @input="pickFile">
  </div>
  <FooTer></FooTer>
  </div>
</template>

<script>
import EditProfileNav from '../components/EditProfileNav.vue'
// import EditProfileForm from '../components/EditProfileForm.vue'
import FooTer from '../components/FooTer.vue'

export default {
  name: 'App',
  components: {
    EditProfileNav,
    // EditProfileForm,
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

<style>
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
</style>