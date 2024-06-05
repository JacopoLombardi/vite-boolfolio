
<script>
   import axios from 'axios'
   import {store} from '../data/store'

   export default {
      name: 'Contacts',

      data(){
         return{
            name: 'jacopo',
            email: 'jacopo@gmail.com',
            message: 'lorem ipsummmmmmm'
         }
      },
     
      methods:{
         sendMail(){
            const data = {
               name: this.name,
               email: this.email,
               message: this.message
            }

            axios.post(store.apiUrl + 'send-mail', data)
               .then(result => {
                  console.log(result.data)
               })
               .catch(error => {
                  console.log(error.message)
               })
         }
      }
   }
</script>






<template>
   <div class="container text text-center mt-5">
      <h1>Contacts</h1>
   </div>

   <form @submit.prevent="sendMail()">
      <div class="mb-3">
         <label class="form-label">Nome</label>
         <input v-model="name" type="text" name="name" id="name" class="form-control">
         <p class="error"></p>
      </div>      
      <div class="mb-3">
         <label class="form-label">Email</label>
         <input v-model="email" type="text" name="email" id="email" class="form-control">
         <p class="error"></p>
      </div>
      <div class="mb-3">
         <label class="form-label">Message</label>
         <textarea v-model="message" name="message" id="message" class="form-control" rows="3"></textarea>
         <p class="error"></p>
      </div>
      <button class="btn btn-primary border-dark" type="submit">Invia</button>
   </form>

</template>







<style lang="scss" scoped>

</style>