<template>
  <div>
    <div class="container">
      <div class="center-block text-center">
        <button @click=" show = !show" class="btn postPen px-3 mb-3 me-2">
          Post +
        </button>
        <button @click=" showImage = !showImage" class="btn postPen mb-3 ms-2">
          Image +
        </button>
      </div>
    </div>
    <div v-if="show || showImage" class="border rounded-3 mx-5 mb-5">
    <Transition>
      <div v-if="showImage" id="Image">
        <div class="container mt-3">
          <div class="row">
            <div class="base-image-input rounded-3 text-center border border-2 py-3 my-2 mx-auto my-auto"
            :style="{ 'background-image': `url(${imageData})` }"
            @click="chooseImage">
              <span v-if="!imageData" class="placeholder rounded-square">
                Choose an Image
              </span>
              <input class="file-input" ref="fileInput" type="file" @input="onSelectFile">
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <Transition>
      <div v-if="show">
        <div class="container pt-4">
          <div class="row">
          <textarea type="text"
            size="36"
            class="px-2 col-10 mx-auto"
            v-model="newPost"
            placeholder="Write something..."
            @keypress.enter="addPost">
          </textarea>
          <br>
          <div id="sendErr" class="text-center mt-1"></div>
        </div>
      </div>
    </div>
    </Transition>
      <button v-if="show || showImage" class="btn sendPost mb-3 mt-2 mx-auto" @click="addPost">
        Send
      </button>
  </div>
</div>
</template>

<script>

export default {
  data() {
    return {
      newPost: '',
      imageData: null,
      show: false,
      showImage: false
    }
  },
  methods: {
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
.sendPost {
  background-color: #fd2500;
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

.postPen {
  background-color: #0d3b66;
  color: white;
  border: none;
  box-shadow: 0 2px 4px darkslategray;
  cursor: pointer;
  transition: all 0.2s ease;
}

.postPen:active {
  background-color: #0d3b66;
  box-shadow: 0 0 2px darkslategray;
  transform: translateY(2px);
}

.btn:focus {
  outline: none;
  box-shadow: none;
}

#err, #sendErr {
  color: #b61929;
  font-size: 88%;
}

textarea {
  resize: none;
}

// post images
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

.border {
  color: #0d3b66
}
</style>