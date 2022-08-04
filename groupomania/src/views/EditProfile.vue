<template>
  <div id="app">
    <EditProfileNav></EditProfileNav>
    <EditProfileForm></EditProfileForm>
      <div class="text-center">
        <router-link to="/profile" class="btn profileBtn btn-lg">Profile</router-link>
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
}

.profileBtn {
  font-family: Pacifico;
  background-color: #53a8b6;
  color: white;
  &:hover {
    background-color: white;
    color: #53a8b6;
    transform: scale(1.6);
    transition: transform 250ms;
  }
}
</style>