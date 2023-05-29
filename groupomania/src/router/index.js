import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import Messages from '../views/Messages.vue'
import Profile from '../views/Profile.vue'
import EditProfile from '../views/EditProfile.vue'
import SingleUser from '../views/SingleUser.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/editprofile',
    name: 'editprofile',
    component: EditProfile
  },
  {
    path: '/singleuser',
    name: 'singleuser',
    component: SingleUser
  },
  {
    path: '/messages',
    name: 'messages',
    component: Messages
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
