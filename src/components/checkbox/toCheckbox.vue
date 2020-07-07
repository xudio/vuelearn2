<template>
    <div>
        <Vcheckbox 
        label="1"
        v-model="checked1"
        @change="handleCheckedChange">
        </Vcheckbox>

        <Vcheckbox
        label="2"
        v-model="checked2"
        :disabled=true
        :border=true
        size="small">
        </Vcheckbox>

        <Vcheckbox
        label="3"
        v-model="checked3">
        </Vcheckbox>
    </div>
</template>

<script>
import Vcheckbox from './checkbox';
export default {
    name: "Tocheckbox",
    data() {
        return {
           checked1: true,
           checked2: true,
           checked3: true
        }
    },
    methods: {
        handleCheckedChange: function(val) {
            console.log(val);
        }
    },
    components: {
       Vcheckbox 
    }
}
</script>