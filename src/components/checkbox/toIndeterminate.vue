<template>
  <div>
    <Vcheckbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"></Vcheckbox>
    <div style="margin: 15px 0"></div>
    <VcheckboxGroup v-model="checkboxGroup" @change="handleCheckedChange">
      <Vcheckbox v-for='group in group'  :label="group" :key='group'></Vcheckbox>
    </VcheckboxGroup>
  </div>
</template>

<script>
import Vcheckbox from "./checkbox";
import VcheckboxGroup from "./checkboxGroup";
const group = ['1', '2', '3', '4'];
export default {
  name: "ToIndeterminate",
  data() {
    return {
      isIndeterminate: true,
      checkAll: false,
      checkboxGroup: ["1", "3"],
      group: group
    };
  },
  components: {
    Vcheckbox,
    VcheckboxGroup
  },
  methods: {
    handleCheckAllChange: function(val) {
      this.checkboxGroup = val ? ['1', '2', '3', '4'] : [];
      this.isIndeterminate = false;
    },
    handleCheckedChange: function(val) {
      if (val.length > 0 && val.length < group.length) {
        this.isIndeterminate = true;
      }
    }
  }
};
</script>
