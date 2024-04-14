<template>
  <li class="list-item" @click="ShowContent(item)">
    <div class="list-box flex-jc">
      <div class="item-left flex">
        <div class="item-avt">
          <img :src="item.avt" alt="" />
        </div>
        <div class="item-box ml-15">
          <div class="item-name">
            {{ item.name }}
          </div>
          <div class="item-text">
            {{ item.content }}
          </div>
        </div>
      </div>
      <div  class="item-right">
        <div class="item-time">
          {{ item.time }}
        </div>
        <div class="box-icon flex">
          <div class="icon-delete"  @click.stop="ShowMessDelete(index)"></div>
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
    index:{
      type:Number,
      required:true
    },
    item: {
      type: Object,
      required: true
    },
    IsShowContent:{
      type:Boolean,
      default :false
    }
  },
  data() {
    return {
      IsShowMessDelete: false,
      IndexItem: null,
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
  ShowContent(item){
    const listType = this.getListType(item);
    const itemId = item.id;
    this.$router.push({ name: 'Content', params: { listType: listType, itemId: itemId } });
  },
  getListType(item) {
    if (this.$route.path.includes('/sent')) {
      return 'ListSent';
    } else if (this.$route.path.includes('/trash')) {
      return 'ListTrash';
    } else {
      return 'ListAll'; 
    }
  }
}
};
</script>
<style scoped>
@import url(./ListItem.css);
</style>
