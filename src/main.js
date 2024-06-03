import './assets/scss/main.scss'

import {router} from './router.js'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')
