<template>
  <div id="app">
    <div class="mx-auto">
      <div :class="`post ${post.done ? 'is-complete' : ''}`">
        <div class="content">{{ post.content }}</div>
        <div @click="removePost" class="btn btn-danger btn-sm">x
        </div>
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