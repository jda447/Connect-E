<template>
  <div id="app">
    <NavBar></NavBar>
    <ProfileBtn></ProfileBtn>
    <form @submit.prevent= 'createPost'>
    <div><label class="m-2">Write something... <font-awesome-icon :icon="['fas', 'pencil']" /></label></div>
    <div><textarea v-model="body"></textarea></div>
    <div><button type="submit" class="btn btn-primary px-4 mb-5"><font-awesome-icon :icon="['fas', 'message']" /></button></div>
    </form>
    <div v-for="(post, index) in posts" :key="index">
    <div v-if=post.body class="border col-5 shadow-sm mb-2 mx-auto">
    <UserPosts :body="post.body"></UserPosts></div>
    </div>
    <FooTer></FooTer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ProfileBtn from './components/ProfileBtn.vue'
import UserPosts from './components/UserPosts.vue'
import FooTer from './components/FooTer.vue'


export default {
  name: 'App',
  components: {
    NavBar,
    ProfileBtn,
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

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  border: solid 10px white;
}
</style>
