export const state = () => ({
  scheduleList: [], // Array<{ id: Number, day: Number, text: String }>
  lastScheduleId: 0,
})

export const getters = {
  getScheduleListByDay: (state) => (day) => {
    return state.scheduleList.filter(schedule => schedule.day === day)
  },
}

export const mutations = {
  addSchedule (state, { day, text }) {
    state.scheduleList.push({
      id: ++state.lastScheduleId,
      day,
      text,
    })
  },
}
