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
    <div id="allPosts" class="text-center mt-4"></div>
    <div id="err" class="text-center mt-4"></div>
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
  created () {
    this.getPosts()
  },
  data() {
    return {
      newPost: '',
      posts: []
    }
  },
  methods: {
    addPost () {
      if (this.newPost) {
        this.$store.commit('ADD_POST', this.newPost)
        this.newPost = ''
      }
    },
    async getPosts () {
      const token = sessionStorage.getItem('token')
      const response = await fetch('http://localhost:3000/api/post', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(token)
          }
        }
      )
      if (!response.ok) {
        const message = `Error retrieving posts: ${response.status}`;
        document.getElementById("err").innerHTML = 'Error retrieving posts';
        throw new Error(message);
      }
      const posts = await response.text()
      document.getElementById("allPosts").innerHTML = posts;
      console.log(posts)
      return posts
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
    background-color: #f9564f;
    color: white;
  }
}
.btn:focus {
  outline: none;
  box-shadow: none;
}

#err {
  color: #DC3545;
  font-size: 88%;
}
</style>