<template>
  <div id="app">
  <EditProfileNav></EditProfileNav>
  <EditProfileForm></EditProfileForm>
  <FooTer></FooTer>
  </div>
</template>

<script>
import EditProfileNav from '../components/EditProfileNav.vue'
import FooTer from '../components/FooTer.vue'
import EditProfileForm from '../components/EditProfileForm.vue'

export default {
  name: 'App',
  components: {
    EditProfileNav,
    EditProfileForm,
    FooTer
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
  border: solid 10px white;
  font-family: Pacifico;
}
</style>