<template>
  <nav class="navbar navbarGradient mb-3">
    <router-link to="/messages" class="messagesNavBtn px-3 mx-3">
      <font-awesome-icon :icon="['fas', 'pencil']" />
    </router-link>
    <div class="navbar-brand mx-auto fw-bold" href="#">Groupomania</div>
      <router-link to="/" class="signOutNavBtn px-3 mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
      </router-link>
  </nav>
  <SignOutModal></SignOutModal>
</template>

<script>
import SignOutModal from '../components/SignOutModal.vue'

export default {
	name: 'ProfileNav',
    components: {
    SignOutModal
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #0d3b66;
  border: solid 10px white;
}
.navbarGradient {
  background-color: #0d3b66;
}
.messagesNavBtn {
    color: #e7eaf6;
    &:hover {
    transform: scale(1.4);
    transition: transform 250ms;
    color: #f9564f;
	}
}
.signOutNavBtn {
    color: #e7eaf6;
    &:hover {
    transform: scale(1.4);
    transition: transform 250ms;
    color: #f9564f;
	}
}

.navbar-brand {
  font-family: Ubuntu;
  color: #e7eaf6;
  font-size: 175%;
}


</style>