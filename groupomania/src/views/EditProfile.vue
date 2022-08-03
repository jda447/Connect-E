<template>
  <div id="app">
    <EditProfileNav></EditProfileNav>
    <EditProfileForm></EditProfileForm>
      <div class="text-center">
        <router-link to="/profile" class="btn btn-primary btn-lg mt-3">Profile</router-link>
      </div>
  </div>
</template>

<script>
import EditProfileNav from '../components/EditProfileNav.vue'
import EditProfileForm from '../components/EditProfileForm.vue'

export default {
  name: 'App',
  components: {
    EditProfileNav,
    EditProfileForm
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
  border: solid 10px white;
  // font-family: Pacifico;
}

.btn-primary {
  font-family: Pacifico;
  background-color: #0275d8;
  color: white;
  &:hover {
    background-color: white;
    color: #0275d8;
  }
}
</style>