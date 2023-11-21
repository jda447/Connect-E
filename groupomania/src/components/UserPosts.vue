<template>
  <PostMessages
    @add-post="getPosts">
  </PostMessages>
  <div v-for="post in posts.slice().reverse()"
    :key="post.id"
    class="list-unstyled border rounded-3 shadow mx-auto col-10 mb-3">
    <UserPost
      :userId="userId"
      :postUserId="post.UserId"
      :postId="post.id"
      :text="post.text"
      :imageUrl="post.imageUrl"
      @delete-post="removePost">
    </UserPost>
  </div>
</template>

<script>
import UserPost from '../components/UserPost.vue'
import PostMessages from '../components/PostMessages.vue'

export default {
  data() {
    return {
      posts: []
    }
  },
  components: {
    UserPost,
    PostMessages
  },
  created() {
    this.getPosts()
  },
  computed: {
    userId() {
      return parseInt(sessionStorage.getItem('user'))
    }
  },
  methods: {
    removePost(payload) {
      this.posts = this.posts.filter(post => post.id !== payload.postId)
    },

    getPosts() {
      const token = sessionStorage.getItem('token')
      fetch('http://localhost:3000/api/post', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + JSON.parse(token)
        }
      }).then(response => response.json())
      .then(data => this.posts = data)
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
