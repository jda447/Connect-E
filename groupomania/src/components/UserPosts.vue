<template>
  <div id="app">
    <div class="mx-auto border shadow col-10 mb-3 mt-2">
      <div @click="removePost" class="btn btn-outline btn-sm d-flex justify-content-end me-1">x
      </div>
      <div :class="`post ${post.done ? 'is-complete' : ''}`">
      <div class="content mx-4 p-2 flex-grow-1 bd-highlight">{User Name}<br><hr/>
        {{ post.content }}</div>
        <div class="mt-auto p-2 d-flex align-items-end flex-column bd-highlight">Seen by 0</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
  },
  props: ['post'],
  methods: {
    removePost() {
      this.$store.commit('REMOVE_POST', this.post)
    }
  }
}
</script>

<style>
.btn-outline {
  font-weight: bolder;
}
</style>