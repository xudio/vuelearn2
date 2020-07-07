<template>
  <div class="el-input">
      <input class="input"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :clearable="clearable"
      @focus="focus"
      @blur="blur"
      @mouseenter="enter"
      @mouseleave="leave"
      @input="input">
      <!-- 清除图标 -->
      <span v-if="isClearable" class="icon-cancel-circle icon-common"></span>
      <!-- 眼睛图标 -->
      <span></span>
  </div>
</template>
<script>
export default {
  name: "Vinput",
  data() {
    return {
      isFocus: false,
      mouseenter: true,
    }
  },
  props: {
    value: {},
    type: {
      type: String,
      default: "text"
    },
    maxlength: {
      type: Number
    },
    minlength: {
      type: Number
    },
    showWordLimit: {
      type: Boolean
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    prefixIcon: {
      type: String
    },
    suffixIcon: {
      type: String
    },
    rows: {
      type: Number
    },
    autosize: {},
    autocomplete: {
      type: String
    },
    name: {
      type: String
    },
    readonly: {
      type: Boolean
    },
    max: {},
    min: {},
    step: {},
    resize: {
      type: String
    },
    autofocus: {
      type: Boolean
    },
    form: {
      type: String
    },
    label: {
      type: String
    },
    tabindex: {
      type: String
    },
    validateEvent: {
      type: Boolean
    }
  },
  computed: {
    isClearable: function() {
      if (this.value != '' ) { 
        if (this.isFocus || this.mouseenter) {
          return true;
        }
      }
      return false;
    }
  },
  methods: {
    input: function() {
      this.$emit('input', event.target.value);
    },
    focus: function() {
      this.isFocus = true;
    },
    blur: function() {
      this.isFocus = false;
    },
    enter: function() {
      this.mouseenter = true;
    },
    leave: function() {
      this.mouseenter = false;
    }
  }
};
</script>
<style scoped lang="stylus">
.el-input {
  position: relative;
  width: 180px;
  font-size: 14px;
}
.input {
  width: 100%;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  color: #606266;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
}
.input.disabled {
  background: #f5f7fa;
  cursor: not-allowed;
}
.icon-common {
  position: absolute;
  width: 25px;
  height:40px;
  right: 0;
  color: $disabledColor;
  cursor: pointer;
  text-align: center;
  line-height: 40px;
}
</style>