<template>
  <div id="app">
    <ProfileNav></ProfileNav>
    <div class="container">
      <div class="row">
        <div class="col">
        <img src="">
        </div>
        <div class="col">
          <div><label class="my-3">Name:</label></div>
          <div><label class="my-3">Position:</label></div>
          <div><label class="my-3">Hobbies:</label></div>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <div v-on:click="isHidden = !isHidden" class="btn btn-primary col">Edit Profile</div>
        </div>
      </div>
    </div>
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
  img {
  height: 175px;
  width: 200px;
  }
</style>