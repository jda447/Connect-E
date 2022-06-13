<template>
  <div id="app">
    <NavBar></NavBar>
    <form @submit.prevent= 'createPost'>
    <div><label>Write something...</label></div>
    <div><textarea v-model="body"></textarea></div>
    <div><button type="submit" class="btn btn-primary mb-5">Post</button></div>
    </form>
    <div v-for="(post, index) in posts" :key="index">
     <UserPosts :body="post.body"></UserPosts>
    </div>
  </div>
</template>

<script>
import UserPosts from './components/UserPosts.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    UserPosts,
    NavBar
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  border: solid 5px white;
}
.navbar {
  font-weight: bold;
}
</style>
