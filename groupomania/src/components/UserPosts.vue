<template>
  <div v-for="post in posts.slice().reverse()"
    :key="post.id"
    class="list-unstyled border rounded-3 shadow mx-auto col-10 mb-3">
    <div tabIndex="0">
      <div v-if="post.user_id === getUserId">
        <button @click.prevent="deletePost(post.id)"
          class="btn fw-bold float-end shadow-none deletePost m-1"
          data-toggle="tooltip"
          data-placement="left"
          title="Delete post">
          <font-awesome-icon :icon="['fa', 'xmark']"
            class="text-center" />
        </button>
      </div>
      <button v-else class="barsBtn btn float-end m-1">
        <font-awesome-icon :icon="['fa', 'ellipsis']"
          size="sm"
          title="Post options" />
      </button>
    </div>  
    <div v-if="post.text || post.imageUrl"
      class="ms-1 mt-2 mb-2">
      <button @click="singleUser(post.user_id)"
        class="nameBtn btn rounded-pill fw-bold fs-5">
        <img :src="post.profileImage"
          class="profileImage rounded-circle border border-3 me-1"
          alt="User's profile"/>
        {{ post.firstName}} {{ post.lastName }}
      </button>
    </div>
    <div v-if="post.text"
      class="postText col-10 mx-auto mb-4 mt-1">
      {{ post.text }}
    </div>
    <div v-if="post.imageUrl"
      class="col-9 mx-auto mt-3">
      <img :src="post.imageUrl"
        class="col-7 mx-auto rounded mb-4" />
    </div>
    <div class="position-relative">
      <button @click.prevent="readUpdate(post.id)"
        class="read btn rounded-pill position-absolute bottom-0 end-0 m-1">
          <font-awesome-icon :icon="['fa', 'circle-check']" />
            Read
      </button>
    </div>
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
  computed: {
    getUserId() {
      return JSON.parse(sessionStorage.getItem('user'))
    }
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

    async readUpdate(postId) {
      const token = sessionStorage.getItem('token')
      const userId = sessionStorage.getItem('user')
      console.log(userId)
      console.log(postId)
      await fetch('http://localhost:3000/api/read/readUpdate/' + postId, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(token)
          },
          body: JSON.stringify({ 
            postId: postId,
            userId: userId
          })
        }).then(async response => {
          if (response.ok) {
            this.$router.go()
          }
        }).catch(error => {
          console.log(error)
        }
      )
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
  height: 66px;
  width: 66px;
  border-radius: 50%;
}
.postText {
  font-size: 1.2rem;
}
.read {
  font-size: medium;
  cursor: pointer;
  color: #0d3b66;
  &:hover {
    background-color: #fafafa;
    border-color: #0d3b66;
  }
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
    border: solid 1px #0d3b66;
    background-color: #fafafa;
  }
}
.barsBtn {
  color: #0d3b66;
  &:hover {
    color: #f9564f;
  }
}
</style>