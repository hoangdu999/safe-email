<template>
  <div class="content-deleteall flex " >
    <div class="deleteall-text" @click="ShowMessDelete">Delete All</div>
    <m-pop-up-warn
    :isShow="IsShowMessDelete"
    @close-pop-up="IsShowMessDelete = false"
  >
    <template #content>
      <p class="warning__delete-content w-100">Confirm Deletion Of All Emails!</p>
    </template>
    <template #footer>
      <div class="warning__delete-btn flex">
        <div @click="IsShowMessDelete = false" class="mr-10">
          <ms-button typeBtn="close">No</ms-button>
        </div>
        <div @click="deleteStack" 
        >
          <ms-button @click="DeleteALlItem">Yes</ms-button>
        </div>
      </div>
    </template>
  </m-pop-up-warn>
  </div>
</template>

<script>
import MsButton from "../../components/button/MsButton.vue";
import MPopUpWarn from '../pop-up/MPopUpWarn.vue';
export default {
  name: 'TheDeleteBox',
  components:{
    MPopUpWarn,MsButton
  },
  data() {
    return {
      IsShowMessDelete: false,
    };
  },

  mounted() {
    
  },

  methods: {
    ShowMessDelete() {
      this.IsShowMessDelete = true;
  },
    DeleteAllItem(index){
  }
  },
};
</script>
<style scoped>
.content-deleteall{
  border-bottom: 1px solid black;
  height: var(--height-deleteall);
  justify-content: flex-end;
  margin-bottom:var(--margin-deleteall) ;
}
.deleteall-text{
  max-width: max-content;
  cursor: pointer !important
}
.warning__delete-btn{
  justify-content: end;
}
</style>