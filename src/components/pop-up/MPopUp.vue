<template>
  <div v-if="isShow" class="m-pup-up-main"  >
    <div class="m-pop-up" :style="{borderRadius:borderRadiuspopup }">
      <header class="m-pop-up__header-popup" :style="{borderRadius:borderRadiuspopup ,backgroundColor:backgroundColorheader,height: HeightHeader,color:colorHeader,fontSize:fontSizeHeader}">
        <slot name="header"></slot>
      </header>
      <main class="m-pop-up__main" :style="{padding: padding, minWidth: minWidth,width:Widthpopup, height: Heightpopup}">
        <slot />
      </main>
      <footer class="m-pop-up__footer">
        <slot name="footer"></slot>
      </footer>
      <div
        v-if="isIconClose"
        class="m-pop-up-close"
        :class="iconCloseClass"
        :data-tip-icon="dataTipIcon"
        @click="closePopUp"
      ></div>
    </div>
  </div>
  
</template>
<script>
export default {
  name: "MPopUp",
  emits:["close-pop-up"],
  data() {
    return {};
  },
  props: {
    isShow: Boolean,
    isIconClose: {
      type: Boolean,
      default: true,
    },
    fontSizeHeader:{
      type:String,
      default:'100%'
    },
    colorHeader:{
      type:String,
    },
    backgroundColor:{
      type:String,
    },
    HeightHeader:{
      type: String,
      default: "20px",
    },
    backgroundColorheader:{
      type:String,
    },
    borderRadiuspopup:{
      type: String,
      default: "10px",
    },
    Widthpopup:{
      type: String,

    },
    Heightpopup:{
      type: String,
    },
    padding: {
      type: String,
      default: "24px",
    },
    minWidth: String,
    isHeader: Boolean,
    iconCloseClass:{
      type : String,
      default : 'icon-close'
    },
    dataTipIcon: String
  },
  methods: {
    /**
     * Đóng popup
     */
    closePopUp() {
      this.$emit("close-pop-up");
    },
  },
};
</script>
<style scoped>
@import url(./pop-up.css);
</style>
