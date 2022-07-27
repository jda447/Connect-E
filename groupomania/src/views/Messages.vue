<template>
  <div id="app">
    <HomeNav></HomeNav>
      <div class="create-new">
        <input type="text"
        class="px-2"
        v-model="newPost"
        placeholder="Add a post" 
        @keypress.enter="addPost">
        <button class="btn btn-success btn-sm mb-1 px-3" @click="addPost">Send</button>
      </div>

      <div class="posts">
        <UserPosts
          v-for="(post, i) in $store.state.posts"
          :key="i"
          :post="post">
        </UserPosts>
      </div>

      <!-- <form @submit.prevent= 'createPost'>
        <div class="input-group mb-3">
          <input v-model="body" type="text" class="col ms-5 ps-2" aria-label="Message" aria-describedby="Message">
            <button class="btn btn-success me-5" type="submit">Send</button>
        </div>
      </form>
      <div v-for="(post, index) in posts" :key="index">
        <div v-if=post.body class="border shadow col mt-4 mb-2 px-3 pt-3 mx-5">
          <UserPosts :body="post.body"></UserPosts>
        </div>
      </div> -->
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

.btn-success {
  font-family: Pacifico;
  background-color: #4c9173;
  color: white;
  &:hover {
    background-color: white;
    color: #4c9173;
  }
}
</style>