<template>
  <div id="app">
    <ProfileNav></ProfileNav>
    <div><label class="m2">Edit Profile</label></div>
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