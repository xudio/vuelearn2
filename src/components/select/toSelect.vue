<template>
  <Vselect
    v-model="value"
    @changeData="changeData"
    @visibleChange="visibleChange"
    :data="items"
    :clearable="true"
    :multiple="true"
  ></Vselect>
</template>
<script>
import Vselect from "./select";
export default {
  name: "Toselect",
  data() {
    return {
      items: [
        { label: "黄金糕", value: "1" },
        { label: "双皮奶", value: "2", disabled: true },
        { label: "龙须面", value: "3" },
        { label: "北京烤鸭", value: "4" },
      ],
      value: ["1"],
    };
  },
  methods: {
    changeData: function (val) {
      //值改变函数
      this.value = val;
    },
    visibleChange: function (val) {
      //下拉框改变函数
      console.log(val);
    },
  },
  components: {
    Vselect,
  },
};
</script>