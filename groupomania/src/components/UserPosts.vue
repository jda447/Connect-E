<template>
<div id="app">
  <ul v-for="item in posts.slice().reverse()"
    :key="item.post_id"
    class="list-unstyled border shadow mx-auto col-10">
    <button v-on:click.prevent="deletePost"
    class="btn btn-outline float-end btn-sm shadow-none deletePost mx-1">
      x
    </button>
      <li class="mt-3 mb-2 ps-4"> user_id {{ item.user_id }}</li>
      <li v-if="item.post" class="fw-bold mb-2 ps-5"> {{ item.post }}</li>
      <li v-if="item.imageUrl"> <img :src="item.imageUrl" class="col-9 rounded ps-5 mb-2" /></li>
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
      posts: []
    }
  },
  created() {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const token = sessionStorage.getItem('token')
      await fetch('http://localhost:3000/api/post', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(token)
        }
      }).then(response => response.json())
      .then(data => this.posts = data)
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
      );
    },

    removePost() {
      this.$store.commit('REMOVE_POST', this.post)
    },
    userNameShow () {
      this.$store.commit('ADD_FIRSTNAME', 'ADD_LASTNAME', this.firstName, this.lastName)
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