<template>
  <div id="app" class="col-lg-7 mx-auto">
    <ProfileNav></ProfileNav>
    <EditProfileForm></EditProfileForm>
      <div class="text-center">
        <router-link to="/profile" class="btn profileBtn btn-lg fw-bold mb-4 px-2">Profile</router-link>
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
  background-color: #0d3b66;
  color: white;
  border: none;
  padding: 5px;
  box-shadow: 0 2px 4px darkslategray;
  cursor: pointer;
  transition: all 0.2s ease;
}

.profileBtn:active {
  background-color: #0d3b66;
  box-shadow: 0 0 2px darkslategray;
  transform: translateY(2px);
}

.profileBtn:not(:first-child) {
  margin-top: 10px;
}

.btn:focus {
  outline: none;
  box-shadow: none;
}
</style>