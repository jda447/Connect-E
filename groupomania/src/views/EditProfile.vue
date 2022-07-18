<template>
  <div id="app">
    <EditProfileNav></EditProfileNav>
    <EditProfileForm @review-submitted="addReview"></EditProfileForm>
      <div class="text-center">
        <router-link to="/profile" class="btn btn-primary btn-lg mt-3">Profile</router-link>
      </div>
      <ProfileInfo :reviews="reviews"></ProfileInfo>
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
      reviews: []
    };
  },
  methods: {
    addReview (review) {
      this.reviews.push(review)
    },
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