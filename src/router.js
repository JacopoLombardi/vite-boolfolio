import {createRouter, createWebHistory} from 'vue-router'

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
      }
   ]
})