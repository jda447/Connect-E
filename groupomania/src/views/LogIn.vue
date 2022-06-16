<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div  class="text-center">
            <h1 class="m-5">Log-in</h1>
            <form>
            <div class="form-group m-5">
                <input type="email" class="form-control" id="userName" aria-describedby="emailHelp" placeholder="Enter your User Name">
            </div>
            <div class="form-group m-5">
                <input type="password" class="form-control" id="password" placeholder="Enter your Password">
            </div>
            <button type="submit" class="btn btn-warning">Submit</button>
            </form>
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

<style>

</style>