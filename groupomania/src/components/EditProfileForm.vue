<template>
    <div class="container mt-3">
      <div class="row">
        <div class="col">
        <div class="mb-2"><label>Edit Profile Picture: </label>
          <input type="file" @change="onFileSelected">
        </div>
        <div class="mb-2"><label>Edit Name: </label>
          <input type="text" @change="onFileSelected">
        </div>
        <div class="mb-2"><label>Edit Hobbies: </label>
          <input type="text" @change="onFileSelected">
        </div>
          <button @click="onUpload" class="btn btn-success mt-2">Upload</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
	name: 'EditProfileForm'
}
</script>

<style>

</style>