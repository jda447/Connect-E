import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state: {
      name: '',
      position: null,
      hobbies: ''
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    employeeDetails (state) {
      return `${state.name}`
    }
  }
})
