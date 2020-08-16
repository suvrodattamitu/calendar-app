(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      events: [],
      projects: [],
      income: 0,
      expense: 0,
      loading: false
    };
  },
  methods: {
    $dateFormat: function $dateFormat(date) {
      if (date) {
        var formatedDate = date.substr(0, 10);
        var format = 'MMM DD, YYYY';
        var dateString = formatedDate === undefined ? null : formatedDate;
        var dateObj = moment__WEBPACK_IMPORTED_MODULE_0___default()(dateString);
        return dateObj.isValid() ? dateObj.format(format) : null;
      }
    },
    getEvents: function getEvents() {
      var _this = this;

      this.loading = true;
      axios.get('/get-dashboard-credentials').then(function (response) {
        _this.events = response.data.events;
        _this.projects = response.data.projects;
        _this.income = response.data.income;
        _this.expense = response.data.expense;
      })["catch"](function (error) {
        console.log(error);
      }).then(function () {
        _this.loading = false;
      });
    }
  },
  mounted: function mounted() {
    this.getEvents();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".has-dim {\n  height: 1000px;\n}\n.wsk-float {\n  display: flex;\n  position: fixed;\n  bottom: 40px;\n  right: 40px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.wsk-float a, .wsk-float a span {\n  color: #ffffff;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pulse-button {\n  position: relative;\n  width: 70px;\n  height: 70px;\n  border: none;\n  box-shadow: 0 0 0 0 rgba(41, 167, 26, 0.7);\n  border-radius: 50%;\n  background-color: #29a71a;\n  background-size: cover;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  -webkit-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);\n  animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);\n}\n.pulse-button:hover {\n  -webkit-animation: none;\n  animation: none;\n}\n@-webkit-keyframes pulse {\nto {\n    box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);\n}\n}\n@keyframes pulse {\nto {\n    box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);\n}\n}\n.dashboard-container {\n  margin-top: 90px;\n}\n@media only screen and (max-width: 600px) {\n.dashboard-container {\n    margin-top: 170px;\n}\n}\n.dashboard-container .icon-style {\n  margin-right: 5px;\n  font-size: 16px;\n  font-weight: 700;\n}\n.dashboard-container .text {\n  font-size: 14px;\n}\n.dashboard-container .text .el-icon-date {\n  margin-right: 5px;\n  font-size: 16px;\n  font-weight: 700;\n}\n.dashboard-container .item {\n  margin-bottom: 18px;\n}\n.dashboard-container .clearfix:before,\n.dashboard-container .clearfix:after {\n  display: table;\n  content: \"\";\n}\n.dashboard-container .clearfix:after {\n  clear: both;\n}\n.dashboard-container .card-col {\n  width: 300px;\n  margin-bottom: 15px;\n}\n.dashboard-container .card-col .box-card {\n  width: 100%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "loading",
          rawName: "v-loading",
          value: _vm.loading,
          expression: "loading"
        }
      ],
      staticClass: "dashboard-container",
      attrs: { "element-loading-text": "Loading...Please Wait..." }
    },
    [
      _c(
        "el-row",
        [
          _c(
            "el-col",
            {
              key: "1",
              staticClass: "card-col",
              attrs: { span: 6, offset: 1 }
            },
            [
              _c("el-card", { staticClass: "box-card" }, [
                _c(
                  "div",
                  {
                    staticClass: "clearfix",
                    attrs: { slot: "header" },
                    slot: "header"
                  },
                  [
                    _c("span", [_vm._v("Recent Events")]),
                    _vm._v(" "),
                    _c("i", { staticClass: "el-icon-alarm-clock icon-style" })
                  ]
                ),
                _vm._v(" "),
                _vm.events.length
                  ? _c(
                      "div",
                      _vm._l(_vm.events, function(event, index) {
                        return _c(
                          "div",
                          { key: index, staticClass: "text item" },
                          [
                            _c("h5", [
                              _c("i", { staticClass: "el-icon-date" }),
                              _vm._v(
                                _vm._s(_vm.$dateFormat(event.start)) +
                                  " To " +
                                  _vm._s(_vm.$dateFormat(event.end))
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _c("i", {
                                staticClass: "el-icon-time icon-style"
                              }),
                              _vm._v(_vm._s(event.name))
                            ]),
                            _vm._v(" "),
                            _vm.events.length > index + 1 ? _c("hr") : _vm._e()
                          ]
                        )
                      }),
                      0
                    )
                  : _c("div", { staticClass: "text item" }, [
                      _c("p", [_vm._v("No Recent Events Founds")])
                    ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            {
              key: "2",
              staticClass: "card-col",
              attrs: { span: 6, offset: 1 }
            },
            [
              _c("el-card", { staticClass: "box-card" }, [
                _c(
                  "div",
                  {
                    staticClass: "clearfix",
                    attrs: { slot: "header" },
                    slot: "header"
                  },
                  [
                    _c("span", [_vm._v("Recent Projects")]),
                    _vm._v(" "),
                    _c("i", { staticClass: "el-icon-trophy icon-style" })
                  ]
                ),
                _vm._v(" "),
                _vm.projects.length
                  ? _c(
                      "div",
                      _vm._l(_vm.projects, function(project, index) {
                        return _c(
                          "div",
                          { key: index, staticClass: "text item" },
                          [
                            _c("h5", [
                              _c("i", { staticClass: "el-icon-date" }),
                              _vm._v(_vm._s(_vm.$dateFormat(project.duedate)))
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _c("i", {
                                staticClass: "el-icon-check icon-style"
                              }),
                              _vm._v(_vm._s(project.name))
                            ]),
                            _vm._v(" "),
                            _vm.projects.length > index + 1
                              ? _c("hr")
                              : _vm._e()
                          ]
                        )
                      }),
                      0
                    )
                  : _c("div", { staticClass: "text item" }, [
                      _c("p", [_vm._v("No Recent Projects Founds")])
                    ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            {
              key: "3",
              staticClass: "card-col",
              attrs: { span: 6, offset: 1 }
            },
            [
              _c("el-card", { staticClass: "box-card" }, [
                _c(
                  "div",
                  {
                    staticClass: "clearfix",
                    attrs: { slot: "header" },
                    slot: "header"
                  },
                  [
                    _c("span", [_vm._v("Monthly Report")]),
                    _vm._v(" "),
                    _c("i", {
                      staticClass: "fa fa-bar-chart icon-style",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "text item" }, [
                  _c("p", [
                    _vm._v("Total Income : " + _vm._s(_vm.income) + " "),
                    _c("span", {
                      domProps: {
                        innerHTML: _vm._s(_vm.globalSettings.currency_symbol)
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v("Total Expense : " + _vm._s(_vm.expense) + " "),
                    _c("span", {
                      domProps: {
                        innerHTML: _vm._s(_vm.globalSettings.currency_symbol)
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "Income - Expense = " +
                        _vm._s(_vm.income - _vm.expense) +
                        " "
                    ),
                    _c("span", {
                      domProps: {
                        innerHTML: _vm._s(_vm.globalSettings.currency_symbol)
                      }
                    })
                  ])
                ])
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(0)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "wsk-float" }, [
      _c("p", [_vm._v("Are you intereseted to buy or use this app for free?")]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "pulse-button",
          attrs: {
            href: "https://fluentmanagement.fluentpos.com/support",
            target: "_blank"
          }
        },
        [_c("span", [_vm._v("Help Desk")])]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_82704d4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=82704d4a& */ "./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/Dashboard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_82704d4a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_82704d4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Dashboard.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/Dashboard.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_82704d4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=82704d4a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard.vue?vue&type=template&id=82704d4a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_82704d4a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_82704d4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);