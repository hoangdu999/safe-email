<template>
  <div class="header flex jtf-between">
    <div class="header-left">
      <div class="header-name cl-white">SAFE EMAIL</div>
      <div class="header-title cl-white">Sent private email to everyone</div>
    </div>
    <div class="header-right flex jtf-between item-center">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-dots-vertical" v-bind="props"><img src="../../assets/img/header-avt.png" alt=""></v-btn>
          <div class="avt-infor ">
            <div class="avt-name cl-white">truong27</div>
            <div class="avt-address cl-white">hs1q8av7vh...</div>
          </div>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-title @click="Logout" class="cursor">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "ToDoAppTheHeader",
  component: {
  },
  data() {
    return {
      items: [
        { title: "Log Out" },
      ],
    };
  },

  mounted() {},

  methods: {
    Logout(){
      this.$router.push('/login-register');
    }
  },
};
</script>
<style scoped>
@import url(./theheader.css);
</style>
