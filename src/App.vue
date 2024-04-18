<template>
  <div>
    <div v-if="!LoginRegister">
      <the-header />
      <div class="content flex">
          <div class="menu"  v-if="shouldHideSidebar">
            <the-menu></the-menu>
          </div>
          <div class="content-container w-100">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
      </div>
    </div>
    <div v-else>
      <router-view />
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
    LoginRegister(){
      const loginRoutes = ['/login-register']; 
      return loginRoutes.includes(this.$route.path);
    }
  }
  }
</script>
<style>
@import url(./assets/css/index.css);
.content{
  padding: var(--paddingtop-content) 100px;
}
.menu{
  flex-basis: 25%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
