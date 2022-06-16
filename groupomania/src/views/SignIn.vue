<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div  class="text-center">
            <h1 class="m-5">Sign-in</h1>
            <form>
            <div class="form-group m-5">
                <input type="email" class="form-control" id="userName" aria-describedby="emailHelp" placeholder="Choose a User Name">
            </div>
            <div class="form-group m-5">
                <input type="password" class="form-control" id="password" placeholder="Choose a Password">
            </div>
            <button type="submit" class="btn btn-info">Submit</button>
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