<template>
  <div v-if="isShow" class="m-pup-up-main">
    <div class="m-pop-up" :style="{ padding: padding, width: width , backgroundColor:backgroundColor}">
      <header class="m-pop-up__header">
        <div class="pop-up__title-default">{{titleName}}</div>
      </header>
      <main class="m-pop-up__main w-100 flex">
        <div class="warning__delete-icon">
          <font-awesome-icon :icon="['fas', 'triangle-exclamation']" />
        </div>
        <div class="warning__delete-content flex w-100">
          <div class="warning__delete-content-text">
            <slot name="content"/>
          </div>
        </div>
      </main>
      <footer class="m-pop-up__footer">
        <slot name="footer"></slot>
      </footer>
      <div
        v-if="isIconClose"
        class="m-pop-up-close"
        :class="iconCloseClass"
        :data-tip-icon="dataTipIcon"
        @click.stop="closePopUp"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MPopUpWarn",
  emits: ["close-pop-up"],
  data() {
    return {};
  },
  props: {
    isShow: Boolean,
    isIconClose: {
      type: Boolean,
      default: true,
    },
    backgroundColor:{
      type:String,
    },
    padding: {
      type: String,
      default: "24px",
    },
    width: {
        type: String,
        default: "444px",
    },
    isHeader: Boolean,
    iconCloseClass: {
      type: String,
      default: "icon-close",
    },
    titleName: {
        type: String,
        default: "Warning",
    },
  
    dataTipIcon: String,

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
