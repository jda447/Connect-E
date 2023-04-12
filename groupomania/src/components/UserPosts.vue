<template>
  <div id="app">
    <ul v-for="post in posts.slice().reverse()"
      :key="post.post_id"
      class="list-unstyled border shadow mx-auto col-10">
      <button @click.prevent="deletePost(post.post_id)"
        class="btn fw-bold float-end shadow-none deletePost mx-1">
        x
      </button>
      <li v-if="post.post || post.imageUrl" class="ms-4 mt-4 mb-2">
        <button @click="singleUser(post.user_id)" class="nameBtn btn rounded-pill fw-bold">
          <img :src="post.profileImage" class="profileImage rounded-circle border border-3 col-1 me-1" />
          {{ post.firstName}} {{ post.lastName }}
        </button>
      </li>
      <li v-if="post.post" class="col-9 mx-auto mb-5 mt-1">
        {{ post.post }}
      </li>
      <li v-if="post.imageUrl" class="col-9 mx-auto mt-4">
        <img :src="post.imageUrl" class="col-7 mx-auto rounded mb-4" />
      </li>
      <div @click="()=>$store.dispatch('INCREASE_COUNTER')"
        class="seen-by mx-3 mt-4 position-relative">
        <div class="position-absolute bottom-0 end-0 mb-2">
          <font-awesome-icon :icon="['fa', 'thumbs-up']" />
            {{ $store.state.counter }}
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    }
  },
  created() {
    this.getPosts()
  },
  methods: {
    async getPosts() {
      const token = sessionStorage.getItem('token')
      await fetch('http://localhost:3000/api/post', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + JSON.parse(token)
        }
      }).then(response => response.json())
      .then(data => this.posts = data)
    },

    singleUser(singleUserId) {
      sessionStorage.setItem('singleUser', singleUserId)
      this.$router.push({ path: '/singleuser' })
    },

    async deletePost(postId) {
        const token = sessionStorage.getItem('token')
        await fetch('http://localhost:3000/api/post/' + postId, {
          method: 'DELETE',
          headers: {
            'Authorization': 'Bearer ' + JSON.parse(token)
          }
        }).then(async response => {
          if (response.ok) {
            this.$router.go()
          }
        }).catch(error => {
          console.log(error)
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.profileImage {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.seen-by {
  font-size: medium;
  cursor: pointer;
  color: #0d3b66;
}
.deletePost {
  color: #0d3b66;
  &:hover {
    color: #f9564f;
  }
}
.nameBtn {
  color: #0d3b66;
  font-family: Ubuntu, sans-serif;
  &:hover {
    border: solid 1px;
  }
}
</style>