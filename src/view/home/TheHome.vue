<template>
  <div class="home">
    <the-delete-box></the-delete-box>
      <div class="content-list hidden-scrollbar">
      <list-item v-for="(item,index) in Const.all" :key="index" :item="item" :index="index"></list-item>
    </div>
  </div>
</template>
<script>
import constants from '../../assets/js/constants';
import TheDeleteBox from '../../components/deleteallbox/TheDeleteBox.vue';
import ListItem from '../../components/ListItem/ListItem.vue';
export default {
  components: { ListItem, TheDeleteBox },
  name: 'SafeEmailTheHome',

  data() {
    return {
      Const:constants,
    };
  },

  mounted() {
    
  },

  methods: {
    DeleteAll() {

  },
}
};
</script>
<style scoped>
@import url(./thehomecss.css);
</style>