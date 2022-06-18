<template>
  <div id="app">
    <ProfileNav></ProfileNav>
    <div><label class="m2">Profile Picture:</label></div>
    <div><label class="m2">User Name:</label></div>
    <div><label class="m2">Company Position:</label></div>
    <div v-on:click="isHidden = !isHidden" class="btn btn-primary m-5">Edit Profile</div>
    <div v-if="isHidden">
    <div class="p5"><label>Edit Profile Picture: </label>
    <input type="file" @change="onFileSelected">
    </div>
    <div class="p5"><label>Edit User Name: </label>
    <input type="text" @change="onFileSelected">
    </div>
    <div class="p5"><label>Edit Company: </label>
    <input type="text" @change="onFileSelected">
    </div>
    <button @click="onUpload" class="btn btn-success mt-4">Upload</button>
    </div>
    <FooTer></FooTer>
  </div>
</template>

<script>
import ProfileNav from '../components/ProfileNav.vue'
import FooTer from '../components/FooTer.vue'

export default {
  name: 'App',
  components: {
    ProfileNav,
    FooTer
  },
  data () {
    return {
      selectedFile: null
    },
    {
      isHidden: false
    }
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
    },
    onUpload() {

    }
  }
}
</script>

<style>
  
</style>