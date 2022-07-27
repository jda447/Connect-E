<template>
  <div id="app">
    <div class="text-center">
      <label class="my-2">
        Name: </label> {{ employeeName }}<br>
      <label class="my-2">
        Position: </label> {{ employeePosition }}<br>
      <label class="my-2">
        Hobbies: </label> {{ employeeHobbies }}
    </div>
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

</style>