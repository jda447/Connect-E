<template>
<div class="file text-center mb-4">
  <form @submit.prevent="addPost" enctype="multipart/form-data">
    <div class="fields border border-2 rounded-3 col-10 mx-auto">
      <textarea type="text"
        class="col-11 ps-2 mt-3 pt-1"
        v-model="post"
        placeholder="Write something..."
        @keypress.enter="addPost">
      </textarea><br>
      <img :src="image" class="rounded col-4 my-2">
      <input
        type="file"
        ref="file"
        name="image"
        class="col-11 my-1 mb-2"
        @change="onSelect"/>
      <div class="fields">
        <button class="btn sendPost col-2 mx-auto mb-2">Send</button>
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
      image: ''
    }
  },
  methods: {
    onSelect() {
      const file = this.$refs.file.files[0];
      this.image = URL.createObjectURL(file)
      this.file = file;
    },
    async addPost () {
      const token = sessionStorage.getItem('token')
      const userId = sessionStorage.getItem('user')
      const formData = new FormData()
      formData.append('image', this.file)
      formData.append('post', this.post)
      formData.append('user_id', userId)
      const response = await fetch('http://localhost:3000/api/post', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + JSON.parse(token)
          },
          body: formData
        }
      )
      if (response.ok) {
        this.$router.go()
      }
      if (!response.ok) {
        console.log(response)
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
  display: flex;
  justify-content: center;
    &:hover {
    color: #fd2500;
    background-color: white;
    border: 1px solid #fd2500;
  }
}
.btn:focus {
  outline: none;
  box-shadow: none;
}

textarea {
  resize: none;
}
.border {
  color: #0d3b66
}
</style>