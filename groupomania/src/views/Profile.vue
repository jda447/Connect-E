<template>
  <div id="app">
    <ProfileNav></ProfileNav>
      <div class="mx-auto col-4 col-md-4 col-lg-2 my-3">
        <img src="@/assets/rollsafe.jpg" class="img-fluid" alt="Responsive image">
      </div>
      <div class="text-center labels">
        <div><label class="my-2">Name:</label></div>
        <div><label class="my-2">Position:</label></div>
        <div><label class="my-2">Hobbies:</label></div>
      </div>
      <div class="text-center">
        <router-link to="/edit-profile" class="btn btn-primary btn-lg mt-3">Edit</router-link>
      </div>
    <FooTer></FooTer>
  </div>
</template>

<script>
import ProfileNav from '../components/ProfileNav.vue'
import FooTer from '../components/FooTer.vue'

export default {
  name: 'App',
  components: {
    ProfileNav,
    FooTer
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
  border: solid 10px white;
  font-family: Pacifico;
}

.labels {
  color: #0275d8;
}

.btn-primary {
  background-color: #0275d8;
  color: white;
  &:hover {
    background-color: white;
    color: #0275d8;
  }
}
</style>