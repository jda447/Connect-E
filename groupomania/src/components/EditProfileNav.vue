<template>
  <nav class="navbar navbarGradient mb-3">
    <router-link to="/messages" class="profileNavBtn px-3 mx-3">
      <font-awesome-icon :icon="['fas', 'pencil']" />
    </router-link>
    <div class="navbar-brand mx-auto" href="#">Edit Profile</div>
      <router-link to="/" class="signOutNavBtn px-3 mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
      </router-link>
  </nav>
  <SignOutModal></SignOutModal>
</template>

<script>
import SignOutModal from '../components/SignOutModal.vue'

export default {
	name: 'EditProfileNav',
    components: {
    SignOutModal
  }
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
  color: black;
  font-size: 175%;
}
</style>