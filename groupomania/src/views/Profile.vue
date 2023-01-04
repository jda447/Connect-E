<template>
  <div id="app" class="col-lg-7 mx-auto">
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
  font-family: Ubuntu, sans-serif;
}

.editBtn {
  font-family: Ubuntu, sans-serif;
  background-color: #fd2500;
  color: white;
  text-decoration: none;
  font-weight: bold;
  background: linear-gradient(to right, white 50%, #0d3b66 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 1s ease;
  border: #0d3b66 1px;
    &:hover {
    background-position: left bottom;
    color:#0d3b66;
  }
}

.deleteUserBtn {
  font-family: Ubuntu, sans-serif;
  background-color: #bb2124;
  color: white;
  text-decoration: none;
  font-weight: bold;
  background: linear-gradient(to left, #bb2124 50%, #0d3b66 50%);
  background-size: 200% 100%;
  background-position: left bottom;
  transition: all 1s ease;
  border: #0d3b66 1px;
    &:hover {
    background-position: right bottom;
    color: black;
  }
}
.btn:focus {
  outline: none;
  box-shadow: none;
}
</style>