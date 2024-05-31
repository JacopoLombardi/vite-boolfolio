
<script>
import axios from 'axios'
import{store} from './data/store.js'

  export default {
    data(){
      return{
        
      }
    },


    methods:{
      getApi(){
        axios.get(store.apiUrl)
        .then(result =>{
          console.log(result.data)
          // this.projects = result.data;
        })
        .catch(error =>{
          console.log(error.message)
        })
      }
    },


    mounted(){
      this.getApi();
    }
  }
</script>





<template>
  <div class="container_">

    <h1>My Portfolio</h1>

  </div>
</template>





<style lang="scss" scoped>



</style>