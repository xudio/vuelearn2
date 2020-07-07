<template>
  <div
    class="group-checkbox"
    type="checkbox"
    :value="value"
    :size="size"
    :disabled="disabled"
    :min="min"
    :max="max"
    :textColor="textColor"
    :fill="fill"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "VcheckboxGroup",
  props: {
    value: {},
    size: {
      type: String,
      default: "small"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 3
    },
    textColor: {
      type: String,
      default: "white"
    },
    fill: {
      type: String,
      default: "#409eff"
    }
  }
};
</script>
<style scoped>
</style>