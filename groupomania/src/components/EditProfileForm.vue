<template>
  <form>
    <div class="container mt-2">
      <div class="row">
        <div class="col">
          <div class="mb-2">
            <label class="px-3" for="customFile">Profile Picture:</label>
            <input type="file" class="custom-file-input" id="customFile">
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
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
	name: 'EditProfileForm'
}
</script>

<style>

</style>