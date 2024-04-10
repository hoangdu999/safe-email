<template>
  <div>
    <the-header />
    <div class="content">
        <div class="menu">
          <the-menu v-if="shouldHideSidebar"></the-menu>
        </div>
        <div class="content-container">
          <router-view />
        </div>
    </div>
  </div>
</template>
<script>
import TheHeader from './components/header/TheHeader.vue';
import TheMenu from './components/menu/TheMenu.vue';
export default{
  components:{
    TheHeader,
    TheMenu,
  },
  created(){
  },
  data() {
    return {

    }
  },
  mounted(){
    
  },
  computed:{
    shouldHideSidebar() {
      const loginRoutes = ['/','/sent','/trash']; 
      return loginRoutes.includes(this.$route.path);
    },
  }
  }
</script>
<style>
@import url(./assets/css/index.css);
.content{
  padding: 50px 100px;
}
</style>
