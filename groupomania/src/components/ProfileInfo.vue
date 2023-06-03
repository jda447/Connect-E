<template>
  <div class="app col-lg-7 mx-auto">
    <h1>Profile</h1>
    <div class="container mt-2 mb-4">
      <div class="row justify-content-around">
        <div class="card col-7 col-sm-6 col-md-5 col-lg-8">
          <div class="card-body">
            <div class="card-title text-center mb-4">
              <ul v-for="item in user"
                :key="item.user_id"
                class="list-unstyled mx-auto">
                <li class="col-10 mx-auto">
                  <img :src="item.profileImage"
                  class="profileImage rounded-circle border border-3 col-8 mt-4"
                  alt="Your profile"/>
                </li>
                <li class="fw-bold fs-2 mt-1">
                  {{ item.firstName }} {{ item.lastName }}</li>
                <li class="fw-bold fs-5">
                  {{ item.position }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <router-link to="/editprofile"
        class="btn btn-lg editBtn text-center fw-bold mb-4 px-3"
        tabIndex="0">
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
.app {
  font-family: Ubuntu, sans-serif;
  color: #0d3b66;
}

h1 {
  color: white;
  font-size: 0.1rem;
}
.card {
  background-color: #fafafa;
  background: linear-gradient(to top, #fafafa 60%, #0d3b66 40%);
  border: solid 2px #0d3b66;
  border-radius: 10%;
}
.card-body {
  padding: 0;
}
.editBtn {
  font-family: Ubuntu, sans-serif;
  color: white;
  background-color: #0d3b66;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid #0d3b66;
    &:hover {
    color: #0d3b66;
    background-color: white;
    border: 2px solid #0d3b66;
  }
}
.editBtn:focus {
  background-color: #fafafa;
  color: #0d3b66;
  border: 2px solid #0d3b66;
}
.profileImage {
  height: 150px;
  width: 150px;
  border-radius: 50%;
}
</style>