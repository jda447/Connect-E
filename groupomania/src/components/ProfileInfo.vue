<template>
    <div id="app">
      <div class="text-center labels">
        <div v-for="(person, index) in info" :key="index"><label class="my-2">
            Name: <span class="userFont"> {{ person.name }} </span></label>
        </div>
        <div v-for="(person, index) in info" :key="index"><label class="my-2">
            Position: <span class="userFont"> {{ person.position }} </span></label>
        </div>
        <div v-for="(person, index) in info" :key="index"><label class="my-2">
            Hobbies: <span class="userFont"> {{ person.hobbies }} </span></label>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'App',
    props: {
    info: {
      type: Array,
      required: true
    }
  }
}
</script>