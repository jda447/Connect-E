import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket} from "@fortawesome/free-solid-svg-icons";

library.add(faPencil);
library.add(faUserLarge);
library.add(faMessage);
library.add(faRightFromBracket);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from './router'

createApp(App).use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
