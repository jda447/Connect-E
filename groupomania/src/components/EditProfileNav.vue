<template>
  <nav class="navbar navbar-light navbarGradient mb-3">
    <router-link to="/profile" class="profileNavBtn px-3 mx-3">
      <font-awesome-icon :icon="['fas', 'user-large']" />
    </router-link>
    <a class="navbar-brand text-large mx-auto" href="#">Edit Profile</a>
      <div class="signOutNavBtn mx-3">
      <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
    </div>
  </nav>
</template>

<script>
export default {
	name: 'EditProfileNav'
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
  background-image: linear-gradient(to bottom, #a0b6f5, white);
  }

.profileNavBtn {
  color: #566284;
    &:hover {
    transform: scale(1.4);
    transition: transform 250ms;
    color: white;
	}
}

.signOutNavBtn {
  color: #566284;
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