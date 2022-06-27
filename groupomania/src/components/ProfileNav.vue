<template>
  <nav class="navbar navbar-light bg-primary navbarGradient mb-3">
    <router-link to="/messages" class="messagesNavBtn px-3 mx-3">
      <font-awesome-icon :icon="['fas', 'pencil']" />
    </router-link>
    <a class="navbar-brand mx-auto" href="#">Profile</a>
      <div class="signOutNavBtn mx-3">
      <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
    </div>
  </nav>
</template>

<script>
export default {
	name: 'ProfileNav'
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
  border: solid 10px white;
}
.navbarGradient {
  background-image: linear-gradient(to bottom, #0275d8, white);
}
.messagesNavBtn {
    color: #002b51;
    &:hover {
    transform: scale(1.4);
    transition: transform 250ms;
    color: white;
	}
}
.signOutNavBtn {
    color: #002b51;
    &:hover {
    transform: scale(1.4);
    transition: transform 250ms;
    color: white;
	}
}

.navbar-brand {
  font-family: Pacifico;
  font-size: 175%;
}


</style>