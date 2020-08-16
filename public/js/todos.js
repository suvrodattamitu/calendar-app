(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/todos"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Common/Welcome.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Common/Welcome.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "Welcome",
  props: ['additionalData'],
  data: function data() {
    return {
      docs: []
    };
  },
  methods: {
    createNew: function createNew() {
      this.$emit('createNewOne', true);
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/todos/project/project_crud/add_project.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/todos/project/project_crud/add_project.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: ['openModal', 'form', 'formLabelWidth'],
  data: function data() {
    return {
      openAddModal: this.openModal,
      errors: []
    };
  },
  watch: {
    openAddModal: function openAddModal(val) {
      this.$emit('openProjectAddModal', val);
    }
  },
  methods: {
    saveProject: function saveProject() {
      var _this = this;

      this.loading = true;
      axios.post('/add-project', this.form).then(function (response) {
        _this.$emit('addedProject', false);

        _this.$notify({
          title: 'Success',
          message: 'Project Saved Successfuly!',
          type: 'success',
          position: 'top-right'
        });
      })["catch"](function (error) {
        if (error.response) {
          _this.errors = error.response.data.errors;
        } else {
          _this.$notify({
            title: 'Error',
            message: 'Something went wrong!',
            type: 'error',
            position: 'top-right'
          });
        }
      }).then(function () {
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/todos/project/project_crud/edit_project.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/todos/project/project_crud/edit_project.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: ['openModalEdit', 'form', 'formLabelWidth'],
  data: function data() {
    return {
      openEditModal: this.openModalEdit,
      errors: []
    };
  },
  watch: {
    openEditModal: function openEditModal(val) {
      this.$emit('openProjectEditModal', val);
    }
  },
  methods: {
    updateProject: function updateProject() {
      var _this = this;

      //this.loading = true;
      var editData = this.form;
      axios.post('/project/' + editData.slug, editData).then(function (response) {
        _this.$emit('editedProject', false);

        _this.$notify({
          title: 'Success',
          message: 'Project Updated Successfuly!',
          type: 'success',
          position: 'top-right'
        });
      })["catch"](function (error) {
        if (error.response) {
          _this.errors = error.response.data.errors;
        } else {
          _this.$notify({
            title: 'Error',
            message: 'Something went wrong!',
            type: 'error',
            position: 'top-right'
          });
        }
      }).then(function () {});
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/todos/project/projects.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/todos/project/projects.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Common_Welcome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../Common/Welcome */ "./resources/js/Common/Welcome.vue");
/* harmony import */ var _project_crud_add_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project_crud/add_project */ "./resources/js/pages/todos/project/project_crud/add_project.vue");
/* harmony import */ var _project_crud_edit_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project_crud/edit_project */ "./resources/js/pages/todos/project/project_crud/edit_project.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
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
      loading: false,
      //table selection checkbox
      multipleSelection: [],
      //table pagination
      per_page: 10,
      page_number: 1,
      total: 0,
      pageSizes: [5, 10, 20, 30, 40, 50, 100, 200],
      projects: [],
      search_string: '',
      hasProjects: false,
      deletingData: false,
      deleteDialogVisible: false,
      editingData: false,
      //bulk options
      bulkValue: '',
      bulkOptions: [{
        value: 'delete',
        label: 'Delete All'
      }, {
        value: 'pending',
        label: 'Pending'
      }, {
        value: 'complete',
        label: 'Completed'
      }],
      selectVisibleForBulkAction: false,
      welcomeData: {
        'name': 'Project'
      },
      addProjectModal: false,
      openEditModal: false,
      form: {
        name: '',
        description: '',
        duedate: ''
      },
      formLabelWidth: '120px',
      errors: []
    };
  },
  components: {
    Welcome: _Common_Welcome__WEBPACK_IMPORTED_MODULE_0__["default"],
    AddProject: _project_crud_add_project__WEBPACK_IMPORTED_MODULE_1__["default"],
    EditProject: _project_crud_edit_project__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    addedProject: function addedProject() {
      this.addProjectModal = false;
      this.allProjects();
    },
    editedProject: function editedProject() {
      this.openEditModal = false;
      this.allProjects();
    },
    openDialogModal: function openDialogModal(val) {
      this.addProjectModal = val;
    },
    openEditDialogModal: function openEditDialogModal(val) {
      this.openEditModal = val;
    },
    $dateFormat: function $dateFormat(date) {
      var format = 'MMM DD, YYYY';
      var dateString = date === undefined ? null : date;
      var dateObj = moment__WEBPACK_IMPORTED_MODULE_3___default()(dateString);
      return dateObj.isValid() ? dateObj.format(format) : null;
    },
    createProject: function createProject() {
      this.errors = [];
      this.form = {};
      this.addProjectModal = true;
    },
    //table selection checkbox
    handleSelectionChange: function handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    //table pagination
    handleSizeChange: function handleSizeChange(val) {
      this.per_page = val;
      this.allProjects();
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.page_number = val;
      this.allProjects();
    },
    addNewProject: function addNewProject() {//  this.$router.push('/admin/add-category');
    },
    allProjects: function allProjects() {
      var _this = this;

      this.loading = true;
      var page = this.page_number;
      var perPage = this.per_page;
      var search = this.search_string;
      axios.get('/all-projects/?page=' + page + '&paginate=' + perPage + '&s=' + search).then(function (response) {
        var all_projects = response.data.projects.data;
        _this.projects = all_projects;
        _this.total = response.data.total;
        _this.hasProjects = all_projects.length;
      })["catch"](function (error) {
        console.log(error.response);
      }).then(function () {
        _this.loading = false;
      });
    },
    //categories crud delete
    confirmDelete: function confirmDelete(deleteData) {
      this.deletingData = deleteData;
      this.deleteDialogVisible = true;
    },
    deleteNow: function deleteNow() {
      var _this2 = this;

      var slug = this.deletingData.slug;
      axios["delete"]('/project/delete/' + slug).then(function (response) {
        _this2.$notify({
          title: 'Success',
          message: 'Successfully Deleted!',
          type: 'success',
          position: 'top-right'
        });

        _this2.allProjects();
      })["catch"](function (error) {
        _this2.$notify({
          title: 'Error',
          message: error.responseJSON ? error.responseJSON.data.message : 'Error',
          type: 'error',
          position: 'top-right'
        });
      }).then(function () {
        _this2.deleteDialogVisible = false;
      });
    },
    //categories crud update
    confirmEdit: function confirmEdit(editData) {
      var _this3 = this;

      this.loading = true;
      this.errors = [];
      axios.get('/project/' + editData.slug).then(function (response) {
        _this3.form = response.data.project;
        _this3.openEditModal = true;
      })["catch"](function (error) {
        console.log(error);
      }).then(function () {
        _this3.loading = false;
      });
    },
    //bulk actions dialog modal
    doAction: function doAction() {
      if (!this.multipleSelection.length || !this.bulkValue) {
        this.$notify({
          title: 'Error',
          message: 'Please select one to continue',
          type: 'error',
          position: 'top-right'
        });
      } else {
        this.selectVisibleForBulkAction = true;
      }
    },
    //bulk actions action 
    multipleSelectActionForBulkAction: function multipleSelectActionForBulkAction() {
      var _this4 = this;

      var bulkAction = this.bulkValue;
      axios.post('/projects/bulk-action-multiple', {
        rows: this.multipleSelection,
        bulk: bulkAction
      }).then(function (response) {
        _this4.$notify({
          title: 'Success',
          message: bulkAction + ' successfull\'y!',
          type: 'success',
          position: 'top-right'
        });

        _this4.allProjects();
      })["catch"](function (error) {
        _this4.$notify({
          title: 'Error',
          message: 'Can\'t ' + bulkAction,
          type: 'error',
          position: 'top-right'
        });
      }).then(function () {
        _this4.selectVisibleForBulkAction = false;
      });
    }
  },
  mounted: function mounted() {
    this.allProjects();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Common/Welcome.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Common/Welcome.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ninja_intro_welcome {\n  max-width: 600px;\n  margin: 45px auto 0px;\n  padding: 30px 20px;\n  background: white;\n  text-align: center;\n}\n.ninja_intro_welcome h2 {\n  font-size: 30px;\n}\n.ninja_intro_welcome .ninja_actions {\n  margin-bottom: 30px;\n}\n.ninja_intro_welcome .ninja_docs {\n  text-align: left;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Common/Welcome.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Common/Welcome.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Common/Welcome.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Common/Welcome.vue?vue&type=template&id=7dca323c&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Common/Welcome.vue?vue&type=template&id=7dca323c& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "ninja_intro_welcome" }, [
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "ninja_actions" },
      [
        _c(
          "el-button",
          { attrs: { type: "success" }, on: { click: _vm.createNew } },
          [
            _vm._v(
              "\n            Create a " +
                _vm._s(_vm.additionalData.name) +
                "\n        "
            )
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("hr")
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", [
      _vm._v("Welcome "),
      _c("span", { staticStyle: { color: "#007AFF" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("Thank you. "),
      _c("span"),
      _vm._v(" - Management System Made Simple")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/todos/project/project_crud/add_project.vue?vue&type=template&id=3fd39a51&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/todos/project/project_crud/add_project.vue?vue&type=template&id=3fd39a51& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "el-dialog",
        {
          attrs: {
            title: "Add New Project",
            visible: _vm.openAddModal,
            width: "80%",
            "close-on-click-modal": false
          },
          on: {
            "update:visible": function($event) {
              _vm.openAddModal = $event
            }
          }
        },
        [
          _c(
            "el-form",
            { attrs: { model: _vm.form } },
            [
              _c(
                "el-form-item",
                { attrs: { label: "Name", "label-width": _vm.formLabelWidth } },
                [
                  _c("el-input", {
                    attrs: {
                      type: "text",
                      placeholder: "Project Name",
                      autocomplete: "off"
                    },
                    model: {
                      value: _vm.form.name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name"
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("p", { staticClass: "error-warning" }, [
                        _vm._v(_vm._s(_vm.errors.name[0]))
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: "Description",
                    "label-width": _vm.formLabelWidth
                  }
                },
                [
                  _c("el-input", {
                    attrs: {
                      type: "textarea",
                      rows: 2,
                      placeholder: "Project Description",
                      autocomplete: "off"
                    },
                    model: {
                      value: _vm.form.description,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "description", $$v)
                      },
                      expression: "form.description"
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.description
                    ? _c("p", { staticClass: "error-warning" }, [
                        _vm._v(_vm._s(_vm.errors.description[0]))
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "Date", "label-width": _vm.formLabelWidth } },
                [
                  _c("el-date-picker", {
                    attrs: {
                      type: "date",
                      placeholder: "Pick a day",
                      "value-format": "yyyy-MM-dd HH:mm:ss"
                    },
                    model: {
                      value: _vm.form.duedate,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "duedate", $$v)
                      },
                      expression: "form.duedate"
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.duedate
                    ? _c("p", { staticClass: "error-warning" }, [
                        _vm._v(_vm._s(_vm.errors.duedate[0]))
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { "label-width": _vm.formLabelWidth } },
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary", size: "medium" },
                      on: { click: _vm.saveProject }
                    },
                    [_vm._v("Save")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/todos/project/project_crud/edit_project.vue?vue&type=template&id=aefb2b04&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/todos/project/project_crud/edit_project.vue?vue&type=template&id=aefb2b04& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "el-dialog",
        {
          attrs: {
            title: "Edit Project",
            visible: _vm.openEditModal,
            width: "80%",
            "close-on-click-modal": false
          },
          on: {
            "update:visible": function($event) {
              _vm.openEditModal = $event
            }
          }
        },
        [
          _c(
            "el-form",
            { attrs: { model: _vm.form } },
            [
              _c(
                "el-form-item",
                { attrs: { label: "Name", "label-width": _vm.formLabelWidth } },
                [
                  _c("el-input", {
                    attrs: {
                      type: "text",
                      placeholder: "Project Name",
                      autocomplete: "off"
                    },
                    model: {
                      value: _vm.form.name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name"
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("p", { staticClass: "error-warning" }, [
                        _vm._v(_vm._s(_vm.errors.name[0]))
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: "Description",
                    "label-width": _vm.formLabelWidth
                  }
                },
                [
                  _c("el-input", {
                    attrs: {
                      type: "textarea",
                      rows: 2,
                      placeholder: "Project Description",
                      autocomplete: "off"
                    },
                    model: {
                      value: _vm.form.description,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "description", $$v)
                      },
                      expression: "form.description"
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.description
                    ? _c("p", { staticClass: "error-warning" }, [
                        _vm._v(_vm._s(_vm.errors.description[0]))
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "Date", "label-width": _vm.formLabelWidth } },
                [
                  _c("el-date-picker", {
                    attrs: {
                      type: "date",
                      placeholder: "Pick a day",
                      "value-format": "yyyy-MM-dd HH:mm:ss"
                    },
                    model: {
                      value: _vm.form.duedate,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "duedate", $$v)
                      },
                      expression: "form.duedate"
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.duedate
                    ? _c("p", { staticClass: "error-warning" }, [
                        _vm._v(_vm._s(_vm.errors.duedate[0]))
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { "label-width": _vm.formLabelWidth } },
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary", size: "medium" },
                      on: { click: _vm.updateProject }
                    },
                    [_vm._v("Update")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/todos/project/projects.vue?vue&type=template&id=f5c3a18a&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/todos/project/projects.vue?vue&type=template&id=f5c3a18a& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
      staticClass: "wppayforms",
      attrs: { "element-loading-text": "Loading...Please Wait..." }
    },
    [
      _c(
        "el-row",
        { staticStyle: { "margin-top": "60px" } },
        [
          _c("el-col", { attrs: { md: { span: 22, offset: 1 } } }, [
            !_vm.projects.length
              ? _c(
                  "div",
                  [
                    _c("welcome", {
                      attrs: { additionalData: _vm.welcomeData },
                      on: { createNewOne: _vm.createProject }
                    })
                  ],
                  1
                )
              : _c(
                  "div",
                  { staticClass: "all_payforms_wrapper payform_section" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "payform_section_header all_payment_form_wrapper"
                      },
                      [
                        _c("h1", { staticClass: "payform_section_title" }, [
                          _vm._v(
                            "\n                        " +
                              _vm._s("Projects") +
                              "\n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "payform_section_actions" }, [
                          _c(
                            "div",
                            { staticClass: "all_bulk_actions" },
                            [
                              _c(
                                "el-select",
                                {
                                  attrs: {
                                    clearable: "",
                                    placeholder: "Select",
                                    size: "mini"
                                  },
                                  model: {
                                    value: _vm.bulkValue,
                                    callback: function($$v) {
                                      _vm.bulkValue = $$v
                                    },
                                    expression: "bulkValue"
                                  }
                                },
                                _vm._l(_vm.bulkOptions, function(item) {
                                  return _c("el-option", {
                                    key: item.value,
                                    attrs: {
                                      label: item.label,
                                      value: item.value
                                    }
                                  })
                                }),
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "el-button",
                                {
                                  attrs: { type: "primary", size: "mini" },
                                  on: {
                                    click: function($event) {
                                      return _vm.doAction()
                                    }
                                  }
                                },
                                [_vm._v("Apply")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "payform_action search_action" },
                            [
                              _c(
                                "el-input",
                                {
                                  staticClass: "input-with-select",
                                  attrs: {
                                    size: "small",
                                    placeholder: "Search"
                                  },
                                  nativeOn: {
                                    keyup: function($event) {
                                      if (
                                        !$event.type.indexOf("key") &&
                                        _vm._k(
                                          $event.keyCode,
                                          "enter",
                                          13,
                                          $event.key,
                                          "Enter"
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.allProjects()
                                    }
                                  },
                                  model: {
                                    value: _vm.search_string,
                                    callback: function($$v) {
                                      _vm.search_string = $$v
                                    },
                                    expression: "search_string"
                                  }
                                },
                                [
                                  _c("el-button", {
                                    attrs: {
                                      slot: "append",
                                      icon: "el-icon-search"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.allProjects()
                                      }
                                    },
                                    slot: "append"
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "el-button",
                                {
                                  staticClass: "payform_action_button",
                                  attrs: { size: "small", type: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.createProject()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s("Add New Project") +
                                      "\n                            "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "payform_section_body" },
                      [
                        _c(
                          "el-table",
                          {
                            ref: "multipleTable",
                            staticStyle: { width: "100%" },
                            attrs: { data: _vm.projects },
                            on: {
                              "selection-change": _vm.handleSelectionChange
                            }
                          },
                          [
                            _c("el-table-column", {
                              attrs: { type: "selection", width: "55" }
                            }),
                            _vm._v(" "),
                            _c("el-table-column", {
                              attrs: { type: "expand" },
                              scopedSlots: _vm._u([
                                {
                                  key: "default",
                                  fn: function(props) {
                                    return [
                                      _c("p", [
                                        _vm._v("Id: " + _vm._s(props.row.id))
                                      ]),
                                      _vm._v(" "),
                                      _c("p", [
                                        _vm._v(
                                          "Name: " + _vm._s(props.row.name)
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("p", [
                                        _vm._v(
                                          "Created At: " +
                                            _vm._s(props.row.created_at)
                                        )
                                      ])
                                    ]
                                  }
                                }
                              ])
                            }),
                            _vm._v(" "),
                            _c("el-table-column", {
                              attrs: { label: "Id", prop: "id" }
                            }),
                            _vm._v(" "),
                            _c("el-table-column", {
                              attrs: { label: "Name" },
                              scopedSlots: _vm._u([
                                {
                                  key: "default",
                                  fn: function(scope) {
                                    return [
                                      _c(
                                        "router-link",
                                        {
                                          attrs: {
                                            to: {
                                              name: "project",
                                              params: {
                                                project_slug: scope.row.slug
                                              }
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                " +
                                              _vm._s(scope.row.name) +
                                              "\n                            "
                                          )
                                        ]
                                      )
                                    ]
                                  }
                                }
                              ])
                            }),
                            _vm._v(" "),
                            _c("el-table-column", {
                              attrs: {
                                label: "Description",
                                prop: "description"
                              }
                            }),
                            _vm._v(" "),
                            _c("el-table-column", {
                              attrs: { label: "Status" },
                              scopedSlots: _vm._u([
                                {
                                  key: "default",
                                  fn: function(scope) {
                                    return [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(
                                            scope.row.completed === "complete"
                                              ? "Completed"
                                              : "Pending"
                                          ) +
                                          "\n                            "
                                      )
                                    ]
                                  }
                                }
                              ])
                            }),
                            _vm._v(" "),
                            _c("el-table-column", {
                              attrs: { label: "Due date" },
                              scopedSlots: _vm._u([
                                {
                                  key: "default",
                                  fn: function(scope) {
                                    return [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(
                                            _vm.$dateFormat(scope.row.duedate)
                                          ) +
                                          "\n                        "
                                      )
                                    ]
                                  }
                                }
                              ])
                            }),
                            _vm._v(" "),
                            _c("el-table-column", {
                              attrs: { label: "Actions" },
                              scopedSlots: _vm._u([
                                {
                                  key: "default",
                                  fn: function(scope) {
                                    return [
                                      _c(
                                        "a",
                                        {
                                          on: {
                                            click: function($event) {
                                              return _vm.confirmEdit(scope.row)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "el-icon-edit"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          on: {
                                            click: function($event) {
                                              return _vm.confirmDelete(
                                                scope.row
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "el-icon-delete"
                                          })
                                        ]
                                      )
                                    ]
                                  }
                                }
                              ])
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "fluentpos_pagination" },
                      [
                        _c("el-pagination", {
                          attrs: {
                            background: "",
                            "current-page": _vm.page_number,
                            "page-size": _vm.per_page,
                            "page-sizes": _vm.pageSizes,
                            layout: "total, sizes, prev, pager, next",
                            total: _vm.total
                          },
                          on: {
                            "size-change": _vm.handleSizeChange,
                            "current-change": _vm.handleCurrentChange
                          }
                        })
                      ],
                      1
                    )
                  ]
                )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            title: "Are You Sure, You want to delete selected data?",
            visible: _vm.deleteDialogVisible,
            width: "60%"
          },
          on: {
            "update:visible": function($event) {
              _vm.deleteDialogVisible = $event
            }
          }
        },
        [
          _c("div", { staticClass: "modal_body" }, [
            _c("p", [
              _vm._v("All the status assoscilate with this will be deleted")
            ])
          ]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.deleteDialogVisible = false
                    }
                  }
                },
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.deleteNow()
                    }
                  }
                },
                [_vm._v("Confirm")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            title: "Are You Sure, You want to change these selected data?",
            visible: _vm.selectVisibleForBulkAction,
            width: "60%"
          },
          on: {
            "update:visible": function($event) {
              _vm.selectVisibleForBulkAction = $event
            }
          }
        },
        [
          _c("div", { staticClass: "modal_body" }, [
            _c("p", [
              _vm._v(
                "All the status assoscilate with this will be " +
                  _vm._s(_vm.bulkValue)
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.selectVisibleForBulkAction = false
                    }
                  }
                },
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.multipleSelectActionForBulkAction()
                    }
                  }
                },
                [_vm._v("Confirm")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _vm.addProjectModal
        ? _c("add-project", {
            attrs: {
              openModal: _vm.addProjectModal,
              form: _vm.form,
              formLabelWidth: _vm.formLabelWidth
            },
            on: {
              openProjectAddModal: _vm.openDialogModal,
              addedProject: _vm.addedProject
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.openEditModal
        ? _c("edit-project", {
            attrs: {
              openModalEdit: _vm.openEditModal,
              form: _vm.form,
              formLabelWidth: _vm.formLabelWidth
            },
            on: {
              openProjectEditModal: _vm.openEditDialogModal,
              editedProject: _vm.editedProject
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Common/Welcome.vue":
/*!*****************************************!*\
  !*** ./resources/js/Common/Welcome.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Welcome_vue_vue_type_template_id_7dca323c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Welcome.vue?vue&type=template&id=7dca323c& */ "./resources/js/Common/Welcome.vue?vue&type=template&id=7dca323c&");
/* harmony import */ var _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Welcome.vue?vue&type=script&lang=js& */ "./resources/js/Common/Welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Welcome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Welcome.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/Common/Welcome.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Welcome_vue_vue_type_template_id_7dca323c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Welcome_vue_vue_type_template_id_7dca323c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Common/Welcome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Common/Welcome.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Common/Welcome.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Common/Welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Common/Welcome.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************!*\
  !*** ./resources/js/Common/Welcome.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Common/Welcome.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Common/Welcome.vue?vue&type=template&id=7dca323c&":
/*!************************************************************************!*\
  !*** ./resources/js/Common/Welcome.vue?vue&type=template&id=7dca323c& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_7dca323c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=template&id=7dca323c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Common/Welcome.vue?vue&type=template&id=7dca323c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_7dca323c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_7dca323c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/todos/project/project_crud/add_project.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/todos/project/project_crud/add_project.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_project_vue_vue_type_template_id_3fd39a51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_project.vue?vue&type=template&id=3fd39a51& */ "./resources/js/pages/todos/project/project_crud/add_project.vue?vue&type=template&id=3fd39a51&");
/* harmony import */ var _add_project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_project.vue?vue&type=script&lang=js& */ "./resources/js/pages/todos/project/project_crud/add_project.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_project_vue_vue_type_template_id_3fd39a51___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_project_vue_vue_type_template_id_3fd39a51___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/todos/project/project_crud/add_project.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/todos/project/project_crud/add_project.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/todos/project/project_crud/add_project.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add_project.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/todos/project/project_crud/add_project.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/todos/project/project_crud/add_project.vue?vue&type=template&id=3fd39a51&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/pages/todos/project/project_crud/add_project.vue?vue&type=template&id=3fd39a51& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_project_vue_vue_type_template_id_3fd39a51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./add_project.vue?vue&type=template&id=3fd39a51& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/todos/project/project_crud/add_project.vue?vue&type=template&id=3fd39a51&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_project_vue_vue_type_template_id_3fd39a51___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_project_vue_vue_type_template_id_3fd39a51___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/todos/project/project_crud/edit_project.vue":
/*!************************************************************************!*\
  !*** ./resources/js/pages/todos/project/project_crud/edit_project.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_project_vue_vue_type_template_id_aefb2b04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit_project.vue?vue&type=template&id=aefb2b04& */ "./resources/js/pages/todos/project/project_crud/edit_project.vue?vue&type=template&id=aefb2b04&");
/* harmony import */ var _edit_project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit_project.vue?vue&type=script&lang=js& */ "./resources/js/pages/todos/project/project_crud/edit_project.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_project_vue_vue_type_template_id_aefb2b04___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_project_vue_vue_type_template_id_aefb2b04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/todos/project/project_crud/edit_project.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/todos/project/project_crud/edit_project.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/todos/project/project_crud/edit_project.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit_project.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/todos/project/project_crud/edit_project.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/todos/project/project_crud/edit_project.vue?vue&type=template&id=aefb2b04&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/pages/todos/project/project_crud/edit_project.vue?vue&type=template&id=aefb2b04& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_project_vue_vue_type_template_id_aefb2b04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit_project.vue?vue&type=template&id=aefb2b04& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/todos/project/project_crud/edit_project.vue?vue&type=template&id=aefb2b04&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_project_vue_vue_type_template_id_aefb2b04___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_project_vue_vue_type_template_id_aefb2b04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/todos/project/projects.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/todos/project/projects.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects_vue_vue_type_template_id_f5c3a18a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.vue?vue&type=template&id=f5c3a18a& */ "./resources/js/pages/todos/project/projects.vue?vue&type=template&id=f5c3a18a&");
/* harmony import */ var _projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.vue?vue&type=script&lang=js& */ "./resources/js/pages/todos/project/projects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _projects_vue_vue_type_template_id_f5c3a18a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _projects_vue_vue_type_template_id_f5c3a18a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/todos/project/projects.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/todos/project/projects.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/todos/project/projects.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./projects.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/todos/project/projects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/todos/project/projects.vue?vue&type=template&id=f5c3a18a&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/todos/project/projects.vue?vue&type=template&id=f5c3a18a& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_template_id_f5c3a18a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./projects.vue?vue&type=template&id=f5c3a18a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/todos/project/projects.vue?vue&type=template&id=f5c3a18a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_template_id_f5c3a18a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_template_id_f5c3a18a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);