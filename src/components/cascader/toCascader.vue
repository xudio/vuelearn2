<template>
    <Vcascader></Vcascader>
</template>
<script lang="ts">
import Vue from 'vue';
import Vcascader from './cascader.vue';
export default Vue.extend({
    name: "Tocascader",
    data () {
        return {

        }
    },
    components: {
        Vcascader
    }
})
</script>