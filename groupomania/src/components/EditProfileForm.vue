<template>
  <div id="app">
    <form class="editProfileForm" @submit.prevent="onSubmit">
      <div class="container col-md-9 col-lg-6">
        <div class="row">
          <div class="col">
            <div class="base-image-input rounded-circle mx-auto text-center col-4 col-md-4 col-lg-2 my-2"
            :style="{ 'background-image': `url(${imageData || preImageData})` }"
            @click="chooseImage">
              <span v-if="!imageData" class="placeholder rounded-circle">
                Choose an Image
              </span>
              <input class="file-input rounded-circle" ref="fileInput" type="file" @input="onSelectFile">
            </div>
          </div>
          <div class="col">
            <div class="mx-auto text-center my-2">
              <label>First name</label><br>
              <input v-model="firstName" id="firstName" type="text" required/>
            </div>
            <div class="mx-auto text-center my-2">
              <label>Last name</label><br>
              <input v-model="lastName" id="lastName" type="text" required>
            </div>
            <div class="mx-auto text-center my-2">
            <label>Position</label><br>
            <select v-model="position" id="position" class="p-1" required>
              <option>Customer Service</option>
              <option>Manager</option>
              <option>CEO</option>
            </select>
            </div>
            <div class="mx-auto text-center my-3">
            <button v:on-click="onSubmit" class="btn uploadBtn border border-success border-2 text-center fw-bold px-2 mt-1" type="submit">
              Upload
            </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
  return {
    preImageData: '',
    imageData: null,
    firstName: '',
    lastName: '',
    position: null
    };
  },
  methods: {
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
    },
    onSubmit () {
      let staffInfo = {
        firstName: this.firstName,
        lastName: this.lastName,
        position: this.position
      }
      this.$emit('info-submitted', staffInfo)
      this.$store.commit('ADD_FIRSTNAME', this.firstName)
      this.$store.commit('ADD_LASTNAME', this.lastName)
      this.$store.commit('ADD_POSITION', this.position)

      this.firstName = ''
      this.lastName = ''
      this.position = null
    }
  }
}
</script>

<style lang="scss" scoped>
.uploadBtn {
  color: #229631;
  text-decoration: none;
  font-weight: bold;
  background: linear-gradient(to right, #229631 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 1s ease;
  border: #229631 5px;
    &:hover {
    background-position: left bottom;
    color:white;
  }
}
.btn:focus {
  outline: none;
  box-shadow: none;
}

.base-image-input {
  width: 200px;
  height: 200px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
  border: dashed 1px
}
.placeholder {
  background: #F0F0F0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #333;
  font-size: 18px;
  font-family: Helvetica;
}
.placeholder:hover {
  background: #E0E0E0;
}
.file-input {
  display: none;
}

#firstName {
  text-align: center;
}

#lastName {
  text-align: center;
}
</style>