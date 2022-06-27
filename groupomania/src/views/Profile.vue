<template>
  <div id="app">
    <ProfileNav></ProfileNav>
      <div class="container">
        <div class="row">
          <div class="col col-md-4 col-lg-3">
            <img src="">
          </div>
          <div class="col col-md-4 col-lg-3 infoLabels"> 
            <div><label class="my-3">Name:</label></div>
            <div><label class="my-3">Position:</label></div>
            <div><label class="my-3">Hobbies:</label></div>
          </div>
        </div>
      </div>
      <div class="container mt-2">
        <div class="row">
          <div class="col">
            <router-link to="/edit-profile" class="btn btn-primary btn-lg">Edit</router-link>
          </div>
        </div>
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
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
  border: solid 10px white;
  font-family: Pacifico;
}

img {
  height: 160px;
  width: 220px;
}
</style>