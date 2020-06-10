<template>
  <label class="el-radio">
      <span class="input-radio" class=""></span>
      <input class="el-input" type="radio" :name="name" :label="label" :value="value" />
      {{ title }}
  </label>
</template>

<script>

export default {
  name: "Vradio",
  props: {
    title: {
      type: String,
      default: "备选项"
    },
    name: {
      type: String,
      default: "radio"
    },
    label: {},
    value: {},
    disabled: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "middle"
    }
  },
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.el-radio {
  position: relative;
  display: inline-block;
  margin-left: 20px;
  font-size: $fontSize;
  color: $mainTextColor;
  cursor: pointer;
}
.el-input {
  outline: none;
  -webkit-appearance: none;
}
.input-radio {
  position: relative;
  display: inline-block;
  width: 14px;
  height: 14px;
  background: $mainBackgroundColor;
  border: 1px solid $mainBorderColor;
  border-radius: 50%;
  vertical-align: middle;
  margin-top: -2px;
  margin-left: 10px;
}
.input-radio:hover {
  border: 1px solid $mainColor;
}
.blue {
  color: $mainColor;
}
.radio-blue {
  position: relative;
  display: inline-block;
  background: $mainColor;
  border: 1px solid $mainColor;
  border-radius: 50%;
}
.radio-blue::after {
  position: absolute;
  width: 4px;
  height: 4px;
  top: 5px;
  left: 5px;
  content: "";
  background: white;
  border-radius: 50%;
}
.border {
  border: 1px solid $mainBorderColor;
  border-radius: 4px;
}
.blue.border {
  border-color: $mainColor;
}
.medium {
  width: 105px;
  height: 40px;
  line-height: 42px;
}
.small {
  width: 105px;
  height: 35px;
  line-height: 37px;
}
.mini {
  width: 90px;
  height: 30px;
  line-height: 32px;
  font-size: 12px;
}
.mini .input-radio {
  width: 12px;
  height: 12px;
}
.mini .radio-blue::after {
  top: 4px;
  left: 4px;
}
.disabled {
  color: $disabledColor;
  cursor: not-allowed;
}
.disabled.border {
  border: 1px solid $disabledBorderColor;
}
.radio-disabled {
  background: #f5f7fa;
  border: 1px solid #e4e7ed;
}
.radio-disabled:hover {
  border: 1px solid #e4e7ed;
}
.radio-disabled.radio-blue::after {
  background: $disabledColor;
}
</style>
