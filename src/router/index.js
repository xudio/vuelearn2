import Vue from 'vue';
import Router from 'vue-router';
import Toradio from '../components/radio/toRadio.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/radio',
            name: 'radio',
            component: Toradio
        },
        
    ]
})