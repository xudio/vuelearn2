<template>
  <Vinput v-model="input"></Vinput>
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
