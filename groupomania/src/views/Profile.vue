<template>
  <div id="app">
    <ProfileNav></ProfileNav>
    <div class="text-center">
      <ProfileInfo></ProfileInfo>
      <router-link to="/edit-profile" class="btn editBtn btn-lg fw-bold mb-5 mt-3">Edit</router-link>
    </div>
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
  border: solid 10px white;
  font-family: Arial, Helvetica, sans-serif;
}

.editBtn {
  background-color: #0d3b66;
  color: white;
  font-family: Ubuntu;
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