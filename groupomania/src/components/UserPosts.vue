<template>
  <div id="app">
    <div class="messageContainer mx-auto border shadow col-10 mt-2">
      <button @click="removePost" class="btn btn-outline float-end btn-sm shadow-none deletePost">
        x
      </button>
      <div :class="`post`">
      <div class="userNameMsgs mx-4 mt-4 flex-grow-1 bd-highlight">
        {{ $store.state.name }}
      <hr/>
      </div>
      <div class="userPost flex-grow-1 bd-highlight mx-4 mt-4 mb-3"> 
        {{ post.content }}
      </div>
      <div @click="$store.dispatch('INCREASE_COUNTER')" class="seen-by mt-auto mx-2 p-1 d-flex align-items-end flex-column bd-highlight">
        Seen by {{ $store.state.counter }}
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
  methods: {
    removePost() {
      this.$store.commit('REMOVE_POST', this.post)
    },
    userNameShow () {
      this.$store.commit('ADD_NAME', this.name)
    }
  }
}
</script>

<style lang="scss" scoped>

.messageContainer {
  background-color: #fafafa;
}
.btn-outline {
  font-weight: bolder;
}

.userNameMsgs {
  font-weight: bolder;
}

.seen-by {
  font-size: medium;
}

.deletePost {
  &:hover {
    color: #f9564f;
  }
}
</style>