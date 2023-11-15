<template>
  <div tabIndex="0">
    <div v-if="postUserId === userId">
      <button @click.prevent="deletePost"
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
  <div v-for="user in user" :key="user.id">
    <div v-if="text || imageUrl"
      class="ms-1 mt-2 mb-2">
      <button @click="singleUser(postUserId)"
        class="nameBtn btn rounded-pill fw-bold fs-5">
        <img :src="user.profileImage"
          class="profileImage rounded-circle border border-3 me-1"
          alt="User"/>
        {{ user.firstName }} {{ user.lastName }}
      </button>
    </div>
  </div>
  <div v-if="text"
    class="postText col-10 mx-auto mb-4 mt-1">
    {{ text }}
  </div>
  <div v-if="imageUrl"
    class="col-9 mx-auto mt-3">
    <img :src="imageUrl"
      class="col-7 mx-auto rounded mb-4" />
  </div>
  <div class="position-relative">
    <template v-if="hasRead">
      <button @click="readUpdate"
        class="read btn rounded-pill position-absolute bottom-0 end-0 m-1"
        :disabled="disableHasRead">
          <font-awesome-icon :icon="['fa', 'circle-check']" />
            Read
      </button>
    </template>
    <template v-else>
      <button @click="readUpdate"
        class="read btn rounded-pill position-absolute bottom-0 end-0 m-1">
            Unread
      </button>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      hasRead: false,
      disableHasRead: false
    }
  },
  props: {
    userId: Number,
    postId: Number,
    text: String,
    imageUrl: String,
    postUserId: Number
  },
  emits: ['delete-post'],
  mounted() {
    const token = sessionStorage.getItem('token')
    this.disableHasRead = false
    fetch('http://localhost:3000/api/post/hasRead/' + this.postId + '/' + this.userId, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(token)
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
    .then((data) => {
      this.hasRead = data.hasRead
    })
    .catch(error => {
        console.log(error)
      }
    ),
    fetch('http://localhost:3000/api/user/singleUser/' + this.postUserId, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + JSON.parse(token)
      }
    }).then(response => response.json())
    .then(data => this.user = data)
    .catch(error => {
      console.log(error)
    })
  },
  methods: {
    readUpdate() {
      const token = sessionStorage.getItem('token')
      this.disableHasRead = true
      fetch('http://localhost:3000/api/post/readUpdate/' + this.postId + '/' + this.userId, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(token)
          },
          body: JSON.stringify({ 
            PostId: this.postId,
            UserId: this.userId
          })
        }).then(response => {
          if (response.ok) {
            this.hasRead = !this.hasRead
            this.disableHasRead = false
          }
        }).catch(error => {
          console.log(error)
        }
      )
    },

    singleUser(postUserId) {
      sessionStorage.setItem('singleUser', postUserId)
      this.$router.push({ path: '/singleuser' })
    },

    deletePost() {
      const token = sessionStorage.getItem('token')
        fetch('http://localhost:3000/api/post/' + this.postId, {
          method: 'DELETE',
          headers: {
            'Authorization': 'Bearer ' + JSON.parse(token)
          }
        }).then(response => {
          if (response.ok) {
            this.$emit('delete-post', {
            postId: this.postId
            })
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
    color: #FF3131;
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
    color: #FF3131;
  }
}
</style>