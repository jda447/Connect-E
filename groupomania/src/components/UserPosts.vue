<template>
  <div>
    <p>{{ body }}</p>
      <!-- <div class="float-end"> -->
      <input type="checkbox" id="seen" value="seen" v-model="checkedIfSeen">
      <label for="seen">Seen</label>
      <!-- </div> -->
  </div>
</template>

<script>
export default {
  props: {
    body: String
  },
  data() {
    return {
      checked: false
    }
  }
}
</script>