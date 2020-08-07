<template>
    <Vselect v-model="value" @changeData="changeData" :data="items" :clearable=true :multiple=true></Vselect>
</template>
<script>
import Vselect from './select'
export default {
    name: 'Toselect',
    data() {
        return {
            items: [
                {label: '黄金糕', value: '1'},
                {label: '双皮奶', value: '2', disabled: true},
                {label: '龙须面', value: '3'},
                {label: '北京烤鸭', value: '4'}
            ],
            value: ['1']
        }
    },
    methods: {
        changeData: function(val) {
            this.value = val;
        }
    },
    components: {
        Vselect
    }
}
</script>