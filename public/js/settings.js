(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{293:function(e,t,n){"use strict";var r=n(64);n.n(r).a},294:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,".currency-list {\n  margin-top: 70px;\n}\n.form-item {\n  margin-top: 8px;\n}",""])},475:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{errors:[],currency:"USD",currencies:[],software_name:"",loading:!1,formLabelWidth:"70px"}},methods:{getSettings:function(){var e=this;this.loading=!0,axios.get("/get-settings-credentials").then((function(t){var n=t.data.settings;n&&n.general_settings&&(e.software_name=n.general_settings.software_settings.software_name,e.currency=n.general_settings.currency_settings.currency_code),e.currencies=t.data.currencies})).catch((function(e){console.log(e)})).then((function(){e.loading=!1}))},updateSettings:function(){var e=this,t={currency_code:this.currency,software_name:this.software_name};axios.post("/settings/update",t).then((function(t){e.$store.dispatch("settingsAction",t.data.settings),e.getSettings(),e.$notify({title:"Success",message:"Settings Updated Successfuly!",type:"success",position:"top-right"})})).catch((function(e){})).then((function(){e.loading=!1}))}},mounted:function(){this.getSettings()}},a=(n(293),n(4)),s=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"wppayforms",attrs:{"element-loading-text":"Loading...Please Wait..."}},[n("el-row",[n("el-col",{attrs:{md:{span:6,offset:6}}},[n("el-form",[n("el-form-item",{attrs:{label:"Currency","label-width":e.formLabelWidth}},[e.currencies.length?n("el-select",{attrs:{clearable:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"Search Your Currency"},model:{value:e.currency,callback:function(t){e.currency=t},expression:"currency"}},e._l(e.currencies,(function(e,t){return n("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),1):e._e(),e._v(" "),e.errors.currency?n("p",{staticClass:"error-warning"},[e._v(e._s(e.errors.name[0]))]):e._e()],1),e._v(" "),n("el-form-item",{attrs:{label:"Name","label-width":e.formLabelWidth}},[n("el-input",{attrs:{placeholder:"Software Name"},model:{value:e.software_name,callback:function(t){e.software_name=t},expression:"software_name"}}),e._v(" "),e.errors.name?n("p",{staticClass:"error-warning"},[e._v(e._s(e.errors.name[0]))]):e._e()],1),e._v(" "),n("el-form-item",{attrs:{label:"","label-width":e.formLabelWidth}},[n("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.updateSettings}},[e._v("Save")])],1)],1)],1)],1)],1)])}),[],!1,null,null,null);t.default=s.exports},64:function(e,t,n){var r=n(294);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(7)(r,a);r.locals&&(e.exports=r.locals)}}]);