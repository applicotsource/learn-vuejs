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
      dayList: []
    }
  },
  created() {
    for (let i = 1; i <= 31; i++) {
      this.dayList.push(i)
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
