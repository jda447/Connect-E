<template>
  <div id="app">
  <ProfileNav></ProfileNav>
    <form>
      <div class="container mt-2">
        <div class="row">
          <div class="col">
            <div class="mb-2">
              <label class="px-3" for="customFile"></label>
              <input type="file" class="custom-file-input" id="customFile">
            </div>
            <div class="mb-2"><label class="px-3">Name: </label>
              <input type="text">
            </div>
            <div class="mb-2"><label class="px-3">Position: </label>
              <input type="text">
            </div>
            <div class="mb-2"><label class="px-3">Hobbies: </label>
              <input type="text">
            </div>
            <div class="col px-3">
            <button class="btn btn-success mt-2 px-3">Upload</button>
            </div>
          </div>
        </div>
      </div>
    </form>
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

</style>