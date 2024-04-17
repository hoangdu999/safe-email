<template>
  <li class="list-item" :key="index" @click="SelectItem(index)" :class="{ 'is-selected': IsSelected }">
    <div class="list-box flex-jc"   :key="index" @click="ShowContent(item,index)" 
    >
      <div class="item-left flex">
        <div class="item-avt">
          <img :src="item.avt" alt="" />
        </div>
        <div class="item-box ml-15">
          <div class="item-name">
            {{ item.name }}
          </div>
          <div class="item-text" :style="{maxWidth:maxWWidthText}">
            {{ item.title }}
          </div>
        </div>
      </div>
      <div v-if="!Iscollapse" class="item-right" >
        <div class="item-time">
          {{ item.time }}
        </div>
        <div class="box-icon flex" @click.stop="ShowMessDelete(index)">
          <font-awesome-icon :icon="['far', 'trash-can']"  class="delete-icon" />
        </div>
      </div>
    </div>
    <m-pop-up-warn
      :isShow="IsShowMessDelete"
      @close-pop-up="IsShowMessDelete = false"
    >
      <template #content>
        <p class="warning__delete-content w-100">Xác Nhận Xóa Email!</p>
      </template>
      <template #footer>
        <div class="warning__delete-btn flex">
          <div @click="IsShowMessDelete = false" class="mr-10">
            <ms-button typeBtn="close">Không</ms-button>
          </div>
          <div @click="deleteStack" 
          >
            <ms-button @click="DeleteItem(this.IndexItem)">Có</ms-button>
          </div>
        </div>
      </template>
    </m-pop-up-warn>
  </li>
</template>

<script>
import MsButton from "../../components/button/MsButton.vue";
import MPopUpWarn from '../pop-up/MPopUpWarn.vue';
export default {
  components: { MPopUpWarn,MsButton },
  name: "SafeEmailTheHome",
  props: {
    IsSelected:{
      type:Boolean,
      default :false,
    },
    index:{
      type:Number,
      required:true
    },
    item: {
      type: Object,
      required: true
    },
    Iscollapse:{
      type:Boolean,
      default :false
    },
    maxWWidthText:{
      type:String,
      default :"800px"
    }
  },
  data() {
    return {
      IsShowMessDelete: false,
      IndexItem: null,
      selectedItemIndex: null,
    };
  },

  mounted() {},
  methods: {
    ShowMessDelete(index) {
      this.IsShowMessDelete = true;
      this.IndexItem=index;
  },
  DeleteItem(index){

  },
  SelectItem(selectedIndex) {
    const items = this.$parent.$el.querySelectorAll('.list-item');
    items.forEach((item) => {
        item.classList.remove('is-selected');
    });
    items[selectedIndex].classList.add('is-selected');
  },
  ShowContent(item){
    const listType = this.getListType();
    const itemId = item.id;
    this.$router.push({ name: 'Content', params: { listType: listType, itemId: itemId } });
  },
  getListType() {
    if (this.$route.path.includes('/sent')) {
      return 'sent';
    } else if (this.$route.path.includes('/trash')) {
      return 'trash';
    } else {
      return 'all'; 
    }
  }
}
};
</script>
<style scoped>
@import url(./ListItem.css);
</style>
