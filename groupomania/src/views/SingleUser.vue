<template>
  <nav role="navigation" class="col-lg-7 mx-auto">
    <ProfileNav />
  </nav>
  <main class="app col-lg-7 mx-auto ">
    <h1>Selected user's profile</h1>
    <div class="container mt-2 mb-4">
      <div class="row justify-content-around">
        <div class="card col-7 col-sm-6 col-md-5 col-lg-5">
          <div class="card-body">
            <div class="card-title text-center mb-4">
              <ul v-for="i in user"
                :key="i.id"
                class="list-unstyled mx-auto">
                <li class="col-10 mx-auto">
                  <img :src="i.profileImage"
                  class="profileImage rounded-circle border border-3 col-8 mt-4"
                  alt="Selected user's profile"
                  /></li>
                <li class="fw-bold fs-2 mt-1">
                  {{ i.firstName }} {{ i.lastName }}</li>
                <li class="fw-bold fs-5">
                  {{ i.position }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ProfileNav from '../components/ProfileNav.vue'

export default {
  name: 'App',
  components: {
    ProfileNav
  },
  data() {
    return {
      user: ''
    }
  },
  created() {
    this.singleUser()
  },
  methods: {
    singleUser() {
      const token = sessionStorage.getItem('token')
      const singleUser = sessionStorage.getItem('singleUser')
      console.log(singleUser)
      fetch('http://localhost:3000/api/user/singleUser/' + singleUser, {
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
  background: linear-gradient(to top, #fafafa 65%, #0d3b66 35%);
  border: solid 2px #0d3b66;
  border-radius: 10%;
}
.card-body {
  padding: 0;
}
.profileImage {
  height: 150px;
  width: 150px;
  border-radius: 50%;
}
</style>