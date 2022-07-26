<template>
  <div id="app">
    <EditProfileNav></EditProfileNav>
    <EditProfileForm @info-submitted="addInfo"></EditProfileForm>
      <div class="text-center">
        <router-link to="/profile" class="btn btn-primary btn-lg mt-3">Profile</router-link>
      </div>
      <ProfileInfo :info="info"></ProfileInfo>
  </div>
</template>

<script>
import EditProfileNav from '../components/EditProfileNav.vue'
import EditProfileForm from '../components/EditProfileForm.vue'
import ProfileInfo from '../components/ProfileInfo.vue'

export default {
  name: 'App',
  components: {
    EditProfileNav,
    EditProfileForm,
    ProfileInfo
  },
  data() {
    return {
      info: []
    };
  },
  methods: {
    addInfo (person) {
      this.info.push(person)
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
  border: solid 10px white;
  // font-family: Pacifico;
}
.imagePreviewWrapper {
    width: 250px;
    height: 250px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}

.btn-primary {
  font-family: Pacifico;
  background-color: #0275d8;
  color: white;
  &:hover {
    background-color: white;
    color: #0275d8;
  }
}
</style>