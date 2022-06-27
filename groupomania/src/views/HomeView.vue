<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div  class="text-center">
            <div class="mt-5"><img  class="col-8 col-lg-4" src="@/assets/icon-left-font-monochrome-resized.png"/></div>
              <router-link to="/sign-in" class="btn btn-outline-info btn-lg m-5">Sign-up</router-link>
              <router-link to="/log-in" class="btn btn-outline-warning btn-lg m-5">Log-in</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
  border: solid 10px white;
  min-height: 100vh;
  background-image: linear-gradient(to bottom right, #5bc0de, black, black, black, #f0ad4e);
}
</style>