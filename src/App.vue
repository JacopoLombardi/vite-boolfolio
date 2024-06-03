
<script>
  import Header from './components/partials/Header.vue'

  export default{
    components:{
      Header
    }

  }
</script>





<template>
  <div class="container mt-5">
    
    <!-- header -->
    <div>
      <Header />
      <router-view></router-view>
    </div>
    
  </div>
</template>





<style lang="scss" scoped>



</style>