<template>
  <div class="content-page flex">
    <div class="content-page-left">
      <div class="left-box flex-jc item-center">
        <font-awesome-icon
        :icon="['fas', 'arrow-left-long']"
        class="back-icon"
        @click="BackToHome"
      />
      <div class="list-name">{{this.listname}}</div>
      </div>
      <div class="content-list">
        <list-item
          :Iscollapse="true"
          v-for="(item, index) in TypeList"
          :key="index"
          :item="item"
          :index="index"
          maxWWidthText="300px"
          @click="SelectContent(item)"
          :IsSelected="item.id === this.ItemId"
        ></list-item>
      </div>
    </div>
    <div class="content-page-right">
      <div class="content-header flex-jc">
        <div class="content-header-left flex-jc">
          <div class="header-avt"><img :src="this.src" alt="" /></div>
          <div class="header-name flex item-center">{{ this.name }}</div>
        </div>
        <div class="header-time flex item-center">{{ this.time }}</div>
      </div>
      <div class="content-text">
        <div class="text-title">
          {{ this.title }}
        </div>
        <div class="text-content">{{ this.content }}
        </div>
      </div>
      <div class="content-footer flex">
          <font-awesome-icon :icon="['fas', 'paper-plane']" class="sent-icon" @click="RepInbox()"/>
        </div>
    </div>
    <the-rep-email ref="repemail" :IsShowChange="IsShowFormNewEmail" @close="handleClose" :title="this.title" :name="this.name"></the-rep-email>
  </div>
</template>

<script>
import ListItem from "../../components/ListItem/ListItem.vue";
import constants from "../../assets/js/constants";
import TheRepEmail from '../../components/repemail/TheRepEmail.vue';

export default {
  name: "SafeEmailTheContent",
  components: {
    ListItem,TheRepEmail
  },
  data() {
    return {
      IsShowContent: true,
      Const: constants,
      ItemId: null,
      src: "",
      content: "",
      title:"",
      name: "",
      time: "",
      listname:"",
      IsShowFormNewEmail: false,
    };
  },
  created() {
    this.TypeList = this.getListTypeFromRoute();
    this.ItemId = Number(this.$route.params.itemId);
    this.listName();
    this.initContent();
  },
  mounted() {
    
  },
  methods: {
    RepInbox(){
      this.IsShowFormNewEmail =true;
      this.$nextTick(() => {
        if (this.$refs.repemail.$refs.content) {
          this.$refs.repemail.$refs.content.onFocus();        
        }
      });
    },
    handleClose() {
    this.IsShowFormNewEmail = false;
    },
    listName(){
      if(this.$route.params.listType ==="all"){
        return this.listname= "All Inboxed";
      }
      if(this.$route.params.listType ==="sent"){
        return this.listname= "Sent";
      }
      if(this.$route.params.listType ==="trash"){
        return this.listname = "Trash";
      }
    },
    initContent() {
      const itemId = Number(this.$route.params.itemId);
      const item = this.TypeList.find((item) => item.id === itemId);
      if (item) {
        this.SelectContent(item);
      }
    },
    getListTypeFromRoute() {
      return this.Const[this.$route.params.listType];
    },
    SelectContent(item) {
      this.src = item.avt;
      this.time = item.time;
      this.name = item.name;
      this.content = item.content;
      this.title= item.title;
    },
    BackToHome() {
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>
<style scoped>
@import url(./contentCss.css);
</style>
