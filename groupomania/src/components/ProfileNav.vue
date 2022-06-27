<template>
  <nav class="navbar navbar-light bg-primary navbarGradient mb-3">
    <router-link to="/messages" class="btn btn-primary px-3 mx-3">
      <font-awesome-icon :icon="['fas', 'pencil']" />
    </router-link>
    <a class="navbar-brand mx-auto" href="#">Profile</a>
      <div class="btn btn-primary mx-3">
      <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
    </div>
  </nav>
</template>

<script>
export default {
	name: 'ProfileNav'
}
</script>

<style scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
  border: solid 10px white;
}
.navbarGradient {
  background-image: linear-gradient(to bottom, #0275d8, white);
}
</style>