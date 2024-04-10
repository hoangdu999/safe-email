<template>
  <div class="home-menu">
    <div class="menu-box bd-radius15">
      <div class="menu-boxtop text-center">
        <div class="menu-boxtop-sentmail">
          <ms-button backgroundColor="var(--bgr-header)" border="none" class="white bd-radius20px mb-30" width="180px" height="25px" fontSizeButton="150%">Sent Email</ms-button>
        </div>
      </div>
      <router-link :to="`${item.path}`" class="menu-list" v-for="(item,index) in ListMenuItem" :key="index">
        <li class="list-item flex mb-25" :class="itemActive == index ? 'active' : ''"  :key="index" @click="activeItem(index)">
          <div :class="itemActive == index ? 'circle' : ''" ></div>
          <div class="menu-text">
            {{item.text}}
          </div>
          <div class="menu-text">
            {{ index === 0 ? `(${sum})` : '' }}
          </div>
          </li>
      </router-link>
    </div>
  </div>
</template>

<script>
import constants from '../../assets/js/constants.js';
import MsButton from '../../components/button/MsButton.vue';
export default {
  name: 'TheMenu',
  components:{MsButton},
  data() {
    return {
      itemActive: 0,
      ListMenuItem :constants.Menu,
      sum: 10
    };
  },

  mounted() {
    
  },

  methods: {
    activeItem(index) {
      this.itemActive = index;
    },
  },
};
</script>
<style>
@import url(./MenuCss.css);
</style>