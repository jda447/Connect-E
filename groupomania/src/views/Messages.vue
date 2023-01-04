<template>
  <div id="app" class="col-lg-7 mx-auto">
    <HomeNav></HomeNav>
    <div class="container mb-5">
    <h5 class="mx-2">Create a post</h5>
    <hr/>
    <div class="tab">
      <button class="tablinks col-4" @click="postChoice(event, 'Post')">Post</button>
      <button class="tablinks col-4" @click="postChoice(event, 'Image')">Image</button>
      <button class="tablinks col-4" @click="postChoice(event, 'Link')">Link</button>
    </div>

    <div id="Post" class="tabcontent">
      <textarea type="text"
        size="36"
        class="pe-5 px-2 mt-3 col-10"
        v-model="newPost"
        placeholder="Write something..."
        @keypress.enter="addPost">
      </textarea>
      <br>
      <div id="sendErr" class="text-center mt-4"></div>
      <button class="btn my-2" @click="addPost">
        Post
      </button>
    </div>
    <div id="Image" class="tabcontent">
      <h3>Image</h3>
      <p>Post your image here</p> 
    </div>
    <div id="Link" class="tabcontent">
      <h3>Link</h3>
      <p>Post your link here</p>
    </div>
  </div>
</div>

    <div class="posts col-lg-6 mx-auto">
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
     postChoice(evt, tabName) {
      let i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(tabName).style.display = "block";
      evt.currentTarget.className += " active";
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
    },
    async addPost () {
      const token = sessionStorage.getItem('token')
      const userId = sessionStorage.getItem('user')
      const response = await fetch('http://localhost:3000/api/post', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(token)
          },
          body: JSON.stringify({ 
            post: this.newPost,
            userId: userId
          })
        }
      )
      if (response.ok && this.newPost) {
        this.$store.commit('ADD_POST', this.newPost)
        this.newPost = ''
      }
      if (!response.ok) {
        const message = `Error sending post: ${response.status}`;
        document.getElementById("sendErr").innerHTML = 'Error sending post';
        throw new Error(message);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
#app {
  color: #0d3b66;
  font-family: Ubuntu, sans-serif;
}

h5 {
  color: #0d3b66;
}
.btn {
  background-color: #fd2500;
  color: white;
  text-decoration: none;
  font-weight: bold;
  background: linear-gradient(to right, #fd2500 50%, #0d3b66 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 1s ease;
  border: #0d3b66 1px;
    &:hover {
    background-position: left bottom;
  }
}
.btn:focus {
  outline: none;
  box-shadow: none;
}

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

.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #0d3b66;
}

.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 6px 8px;
  transition: 0.3s;
  font-size: 17px;
  color: white;
}

.tab button:hover {
  background-color: #f3f1f1;
  color: #0d3b66;
}

.tab button.active {
  background-color: #ccc;
}

.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
  background-color: #f8f8f8;
}

textarea {
  resize: none;
}
</style>