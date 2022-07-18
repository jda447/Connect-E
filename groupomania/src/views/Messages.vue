<template>
  <div id="app">
    <HomeNav></HomeNav>
      <form @submit.prevent= 'createPost'>
          <textarea v-model="body" class="col-7 col-lg-5" rows='2'></textarea>
          <button type="submit" class="btn btn-success mb-5 mx-2">Send</button>
      </form>
      <div v-for="(post, index) in posts" :key="index">
        <div v-if=post.body class="border rounded-pill shadow-sm mb-2 px-3 pt-3 text-center mx-5">
          <UserPosts :body="post.body"></UserPosts>
        </div>
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

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
  border: solid 10px white;
}

form {
  text-align: center
}

textarea {
  resize: none;
}

.border {
  width: fit-content;
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