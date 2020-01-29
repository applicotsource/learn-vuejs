export const state = () => ({
  scheduleList: [], // Array<{ id: Number, day: Number, text: String }>
})

export const getters = {
  getScheduleListByDay: (state) => (day) => {
    return state.scheduleList.filter(schedule => schedule.day === day)
  },
}

export const mutations = {
  add (state, { day, text }) {
    state.scheduleList.push({
      id: state.scheduleList.length + 1,
      day,
      text,
    })
  },
}
