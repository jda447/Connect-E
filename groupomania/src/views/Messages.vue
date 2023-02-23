<template>
  <div id="app" class="col-lg-7 mx-auto">
    <HomeNav></HomeNav>
    <PostMessages></PostMessages>
    
    <div class="posts col-lg-6 mx-auto">
    <UserPosts
      v-for="(post, i) in $store.state.posts"
      :key="i"
      :post="post">
    </UserPosts>
    <div v-for="p in posts.slice().reverse()" :key="p.post" class="messageContainer mx-auto border shadow col-10 mt-2">
      <button v-on:click.prevent="deletePost" class="btn btn-outline float-end btn-sm shadow-none deletePost">
        x
      </button>
      <div :class="`posts`">
      <div class="userNameMsgs mx-4 mt-4 flex-grow-1 bd-highlight">
        <!-- {{ $store.state.firstName + ' ' + $store.state.lastName }} -->
      </div>
      <div class="userPost flex-grow-1 bd-highlight mx-4 mt-4 mb-3"> 
        {{ p.post }}
      </div>
      <div @click="$store.dispatch('INCREASE_COUNTER')" class="seen-by mt-auto mx-2 p-1 d-flex align-items-end flex-column bd-highlight">
        Seen by {{ $store.state.counter }}
      </div>
      </div>
    </div>
    <div id="err" class="text-center mt-4"></div>
  </div>
  </div>
</template>

<script>
import HomeNav from '../components/HomeNav.vue'
import UserPosts from '../components/UserPosts.vue'
import PostMessages from '../components/PostMessages.vue'

export default {
  name: 'App',
  components: {
    HomeNav,
    UserPosts,
    PostMessages
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
    async getPosts () {
      const token = sessionStorage.getItem('token')
      await fetch('http://localhost:3000/api/post', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(token)
          }
        })
        .then(response => response.json())
        .then(data => this.posts = data)
    },

    deletePost : async function() {
        const token = sessionStorage.getItem('token')
        const userId = sessionStorage.getItem('user')
        await fetch('http://localhost:3000/api/post', {
          method: 'DELETE',
          body: JSON.parse(userId),
          headers: {
            'Authorization': 'Bearer ' + JSON.parse(token)
          }
        }).then(async response => {
          if (!response.ok) {
            const error = (response.status)
            return Promise.reject(error);
          }
        }).catch(error => {
          this.errorMessage = error;
          console.error('Unauthorized access', error);
          document.getElementById("err").innerHTML = 'Unauthorized access';
        }
      );
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

#err, #sendErr {
  color: #b61929;
  font-size: 88%;
}

.messageContainer {
  background-color: #fafafa;
}
.btn-outline {
  font-weight: bolder;
}

.userNameMsgs {
  font-weight: bolder;
}

.seen-by {
  font-size: medium;
}

.deletePost {
  &:hover {
    color: #f9564f;
  }
}
</style>