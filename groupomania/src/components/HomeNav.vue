<template>
  <div class="app">
    <div class="navbar p-0">
      <router-link to="/messages"
        @click="homeNavLogo"
        class="col-6 col-md-4 col-sm-4 mb-1">
        <img src="@/assets/group-logo-nav.png"
          class="logo"
          alt="Groupomania logo"
          rel="preload"
          fetchpriority="high" />
      </router-link>
      <div class="logos mt-1">
        <router-link to="/profile"
          class="navBtns mx-2"
          data-toggle="tooltip"
          data-placement="left"
          title="Profile">
          <font-awesome-icon :icon="['fas', 'user-large']" />
        </router-link>
        <div class="dropdown mx-2"
          data-toggle="tooltip"
          data-placement="left"
          title="Settings"
          tabIndex="0">
          <font-awesome-icon :icon="['fas', 'gear']"
            @click="dropDown"
            class="navBtns dropbtn me-2" />
            <div id="dropdown" class="dropdown-content">
              <a title="About">About</a>
              <router-link to="/"
                class="text-center fw-bold px-2"
                title="Delete"
                data-bs-toggle="modal"
                data-bs-target="#deleteUserModal">
                Delete
              </router-link>
            </div>
          <DeleteUserModal />
        </div>
        <router-link to="/"
          class="navBtns me-4"
          data-bs-toggle="modal"
          data-bs-target="#signOutModal"
          data-toggle="tooltip"
          data-placement="left"
          title="Sign-out">
          <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
        </router-link>
      </div>
    </div>  
    <hr/>
    <SignOutModal />
    <div class="timeStamp ms-2 mb-2">
      <font-awesome-icon :icon="['fas', 'calendar-days']"
        class="me-1"
        size="sm" />
        {{ timeStamp }}
    </div>
  </div>
</template>

<script>
import SignOutModal from '../components/SignOutModal.vue'
import DeleteUserModal from '../components/DeleteUserModal.vue'

export default {
	name: 'ProfileNav',
    components: {
    SignOutModal,
    DeleteUserModal
  },
  data() {
    return {
      toggle: false
    };
  },
  methods: {
    dropDown() {
      document.getElementById("dropdown").classList.toggle("show");
    },

    homeNavLogo() {
      this.$router.go()
    }
  },

  computed: {
    timeStamp() {
      const d = new Date()
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      const date = d.toLocaleDateString('EN', options).replace(',','')
      return date
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
.app {
  font-family: Ubuntu, sans-serif;
  color: #0d3b66;
  border: solid 6px white;
}
.timeStamp {
  font-size: 0.8rem;
}
.navBtns {
  color: #0d3b66;
  font-size: 1.2rem;
  cursor: pointer;
    &:hover {
    color: #FF3131;
	}
}
.logo {
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}

hr {
  margin: 0
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {background-color: #ddd;}
.show {display:block;}
</style>