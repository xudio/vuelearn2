import Vue from 'vue';
import Router from 'vue-router';
import Toradio from '../components/radio/toRadio.vue';
import ToradioButton from '../components/radio/toRadioButton.vue'
import Tocheckbox from '../components/checkbox/toCheckbox.vue'
import TocheckboxGroup from '../components/checkbox/toCheckboxGroup.vue'
import ToIndeterminate from '../components/checkbox/toIndeterminate.vue'
import Toinput from '../components/input/toInput.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/radio',
            name: 'radio',
            component: Toradio
        },
        {
            path: '/radioButton',
            name: 'radioButton',
            component: ToradioButton
        },
        {
            path: '/checkbox',
            name: 'checkbox',
            component: Tocheckbox
        },
        {
            path: '/checkboxGroup',
            name: 'checkboxGroup',
            component: TocheckboxGroup
        },
        {
            path: '/indeterminate',
            name: 'indeterminate',
            component: ToIndeterminate
        },
        {
            path: '/input',
            name: 'input',
            component: Toinput
        }
    ]
})