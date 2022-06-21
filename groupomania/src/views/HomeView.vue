<template>
  <div id="app">
    <ProfileNav></ProfileNav>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div  class="text-center">
            <div class="m-5"><h1>Groupomania</h1></div>
              <router-link to="/sign-in" class="btn btn-outline-info btn-lg m-5">Sign-in</router-link>
              <router-link to="/log-in" class="btn btn-outline-warning btn-lg m-5">Log-in</router-link>
          </div>
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

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
  border: solid 10px white;
}
</style>