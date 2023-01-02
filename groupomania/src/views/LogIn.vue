<template>
  <div id="app" class="col-lg-9 mx-auto">
    <router-link to="/" class="btn shadow-none m-3"><font-awesome-icon :icon="['fas', 'arrow-left']" class="arrow" />
    </router-link>
    <LogInForm></LogInForm>
  </div>
</template>

<script>
import LogInForm from '../components/LogInForm.vue'

export default {
  name: 'App',
  components: {
    LogInForm
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #0d3b66;
  border: solid 10px white;
  min-height: 100vh;
}
.arrow {
  &:hover {
    background-color: white;
    color: #fd2500;
    transform: scale(1.8);
    transition: transform 250ms;
  }
}
</style>