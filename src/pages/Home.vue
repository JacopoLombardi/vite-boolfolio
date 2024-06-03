
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
     
 
     <!-- project -->
     <div 
       v-else
       class="mt-5"
     >
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
     
   </div>
 </template>







<style lang="scss" scoped>

</style>