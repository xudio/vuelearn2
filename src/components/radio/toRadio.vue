<template>
    <div>
        <Vradio 
        title="备选项"
        label="1"
        v-model="radioEn"
        :border=true
        size="small"
        @change="handleRadioChecked">
        </Vradio>

        <Vradio
        title="备选项"
        label="2"
        v-model="radioEn">
        </Vradio>

        <Vradio
        title="备选项"
        label="3"
        v-model="radioEn">
        </Vradio>
    </div>
</template>

<script>
import Vradio from './radio';
export default {
    name: "Toradio",
    data() {
        return {
           radioEn: "2"
        }
    },
    methods: {
        handleRadioChecked: function(val) {
            console.log(val);
        }
    },
    components: {
       Vradio 
    }
}
</script>