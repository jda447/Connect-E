import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from '../views/SignIn.vue'
import LogIn from '../views/LogIn.vue'
import Profile from '../views/Profile.vue'
import EditProfile from '../views/EditProfile.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/log-in',
    name: 'log-in',
    component: LogIn
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/edit-profile',
    name: 'editprofile',
    component: EditProfile
  },
  {
    path: '/messages',
    name: 'messages',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Messages.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
