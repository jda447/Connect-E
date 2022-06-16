<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div  class="text-center">
            <div class="m-5"><h1>Groupomania</h1></div>
              <router-link to="/sign-in" class="btn btn-info m-5">Sign-in</router-link>
              <router-link to="/log-in" class="btn btn-warning m-5">Log-in</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
    }
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>