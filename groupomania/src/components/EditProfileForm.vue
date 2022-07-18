<template>
    <div class="id">
    <form class="editProfileForm" @submit.prevent="onSubmit">
        <div class="mx-auto text-center col-4 col-md-4 col-lg-2 mt-2">
          <input ref="fileInput" type="file" @input="pickFile">
        </div>
        <div class="mx-auto col-4 col-md-4 col-lg-2 my-2">
          <label>Name</label>
          <input v-model="name" id="name" class="userData" type="text" placeholder="Add your name" required/>
        </div>
        <div class="mx-auto col-4 col-md-4 col-lg-2 my-2">
        <label>Position</label><br>
        <select v-model="position" id="position" class="userData p-1" required>
          <option class="userData" disabled value="">Add your position</option>
          <option class="userData">Customer Service</option>
          <option class="userData">Manager</option>
          <option class="userData">CEO</option>
        </select>
        </div>
        <div class="mx-auto col-4 col-md-4 col-lg-2 my-2">
          <label>Hobbies</label>
          <input v-model="hobbies" id="hobbies" class="userData" placeholder="Add your hobbies" type="text" required>
        </div>
        <div class="mx-auto text-center col-4 col-md-4 col-lg-2 my-3">
        <button v:on-click="onSubmit" class="btn btn-success px-3" type="submit" value="Submit">Upload</button>
        </div>
      </form>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
    return {
        name: '',
        position: null,
        hobbies: ''
      };
    },
    methods: {
      onSubmit () {
        let employeeInfo = {
            name: this.name,
            position: this.position,
            hobbies: this.hobbies
        }
        this.$emit('info-submitted', employeeInfo)

        this.name = ''
        this.position = null
        this.hobbies = ''
      }
  }
}
</script>

<style lang="scss" scoped>
.btn-success {
  font-family: Pacifico;
  background-color: #0ca93b;
  color: white;
  &:hover {
    background-color: white;
    color: #0ca93b;
    transform: scale(1.2);
    transition: transform 500ms;
  }
}
</style>