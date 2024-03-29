<template>
  <div class="text-center mb-4">
    <h1>Messages</h1>
    <form v-if="!toggle" @submit.prevent="addPost">
      <div class="border border-2 rounded-3 col-10 mx-auto mb-3">
        <div class="input-group">
          <div class="my-1 mx-2">
            <div class="imageContainer">
              <div v-if="user.profileImage === null">
                <font-awesome-icon :icon="['fas', 'user-secret']"
                class="secretImage mx-1 my-1" size="xl" />
              </div>
              <div v-else>
                <router-link to="/profile">
                  <img :src="user.profileImage"
                    class="profileImage border border-3" />
                    <div class="overlay"></div>
                </router-link>
              </div>
            </div>
          </div>
          <input type="text"
            class="form-control col-11"
            v-model="text"
            placeholder="Write something..."
            name="postInput">
          <span @click="toggle = !toggle"
            class="input-group-text p-1"
            data-toggle="tooltip"
            data-placement="left"
            title="Send media post"
            tabIndex="0">
            <font-awesome-icon :icon="['fa', 'image']"
              size="lg"
              class="imageToggle text-center mx-2" />
          </span>
        </div>
        <div v-if="text" class="text-center mt-3">
          <button class="btn sendPost mb-2 mt-2">
            Send
          </button>
          <div class="text-center mt-1 mb-3"
            id="sendErr"></div>
        </div>
      </div>
    </form>

    <form v-if="toggle" @submit.prevent="addPostImage"
      enctype="multipart/form-data">
      <div class="border border-2 rounded-3 col-10 mx-auto">
        <div class="input-group">
          <div class="my-1 mx-2">
            <div class="imageContainer">
              <img :src="user.profileImage"
                class="profileImage border border-3"
                alt="User" />
                <div class="overlay"></div>
              </div>
          </div>
        <input type="text"
          class="form-control col-11"
          v-model="text"
          placeholder="Write something...">
        <span class="input-group-text p-1"
          data-toggle="tooltip"
          data-placement="left"
          title="Send post">
          <font-awesome-icon :icon="['fa', 'pencil']"
            @click="toggle = !toggle" 
            size="lg"
            class="imageToggle text-center mx-2" />
        </span>
      </div>
      <div class="mb-3">
        <label class="btn fileUpload mt-4 mb-2">
          <font-awesome-icon :icon="['fa', 'image']"
            class="text-center" />
            Add media
          <input
            type="file"
            ref="file"
            name="image"
            class="file-input col-11 my-1" 
            @change="onSelect"/>
          </label>
        </div>
          <div v-if="image">
            <img :src="image"
            class="rounded col-4 text-center mb-2 mt-3"
            alt="User's post image">
          </div>
        <div v-if="image" class="text-center">
          <button class="btn sendPost mb-2 mt-2">
              Send
          </button>
          <div class="text-center mt-1 mb-3"
            id="sendErr"></div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: '',
      text: '',
      image: '',
      toggle: null,
      user: ''
    }
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      const token = sessionStorage.getItem('token')
      fetch('http://localhost:3000/api/user/getUser', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + JSON.parse(token)
        }
      }).then(response => response.json())
      .then(data => this.user = data)
    },

    async addPost() {
      const token = sessionStorage.getItem('token')
      const userId = sessionStorage.getItem('user')
      const response = await fetch('http://localhost:3000/api/post/addPost', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(token)
          },
          body: JSON.stringify({ 
            text: this.text,
            userId: userId
          })
        }
      )
      if (response.ok && this.text) {
        this.$emit('add-post')
        this.text = ''
      }
      if (!response.ok) {
        const message = `Error sending post: ${response.status}`;
        document.getElementById("sendErr").innerHTML = 'Not authorized to post';
        throw new Error(message);
      }
    },

    onSelect() {
      const file = this.$refs.file.files[0];
      this.image = URL.createObjectURL(file)
      this.file = file;
    },

    async addPostImage() {
      const token = sessionStorage.getItem('token')
      const userId = sessionStorage.getItem('user')
      const formData = new FormData()
      formData.append('image', this.file)
      formData.append('text', this.text)
      formData.append('user_id', userId)
      const response = await fetch('http://localhost:3000/api/post/addPostImage', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + JSON.parse(token)
          },
          body: formData
        }
      )
      if (response.ok) {
        this.$emit('add-post')
        this.text = ''
        this.image = ''
      }
      if (!response.ok) {
        console.log(response)
        const message = `Error sending post: ${response.status}`;
        document.getElementById("sendErr").innerHTML = 'Not authorized to post';
        throw new Error(message);
      }
    }
  }
}
</script>

<style lang="scss" scoped>

h1 {
  color:white;
  font-size: 0.1rem
}
.imageContainer {
  position: relative;
}
.overlay {
  height: 10px;
  width: 10px;
  background-color: rgb(27, 208, 27);
  border-radius: 50%;
  display: inline-block;
  position: absolute; 
  right: 0;
  bottom: 0;
  border: 2px solid white;
}
.profileImage {
  height: 38px;
  width: 38px;
  border-radius: 50%;
}

.secretImage {
  color: #0d3b66;
}
.sendPost {
  background-color: #0d3b66;
  color: white;
  text-decoration: none;
  font-weight: bold;
    &:hover {
    color: #0d3b66;
    background-color: white;
    border: 1px solid #0d3b66;
  }
  &:focus {
    color: #0d3b66;
    background-color: white;
    border: 1px solid #0d3b66;
  }
}
.btn:focus {
  outline: none;
  box-shadow: none;
  color: black;
}
.form-control:focus {
  outline: none;
  box-shadow: none;
  color: black;
}
.file-input {
  display: none;
}
.fileUpload {
  background-color: white;
  color: #0d3b66;
  font-weight: bold;
  border: 1px solid;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #0d3b66;
    border: 1px solid #0d3b66;
  }
}
.imageToggle {
  color: #0d3b66;
  font-weight: bold;
  cursor: pointer;
    &:hover {
      color: #FF3131;
    }
}
#sendErr {
  color: #FF3131;
  font-size: 88%;
}
</style>