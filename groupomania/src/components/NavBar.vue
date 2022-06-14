<template>
  <nav class="navbar navbar-light bg-danger mb-3">
    <div class="btn btn-danger p-2 mx-2 col-1">
      <font-awesome-icon :icon="['fas', 'user-large']" />
    </div>
    <a class="navbar-brand mx-auto" href="#">Groupomania</a>
      <div class="btn btn-danger mx-1 col-1">
      <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
    </div>
  </nav>
</template>

<script>
export default {
	name: 'NavBar'
}
</script>

<style>
  .navbar {
    font-weight: bold;
  }
</style>