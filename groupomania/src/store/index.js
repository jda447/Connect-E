import { createStore } from 'vuex'

export default createStore({
  state: {
      posts: [],
      name: '',
      position: null,
      hobbies: ''
  },
  mutations: {
    ADD_POST (state, post) {
      state.posts = [{content: post, done: false}, ...state.posts];
    },
    REMOVE_POST (state, post) {
      state.posts.splice(state.posts.indexOf(post), 1);
    },
    ADD_NAME (state, name) {
      state.name = name
    },
    ADD_POSITION (state, position) {
      state.position = position
    },
    ADD_HOBBIES (state, hobbies) {
      state.hobbies = hobbies
    }
  },
  actions: {

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
