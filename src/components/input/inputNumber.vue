<template>
  <div class="el-input-number">
    <!-- 左右加减 减 -->
    <span
      v-if="isSide"
      @mouseenter="enter"
      @mouseleave="leave"
      class="number-common decrease"
      :class="[{'blue': mouseenter}, {'disabled': deDisabled}]"
      @click="deClick"
    >-</span>
    <input
      class="input"
      :class="[{ 'padding-50': isSide }, { 'padding-15-50': isRight }, { 'padding-50-15': isLeft }, {'border-blue': mouseenter}, {'disabled': disabled}]"
      @blur="blur"
      :value="value"
    />
    <!-- 左右加减 加 -->
    <span
      v-if="isSide"
      @mouseenter="enter"
      @mouseleave="leave"
      class="number-common increase"
      :class="[{'blue': mouseenter}, {'disabled': inDisabled}]"
      @click="inClick"
    >+</span>
    <!-- 上下加减 -->
    <div v-if="!isSide" class="number-common" :class="[[controlsPosition]]">
      <span
        class="side-increase"
        @mouseenter="enter"
        @mouseleave="leave"
        :class="[{'blue': mouseenter}, {'disabled': inDisabled}]"
        @click="inClick"
      >+</span>
      <span
        class="side-decrease"
        @mouseenter="enter"
        @mouseleave="leave"
        :class="[{'blue': mouseenter}, {'disabled': deDisabled}]"
        @click="deClick"
      >-</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "VinputNumber",
  model: {
    prop: "value",
    event: "change"
  },
  data() {
    return {
      mouseenter: false
    };
  },
  props: {
    value: {
      default: 0
    },
    min: {
      type: Number
    },
    max: {
      type: Number
    },
    step: {
      type: Number,
      default: 1
    },
    stepStrictly: {
      type: Boolean,
      default: false
    },
    precision: {
      type: Number,
      default: 0
    },
    size: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    controls: {
      type: Boolean,
      default: false
    },
    controlsPosition: {
      type: String
    },
    name: {
      type: String
    },
    label: {
      type: String
    },
    placeholder: {
      type: String
    }
  },
  computed: {
    // 加减在两边
    isSide: function() { 
      return this.controlsPosition === "side";
    },
    // 加减在左边
    isLeft: function() {
      return this.controlsPosition === "left";
    },
    // 加减在右边
    isRight: function() {
      return this.controlsPosition === "right";
    },
    // 减禁用
    deDisabled: function() {
      return this.value <= this.min || this.disabled;
    },
    //加禁用
    inDisabled: function() {
      return this.value >= this.max || this.disabled;
    }
  },
  methods: {
    enter: function() {
      this.mouseenter = true;
    },
    leave: function() {
      this.mouseenter = false;
    },
    blur: function(event) {
      //失焦后发送数据
      let value = this.financial(event.target.value);
      //event.target.value = value;
      this.$emit("change", value);
    },
    deClick: function() {
      let targetData = this.value - this.step;
      this.$emit("change", this.financial(targetData));
    },
    inClick: function() {
      let targetData = this.value + this.step;
      this.$emit("change", this.financial(targetData));
    },
    financial: function(data) {
      let value = parseFloat(data);
      //如果非数字 为空
      if (isNaN(value)) {
        return "";
      }
      //大于最大值 返回最大值
      if (value > this.max) {
        return this.max.toFixed(this.precision) * 1;
      }
      //小于最小值 返回最小值
      if (value < this.min) {
        return this.min.toFixed(this.precision) * 1;
      }
      // step-strictly 步数的倍数
      if (this.stepStrictly) {
        let remainder = value % this.step;
        value = value + this.step - remainder;
        return value.toFixed(this.precision) * 1;
      }
      return value.toFixed(this.precision) * 1;
    }
  }
};
</script>
<style scoped lang="stylus">
.el-input-number {
  position: relative;
  width: 180px;
  height: 40px;
  font-size: 14px;
  color: $mainTextColor;
  box-sizing: border-box;
  cursor: pointer;
}

.number-common {
  position: absolute;
  top: 0;
  width: 40px;
  height: 38px;
  font-size: 20px;
  margin-top: 1px;
  text-align: center;
  background: #f5f7fa;
}

.decrease {
  left: 1px;
  line-height: 35px;
  border-right: 1px solid $mainBorderColor;
  box-sizing: border-box;
  border-radius: 0 0 4px 4px;
}

.increase {
  right: 1px;
  line-height: 38px;
  border-left: 1px solid $mainBorderColor;
  box-sizing: border-box;
  border-radius: 4px 4px 0 0;
}

.input {
  width: 100%;
  outline: none;
  line-height: 38px;
  padding: 0;
  margin: 0;
  text-align: center;
  border-radius: 4px;
  border: 1px solid $mainBorderColor;
  box-sizing: border-box;
}

.input:focus {
  border: 1px solid $mainColor;
}

.padding-50 {
  padding: 0 50px;
}

.padding-15-50 {
  padding-left: 15px;
  padding-right: 50px;
}

.padding-50-15 {
  padding-left: 50px;
  padding-right: 15px;
}

.left {
  left: 1px;
  border-right: 1px solid $mainBorderColor;
}

.right {
  right: 1px;
  border-left: 1px solid $mainBorderColor;
}

.side-increase {
  display: block;
  line-height: 19px;
  border-bottom: 1px solid $mainBorderColor;
  border-radius: 4px 0 0 0;
}

.side-decrease {
  display: block;
  line-height: 16px;
  border-radius: 0 4px 0 0;
}

.border-blue {
  border: 1px solid $mainColor;
}

.blue {
  color: $mainColor;
}

.disabled {
  color: #c0c4cc;
  background: #f5f7fa;
  cursor: not-allowed;
}
</style>
