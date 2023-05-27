<template>
  <div class="app col-lg-7 mx-auto">
    <nav role="navigation">
      <EditNav />
    </nav>
    <main role="main">
      <EditProfileForm />
    </main>
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
.app {
  font-family: Ubuntu, sans-serif;
  color: #0d3b66;
}
</style>