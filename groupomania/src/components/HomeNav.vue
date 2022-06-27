<template>
  <nav class="navbar navbar-light bg-danger navbarGradient mb-3">
    <router-link to="/profile" class="profileNavBtn px-3 mx-3">
      <font-awesome-icon :icon="['fas', 'user-large']" />
    </router-link>
    <a class="navbar-brand mx-auto" href="#">Messages</a>
      <div class="signOutNavBtn mx-3">
      <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
    </div>
  </nav>
</template>

<script>
export default {
	name: 'HomeNav'
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
  border: solid 10px white;
}
.navbarGradient {
  background-image: linear-gradient(to bottom, #d9534f, white);
  }

.profileNavBtn {
  color: #d9534f;
    &:hover {
    transform: scale(1.4);
    transition: transform 250ms;
    color: white;
	}
}

.signOutNavBtn {
  color: #d9534f;
    &:hover {
    transform: scale(1.4);
    transition: transform 250ms;
    color: white;
	}
}
</style>