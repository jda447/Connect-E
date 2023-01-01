<template>
  <div id="app">
    <ProfileNav></ProfileNav>
    <EditProfileForm></EditProfileForm>
      <div class="text-center">
        <router-link to="/profile" class="btn profileBtn btn-lg fw-bold">Profile</router-link>
      </div>
  </div>
</template>

<script>
import ProfileNav from '../components/ProfileNav.vue'
import EditProfileForm from '../components/EditProfileForm.vue'

export default {
  name: 'App',
  components: {
    ProfileNav,
    EditProfileForm
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #0d3b66;
}

.profileBtn {
  font-family: Ubuntu;
  background-color: #0d3b66;
  color: white;
  &:hover {
    background-color: white;
    color: #0d3b66;
    transform: scale(1.6);
    transition: transform 250ms;
    font-family: Pacifico;
  }
}

.btn:focus {
  outline: none;
  box-shadow: none;
}
</style>