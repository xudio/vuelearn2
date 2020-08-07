<template>
  <div>
    <div class="arrow"></div>
    <ul class="el-option-group">
      <Voption
        v-for="item in data"
        :key="item.value"
        :value="item.value"
        :label="item.label"
        :textValue="textValue"
        :disabled="disabled"
        :multiple="multiple"
        v-bind="$attrs"
        v-on="$listeners"
      ></Voption>
    </ul>
  </div>
</template>
<script>
import Voption from "./option";
export default {
  name: "VoptionGroup",
  props: {
    data: {}, //下拉框选项
    textValue: {}, //选中的文本值
    multiple: {}, //是否多选
    disabled: {}, //禁用的条目数组
  },
  components: {
    Voption,
  },
};
</script>
<style lang="stylus">
.el-option-group {
  width: 240px;
  margin: 12px 0 5px;
  padding: 6px 0;
  font-size: 0;
  box-sizing: border-box;
  border: 1px solid #e4e7ed;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.arrow {
  position: absolute;
  border-top: 0;
}
</style>