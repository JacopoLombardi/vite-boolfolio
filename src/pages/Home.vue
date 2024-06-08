
<script>
   import axios from 'axios'
   import{store} from '../data/store.js'

   import ProjectCard from '../components/ProjectCard.vue'

   export default {
      components:{
         ProjectCard
      },

      data(){
         return{
            projects: [],
            types: [],
            technologies: [],
            loading: true,
         }
      },


    methods:{
      getApi(apiUrl, type = ''){
         axios.get(apiUrl + type)
            .then(result =>{

               // switch oppure if else
               switch (type){
                  case 'types':
                     console.log(result.data)
                     this.types = result.data
                     break
                  case 'technologies':
                     console.log(result.data)
                     this.technologies = result.data
                     break
                  default:
                     console.log(result.data)
                     this.loading = false
                     this.projects = result.data
               }
         })

         .catch(error =>{
            console.log(error.message)
            this.loading = false
         })
      }
    },


   mounted(){
      this.getApi(store.apiUrl, 'projects');
      this.getApi(store.apiUrl, 'types');
      this.getApi(store.apiUrl, 'technologies');
   }
  }
</script>






<template>
   <div class="d-flex flex-column align-items-center mt-5">
      <h1>Home</h1>
 
 
      <!-- loading -->
      <div
         v-if="(loading)"
      >
         <p class="fs-1 fw-semibold mt-5">Loading....</p>
      </div>
     
      <div 
        v-else
        class="d-flex"
      >

      <!-- project -->
         <div 
            class="mt-5 me-7"
         >
            <label class="fw-bold text-uppercase fs-4 mb-2">Projects</label>
            <ul class="list-unstyled">
               <li class="fs-5">
      
                  <ProjectCard
                     v-for="project in projects"
                     :key="project.id"
         
                     :ProjectObj="project"
                  />
      
               </li>
            </ul>
         </div>

         <div>
            <!-- Type -->
            <div class="badge_box text-center mt-5">
               <label class="fw-bold text-uppercase fs-4 mb-2">Type</label>
               <div>

                  <span 
                    v-for="type in types"
                    :key="type.id"
                    class="badge text-bg-primary mx-2"
                  >
                     {{ type.name }}
                  </span>
                  
               </div>
            </div>

            <!-- Technology -->
            <div class="badge_box text-center">
               <label class="fw-bold text-uppercase fs-4 mb-2">Technology</label>
               <div>
                  <span 
                    v-for="technology in technologies"
                    :key="technology.id"
                    class="badge text-bg-primary mx-2"
                  >
                     {{ technology.name }}
                  </span>
               </div>
            </div>

         </div>

      </div>
   </div>
 </template>







<style lang="scss" scoped>


.badge_box{
   max-width: 300px;
   aspect-ratio: 1;
   .badge{
      font-size: 15px;
      margin-top: 10px;
   }
}


</style>