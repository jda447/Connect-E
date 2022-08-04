<template>
  <div id="app">
    <form class="editProfileForm" @submit.prevent="onSubmit">
    <div class="container">
      <div class="row">
        <div class="col">
      <div class="base-image-input rounded-circle mx-auto col-4 col-md-4 col-lg-2 my-2"
      :style="{ 'background-image': `url(${imageData})` }"
      @click="chooseImage">
        <span v-if="!imageData" class="placeholder rounded-circle">
          Choose an Image
        </span>
        <input class="file-input rounded-circle" ref="fileInput" type="file" @input="onSelectFile">
      </div>
    </div>
    <div class="col">
        <div class="mx-auto col-4 col-md-4 col-lg-2 my-2">
          <label>Name</label>
          <input v-model="name" id="name" type="text" placeholder="Add your name" required/>
        </div>
        <div class="mx-auto col-4 col-md-4 col-lg-2 my-2">
        <label>Position</label><br>
        <select v-model="position" id="position" class="p-1" required>
          <option disabled value="">Add your position</option>
          <option>Customer Service</option>
          <option>Manager</option>
          <option>CEO</option>
        </select>
        </div>
        <div class="mx-auto col-4 col-md-4 col-lg-2 my-2">
          <label>Hobbies</label>
          <input v-model="hobbies" id="hobbies" placeholder="Add your hobbies" type="text" required>
        </div>
        <div class="mx-auto text-center col-4 col-md-4 col-lg-2 my-3">
        <button v:on-click="onSubmit" class="btn uploadBtn text-center px-3 mt-1" type="submit">Upload</button>
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
    imageData: null,
    name: '',
    position: null,
    hobbies: ''
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
      let employeeInfo = {
        name: this.name,
        position: this.position,
        hobbies: this.hobbies
      }
      this.$emit('info-submitted', employeeInfo)
      this.$store.commit('ADD_NAME', this.name)
      this.$store.commit('ADD_POSITION', this.position)
      this.$store.commit('ADD_HOBBIES', this.hobbies)

      this.name = ''
      this.position = null
      this.hobbies = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.uploadBtn {
  font-family: Pacifico;
  background-color: #2688e3;
  color: white;
  &:hover {
    background-color: white;
    color: #2688e3;
    transform: scale(1.6);
    transition: transform 250ms;
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
</style>