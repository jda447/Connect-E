<template>
  <main class="app">
    <h1>Homepage</h1>
    <div class="container">
      <div class="row">
        <div class="text-center">
          <div class="my-5">
            <img class="shimmer col-8 col-md-6 col-lg-4"
            src="@/assets/icon-above-font-cropped.png"
            alt="Groupomania logo"
            />
          </div>
            <div class="container col-lg-6">
              <div class="row">
            <div class="col">
              <router-link to="/signup"
                class="btn btnSignUp btn-lg shadow-none m-1"
                tabIndex="0">
                Sign up
              </router-link>
            </div>
            <div class="col">
              <router-link to="/login"
                class="btn btnLogIn btn-lg shadow-none m-1">
                Log in
              </router-link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </main>
  <footer class="footer text-center mx-auto p-3" role="contentinfo">
    © 2023 Copyright:
    <a class="text-reset fw-bold" href="#">Groupomania.com</a>
  </footer>
</template>

<script>
export default {
  name: 'App',
  mounted: function() {
    this.clearStorage()
  },
  methods: {
    clearStorage: function() {
      sessionStorage.clear()
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Ubuntu&display=swap');

.app {
  font-family: Helvetica, Arial, sans-serif;
  color: #0d3b66;
  border: solid 20px white;
  height: 100vh;
}

h1 {
  color: white;
  font-size: 0.1rem;
}
.btnSignUp {
  font-family: Ubuntu, sans-serif;
  background-color: #0d3b66;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid #0d3b66;
    &:hover {
    background-color: white;
    color: #0d3b66;
    border: 2px solid #0d3b66;
  }
}
.btnSignUp:focus {
  background-color: #fafafa;
  color: #0d3b66;
  border: 2px solid #0d3b66;
}
.btnLogIn {
  font-family: Ubuntu, sans-serif;
  background-color: #0d3b66;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid #0d3b66;
    &:hover {
    background-color: white;
    color: #0d3b66;
    border: 2px solid #0d3b66;
  }
}
.btnLogIn:focus {
  background-color: #fafafa;
  color: #0d3b66;
  border: 2px solid #0d3b66;
}
.shimmer {
  color: grey;
  display: inline-block;
  -webkit-mask: linear-gradient(-60deg,#000 30%,#0005,#000 70%) right/300% 100%;
  background-repeat: no-repeat;
  animation: shimmer 2.5s infinite;
}

@keyframes shimmer {
  100% {-webkit-mask-position:left}
}
.footer {
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 95%;
}
</style>
