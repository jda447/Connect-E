<template>
  <div class="col-lg-7 mx-auto">
    <nav role="navigation">
      <HomeNav />
    </nav>
    <main role="main">
      <PostMessages />
      <UserPosts />
    </main>
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