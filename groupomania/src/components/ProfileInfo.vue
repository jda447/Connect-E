<template>
<div id="app">
  <div v-if="employeeName && employeePosition && employeeHobbies" class="list text-center">
    <div class="card col-7 col-xs-10 mx-auto px-3">
      <img src="" class="card-img-top" alt="">
        <div class="card-body">
          <li class="card-title fw-bold fs-4 mt-2 mb-3"> {{ employeeName }} </li>
          <li><label class="fw-bold">
            Position </label><br>{{ employeePosition }}</li><br>
          <li class="mb-3"><label class="fw-bold">
            Hobbies </label><br> {{ employeeHobbies }}</li>
        </div>
      </div>
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
.card {
  background-color: #fafafa;
}

.list {
  list-style: none;
}

.card-body {
  padding: 0;
}
</style>