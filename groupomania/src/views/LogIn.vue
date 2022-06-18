<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div  class="text-center">
            <h1 class="m-5">Log-in</h1>
            <form>
            <div class="form-group m-5">
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your e-mail Address" required>
            </div>
            <div class="form-group m-5">
                <input type="password" class="form-control" id="password" placeholder="Enter your Password" required>
            </div>
            <button type="submit" class="btn btn-warning">Submit</button>
            </form>
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

<style>
  #app {
    font-family: Helvetica, Arial, sans-serif;
    color: #2c3e50;
    border: solid 10px white;
}
</style>