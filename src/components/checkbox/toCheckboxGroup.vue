<template>
  <div>
    <VcheckboxGroup v-model="checkboxGroup" @change="handle">
      <Vcheckbox label="1"></Vcheckbox>
      <Vcheckbox label="2"></Vcheckbox>
      <Vcheckbox label="3"></Vcheckbox>
      <Vcheckbox label="4"></Vcheckbox>
    </VcheckboxGroup>
  </div>
</template>

<script>
import Vcheckbox from "./checkbox";
import VcheckboxGroup from "./checkboxGroup";
export default {
  name: "TocheckboxGroup",
  data() {
    return {
      checkboxGroup: ["1", "3"]
    };
  },
  methods: {
    handle: function(val) {
            console.log(val);
    }
  },
  components: {
    Vcheckbox,
    VcheckboxGroup
  }
};
</script>
