<template>
  <div class="content-page flex">
    <div class="content-page-left">
      <font-awesome-icon
        :icon="['fas', 'arrow-left-long']"
        class="back-icon"
        @click="BackToHome"
      />
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
      <div class="content-header">
        <div class="content-header-left">
          <div class="header-avt"><img :src="this.src" alt="" /></div>
          <div class="header-name">{{ this.name }}</div>
        </div>
        <div class="header-time">{{ this.time }}</div>
      </div>
      <div class="content-text">{{ this.content }}</div>
    </div>
  </div>
</template>

<script>
import ListItem from "../../components/ListItem/ListItem.vue";
import constants from "../../assets/js/constants";

export default {
  name: "SafeEmailTheContent",
  components: {
    ListItem,
  },
  data() {
    return {
      IsShowContent: true,
      Const: constants,
      ItemId: null,
      src: "",
      content: "",
      name: "",
      time: "",
    };
  },
  created() {
    this.TypeList = this.getListTypeFromRoute();
    this.ItemId = Number(this.$route.params.itemId);
    this.initContent();
  },
  mounted() {
    
  },

  methods: {
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
      this.src = item.src;
      this.time = item.time;
      this.name = item.name;
      this.content = item.content;
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
