<template>
  <nav class="navbar navbar-light bg-primary mb-3">
    <router-link to="/messages" class="btn btn-primary p-2 mx-3 col-1">
      <font-awesome-icon :icon="['fas', 'pencil']" />
    </router-link>
    <a class="navbar-brand mx-auto" href="#">Groupomania</a>
      <div class="btn btn-primary mx-3 col-1">
      <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
    </div>
  </nav>
</template>

<script>
export default {
	name: 'ProfileNav'
}
</script>

<style>
  .navbar {
    font-weight: bold;
  }
</style>