<template>
  <div id="app" class="col-lg-7 mx-auto">
    <ProfileNav></ProfileNav>
    <EditProfileForm></EditProfileForm>
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
</style>