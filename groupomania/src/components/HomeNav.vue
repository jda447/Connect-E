<template>
  <nav class="navbar navbar-light bg-danger navbarGradient mb-3">
    <router-link to="/profile" class="btn btn-danger px-3 mx-3">
      <font-awesome-icon :icon="['fas', 'user-large']" />
    </router-link>
    <a class="navbar-brand mx-auto" href="#">Messages</a>
      <div class="btn btn-danger mx-3">
      <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
    </div>
  </nav>
</template>

<script>
export default {
	name: 'HomeNav'
}
</script>

<style scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
  border: solid 10px white;
}
.navbarGradient {
  background-image: linear-gradient(to bottom, #d9534f, white);
  }
</style>