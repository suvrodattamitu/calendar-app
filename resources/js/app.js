require('./bootstrap');
window.Vue = require('vue');
import Vuetify from '../plugins/vuetify';

Vue.component('calendar', require('./components/Calendar.vue').default);

const app = new Vue({
    vuetify:Vuetify,
    el: '#app',
});
