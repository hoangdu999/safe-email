<template>
  <div class="header flex jtf-between">
    <div class="header-left">
      <div class="header-name cl-white">SAFE EMAIL</div>
      <div class="header-title cl-white">Sent private email to everyone</div>
    </div>
    <div class="header-right flex jtf-between item-center"></div>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-dots-vertical" v-bind="props"><img src="../../assets/img/header-avt.png" alt=""></v-btn>
      </template>
      
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <!-- <the-logout></the-logout> -->
  </div>
</template>

<script>
import TheLogout from "../logout/TheLogout.vue";
export default {
  name: "ToDoAppTheHeader",
  component: {
    TheLogout,
  },
  data() {
    return {
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>
<style scoped>
@import url(./theheader.css);
</style>
