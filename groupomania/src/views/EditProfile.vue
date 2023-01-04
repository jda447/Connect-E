<template>
  <div id="app" class="col-lg-7 mx-auto">
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
  font-family: Ubuntu, sans-serif;
  color: #0d3b66;
}

.profileBtn {
  background-color: #fd2500;
  color: white;
  text-decoration: none;
  font-weight: bold;
  background: linear-gradient(to right, white 50%, #0d3b66 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 1s ease;
  border: #0d3b66 1px;
    &:hover {
    background-position: left bottom;
    color: #0d3b66;
  }
}

.btn:focus {
  outline: none;
  box-shadow: none;
}
</style>