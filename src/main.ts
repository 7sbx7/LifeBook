import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/main.scss';
import './firebase/init.ts'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret, faLock } from '@fortawesome/free-solid-svg-icons'
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faLock)
library.add(faUser)
library.add(faEnvelope)


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
