<template>
  <nav class="navbar navbar-light bg-danger mb-3">
    <router-link to="/profile" class="btn btn-danger p-2 mx-3 col-1">
      <font-awesome-icon :icon="['fas', 'user-large']" />
    </router-link>
    <a class="navbar-brand mx-auto" href="#">Groupomania</a>
      <div class="btn btn-danger mx-3 col-1">
      <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
    </div>
  </nav>
</template>

<script>
export default {
	name: 'HomeNav'
}
</script>

<style>
  .navbar {
    font-weight: bold;
  }
</style>