<template>
  <div class="el-select">
    <div class="con-header" @mouseenter="mouseenter" @mouseleave="mouseleave" @click="openDown">
      <div class="el-select-tags" v-if="multiple" ref="height">
        <span class="el-tags" v-for="(value, key) in textValue" :key="key">
          <span class="tags-item">{{ value }}</span>
          <i class="icon-cancel-circle" :value="key" @click="cancel"></i>
        </span>
      </div>
      <div class="el-input">
        <input
          class="input"
          readonly
          :class="[{'disabled': disabled}, {'border-blue': isDown}]"
          :value="multiple ? '' : textValue[value]"
          :disabled="disabled"
          ref="focusState"
          :style="inputStyle"
        />
        <span v-if="isClearable" class="icon-suffix-common icon-cancel-circle" @click="clearData"></span>
        <span v-else class="icon-suffix-common icon-up" :class="[{'reverse': isDown}]"></span>
      </div>
    </div>
    <div v-if="isDown">
      <VoptionGroup
        :data="data"
        :textValue="textValue"
        :disabled="disabledArr"
        :multiple="multiple"
        v-bind="$attrs"
        v-on="$listeners"
        @closeDown="closeDown"
      ></VoptionGroup>
    </div>
  </div>
</template>
<script>
import VoptionGroup from "./optionGroup";
export default {
  name: "Vselect",
  data() {
    return {
      isDown: false, //是否打开下拉框
      isHover: false, //是否hover输入框
      inputStyle: {
        //input 的高度
        height: "",
      },
      disabledArr: [], //禁用的条目数组
    };
  },
  props: {
    data: {},
    value: {},
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    textValue: function () {
      //选中的值 拼接成对象
      let _this = this,
        obj = {};

      this.data.forEach((item) => {
        _this.value.forEach((tip) => {
          if (tip === item.value) {
            obj[item.value] = item.label;
          }
        });
        item.disabled && this.disabledArr.push(item.value);
      });

      return obj;
    },
    isClearable: function () {
      //是否显示清除
      if (
        !this.multiple &&
        this.clearable &&
        this.isHover &&
        Object.keys(this.textValue).length > 0
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    //监听头部div点击事件
    openDown: function () {
      this.isDown = !this.isDown;
      this.visibleChange();
    },
    //监听option点击事件
    closeDown: function (val) {
      if (!this.multiple) {
        // 如果不是多选，则关闭下拉框
        this.isDown = val;
        this.visibleChange();
      }
      //输入框聚焦
      this.$refs.focusState.focus();
    },
    //监听头部div鼠标移进事件
    mouseenter: function () {
      this.isHover = true;
    },
    //监听头部div鼠标移出事件
    mouseleave: function () {
      this.isHover = false;
    },
    //清除输入框数据
    clearData: function (e) {
      this.$emit("changeData", []);
      e.stopPropagation();
    },
    //取消选择 
    cancel: function (event) {
      let cancelData = event.target.attributes["value"].value ;
      delete this.textValue[cancelData];
      this.$emit("changeData", Object.keys(this.textValue));
      event.stopPropagation();
    },
    //下拉框改变
    visibleChange: function() {
        this.$emit('visibleChange', this.isDown);
    }
  },
  components: {
    VoptionGroup,
  },
  mounted: function () {  
    //
    let _this = this;
    document.addEventListener("click", (e) => {
      if (!_this.$el.contains(e.target)) {
        _this.isDown = false;
        _this.visibleChange();
      }
    });
  },
  updated: function () {
    //设置input高度
    this.inputStyle.height = this.$refs.height.offsetHeight + "px";
  }
};
</script>

<style scoped lang="stylus">
.el-select {
  width: 240px;
}

.con-header {
  position: relative;
  min-height: 42px;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
}

.con-header:after {
  dispslay: block;
  content: '';
  clear: both;
}

.el-select-tags {
  position: relative;
  width: 210px;
  z-index: 10;
}

.el-tags {
  position: relative;
  display: inline-block;
  height: 24px;
  font-size: 12px;
  line-height: 24px;
  color: #909399;
  margin: 8px 0 8px 6px;
  border: 1px solid #e9e9eb;
  border-radius: 4px;
  box-sizing: border-box;
  background: #f4f4f5;
}

.tags-item {
    display: inline-block;
    padding: 0 25px 0 5px;
}

.el-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.input {
  width: 100%;
  appearance: button;
  min-height: 42px;
  box-sizing: border-box;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  padding: 0 30px 0 15px;
  color: transparent;
  text-shadow: 0 0 0 #606266;
}

.input:focus {
  border-color: $mainColor;
}

.input.disabled {
  background: #f5f7fa;
  cursor: not-allowed;
}

.con-header:hover {
  border-color: #c0c4cc;
}

.icon-suffix-common {
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 100%;
  color: $disabledColor;
  cursor: pointer;
  text-align: center;
  transition: transform 0.3s;
}

.icon-suffix-common:before {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.el-tags .icon-cancel-circle {
  position: absolute;
  top: 5px;
  right: 5px;
  background: #c0c4cc;
  color: #909399;
  border-radius: 50%;
}

.el-tags .icon-cancel-circle:hover {
  background: #909399;
  color: #fff;
}

.icon-up.reverse {
  transform: rotate(180deg);
}

.input.border-blue {
  border-color: $mainColor;
}
</style>