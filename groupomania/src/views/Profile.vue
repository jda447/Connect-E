<template>
  <div id="app" class="col-lg-7 mx-auto ">
    <ProfileNav></ProfileNav>
    <ProfileInfo></ProfileInfo>
  </div>
</template>

<script>
import ProfileNav from '../components/ProfileNav.vue'
import ProfileInfo from '../components/ProfileInfo.vue'

export default {
  name: 'App',
  components: {
    ProfileNav,
    ProfileInfo
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

#app {
  color: #0d3b66;
  font-family: Ubuntu, sans-serif;
}
</style>