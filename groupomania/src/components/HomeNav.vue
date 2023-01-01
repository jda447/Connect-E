<template>
  <div class="navbar">
    <img class="col-4 col-md-3 col-lg-2 mt-1 ms-3" src="@/assets/group-logo-nav.png"/>
    <div class="logos">
    <router-link to="/profile" class="messagesNavBtn">
      <font-awesome-icon :icon="['fas', 'user-large']" />
    </router-link>
    <router-link to="/" class="signOutNavBtn mx-4" data-bs-toggle="modal" data-bs-target="#signOutModal">
      <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
    </router-link>
  </div>
  </div>  
  <hr/>
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
.messagesNavBtn {
  color: #0d3b66;
    &:hover {
    color: #d51d1d;
	}
}
.signOutNavBtn {
    color: #0d3b66;
    &:hover {
    color: #d51d1d;
	}
}

hr {
  margin: 0
}
</style>