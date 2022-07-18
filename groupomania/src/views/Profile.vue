<template>
  <div id="app">
    <ProfileNav></ProfileNav>
    <ProfileInfo :reviews="reviews"></ProfileInfo>
      <div class="text-center">
        <router-link to="/edit-profile" class="btn btn-primary btn-lg mt-3">Edit</router-link>
      </div>
  </div>
</template>

<script>
import ProfileNav from '../components/ProfileNav.vue'
import ProfileInfo from '../components/ProfileInfo.vue'

export default {
  name: 'App',
  components: {
    ProfileNav,
    ProfileInfo
  },
  data () {
    return{
      props: {
        names: {
          type: Array,
          required: true
        }
      },
    reviews: []
    }
  },
  methods: {
    addReview (review) {
      this.reviews.push(review)
    },
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

#app {
  color: #2c3e50;
  border: solid 10px white;
  font-family: Pacifico;
}

.labels {
  color: #0275d8;
}

.userFont {
  color: black;
  font-size: larger;
}

.userData {
  font-family: Arial, Helvetica, sans-serif;
}

.btn-primary {
  background-color: #0275d8;
  color: white;
  &:hover {
    background-color: white;
    color: #0275d8;
  }
}

// .btn-success {
//   background-color: #4c9173;
//   color: white;
//   &:hover {
//     background-color: white;
//     color: #4c9173;
//   }
// }

.imagePreviewWrapper {
    width: 150px;
    height: 150px;
    display: block;
    cursor: pointer;
    margin: 0 auto;
    background-size: cover;
    background-position: center center;
}

.counter {
  font-size: larger;
}
</style>