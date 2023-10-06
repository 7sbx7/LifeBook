import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app'


import './assets/scss/main.scss';

const firebaseConfig = {
  apiKey: "AIzaSyCtbOqPDBUW_vC876ik7nidfep6_QQju3k",
  authDomain: "lifebook-e7048.firebaseapp.com",
  projectId: "lifebook-e7048",
  storageBucket: "lifebook-e7048.appspot.com",
  messagingSenderId: "448920297724",
  appId: "1:448920297724:web:4f314929a22c6bbd0f3779"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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
