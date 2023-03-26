<template>
  <div id="app">
    <div class="navbar p-0">
      <router-link to="/messages" class="col-6 col-md-4 col-sm-4">
        <img src="@/assets/group-logo-nav.png" class="col-10 ms-3"/>
      </router-link>
      <div class="logos mt-3">
        <router-link to="/messages" class="messagesNavBtn mx-2">
          <font-awesome-icon :icon="['fas', 'pencil']" />
        </router-link>
        <div class="dropdown mx-2">
          <font-awesome-icon :icon="['fas', 'gear']" @click="dropDown" class="dropbtn me-2" />
          <div id="dropdown" class="dropdown-content">
            <a href="#">About</a>
            <router-link to="/" class="text-center fw-bold px-2" data-bs-toggle="modal" data-bs-target="#deleteUserModal">
              Delete
            </router-link>
          </div>
          <DeleteUserModal></DeleteUserModal>
        </div>
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
import DeleteUserModal from '../components/DeleteUserModal.vue'

export default {
	name: 'ProfileNav',
    components: {
    SignOutModal,
    DeleteUserModal
  },
  data() {
    return {
      toggle: false
    };
  },
  methods: {
    dropDown() {
      document.getElementById("dropdown").classList.toggle("show");
    }
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
.dropbtn {
  cursor: pointer;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {background-color: #ddd;}
.show {display:block;}
</style>