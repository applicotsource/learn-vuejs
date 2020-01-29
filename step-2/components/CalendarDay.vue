<template>
  <div class="calendar-day">
    {{ day }}
    <input type="text" v-model="text">
    <button @click="addSchedule({ day, text })">追加</button>
    <ul>
      <li v-for="schedule in scheduleList" :key="schedule.id">{{ schedule.text }}</li>
    </ul>
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
import { mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      text: '',
    }
  },
  props: {
    day: 0,
  },
  computed: {
    ...mapGetters({
      getScheduleListByDay: 'schedule/getScheduleListByDay',
    }),
    scheduleList() {
      return this.getScheduleListByDay(this.day)
    }
  },
  methods: {
    ...mapMutations({
      addSchedule: 'schedule/add'
    }),
  }
}
</script>
