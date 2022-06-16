<template>
  <div id="app">
    <ProfileNav></ProfileNav>
    <div><label class="m2">Profile Picture:</label></div>
    <div><label class="m2">User Name:</label></div>
    <div><label class="m2">Company Position:</label></div>
    <div><label class="m2"></label></div>
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
  .dot {
    border-radius: 50%;
  }
</style>