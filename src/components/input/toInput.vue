<template>
  <Vinput v-model="input" 
  :clearable=true 
  :showPassword=true 
  type="text"
  maxlength=10
  ></Vinput>
</template>

<script>
import Vinput from "./input";
export default {
  name: "Toinput",
  data() {
    return {
        input: ''
    };
  },
  methods: {
    
  },
  components: {
    Vinput
  }
};
</script>
