<template>
  <div id="app">
    <ProfileNav></ProfileNav>
    <div class="counter text-center m-3 p-4">
      {{ $store.state.counter }}
    </div>
    <div class="buttons text-center">
      <button @click="$store.dispatch('increaseCounter')" class="btn btn-success mx-3">+</button>
      <button @click="$store.dispatch('decreaseCounter')" class="btn btn-danger mx-3">-</button>
    </div>
      <!-- <div class="mx-auto col-4 col-md-4 col-lg-2 my-1">
        <div class="imagePreviewWrapper" :style="{ 'background-image': `url(${previewImage})` }" @click="selectImage"> </div>
      </div>
      <div class="text-center labels">
        <div><label class="my-2">Name: <span class="userFont"> {{ userName }} </span></label></div>
        <div><label class="my-2">Position: <span class="userFont"> {{ userPosition }} </span></label></div>
        <div><label class="my-2">Hobbies: <span class="userFont"> {{ userHobbies }} </span></label></div>
      </div>
      <div class="text-center">
        <router-link to="/edit-profile" class="btn btn-primary btn-lg mt-3">Edit</router-link>
      </div> -->
    <FooTer></FooTer>
  </div>
</template>

<script>
import ProfileNav from '../components/ProfileNav.vue'
import FooTer from '../components/FooTer.vue'

export default {
  name: 'App',
  components: {
    ProfileNav,
    FooTer
  },
  // data() {
  //   return {
  //     // userProfile: true,
  //     // previewImage: null,
  //     // message: '',
  //     counter: 0
  //   }
  // },
  // methods: {
  //   increaseCounter() {
  //     // this.$store.commit('increaseCounter')
  //     this.counter++
  //     console.log(this.$store.state.counter)
  //   },
  //   decreaseCounter() {
  //     this.counter--
  //   }
  // }
  //   toggle() {
  //     this.userProfile = !this.userProfile
  //   },
  //   selectImage () {
  //     this.$refs.fileInput.click()
  //   },
  //   pickFile () {
  //     let input = this.$refs.fileInput
  //     let file = input.files
  //     if (file && file[0]) {
  //       let reader = new FileReader
  //       reader.onload = e => {
  //         this.previewImage = e.target.result
  //       }
  //       reader.readAsDataURL(file[0])
  //       this.$emit('input', file[0])
  //     }
  //   }
  // }
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