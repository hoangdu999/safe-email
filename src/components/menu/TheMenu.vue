<template>
  <div class="home-menu">
    <div class="menu-box bd-radius15">
      <div class="menu-boxtop text-center">
        <div class="menu-boxtop-sentmail">
          <ms-button
            backgroundColor="var(--bgr-header)"
            border="none"
            class="white bd-radius20px mb-30"
            width="180px"
            height="25px"
            fontSizeButton="150%"
            color="white"
            @click="ShowFormNewEmailMethos()"
            >Sent Email</ms-button
          >
        </div>
      </div>
      <router-link
        :to="`${item.path}`"
        class="menu-list"
        v-for="(item, index) in ListMenuItem"
        :key="index"
      >
        <li
          class="list-item flex mb-25"
          :class="{'active': itemActive === item.path}"
          :key="index"
          @click="activeItem(item.path)"
        >
          <div  :class="{'circle': itemActive === item.path}"></div>
          <div class="menu-text">
            {{ item.text }}
          </div>
          <div class="menu-text">
            {{ index === 0 ? `(${sum})` : "" }}
          </div>
        </li>
      </router-link>
    </div>
    <the-rep-email ref="newemail" :IsShowChange="IsShowFormNewEmail" @close="handleClose"></the-rep-email>
  </div>
</template>

<script>
import constants from "../../assets/js/constants.js";
import MsButton from "../../components/button/MsButton.vue";
import MsInput from "../../components/input/Input.vue";
import TheRepEmail from '../../components/repemail/TheRepEmail.vue';

import MPopUp from "../pop-up/MPopUp.vue";
import MTextarea from "../textarea/MTextarea.vue";
export default {
  name: "TheMenu",
  components: {
    MsButton,
    MPopUp,
    MsInput,
    MTextarea,
    TheRepEmail,
  },
  data() {
    return {
      ListMenuItem: constants.Menu,
      IsShowFormNewEmail: false,
      ListAll: constants.all,
      itemActive: '',
    };
  },
  created() {
    this.activeItem(this.$route.path);
  },
  mounted() {
    this.sum = this.ListAll.length;
  },
  watch:{
    filteredList() {
      return this.ListMenuItem.filter(item => {
        return this.$route.path.includes(item.path);
      });
    }
  },
  methods: {
    activeItem(path) {
      this.itemActive = path;
    },
    ShowFormNewEmailMethos() {
      this.IsShowFormNewEmail =true;
      this.$nextTick(() => {
        if (this.$refs.newemail.$refs.addressee) {
          this.$refs.newemail.$refs.addressee.onFocus();        
        }
      });
    },
    handleClose() {
    this.IsShowFormNewEmail = false;
  }
  },
  computed: {
    sum() {
      return this.ListAll.length;
    },
  },
};
</script>
<style scoped>
@import url(./MenuCss.css);
</style>
