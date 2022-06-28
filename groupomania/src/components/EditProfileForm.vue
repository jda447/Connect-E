<template>
  <form>
      <div class="mx-auto col-4 col-md-4 col-lg-2 my-3">
        <input ref="fileInput" type="file" @input="pickFile">
      </div>
      <div class="mb-2"><label class="px-3">Name: </label>
        <input type="text">
      </div>
      <div class="mb-2"><label class="px-3">Position: </label>
        <input type="text">
      </div>
      <div class="mb-2"><label class="px-3">Hobbies: </label>
        <input type="text">
      </div>
      <div class="col px-3">
      <button class="btn btn-success mt-2 px-3">Upload</button>
      </div>
  </form>
</template>

<script>
export default {
	name: 'EditProfileForm'
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
  border: solid 10px white;
  font-family: Pacifico;
}
.imagePreviewWrapper {
    width: 250px;
    height: 250px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}
</style>