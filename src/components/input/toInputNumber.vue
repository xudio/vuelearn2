<template>
  <VinputNumber v-model="number" 
    :key="componentKey"
    controlsPosition="side" 
    @change="handleChange"
    :min=1
    :max=10
    :step=0.11
    :precision=2
    :disabled=false
    ></VinputNumber>
</template>

<script>
import VinputNumber from "./inputNumber";
export default {
  name: "ToinputNumber",
  data() {
    return {
      number: 3,
      componentKey: 0  //强制渲染
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
      this.componentKey += 1;  
    },
  },
  components: {
    VinputNumber
  }
};
</script>