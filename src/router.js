import {createRouter, createWebHistory} from 'vue-router'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contacts from './pages/Contacts.vue'
import ProjectDetail from './pages/ProjectDetail.vue'

const router= createRouter({
   history: createWebHistory(),
   routes:[
      {
         path: '/',
         name: 'home',
         component: Home
      },
      {
         path: '/about',
         name: 'about',
         component: About
      },
      {
         path: '/contacts',
         name: 'contacts',
         component: Contacts
      },
      {
         path: '/project-detail/:slug',
         name: 'projectDetail',
         component: ProjectDetail
      }
   ]
})

export {router} 