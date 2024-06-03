
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
        loading: true,
      }
    },


    methods:{
      getApi(){
        axios.get(store.apiUrl)
        .then(result =>{
          console.log(result.data)
          this.loading = false
          this.projects = result.data
        })
        .catch(error =>{
          console.log(error.message)
          this.loading = false
         })
      }
    },


    mounted(){
      this.getApi();
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
            <label class="fw-semibold fs-4 mb-2">Project</label>
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
            <div class="badge_type text-center">
               <label class="fw-semibold fs-4 mb-2">Type</label>
               <div>
                  <span class="badge text-bg-primary mx-2">aaa</span>
                  <span class="badge text-bg-primary mx-2">aaa</span>
                  <span class="badge text-bg-primary mx-2">aaa</span>
                  <span class="badge text-bg-primary mx-2">aaa</span>
                  <span class="badge text-bg-primary mx-2">aaa</span>
               </div>
            </div>

            <!-- Technology -->
            <div class="badge_type text-center">
               <label class="fw-semibold fs-4 mb-2">Technology</label>
               <div>
                  <span class="badge text-bg-primary mx-2">bbbb</span>
                  <span class="badge text-bg-primary mx-2">bbbb</span>
                  <span class="badge text-bg-primary mx-2">bbbb</span>
                  <span class="badge text-bg-primary mx-2">bbbb</span>
               </div>
            </div>

         </div>

      </div>
   </div>
 </template>







<style lang="scss" scoped>

</style>