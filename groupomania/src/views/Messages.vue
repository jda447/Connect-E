<template>
  <div id="app" class="col-lg-7 mx-auto">
    <HomeNav></HomeNav>

    <div>
      <button @click="isOpenA = ! isOpenA" class="btn postPen ms-5 mb-4 px-2">
        Post +
      </button>
        <collapse-transition>
          <div v-show="isOpenA" class="container list-reset mb-5">
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
            <div id="sendErr" class="text-center mt-1"></div>
            <button class="btn sendPost my-2" @click="addPost">
              Post
            </button>
          </div>

          <div id="Image" class="tabcontent">
            <div class="container">
              <div class="row">
                <div class="base-image-input rounded-3 text-center border border-2 py-3 my-3 mx-3"
                :style="{ 'background-image': `url(${imageData})` }"
                @click="chooseImage">
                  <span v-if="!imageData" class="placeholder rounded-square">
                    Choose an Image
                  </span>
                  <input class="file-input" ref="fileInput" type="file" @input="onSelectFile">
                </div>
                <div class="col mt-4">
                  <textarea type="text"
                    size="36"
                    class="pe-5 px-2 mt-2 col"
                    v-model="newPost"
                    placeholder="Add some text..."
                    @keypress.enter="addPost">
                  </textarea>
                  <button class="btn sendImage my-3" @click="addPost">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div id="Link" class="tabcontent">
            <h3>Link</h3>
            <p>Post your link here</p>
          </div>
          
          </div>
        </collapse-transition>  
      </div>
    </div>

    <div class="posts col-lg-6 mx-auto">
    <UserPosts
      v-for="(post, i) in $store.state.posts"
      :key="i"
      :post="post">
    </UserPosts>
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
      posts: [],
      imageData: null,
      isOpenA: false,
      isOpenB: false
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
      if (response.ok && this.newPost && this.$store.state.firstName !== '') {
        this.$store.commit('ADD_POST', this.newPost)
        this.newPost = ''
        // window.location.reload()
      }
      if (!response.ok) {
        const message = `Error sending post: ${response.status}`;
        document.getElementById("sendErr").innerHTML = 'Error sending post';
        throw new Error(message);
      }
    },

    chooseImage () {
      this.$refs.fileInput.click()
    },

    onSelectFile () {
      const input = this.$refs.fileInput
      const files = input.files
      if (files && files[0]) {
        const reader = new FileReader
        reader.onload = e => {
          this.imageData = e.target.result
        }
        reader.readAsDataURL(files[0])
        this.$emit('input', files[0])
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
.sendPost, .sendImage {
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

.postPen {
  background-color: #0d3b66;
  color: white;
  border: none;
  padding: 5px;
  box-shadow: 0 2px 4px darkslategray;
  cursor: pointer;
  transition: all 0.2s ease;
}

.postPen:active {
  background-color: #0d3b66;
  box-shadow: 0 0 2px darkslategray;
  transform: translateY(2px);
}

.postPen:not(:first-child) {
  margin-top: 10px;
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

//

.base-image-input {
  width: 10rem;
  height: 10rem;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
}
.placeholder {
  background: #F0F0F0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #141414;
  font-size: 1rem;
}
.placeholder:hover {
  background: #E0E0E0;
}
.file-input {
  display: none;
}
</style>