<template>
  <div class="trash">
    <the-delete-box></the-delete-box>
    <div class="content-list">
      <list-item v-for="(item,index) in Const.ListTrash" :key="index" :item="item" :index="index"></list-item>
    </div>
  </div>
</template>
<script>
import ListItem from '../../components/ListItem/ListItem.vue';
import constants from '../../assets/js/constants';
import TheDeleteBox from '../../components/deleteallbox/TheDeleteBox.vue';
export default {
  components: { ListItem ,TheDeleteBox},
  name: 'SafeEmailTheSent',

  data() {
    return {
      Const : constants
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
@import url(./TheTrashcss.css);
</style>