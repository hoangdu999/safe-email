<template>
  <div class="repeamil">
    <m-pop-up
      :isShow="IsShowChange"
      @close-pop-up="closePopup"
      Widthpopup="var(--width-popup)"
      padding="0px 24px"
      borderRadiuspopup="40px"
      HeightHeader="80px"
      backgroundColorheader="linear-gradient(to right, #e2e2e2, #99adf0)"
      fontSizeHeader="150%"
      colorHeader="black"
    >
    <template #header>Sent Email</template>
    <form class="form-content">
      <ms-input v-model="nameInput" ref="addressee" placeholder="To" borderinput="none" borderBottominput="1px solid #b4b5b9"></ms-input>
      <ms-input v-model="titleInput" name="titleInput" placeholder="Title" borderinput="none" borderBottominput="1px solid #b4b5b9"></ms-input>
      <m-textarea ref="content" heighttext="300px" bodertextarea="none"></m-textarea>
    </form>
    <template #footer>
      <div class="icon-box flex">
          <font-awesome-icon :icon="['fas', 'paper-plane']" class="sent-icon"/>
      </div>
    </template>
  </m-pop-up>
  </div>
  
</template>

<script>
import MsInput from '../../components/input/Input.vue';
import MPopUp from '../pop-up/MPopUp.vue';
import MTextarea from '../textarea/MTextarea.vue';
export default {
  name: 'TheRepEmail',
  components:{
    MPopUp,
    MsInput,
    MTextarea,
  },
  props:{
    IsShowChange:{
      type:Boolean,
    },
    title: String,
    name: String,
  },
  emits: ['close'],
  data() {
    return {
      titleInput: this.title,
      nameInput:this.name,
    };
  },
  watch: {  
    title(newVal) {
      this.titleInput = newVal;  
    },
    name(newVal) {
      this.nameInput = newVal; 
    }
  },
  mounted() {
    
  },

  methods: {
    closePopup() {
    this.$emit('close');
  }
  },
};
</script>
<style scoped>
.icon-box{
  justify-content: end;
  padding: 0px 20px 20px 20px;
}
.form-content{
  padding-top: 20px;
}

</style>