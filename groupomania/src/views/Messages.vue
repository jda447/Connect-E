<template>
  <div id="app" class="col-lg-7 mx-auto">
    <HomeNav></HomeNav>
    <PostMessages></PostMessages>
    <UserPosts></UserPosts>
  </div>
</template>

<script>
import HomeNav from '../components/HomeNav.vue'
import PostMessages from '../components/PostMessages.vue'
import UserPosts from '../components/UserPosts.vue'

export default {
  name: 'App',
  components: {
    HomeNav,
    PostMessages,
    UserPosts
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
</style>