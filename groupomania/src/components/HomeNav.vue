<template>
  <nav class="navbar navbarGradient mb-3">
    <router-link to="/profile" class="profileNavBtn px-3 mx-3">
      <font-awesome-icon :icon="['fas', 'user-large']" />
    </router-link>
    <div class="navbar-brand mx-auto" href="#">Messages</div>
      <router-link to="/" class="signOutNavBtn px-3 mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
      </router-link>
  </nav>
  <SignOutModal></SignOutModal>
</template>

<script>
import SignOutModal from '../components/SignOutModal.vue'
export default {
	name: 'HomeNav',
  components: {
    SignOutModal
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

#app {
  font-family: Helvetica, Arial, sans-serif;
  border: solid 10px white;
}
.navbarGradient {
  background-color: #0d3b66;
  }

.profileNavBtn {
  color: #e7eaf6;
    &:hover {
    transform: scale(1.4);
    transition: transform 250ms;
    color: white;
	}
}

.signOutNavBtn {
  color: #e7eaf6;
    &:hover {
    transform: scale(1.4);
    transition: transform 250ms;
    color: white;
	}
}

.navbar-brand {
  font-family: Pacifico;
  color: #e7eaf6;
  font-size: 175%;
}
</style>