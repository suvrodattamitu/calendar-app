//require('./bootstrap');

window.Vue = require('vue');
import {
    Pagination,
    Dialog,
    Autocomplete,
    // Dropdown,
    // DropdownMenu,
    // DropdownItem,
    // Menu,
    // Submenu,
    // MenuItem,
    // MenuItemGroup,
    Input,
    InputNumber,
    // Radio,
    // RadioGroup,
    // RadioButton,
    // Checkbox,
    // CheckboxButton,
    // CheckboxGroup,
    // Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    // Popover,
    // Tooltip,
    // Breadcrumb,
    // BreadcrumbItem,
    Form,
    FormItem,
    // Tabs,
    // TabPane,
    // Tag,
    // Tree,
    // Alert,
    // Slider,
    Icon,
    Row,
    Col,
    // Upload,
    // Progress,
    Spinner,
    Badge,
    Card,
    // Rate,
    // Steps,
    // Step,
    // Carousel,
    // CarouselItem,
    // Collapse,
    // CollapseItem,
    // Cascader,
    ColorPicker,
    Transfer,
    Container,
    // Header,
    // Aside,
    // Main,
    // Footer,
    // Timeline,
    // TimelineItem,
    // Link,
    // Divider,
    // Image,
    // Calendar,
    // Backtop,
    // PageHeader,
    // CascaderPanel,
    Loading,
    MessageBox,
    Message,
    Notification
  } from 'element-ui';

  Vue.use(Pagination);
  Vue.use(Dialog);
  Vue.use(Autocomplete);
//   Vue.use(Dropdown);
//   Vue.use(DropdownMenu);
//   Vue.use(DropdownItem);
//   Vue.use(Menu);
//   Vue.use(Submenu);
//   Vue.use(MenuItem);
//   Vue.use(MenuItemGroup);
  Vue.use(Input);
  Vue.use(InputNumber);
//   Vue.use(Radio);
//   Vue.use(RadioGroup);
//   Vue.use(RadioButton);
//   Vue.use(Checkbox);
//   Vue.use(CheckboxButton);
//   Vue.use(CheckboxGroup);
//   Vue.use(Switch);
  Vue.use(Select);
  Vue.use(Option);
  Vue.use(OptionGroup);
  Vue.use(Button);
  Vue.use(ButtonGroup);
  Vue.use(Table);
  Vue.use(TableColumn);
  Vue.use(DatePicker);
  Vue.use(TimeSelect);
  Vue.use(TimePicker);
//   Vue.use(Popover);
//   Vue.use(Tooltip);
//   Vue.use(Breadcrumb);
//   Vue.use(BreadcrumbItem);
  Vue.use(Form);
  Vue.use(FormItem);
//   Vue.use(Tabs);
//   Vue.use(TabPane);
//   Vue.use(Tag);
//   Vue.use(Tree);
//   Vue.use(Alert);
//   Vue.use(Slider);
  Vue.use(Icon);
  Vue.use(Row);
  Vue.use(Col);
//   Vue.use(Upload);
//   Vue.use(Progress);
  Vue.use(Spinner);
  Vue.use(Badge);
  Vue.use(Card);
//   Vue.use(Rate);
//   Vue.use(Steps);
//   Vue.use(Step);
//   Vue.use(Carousel);
//   Vue.use(CarouselItem);
//   Vue.use(Collapse);
//   Vue.use(CollapseItem);
//   Vue.use(Cascader);
  Vue.use(ColorPicker);
  Vue.use(Transfer);
  Vue.use(Container);
//   Vue.use(Header);
//   Vue.use(Aside);
//   Vue.use(Main);
//   Vue.use(Footer);
//   Vue.use(Timeline);
//   Vue.use(TimelineItem);
//   Vue.use(Link);
//   Vue.use(Divider);
//   Vue.use(Image);
//   Vue.use(Calendar);
//   Vue.use(Backtop);
//   Vue.use(PageHeader);
//   Vue.use(CascaderPanel);
  
  Vue.use(Loading.directive);
  
  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;


import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

import DateRangePicker from 'vue-mj-daterangepicker';
import 'vue-mj-daterangepicker/dist/vue-mj-daterangepicker.css';
Vue.use(DateRangePicker);

// import enLocale from 'element-ui/lib/locale/lang/en'
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

locale.use(lang);

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

router.beforeEach((to,from,next)=>{
    
    document.title = to.meta.title;
    next();
    
});  

import Application from './Application';
// Vue.component('admin', Application);


//mixin 
Vue.mixin({

    methods: {

    },

    data(){
        return {
          
        }
    },

    computed:{

        globalSettings(){
            return  this.$store.getters.getSettings;
        }

    },

    
    
});

//mixin end

import Vuex from 'vuex';

import storeFrontData from './store/store';
const store = new Vuex.Store(
    storeFrontData
);

// import VueI18n from 'vue-i18n';
// Vue.use(VueI18n);

// Vue.config.lang = 'zh-cn';
//Vue.locale('zh-cn', zhLocale);
//Vue.locale('en', enLocale);

// const messages = {
//     en: {
//       message: 'hello',
//     },
//     zh: {
//       message: '你好',
//     }
//   }
//   // Create VueI18n instance with options
//   const i18n = new VueI18n({
//     locale: 'zh', // set locale
//     messages, // set locale messages
//   })
  
//  locale.i18n((key, value) => i18n.t(key, value))

const app = new Vue({
    vuetify:Vuetify,
    router:router,
    store,
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
