<template>
    <div class="mb-2"><label>Edit Profile Picture: </label>
    <input type="file" @change="onFileSelected">
    </div>
    <div class="mb-2"><label>Edit User Name: </label>
    <input type="text" @change="onFileSelected">
    </div>
    <div class="mb-2"><label>Edit Company: </label>
    <input type="text" @change="onFileSelected">
    </div>
    <button @click="onUpload" class="btn btn-success mt-4">Upload</button>
</template>

<script>
export default {
	name: 'EditProfileForm'
}
</script>

<style>

</style>