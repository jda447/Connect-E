<template>
<div id="app">
  <div v-if="staffFirstName && staffPosition && staffLastName" class="list text-center">
    <div class="card col-6 col-xs-10 mx-auto px-3">
      <img src="" class="card-img-top" alt="">
      <div class="card-body">
        <li class="card-title">
          <label class="mt-3">
            Name 
          </label>
          <div class="fw-bold">
            {{ staffFirstName + ' ' + staffLastName }} 
          </div>
        </li>
        <div class="mb-3 mt-3">
        <li><label class="">
          Position </label>
          <div class="fw-bold">
            {{ staffPosition }}
          </div>
        </li>
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