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
    <!-- <div class="messageContainer mx-auto border shadow col-10 mt-2">
      <button @click="removePost" class="btn btn-outline float-end btn-sm shadow-none deletePost">
        x
      </button>
      <div id="userName" class="userNameMsgs mx-4 mt-4 flex-grow-1 bd-highlight">A Name</div>
      <hr class="mx-4"/>
      <div id="allPosts" class="userPost flex-grow-1 bd-highlight mx-4 mt-4 mb-3">A post</div>
      <div @click="$store.dispatch('INCREASE_COUNTER')" class="seen-by mt-auto mx-2 p-1 d-flex align-items-end flex-column bd-highlight">
        Seen by {{ $store.state.counter }}</div> -->
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
      const posts = await response.json()
      posts.forEach((post) => {
        console.log(post)
        let userDbPosts = document.createElement("ol")
        userDbPosts.className = 'mx-auto border shadow col-10 mt-2 p-5';
        userDbPosts.innerHTML = (post.user_id + ' ');
        let text = document.createTextNode(post.post);
        userDbPosts.appendChild(text);
        document.getElementById("allPosts").appendChild(userDbPosts);
      return posts
    })
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

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

// .messageContainer {
//   background-color: #fafafa;
// }
// .btn-outline {
//   font-weight: bolder;
// }

// .userNameMsgs {
//   font-weight: bolder;
// }

// .seen-by {
//   font-size: medium;
// }
</style>