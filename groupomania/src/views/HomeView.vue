<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div  class="text-center">
          <div class="my-5">
            <img class="col-8 col-md-6 col-lg-4" src="@/assets/icon-above-font-cropped.png"/>
          </div>
            <router-link to="/sign-up" class="btn btnSignUp btn-lg shadow-none m-4">Sign-up</router-link>
            <router-link to="/log-in" class="btn btnLogIn btn-lg shadow-none m-4">Log-in</router-link>
        </div>
      </div>
    </div>
    <footer class="footer text-center mx-auto p-3">
      © 2022 Copyright:
      <a class="text-reset fw-bold" href="#">Groupomania.com</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Ubuntu&display=swap');

#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #0d3b66;
  border: solid 20px white;
  height: 100vh;
}

.btnSignUp {
  font-family: Ubuntu, sans-serif;
  background-color: #0d3b66;
  color: white;
  text-decoration: none;
  font-weight: bold;
    &:hover {
    background-color: white;
    color: #0d3b66;
    transform: scale(1.6);
    transition: transform 250ms;
    font-family: Pacifico;
  }
}

.btnLogIn {
  font-family: Ubuntu, sans-serif;
  background-color: #0d3b66;
  color: white;
  text-decoration: none;
  font-weight: bold;
    &:hover {
    background-color: white;
    color: #0d3b66;
    transform: scale(1.6);
    transition: transform 250ms;
    font-family: Pacifico;
  }
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