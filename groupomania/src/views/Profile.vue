<template>
  <div id="app" class="col-lg-7 mx-auto">
    <ProfileNav></ProfileNav>
    <div class="text-center">
      <ProfileInfo></ProfileInfo>
      <router-link to="/editprofile" class="btn editBtn btn-lg fw-bold mb-5 mt-3 px-2">
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
  font-family: Ubuntu, sans-serif;
}

.editBtn {
  background-color: #0d3b66;
  color: white;
  border: none;
  padding: 5px;
  box-shadow: 0 2px 4px darkslategray;
  cursor: pointer;
  transition: all 0.2s ease;
}

.deleteUserBtn {
  background-color: #fd2500;
  color: white;
  border: none;
  padding: 5px;
  box-shadow: 0 2px 4px darkslategray;
  cursor: pointer;
  transition: all 0.2s ease;
}

.editBtn:active, .deleteUserBtn:active {
  background-color: #0d3b66;
  box-shadow: 0 0 2px darkslategray;
  transform: translateY(2px);
}
.btn:focus {
  outline: none;
  box-shadow: none;
}
</style>