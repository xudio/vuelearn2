<template>
  <label class="el-radio-button">
      <span class="button-span" :class="[{'disabled':isDisabled}, {'checked': checked}, [parent.size]]"
      :style="checked ? activeStyle : null">
        {{ label }}
      </span>
      <input class="el-input"
      type="radio"
      :name="name"
      :disabled="isDisabled"
      @input="input">
  </label>
</template>

<script>
export default {
  name: "VradioButton",
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    label: {

    },
    name: {
      type: String,
      default: 'radio'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
      return {
          parent: this.$parent
      }
  },
  methods: {
    input: function() {
      this.$parent.$emit('change', this.label);
    }
  },
  computed: {
      checked: function() {
          if (this.label == this.parent.value) {
              return true;
          }
          return false;
      },
      isDisabled: function() {
          if (this.disabled || this.parent.disabled) {
               return true;
          }
          return false;
      },
      activeStyle: function() {
        return {
          backgroundColor: this.parent.fill,
          color: this.parent.textColor,
          borderColor: this.parent.fill
        }
      }
  }
};
</script>

<style scoped lang="stylus">
.el-radio-button {
  position: relative;
}
.el-input {
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
}
.button-span {
  display: inline-block;
  font-size: $fontSize;
  padding: 12px 20px;
  background: $mainBackgroundColor;
  color: $mainTextColor;
  border: 1px solid $mainBorderColor;
  cursor: pointer;
  border-left: 0;
}
.button-span:hover {
  color: $mainColor;
}
.small {
  padding: 10px 20px;
}
.mini {
  padding: 9px 15px;
}
.checked {
    color: $mainBackgroundColor;
    background: $mainColor;
    border-color: $mainColor;
}
.disabled {
  color: $disabledColor;
  cursor: not-allowed;
  background-color: $mainBackgroundColor;
  border-color: $disabledBorderColor;
}
.disabled:hover {
  color: $disabledColor;
}
.disabled.checked {
  background-color: #f2f6fc;
  color: $disabledColor;
  border-color: $disabledBorderColor;
}

</style>