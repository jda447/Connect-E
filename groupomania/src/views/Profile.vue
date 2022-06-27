<template>
  <div id="app">
    <ProfileNav></ProfileNav>
      <div class="container">
        <div class="row">
          <div class="col col-md-4 col-lg-3">
            <img src="">
          </div>
          <div class="col col-md-4 col-lg-3"> 
            <div><label class="my-3">Name:</label></div>
            <div><label class="my-3">Position:</label></div>
            <div><label class="my-3">Hobbies:</label></div>
          </div>
        </div>
      </div>
      <div class="container mt-2">
        <div class="row">
          <div class="col">
            <div v-on:click="isHidden = !isHidden" class="btn btn-primary">Edit Profile</div>
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
      isHidden: false
    }
  }
}
</script>

<style>
  #app {
    font-family: Helvetica, Arial, sans-serif;
    color: #2c3e50;
    border: solid 10px white;
    /* background-image: linear-gradient(to top left, #0275d8, white, white, white); */
  }

  img {
  height: 160px;
  width: 220px;
  }
</style>