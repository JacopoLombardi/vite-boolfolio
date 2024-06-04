
<script>

   export default {
      props:{
         ProjectObj: Object
      },
      
      data(){
         return{

         }
      },

      methods:{

      },
   }
</script>






<template>
   <div>

      <p>{{ ProjectObj.id }} <router-link :to="{ name: 'projectDetail', params:{slug: ProjectObj.slug}}">{{ ProjectObj.title }}</router-link> </p>

   </div>
</template>







<style lang="scss" scoped>

a{
   text-decoration: none;
   color: black;
   &:hover{
      text-decoration: underline;
   }
}

</style>