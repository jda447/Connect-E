<template>
  <div id="app">
    <ul v-for="post in posts.slice().reverse()"
      :key="post.post_id"
      class="list-unstyled border shadow mx-auto col-10">
      <button v-on:click.prevent="deletePost"
      class="btn btn-outline float-end btn-sm shadow-none deletePost mx-1">
        x
      </button>
        <li v-for="item in user"
          :key="item.user_id"
          class="list-unstyled fw-bold mt-3 ms-3 mb-3">
          <img :src="item.imageUrl" class="rounded-circle col-1" />
            {{ item.firstName }} {{ item.lastName }}
        </li>
        <li v-if="post.post" class="mb-3 ps-5"> {{ post.post }}</li>
        <li v-if="post.imageUrl"> <img :src="post.imageUrl" class="col-9 rounded ps-5 mb-2" /></li>
      <div @click="()=>$store.dispatch('INCREASE_COUNTER')"
        class="seen-by mx-3 my-2 d-flex align-items-end flex-column bd-highlight">
        Seen by {{ $store.state.counter }}
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      user: ''
    }
  },
  created() {
    this.getPosts()
    this.getUserIcon()
  },
  methods: {
    async getPosts () {
      const token = sessionStorage.getItem('token')
      await fetch('http://localhost:3000/api/post', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + JSON.parse(token)
        }
      }).then(response => response.json())
      .then(data => this.posts = data)
    },
    async getUserIcon () {
      const token = sessionStorage.getItem('token')
      await fetch('http://localhost:3000/api/user/getUserIcon', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + JSON.parse(token)
        }
      }).then(response => response.json())
      .then(data => this.user = data)
    },
    deletePost : async function() {
        const token = sessionStorage.getItem('token')
        const userId = sessionStorage.getItem('user')
        await fetch('http://localhost:3000/api/post', {
          method: 'DELETE',
          body: JSON.parse(userId),
          headers: {
            'Authorization': 'Bearer ' + JSON.parse(token)
          }
        }).then(async response => {
          if (!response.ok) {
            const error = (response.status)
            return Promise.reject(error);
          }
        }).catch(error => {
          this.errorMessage = error;
          console.error('Unauthorized access', error);
          document.getElementById("err").innerHTML = 'Unauthorized access';
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-outline {
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