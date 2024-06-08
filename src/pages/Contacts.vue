
<script>
   import axios from 'axios'
   import {store} from '../data/store'

   export default {
      name: 'Contacts',

      data(){
         return{
            name: '',
            email: '',
            message: '',

            errors:{
               name: '',
               email: '',
               message: ''
            },

            loading: false,
            sent: false
         }
      },
     
      methods:{
         sendMail(){
            this.loading = true
            const data = {
               name: this.name,
               email: this.email,
               message: this.message
            }

            axios.post(store.apiUrl + 'send-mail', data)
               .then(result => {
                  console.log(result.data)
                  this.loading = false
                  this.sent = result.data.success
                  if(!result.data.success){
                     this.errors = result.data.errors
                  }else{
                     this.errors = {
                        name: '',
                        email: '',
                        message: ''
                     }
                  }
               })
               .catch(error => {
                  console.log(error.message)
                  this.loading = false
               })
         }
      }
   }
</script>






<template>
   <div class="container text text-center mt-5">
      <h1>Contacts</h1>
   </div>

   <div v-if="loading">
      <p>Loading...</p>
   </div>

   <div v-else class="mt-5">
      <form v-if="!sent" @submit.prevent="sendMail()" class="w-50">
         <div class="mb-3">
            <label class="form-label fw-semibold">Nome</label>
            <input v-model="name" type="text" name="name" id="name" class="form-control">
            <p class="error">{{ errors.name.toString() }}</p>
         </div>      
         <div class="mb-3">
            <label class="form-label fw-semibold">Email</label>
            <input v-model="email" type="text" name="email" id="email" class="form-control">
            <p class="error">{{ errors.email.toString() }}</p>
         </div>
         <div class="mb-3">
            <label class="form-label fw-semibold">Message</label>
            <textarea v-model="message" name="message" id="message" class="form-control" rows="3"></textarea>
            <p class="error">{{ errors.message.toString() }}</p>
         </div>
         <button class="btn btn-primary border-dark" type="submit">Invia</button>
      </form>

      <div v-else class="text-center mt-5">
         <h3 class="text-white">Email inviata correttamente</h3>
      </div>
   </div>

</template>







<style lang="scss" scoped>

.error{
   font-weight: 800;
   font-size: 17px;
   color: rgb(186, 14, 14);
}

</style>