<template>
  <div class="calendar">
    <calendar-day v-for="day in dayList" :key="day" :day="day" />
  </div>
</template>

<script>
import CalendarDay from '~/components/CalendarDay'
export default {
  components: {
    CalendarDay,
  },
  data() {
    return {
      dayList: [...Array(31).keys()].map(i => ++i) // [1, 2, 3, 4,....,60]
    }
  }
}
</script>

<style scoped>
.calendar {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
