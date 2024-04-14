<template>
  <div class="content">
    <div class="content-list">
      <list-item v-for="(item,index) in TypeList" :key="index" :item="item" :index="index"></list-item>
      <img :src="avatarImage" alt="Header Avatar">
    </div>
  </div>
</template>

<script>
import ListItem from '../../components/ListItem/ListItem.vue';
import constants from '../../assets/js/constants';
import avatarImage from '@src/assets/img/header-avt.png';

export default {
  name: 'SafeEmailTheContent',
  components: { 
    ListItem,
  },
  data() {
    return {
      IsShowContent:true,
      Const:constants,
    };
  },
  created() {
    this.TypeList = this.getListTypeFromRoute();  
  },
  mounted() {
    
  },

  methods: {
    getListTypeFromRoute() {
    return this.Const[this.$route.params.listType];
  },
  },
};
</script>