<template>
  <div id="app">
    <ProfileNav></ProfileNav>
    <div class="text-center">
      <ProfileInfo></ProfileInfo>
      <router-link to="/editprofile" class="btn editBtn btn-lg fw-bold mb-5 mt-3">
        Edit
      </router-link>
    </div>
    <div class="text-center">
      <router-link to="/" class="btn deleteUserBtn btn-lg btn-danger fw-bold px-2 mt-3" data-bs-toggle="modal" data-bs-target="#deleteUserModal">
        Delete
      </router-link>
    </div>
    <DeleteUserModal></DeleteUserModal>
  </div>
</template>

<script>
import ProfileNav from '../components/ProfileNav.vue'
import ProfileInfo from '../components/ProfileInfo.vue'
import DeleteUserModal from '../components/DeleteUserModal.vue'

export default {
  name: 'App',
  components: {
    ProfileNav,
    ProfileInfo,
    DeleteUserModal
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

#app {
  color: #0d3b66;
  border: solid 10px white;
  font-family: Arial, Helvetica, sans-serif;
}

.editBtn {
  background-color: #0d3b66;
  color: white;
  font-family: Ubuntu;
  &:hover {
    background-color: white;
    color: #0d3b66;
    transform: scale(1.6);
    transition: transform 250ms;
    font-family: Pacifico;
  }
}

.deleteUserBtn {
  font-family: Ubuntu;
  background-color: white;
  color:#bb2124;
  border: none;
  &:hover {
    background-color: #bb2124;
    color: white;
  }
}
.btn:focus {
  outline: none;
  box-shadow: none;
}
</style>