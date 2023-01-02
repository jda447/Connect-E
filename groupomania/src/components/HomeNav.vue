<template>
  <div id="app">
    <div class="navbar">
      <img class="col-4 col-md-3 col-lg-2 mt-1 ms-3" src="@/assets/group-logo-nav.png"/>
      <div class="logos">
        <button 
          @click="toggle = !toggle" 
          class="btn online">
          <span :class="{green: !toggle}">Online |</span>
          <span :class="{green: toggle}">| Offline</span>
        </button>
        <router-link to="/profile" class="messagesNavBtn mx-4">
          <font-awesome-icon :icon="['fas', 'user-large']" />
        </router-link>
        <router-link to="/" class="signOutNavBtn me-4" data-bs-toggle="modal" data-bs-target="#signOutModal">
          <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
        </router-link>
      </div>
    </div>  
    <hr/>
  <SignOutModal></SignOutModal>
  </div>
</template>

<script>
import SignOutModal from '../components/SignOutModal.vue'

export default {
	name: 'ProfileNav',
    components: {
    SignOutModal
  },
  data() {
    return {
      toggle: false
    };
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

#app {
  font-family: Ubuntu, sans-serif;
  color: #0d3b66;
  border: solid 10px white;
}
.messagesNavBtn {
  color: #0d3b66;
    &:hover {
    color: #fd2500;
	}
}
.signOutNavBtn {
    color: #0d3b66;
    &:hover {
    color: #fd2500;
	}
}

hr {
  margin: 0
}

.online {
  font-size: 85%;
  padding: 2px 4px;
  color: white;
  border: solid 1px #0d3b66;
    &:focus {
      outline:none;
      box-shadow: none;
    }
}

.green {
  color: #0d3b66;
}

.btn {
  margin: 10px;
}
</style>