
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

      <p>- <router-link :to="{ name: 'projectDetail', params:{slug: ProjectObj.slug}}">{{ ProjectObj.title }}</router-link> </p>

   </div>
</template>







<style lang="scss" scoped>

a{
   text-decoration: none;
   color: rgb(23, 0, 154);
   font-weight: 600;
   font-size: 26px;
   &:hover{
      text-decoration: underline;
   }
}

</style>