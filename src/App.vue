
<script>

</script>





<template>
  <div>
    <h1>My Portfolio</h1>

    <header>
      <nav>
        <router-link :to="{name: 'home'}">Home</router-link>
        <router-link :to="{name: 'about'}">About</router-link>
        <router-link :to="{name: 'contacts'}">Contacts</router-link>
      </nav>
    </header>

    <router-view></router-view>
    
  </div>
</template>





<style lang="scss" scoped>



</style>





<!-- <script>
  import axios from 'axios'
  import{store} from './data/store.js'

  import ProjectCard from './components/ProjectCard.vue'

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
</script> -->