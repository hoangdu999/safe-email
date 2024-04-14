<template>
  <div class="sent">
    <the-delete-box></the-delete-box>
    <div class="content-list">
      <list-item v-for="(item,index) in Constant.ListSent" :key="index" :item="item" :index="index"></list-item>
    </div>
  </div>
</template>
<script>
import TheDeleteBox from '../../components/deleteallbox/TheDeleteBox.vue';
import constants from '../../assets/js/constants';
import ListItem from '../../components/ListItem/ListItem.vue';
export default {
  components: { ListItem ,TheDeleteBox},
  name: 'SafeEmailTheSent',

  data() {
    return {
      Constant: constants
    };
  },

  mounted() {
    
  },

  methods: {
    DeleteAll() {
    },
  },
};
</script>
<style scoped>
@import url(./TheSentcss.css);
</style>