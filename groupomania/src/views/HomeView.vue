<template>
  <div id="app">
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
import FooTer from '../components/FooTer.vue'

export default {
  name: 'App',
  components: {
    FooTer
  }
}
</script>

<style scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
  border: solid 10px white;
  height: 92vh;
  background-image: linear-gradient(to bottom right, #5bc0de, white, white, white, #f0ad4e);
}
</style>