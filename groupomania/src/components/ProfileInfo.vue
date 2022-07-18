<template>
    <div id="app">
      <div class="text-center labels">
        <div v-for="(review, index) in reviews" :key="index"><label class="my-2">
            Name: <span class="userFont"> {{ review.name }} </span></label></div>
        <div v-for="(review, index) in reviews" :key="index"><label class="my-2">
            Position: <span class="userFont"> {{ review.review }} </span></label></div>
        <div v-for="(review, index) in reviews" :key="index"><label class="my-2">
            Hobbies: <span class="userFont"> {{ review.rating }} </span></label></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'App',
    props: {
    reviews: {
      type: Array,
      required: true
    }
  }
}
</script>