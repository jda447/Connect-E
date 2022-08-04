<template>
  <div id="app">
    <HomeNav></HomeNav>
    <div class="text-center">
      <input type="text"
      size="36"
      class="px-2"
      v-model="newPost"
      placeholder="Write something..." 
      @keypress.enter="addPost">
      <button class="btn paperPlane btn-sm mb-1 px-3" @click="addPost">
        <font-awesome-icon :icon="['fas', 'fa-paper-plane']" />
      </button>
    </div>

    <div class="posts">
    <UserPosts
      v-for="(post, i) in $store.state.posts"
      :key="i"
      :post="post">
    </UserPosts>
    </div>
  </div>
</template>

<script>
import HomeNav from '../components/HomeNav.vue'
import UserPosts from '../components/UserPosts.vue'

export default {
  name: 'App',
  components: {
    HomeNav,
    UserPosts
  },
  data() {
    return {
      newPost: ''
    }
  },
  methods: {
    addPost () {
      if (this.newPost) {
        this.$store.commit('ADD_POST', this.newPost)
        this.newPost = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
  border: solid 10px white;
}

.paperPlane {
  font-family: Pacifico;
  background-color: white;
  color: #2c3e50;;
  &:hover {
    background-color: #f9564f;;
    color: white;
  }
}
.btn:focus {
  outline: none;
  box-shadow: none;
}
</style>