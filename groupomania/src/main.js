import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencil, faUserLarge, faMessage, faRightFromBracket, faArrowLeft, faPaperPlane, faEye, faGear, faImage, faThumbsUp, faXmark } from '@fortawesome/free-solid-svg-icons'

library.add(faPencil, faUserLarge, faMessage, faRightFromBracket, faArrowLeft, faPaperPlane, faEye, faGear, faImage, faThumbsUp, faXmark)

createApp(App).use(router).use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
