<template>
  <div id="app">
    <form @submit = 'createPost'>
    <label>Title</label>
    <input type="text" v-model="title">
    <label>Body</label>
    <textarea v-model="body"></textarea>
    <button type="submit">Post</button>
    </form>
    <div v-for="(post, index) in posts" :key="index">
     <UserPosts :title="post.title" :body="post.body"></UserPosts>
    </div>
  </div>
</template>

<script>
import UserPosts from './components/UserPosts.vue'

export default {
  name: 'App',
  components: {
    UserPosts
  },
  data: () => ({
    title: '',
    body: '',
      posts: [
        {
          title: '',
          body: ''
        }
      ]
    }),
    methods: {
      createPost () {
        this.title
        this.body

        this.posts.unshift({
          title: this.title,
          body: this.body
        })

        this.title = '',
        this.body = ''
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
