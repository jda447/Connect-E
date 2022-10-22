<template>
<div id="app">
  <div v-if="staffFirstName && staffPosition && staffLastName" class="list text-center">
    <div class="card col-7 col-xs-10 mx-auto px-3">
      <img src="" class="card-img-top" alt="">
        <div class="card-body">
          <li class="card-title fw-bold fs-4 mt-2 mb-3"> {{ staffFirstName + ' ' + staffLastName }} </li>
          <div class="mb-3">
          <li><label class="fw-bold">
            Position </label><br>{{ staffPosition }}</li>
          </div>
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
    ...mapGetters(['staffFirstName', 'staffPosition', 'staffLastName'])
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