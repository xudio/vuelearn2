<template>
  <label
    class="el-radio"
    :class="[{ blue: checked }, { border: border }, { [sizeName]: border }, { disabled: disabled }]"
    :border="border"
    :size="size"
  >
    <span class="input-radio" :class="[{ 'radio-blue': checked }, { 'radio-disabled': disabled }]"></span>
    <input
      class="el-input"
      type="radio"
      :name="name"
      :label="label"
      :value="value"
      :disabled="disabled"
      @input="input"
    />
    {{ title }}
  </label>
</template>

<script>
export default {
  name: "Vradio",
  model: {
    prop: "value",
    event: "change"
  },
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
  data() {
    return {
      parent: this.$parent
    };
  },
  methods: {
    input: function() {
      this.$emit("change", this.label);
    }
  },
  computed: {
    checked: function() {
      if (this.label == this.value) {
        return true;
      }
      return false;
    },
    sizeName: function() {
      return this.parent.size || this.size;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.el-radio {
  position: relative;
  display: inline-block;
  font-size: $fontSize;
  color: $mainTextColor;
  cursor: pointer;
}

.el-input {
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
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
  margin-top: -3px;
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
  content: '';
  background: white;
  border-radius: 50%;
}

.border {
  border: 1px solid $mainBorderColor;
  border-radius: 4px;
  padding: 10px 15px 10px 5px;
}

.blue.border {
  border-color: $mainColor;
}

.small {
  padding: 8px 15px 8px 5px;
}

.mini {
  padding: 6px 13px 6px 3px;
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
