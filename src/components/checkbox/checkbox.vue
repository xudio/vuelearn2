<template>
  <label
    class="el-checkbox"
    type="checkbox"
    :class="[
      { disabled: isDisabled },
      { border: border },
      { [sizeName]: border },
      { checked: isChecked },
      { indeterminate: indeterminate },
    ]"
  >
    <span class="input-checkbox"></span>
    <input
      class="el-input"
      type="checkbox"
      :value="value"
      :name="name"
      :disabled="isDisabled"
      :label="label"
      :checked="isChecked"
      :trueLabel="trueLabel"
      :falseLabel="falseLabel"
      @change="change"
    />
    {{ label }}
  </label>
</template>
<script>
export default {
  name: "Vcheckbox",
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    title: {},
    value: {},
    label: {},
    trueLabel: {},
    falseLabel: {},
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
      default: "mini"
    },
    name: {
      type: String,
      default: "checkbox"
    },
    checked: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
        parent: this.$parent
    };
  },
  methods: {
    change: function() {
      if (this.groupValue) {
        let value = this.parent.value;
        if (value.includes(this.label)) {
          var pos = value.indexOf(this.label);
          value.splice(pos, 1);
        } else {
          value.push(this.label);
        }
        this.$emit("change", value);
      } else {
        this.$emit("change", !this.value);
      }
    }
  },
  computed: {
    isDisabled: function() {
        if (this.disabled || (this.groupValue && this.parent.disabled)) {
            return true;
        }
        if (this.groupValue) {
          let value = this.parent.value;
          let min = this.parent.min;
          let max = this.parent.max;

          if (value.length <= min && this.isChecked) {
            return true;
          } else if (value.length >= max && !this.isChecked) {
            return true;
          }
        }
        
        return false;
    },
    isChecked: function() {
        if (this.value || (this.groupValue && this.parent.value.includes(this.label))) {
            return true;
        }
        return false;
    },
    groupValue: function() {
      if (this.parent.value) {
        return true;
      }
      return false;
    },
    sizeName: function() {
      return (this.groupValue && this.parent.size) || this.size;
    }
  }
};
</script>
<style scoped lang="stylus">
.el-checkbox {
  position: relative;
  display: inline-block;
  margin-left: 20px;
  font-size: $fontSize;
  color: $mainTextColor;
  cursor: pointer;
}

.el-input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.input-checkbox {
  position: relative;
  display: inline-block;
  width: 14px;
  height: 14px;
  background: $mainBackgroundColor;
  border: 1px solid $mainBorderColor;
  border-radius: 2px;
  vertical-align: middle;
  margin-top: -2px;
  margin-left: 10px;
  margin-right: 10px;
}

.input-checkbox:hover {
  border-color: $mainColor;
}

.el-checkbox.border {
  padding: 9px 20px 9px 0;
  border-radius: 4px;
  border: 1px solid $mainBorderColor;
}

.checked {
  color: $mainColor;
}

.checked .input-checkbox {
  background: $mainColor;
  border-color: $mainColor;
}

.checked .input-checkbox::after {
  position: absolute;
  left: 5px;
  top: 2px;
  height: 7px;
  width: 3px;
  content: '';
  border: 1px solid $mainBackgroundColor;
  border-left: 0;
  border-top: 0;
  transform: rotate(45deg) scaleY(1);
}

.border.checked {
  border-color: $mainColor;
}

.indeterminate .input-checkbox {
  background: $mainColor;
  border-color: $mainColor;
}

.indeterminate .input-checkbox::after {
  position: absolute;
  left: 4px;
  right: 0;
  width: 6px;
  height: 1px;
  top: 6px;
  content: '';
  background: $mainBackgroundColor;
}

.small.el-checkbox {
  padding: 7px 20px 7px 0;
}

.mini.el-checkbox {
  padding: 5px 15px 5px 0;
  font-size: 12px;
}

.mini .input-checkbox {
  width: 12px;
  height: 12px;
}

.mini .input-checkbox::after {
  top: 1px;
  left: 4px;
}

.disabled {
  color: $disabledColor;
  cursor: not-allowed;
}

.disabled.border {
  border-color: $disabledBorderColor;
}

.disabled .input-checkbox {
  background: #f5f7fa;
  border: 1px solid #e4e7ed;
}

.disabled .input-checkbox::after {
  border-color: $disabledColor;
}
</style>
