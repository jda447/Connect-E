import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state: {
      counter: 0
  },
  mutations: {
    increaseCounter(state) {
      state.counter++
    },
    decreaseCounter(state) {
      state.counter--
    }
  },
  actions: {
    increaseCounter (context) {
      context.commit('increaseCounter')
    },
    decreaseCounter (context) {
      context.commit('decreaseCounter')
    }
  }
})
