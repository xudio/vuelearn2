<template>
  <div>
    <VradioGroup v-model="radioGroup1" @change="handleRadioButtonChecked">
      <VradioButton label="上海"></VradioButton>
      <VradioButton label="北京"></VradioButton>
      <VradioButton label="广州"></VradioButton>
      <VradioButton label="深圳"></VradioButton>
    </VradioGroup>
  </div>
</template>

<script>
import VradioGroup from './radioGroup'
import VradioButton from "./radioButton";
export default {
  name: "ToradioButton",
  data() {
    return {
        radioGroup1: "北京"
    };
  },
  methods: {
    handleRadioButtonChecked: function(val) {
      console.log(val);
    }
  },
  components: {
    VradioButton,
    VradioGroup
  }
};
</script>
<style scoped lang="stylus">
.el-radio-group .el-radio-button:first-child .button-span {
  border-radius: 4px 0 0 4px;
  border-left: 1px solid $mainBorderColor;
}

.el-radio-group .el-radio-button:last-child .button-span {
  border-radius: 0 4px 4px 0;
}
</style>