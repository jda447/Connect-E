<template>
    <div id="app">
      <div class="text-center labels">
        <div v-for="(person, index) in info" :key="index">
        <label class="my-2">
            Name: {{ person.name }} </label><br>
        <label class="my-2">
            Position: {{ person.position }} </label><br>
        <label class="my-2">
            Hobbies: {{ person.hobbies }} </label>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'App',
    props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>