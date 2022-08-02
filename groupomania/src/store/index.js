import { createStore } from 'vuex'

export default createStore({
  state: {
      name: '',
      position: null,
      hobbies: '',
      posts: [],
      counter: 0
  },
  mutations: {
    ADD_NAME(state, name) {
      state.name = name
    },
    ADD_POSITION(state, position) {
      state.position = position
    },
    ADD_HOBBIES(state, hobbies) {
      state.hobbies = hobbies
    },
    ADD_POST(state, post) {
      state.posts = [{content: post, done: false}, ...state.posts];
    },
    REMOVE_POST(state, post) {
      state.posts.splice(state.posts.indexOf(post), 1);
    },
    INCREASE_COUNTER(state) {
      state.counter++
    },
  },
  actions: {
    ADD_NAME(context) {
      context.commit = ('ADD_NAME')
    },
    ADD_POSITION(context) {
      context.commit= ('ADD_POSITION')
    },
    ADD_HOBBIES(context) {
      context.commit = ('ADD_HOBBIES')
    },
    INCREASE_COUNTER(context) {
      context.commit('INCREASE_COUNTER')
    },
  },
  getters: {
    employeeName: state => {
      return `${state.name}`
    },
    employeePosition: state => {
      return `${state.position}`
    },
    employeeHobbies: state => {
      return `${state.hobbies}`
    }
  }
})
