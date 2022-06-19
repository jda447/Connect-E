<template>
  <div id="app">
    <ProfileNav></ProfileNav>
    <div><label class="m2">Profile Picture:</label></div>
    <div><label class="m2">User Name:</label></div>
    <div><label class="m2">Company Position:</label></div>
    <div v-on:click="isHidden = !isHidden" class="btn btn-primary m-5">Edit Profile</div>
    <div v-if="isHidden"><EditProfileForm></EditProfileForm></div>
    <FooTer></FooTer>
  </div>
</template>

<script>
import ProfileNav from '../components/ProfileNav.vue'
import FooTer from '../components/FooTer.vue'
import EditProfileForm from '../components/EditProfileForm.vue'

export default {
  name: 'App',
  components: {
    ProfileNav,
    FooTer,
    EditProfileForm
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