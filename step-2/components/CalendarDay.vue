<template>
  <div class="calendar-day">
    {{ day }}
  </div>
</template>

<style scoped>
.calendar-day {
  border: solid 1px black;
  width: 150px;
  height: 150px;
}
</style>

<script>
export default {
  props: {
    day: 0,
  }
}
</script>
