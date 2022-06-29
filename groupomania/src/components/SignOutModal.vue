<template>
<div id="app">
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
          <button type="button" class="btn-close mt-3 ms-3" data-bs-dismiss="modal" aria-label="Close"></button>
        <div class="modal-body text-center">
          Are you sure you want to sign out?
        </div>
        <div class="modal-footer mx-auto">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
          <a href="/" role="button" class="btn btn-success">Yes</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
	name: 'SignOutModal'
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  border: solid 10px white;
}
</style>