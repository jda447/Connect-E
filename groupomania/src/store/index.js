import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state: {
      name: '',
      position: null,
      hobbies: ''
  },
  mutations: {
    ADD_NAME(state) {
      state.name = this.name
    }
  },
  actions: {

  },
  getters: {
    employeeDetails: state => {
        return `${state.name}-${state.position}-${state.hobbies}`
    }
  }
})
