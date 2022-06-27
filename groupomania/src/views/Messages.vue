<template>
  <div id="app">
    <HomeNav></HomeNav>
      <form @submit.prevent= 'createPost'>
          <textarea v-model="body" class="p-2 mt-3"></textarea>
        <button type="submit" class="btn btn-success px-3 mb-5 mx-4">Send</button>
      </form>
      <div v-for="(post, index) in posts" :key="index">
        <div v-if=post.body class="border col-5 shadow-sm mb-2 px-2 pt-1 mx-auto">
          <UserPosts :body="post.body"></UserPosts>
        </div>
      </div>
    <FooTer></FooTer>
  </div>
</template>

<script>
import HomeNav from '../components/HomeNav.vue'
import UserPosts from '../components/UserPosts.vue'
import FooTer from '../components/FooTer.vue'

export default {
  name: 'App',
  components: {
    HomeNav,
    UserPosts,
    FooTer
  },
  data: () => ({
    body: '',
      posts: [
        {
          body: ''
        }
      ]
    }),
    methods: {
      createPost () {
        this.body

        this.posts.unshift({
          body: this.body
        })
        this.body = ''
      }
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
  border: solid 10px white;
}
form {
  text-align: center
}
.btn-success {
  font-family: Pacifico;
}
</style>