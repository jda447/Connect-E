<template>
  <div id="app" class="col-lg-7 mx-auto">
    <div class="text-center fw-bold h2 mb-3">
      Profile
    </div>
    <div class="container mt-2 mb-4">
      <div class="row justify-content-around">
        <div class="card col-7">
          <div class="card-body">
            <div class="card-title text-center mb-4">
              <ul v-for="item in user"
                :key="item.user_id"
                class="list-unstyled mx-auto">
                <li class="col-10 mx-auto">
                  <img :src="item.imageUrl" class="rounded-circle col-8 mt-4" /></li>
                <li class="fw-bold fs-4 mt-3">
                  {{ item.firstName }} {{ item.lastName }}</li>
                <li class="fw-bold mt-2">
                  {{ item.position }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <router-link to="/editprofile" class="btn editBtn btn-lg text-center fw-bold mb-4 px-3">
        Edit
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: ''
    }
  },
  created() {
    this.getUser()
  },
  methods: {
    async getUser () {
      const token = sessionStorage.getItem('token')
      await fetch('http://localhost:3000/api/user/getUser', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + JSON.parse(token)
        }
      }).then(response => response.json())
      .then(data => this.user = data)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background-color: #fafafa;
}
.list {
  list-style: none;
}
.card-body {
  padding: 0;
}
.editBtn {
  background-color: #0d3b66;
  color: white;
  border: none;
  padding: 5px;
  box-shadow: 0 2px 4px darkslategray;
  cursor: pointer;
  transition: all 0.2s ease;
}
.editBtn:active {
  background-color: #0d3b66;
  box-shadow: 0 0 2px darkslategray;
  transform: translateY(2px);
}
.btn:focus {
  outline: none;
  box-shadow: none;
}
</style>