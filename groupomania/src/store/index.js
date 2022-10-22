import { createStore } from 'vuex'

export default createStore({
  state: {
    firstName: '',
    lastName: '',
    position: null,
    posts: [],
    counter: 0
  },
  mutations: {
    ADD_FIRSTNAME (state, firstName) {
      state.firstName = firstName
    },
    ADD_POSITION (state, position) {
      state.position = position
    },
    ADD_LASTNAME (state, lastName) {
      state.lastName = lastName
    },
    ADD_POST (state, post) {
      state.posts = [{ content: post }, ...state.posts]
    },
    REMOVE_POST (state, post) {
      state.posts.splice(state.posts.indexOf(post), 1)
    },
    INCREASE_COUNTER (state) {
      state.counter++
    }
  },
  actions: {
    ADD_FIRSTNAME (context) {
      context.commit = ('ADD_FIRSTNAME')
    },
    ADD_POSITION (context) {
      context.commit = ('ADD_POSITION')
    },
    ADD_LASTNAME (context) {
      context.commit = ('ADD_LASTNAME')
    },
    INCREASE_COUNTER (context) {
      context.commit('INCREASE_COUNTER')
    }
  },
  getters: {
    staffFirstName: state => {
      return `${state.firstName}`
    },
    staffPosition: state => {
      return `${state.position}`
    },
    staffLastName: state => {
      return `${state.lastName}`
    }
  }
})
