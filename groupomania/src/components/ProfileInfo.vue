<template>
  <div id="app">
    <ul v-if="employeeName && employeePosition && employeeHobbies" class="text-center">
      <li><label class="fw-bold">
        Name: </label> {{ employeeName }}</li><br>
      <li><label class="fw-bold">
        Position: </label> {{ employeePosition }}</li><br>
      <li><label class="fw-bold">
        Hobbies: </label> {{ employeeHobbies }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters(['employeeName', 'employeePosition', 'employeeHobbies'])
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
</style>