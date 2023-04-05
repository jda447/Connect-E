<template>
  <div id="app" class="col-lg-7 mx-auto">
    <EditNav></EditNav>
    <EditProfileForm></EditProfileForm>
  </div>
</template>

<script>
import EditNav from '../components/EditNav.vue'
import EditProfileForm from '../components/EditProfileForm.vue'

export default {
  name: 'App',
  components: {
    EditNav,
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