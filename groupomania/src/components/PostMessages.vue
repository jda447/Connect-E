<template>
<div class="text-center mb-4">
  <form v-if="!toggle" @submit.prevent="addPost">
    <div class="border border-2 rounded-3 col-10 mx-auto mb-3">
      <div class="input-group">
        <input type="text"
          class="form-control col-11"
          v-model="post"
          placeholder="Write something...">
        <span @click="toggle = !toggle" class="input-group-text p-0" data-toggle="tooltip" data-placement="left" title="Send media post">
          <font-awesome-icon :icon="['fa', 'image']" size="lg" class="imageToggle text-center mx-2" />
        </span>
      </div>
      <div v-if="post" class="text-center mt-3">
        <button class="btn sendPost mb-2 mt-2">Send</button>
        <div id="sendErr" class="text-center mt-1 mb-3"></div>
      </div>
    </div>
  </form>
  <form v-if="toggle" @submit.prevent="addPostImage" enctype="multipart/form-data">
    <div class="border border-2 rounded-3 col-10 mx-auto">
      <div class="input-group">
      <input type="text"
        class="form-control col-11"
        v-model="post"
        placeholder="Write something...">
      <span class="input-group-text p-0" data-toggle="tooltip" data-placement="left" title="Send post">
        <font-awesome-icon :icon="['fa', 'pencil']" @click="toggle = !toggle" size="lg" class="imageToggle text-center mx-2" />
      </span>
    </div>
      <label class="btn fileUpload mt-4 mb-2">
        <font-awesome-icon :icon="['fa', 'image']" class="text-center" />
          Add image
        <input
          type="file"
          ref="file"
          name="image"
          class="file-input col-11 my-1"
          @change="onSelect"/>
        </label>
        <div>
          <img :src="image" class="rounded col-4 text-center mb-2 mt-3">
        </div>
      <div v-if="image" class="text-center">
        <button class="btn sendPost mb-2 mt-2">Send</button>
        <div id="sendErr" class="text-center mt-1 mb-3"></div>
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
      post: '',
      image: '',
      toggle: null,
      user: ''
    }
  },
  created() {
    this.getUser()
  },
  methods: {
    async getUser () {
      const token = sessionStorage.getItem('token')
      await fetch('http://localhost:3000/api/user/getUser', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + JSON.parse(token)
        }
      }).then(response => response.json())
      .then(data => this.user = data)
    },

    async addPost () {
      const token = sessionStorage.getItem('token')
      const userId = sessionStorage.getItem('user')
      const response = await fetch('http://localhost:3000/api/post/addPost', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(token)
          },
          body: JSON.stringify({ 
            post: this.post,
            firstName: this.user[0].firstName,
            lastName: this.user[0].lastName,
            position: this.user[0].position,
            profileImage: this.user[0].profileImage,
            userId: userId
          })
        }
      )
      if (response.ok && this.post) {
        this.$router.go()
      }
      if (!response.ok) {
        const message = `Error sending post: ${response.status}`;
        document.getElementById("sendErr").innerHTML = 'Error sending post';
        throw new Error(message);
      }
    },
    onSelect() {
      const file = this.$refs.file.files[0];
      this.image = URL.createObjectURL(file)
      this.file = file;
    },
    async addPostImage () {
      const token = sessionStorage.getItem('token')
      const userId = sessionStorage.getItem('user')
      const formData = new FormData()
      formData.append('image', this.file)
      formData.append('post', this.post)
      formData.append('firstName', this.user[0].firstName)
      formData.append('lastName', this.user[0].lastName)
      formData.append('position', this.user[0].position)
      formData.append('profileImage', this.user[0].profileImage)
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
        this.$router.go()
        console.log(this.user[0].profileImage)
        console.log(this.user[0].firstName)
        console.log(this.user[0].lastName)
        console.log(this.user[0].position)
      }
      if (!response.ok) {
        console.log(response)
        const message = `Error sending post: ${response.status}`;
        document.getElementById("sendErr").innerHTML = 'Error sending post';
        throw new Error(message);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sendPost {
  background-color: #0d3b66;
  color: white;
  text-decoration: none;
  font-weight: bold;
    &:hover {
    color: #fd2500;
    background-color: white;
    border: 1px solid #fd2500;
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
      color: #fd2500;
    }
}
#sendErr {
  color: #DC3545;
  font-size: 88%;
}
</style>