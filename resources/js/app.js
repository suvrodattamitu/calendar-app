//require('./bootstrap');
window.Vue = require('vue');
import {
    
    Message,
    Notification,
    Button,

  } from 'element-ui';

  Vue.use(Button);
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;


locale.use(lang);
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

import Vuetify from './../plugins/vuetify';
Vue.component('calendar', require('./pages/Calendar.vue').default);
window.axios = require('axios');

import Router from 'vue-router';
Vue.use(Router);

import {routes} from './routes/routes'

const router = new Router({
    routes: routes,
    mode:'history',
    scrollBehavior() {
        return {x: 0, y: 0};
    },
}); 

import Application from './Application';
// Vue.component('admin', Application);

const app = new Vue({
    vuetify:Vuetify,
    router:router,
    render: h=>h(Application),
    el: '#fluentmanagement',
});

// import moment from 'moment';

// window.FluentManagementBus = new window.FluentManagement.Vue();

// window.FluentManagement.Vue.mixin({
//     methods: {

//         $dateFormat(date) {

//             let format = 'MMM DD, YYYY';
//             let dateString = (date === undefined) ? null : date;
//             let dateObj = moment(dateString);
//             return dateObj.isValid() ? dateObj.format(format) : null;

//         },
        
//         $post(url,data,headers='') {
//             if (!data) {
//                 data = {};
//             }
//             if(!headers){
//                 headers = {}
//             }
//             return jQuery.post(url, {headers:{'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')}});

//         },

//         $get(url) {
//             return jQuery.get(url);
//         },

//     },

//     data(){
//         return {
//             unread_len:0,
//             has_pro: 'no',
//         }
//     },

//     watch:{
       
//     },

//     computed:{
        
//     },

    
// });

// //routes

// import {routes} from './routes/routes'

// const router = new window.FluentManagement.Router({
//     routes: routes,
//     mode:'history',
//     scrollBehavior() {
//         return {x: 0, y: 0};
//     },
// });

// // router.beforeEach((to,from,next)=>{
    
// //     document.title = to.meta.title;

// // });  

// //vuex
// import Vuex from 'vuex';

// window.FluentManagement.Vue.use(Vuex);

// import storeFrontData from './store/store';
// const store = new Vuex.Store(
//     storeFrontData
// );

// window.axios = require('axios');

// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// import Application from './Application';
// import Calendar from './pages/Calendar';

// window.FluentManagement.Vue.component('admin', Application);
// window.FluentManagement.Vue.component('Calendar', Calendar);
// import Vuetify from './../plugins/vuetify';

// new window.FluentManagement.Vue({
    
//     vuetify:Vuetify,
//     el: '#fluentmanagement',
//     router:router,
//     store,
//     mounted() {
        
//     }
    
// });
