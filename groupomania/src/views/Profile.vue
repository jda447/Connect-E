<template>
  <div id="app">
    <ProfileNav></ProfileNav>
    <div class="text-center">
      <ProfileInfo></ProfileInfo>
      <router-link to="/edit-profile" class="btn editBtn btn-lg mb-5 mt-3">Edit</router-link>
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
  color: #2c3e50;
  border: solid 10px white;
  font-family: Arial, Helvetica, sans-serif;
}

.editBtn {
  background-color: #2688e3;
  color: white;
  font-family: Pacifico;
  &:hover {
    background-color: white;
    color: #2688e3;
    transform: scale(1.6);
    transition: transform 250ms;
  }
}
.btn:focus {
  outline: none;
  box-shadow: none;
}
</style>