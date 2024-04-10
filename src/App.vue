<template>
  <div>
    <the-header />
    <div class="container">
        <router-view />
    </div>
  </div>
</template>
<script>
import TheHeader from './components/header/TheHeader.vue';
export default{
  components:{
    TheHeader,
  },
  created(){
      // this.$state.setDefaultState();
  },
  data() {
    return {

    }
  },
  mounted(){
    
  },
  
  }
</script>
<style>
@import url(./assets/css/index.css);
</style>
