
<script>
   import axios from 'axios'
   import {store} from '../data/store'

   export default {
      name: 'ProjectDetail',
      data(){
         return{
            project: [],
            loading: true
         }
      },

      methods:{
         getApi(){
            const slug = this.$route.params.slug
            axios.get(store.apiUrl + 'get-project-by-slug/' + slug)
               .then(result => {
                  this.loading = false
                  console.log(result.data)
                  this.project = result.data
               })
               .catch(error => {
                  this.loading = false
                  console.log(error.message)
               })
         }
      },

      computed:{
         type(){
            if(!this.project.type){
               return 'nessun Type.'
            }
            return this.project.type.name
         },

         technology(){
            if(!this.project.technologies){
               return 'nessuna Technology.'
            }
            return this.project.technologies.map(technology => technology.name).join(' - ')
         }

      },

      mounted(){
         this.getApi()
      }
   }
</script>






<template>

   <!-- Loader -->
   <div
     v-if="loading" 
   >
      Loading...
   </div>

   <!-- Project -->
   <div
     v-else
   >
      <div class="container text text-center my-5">
         <h1>{{ project.title }}</h1>
      </div>

      <div>
         <h2><a :href="`${project.link}`" target="_blank">visualizza il sito web</a></h2>
         <label class="fw-semibold  fs-4 mt-5">decrizione:</label>
         <p class="fs-5 w-50">{{ project.description }}</p>

         <div class="badge_box mt-5">
            <label class="fw-semibold  fs-4 me-3">Techonologies:</label>
            <span class="badge text-bg-success fs-6">{{ technology }}</span>
         </div>
            
         <div class="badge_box">
            <label class="fw-semibold  fs-4 me-3">Type:</label>
            <span class="badge text-bg-warning fs-6">{{ type }}</span>
         </div>

      </div>
   </div>
</template>







<style lang="scss" scoped>

h1{
   font-size: 60px;
}

</style>