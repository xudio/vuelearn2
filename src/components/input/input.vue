<template>
  <div 
    :class="[{'el-input': !isTextarea}, {'el-textarea': isTextarea}]"
    @mouseenter="enter" 
    @mouseleave="leave"
  >
    <!-- textarea 文本域 -->
    <textarea 
      v-if="isTextarea" 
      :showWordLimit="showWordLimit"
      :value="value"
      class="textarea" 
      :disabled="disabled"
      :maxlength="maxlength"
      :minlength="minlength"
      :rows="autosize" 
      cols="50" 
      :autofocus="autofocus"
      @input="input"
    >
    </textarea>
    <!-- input 输入框 -->
    <input
      v-else
      class="input"
      :class="[{'focus': isFocus}, {'disabled': disabled}, {'padding-left-25': paddingLeft25}, {'padding-right-25': paddingRight25}, {'padding-right-50': paddingRight50}]"
      :value="value"
      :type="isType"
      :showWordLimit="showWordLimit"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :minlength="minlength"
      :disabled="disabled"
      :clearable="clearable"
      @focus="focus"
      @blur="blur"
      @input="input"
    />
    <!-- 清除图标 -->
    <span 
      v-if="isClearable" 
      :class="[{'right-25': suffixIcon}]"
      class="icon-cancel-circle icon-suffix-common" 
      @click="clear"
    ></span>
    <!-- 眼睛图标 -->
    <span
      v-if="isShowPassword"
      class="icon-eye icon-suffix-common"
      :class="[{'right-25': right25}]"
      @click="changeEyeType"
    ></span>
    <!-- 前缀图标 -->
    <span
      v-if="prefixIcon"
      class="icon-prefix-common"
      :class="[prefixIcon]"
    ></span>
    <!-- 后缀图标 -->
    <span
      v-if="suffixIcon"
      class="icon-suffix-common"
      :class="[suffixIcon]"
    ></span>
    <!-- 字数限制 -->
    <span
      v-if="showWordLimit"
      class="showWordLimit">
      {{ valueLength }}/{{maxlength}}
    </span>
  </div>
</template>
<script>
export default {
  name: "Vinput",
  data() {
    return {
      isFocus: false,
      mouseenter: true,
      isType: this.type
    };
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
    isTextarea: function() {
      if (this.type === 'textarea') {
        return true;
      } 
      return false;
    },
    isClearable: function() {
      if (this.clearable) {
        if (this.value != "") {
          if (this.isFocus || this.mouseenter) {
            return true;
          }
        }
      }
      return false;
    },
    isShowPassword: function() {
      if (this.showPassword) {
        if (this.value != '') {
          return true;
        }
      }
      return false;
    },
    right25: function() {
      if (this.suffixIcon || this.clearable) {
        return true;
      }
      return false;
    },
    paddingLeft25: function() {
      if (this.prefixIcon) {
        return true;
      }
      return false;
    },
    paddingRight25: function() {
      if (this.suffixIcon) {
        return true;
      }
      return false;
    },
    paddingRight50: function() {
      if ((this.suffixIcon && this.showPassword) || (this.clearable && this.suffixIcon) || (this.clearable && this.showPassword)) {
        return true;
      }
      return false;
    },
    valueLength: function() {
      return this.value.length;
    }
  },
  methods: {
    input: function() {
      this.$emit("input", event.target.value);
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
    },
    clear: function() {
      this.$emit("input", "");
      this.isFocus = true;
    },
    changeEyeType: function() {
      this.isType = this.isType === 'text' ? 'password' : 'text';
      this.isFocus = true;
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

.el-textarea {
  position: relative;
  width: 400px;
  font-size: 14px;
}

.textarea {
  display: inline-block;
  padding: 5px 15px;
  color: $mainTextColor;
  background: #fff;
  outline: none;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid $mainBorderColor;
  cursor: pointer;
}

.textarea:focus {
  border-color: $mainColor;
}

.input {
  width: 100%;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  color: #606266;
  box-sizing: border-box;
  height: 40px;
  cursor: pointer;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
}

.input.disabled {
  background: #f5f7fa;
  cursor: not-allowed;
}

.input.focus {
  border-color: $mainColor;
}

.icon-suffix-common {
  position: absolute;
  width: 25px;
  height: 40px;
  right: 0;
  color: $disabledColor;
  cursor: pointer;
  text-align: center;
  line-height: 40px;
}
.icon-prefix-common {
  position: absolute;
  width: 25px;
  height: 40px;
  left : 0;
  color: $disabledColor;
  cursor: pointer;
  text-align: center;
  line-height: 40px;
}
.showWordLimit {
  position: absolute;
  height: 40px;
  right: 3px;
  bottom: 0px;
  color: $disabledColor;
  cursor: pointer;
  text-align: center;
  line-height: 40px;
}

.right-25 {
  right: 25px;
}
.padding-left-25 {
  padding-left: 25px;
}
.padding-right-25 {
  padding-right: 25px;
}
.padding-right-50 {
  padding-right: 50px;
}
</style>