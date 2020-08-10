<template>
  <li
    class="el-option"
    :class="[{'active': isActive}, {'disabled': isDisabled}]"
    @click="changeOption"
  >
    <span>{{label}}</span>
    <i v-if="multiple && isActive" class="icon-selected"></i>
  </li>
</template>
<script>
export default {
  name: "Voption",
  props: {
    value: {}, //本身的值
    textValue: {}, //选中的文本值和对应的值
    label: {}, //本身的文本值
    disabled: {}, //禁用的条目数组
    multiple: {}, //是否多选
  },
  data() {
    return {
      realValue: this.textValue,
    };
  },
  methods: {
    changeOption: function () {
      if (!this.isDisabled) {
         //多选
        if (this.multiple) {
          if (this.realValue[this.value]) {
            delete this.realValue[this.value];
          } else {
            this.realValue[this.value] = this.label;
          }
        } else { //单选
          this.realValue = {};
          this.realValue[this.value] = this.label;
        }
        //传值给Toselect
        this.$emit("changeData", Object.keys(this.realValue));
        //传值给select
        this.$emit("closeDown", false);
      }
    },
  },
  computed: {
    isActive: function () {
      let _this = this,
        flag = false;
      
      if (this.textValue[_this.value]) {
        flag = true;
      }

      return flag;
    },
    isDisabled: function() {
      if (this.disabled.includes(this.value)) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style scoped lang='stylus'>
.el-option {
  display: inline-block;
  font-size: 14px;
  width: 100%;
  height: 34px;
  padding: 0 20px;
  margin: 0;
  background: #fff;
  color: #606266;
  line-height: 34px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
}

.el-option:hover {
  background: #f5f7fa;
}

.el-option.disabled {
  cursor: not-allowed;
  color: #c0c4cc;
}

.icon-selected {
  display: inline-block;
  float: right;
  margin-top: 10px;
}

.active {
  color: $mainColor;
}
</style>