<template>
  <div id="app">
    <div v-for="(post, index) in posts" :key="index">
     <Post :title="post.title" :body="post.body"></Post>
    </div>
  </div>
</template>

<script>
import Post from './components/Post.vue'

export default {
  name: 'App',
  components: {
    Post
  },
  data: () => ({
      posts: [
        {
          title: 'This is post 1',
          body: 'test post'
        },
                {
          title: 'This is post 2',
          body: 'test post'
        },
                {
          title: 'This is post 3',
          body: 'test post'
        }
      ]
    })
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
