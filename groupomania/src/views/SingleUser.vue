<template>
  <div id="app" class="col-lg-7 mx-auto ">
    <ProfileNav></ProfileNav>
    <div class="container mt-2 mb-4">
      <div class="row justify-content-around">
        <div class="card col-7">
          <div class="card-body">
            <div class="card-title text-center mb-4">
              <ul v-for="item in user"
                :key="item.user_id"
                class="list-unstyled mx-auto">
                <li class="col-10 mx-auto">
                  <img :src="item.profileImage" class="profileImage rounded-circle col-8 mt-4" /></li>
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
  </div>
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
    async singleUser() {
      const token = sessionStorage.getItem('token')
      const singleUser = sessionStorage.getItem('singleUser')
      console.log(singleUser)
      await fetch('http://localhost:3000/api/user/singleUser/' + singleUser, {
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
#app {
  color: #0d3b66;
  font-family: Ubuntu, sans-serif;
}
.card {
  background-color: #fafafa;
}
.card-body {
  padding: 0;
}
.profileImage {
  height: 175px;
  width: 175px;
  border-radius: 50%;
}
</style>