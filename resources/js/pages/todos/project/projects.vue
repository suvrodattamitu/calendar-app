<template>

    <div v-loading="loading" element-loading-text="Loading...Please Wait..." class="wppayforms">

        <el-row style="margin-top:60px;">
            <el-col :md="{span: 22, offset: 1}">

                <!-- start: PAGE CONTENT -->
                <div v-if="!projects.length">
                <welcome :additionalData="welcomeData" @createNewOne="createProject"></welcome>
                </div>

                <!--We Have forms Now Start-->
                <div v-else class="all_payforms_wrapper payform_section">
                    
                    <!--Header start-->
                    <div class="payform_section_header all_payment_form_wrapper">
                        
                        <h1 class="payform_section_title">
                            {{ 'Projects' }}
                        </h1>
                        <div class="payform_section_actions">

                            <div class="all_bulk_actions">
                                <el-select v-model="bulkValue" clearable placeholder="Select" size="mini">
                                <el-option
                                    v-for="item in bulkOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                                </el-select>
                                <el-button type="primary"  @click="doAction()" size="mini">Apply</el-button>
                            </div>

                            <div class="payform_action search_action">

                                <el-input @keyup.enter.native="allProjects()" size="small" placeholder="Search" v-model="search_string" class="input-with-select">
                                    <el-button @click="allProjects()" slot="append" icon="el-icon-search"></el-button>
                                </el-input>

                                <el-button class="payform_action_button" @click="createProject()" size="small" type="primary">
                                    {{ 'Add New Project'  }}
                                </el-button>

                            </div>
                            
                        </div>

                    </div>
                    <!--header end-->

                    <!--table start-->
                    <div class="payform_section_body">
                        <el-table style="width: 100%" :data="projects" @selection-change="handleSelectionChange" ref="multipleTable">
                        
                            <el-table-column type="selection" width="55">
                            </el-table-column>

                            <el-table-column type="expand" >
                            <template slot-scope="props">
                                <p>Id: {{ props.row.id }}</p>
                                <p>Name: {{ props.row.name }}</p>
                                <p>Created At: {{ props.row.created_at }}</p>
                            </template>
                            </el-table-column>

                            <el-table-column
                                label="Id"
                                prop="id">
                            </el-table-column>

                            <el-table-column
                            label="Name"
                            >
                            <template slot-scope="scope">
                                <router-link 
                                    :to="{ name: 'project', params: { project_slug: scope.row.slug } }">
                                    {{ scope.row.name }}
                                </router-link>
                            </template>
                            </el-table-column>

                            <el-table-column 
                            label="Description"
                            prop="description">
                            </el-table-column>

                            <el-table-column
                                label="Status">

                                <template slot-scope="scope">
                                {{ scope.row.completed === 'complete'?'Completed':'Pending' }}
                                </template>
                            </el-table-column>

                            <el-table-column
                                label="Due date">
                                <template slot-scope="scope">
                                {{ $dateFormat(scope.row.duedate) }}
                            </template>

                            </el-table-column>

                            <el-table-column label="Actions">
                                <template slot-scope="scope">
                                    <a @click="confirmEdit(scope.row)"><i class="el-icon-edit"></i></a>
                                    <a @click="confirmDelete(scope.row)"><i class="el-icon-delete"></i></a>
                                </template>
                            </el-table-column>

                        </el-table>
                    </div>
                    <!--table end-->

                    <div class="fluentpos_pagination">
                        <el-pagination
                            background
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="page_number"
                            :page-size="per_page"
                            :page-sizes="pageSizes"
                            layout="total, sizes, prev, pager, next"
                            :total="total">
                        </el-pagination>
                    </div>

                </div>
                <!-- end: PAGE CONTENT -->

            </el-col>
        </el-row>


        <!-- Delete form Confimation Modal -->
        <el-dialog
            title="Are You Sure, You want to delete selected data?"
            :visible.sync="deleteDialogVisible"
            width="60%">
            <div class="modal_body">
                <p>All the status assoscilate with this will be deleted</p>                     
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="deleteDialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="deleteNow()">Confirm</el-button>
            </span>
        </el-dialog>

        <!-- Delete Multiple form Confimation Modal -->
        <el-dialog
            title="Are You Sure, You want to change these selected data?"
            :visible.sync="selectVisibleForBulkAction"
            width="60%">
            <div class="modal_body">
                <p>All the status assoscilate with this will be {{ bulkValue }}</p>                     
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="selectVisibleForBulkAction = false">Cancel</el-button>
                <el-button type="primary" @click="multipleSelectActionForBulkAction()">Confirm</el-button>
            </span>
        </el-dialog>

        <add-project 
            v-if="addProjectModal"
            :openModal="addProjectModal"
            :form="form"
            :formLabelWidth="formLabelWidth"
            @openProjectAddModal="openDialogModal"
            @addedProject="addedProject"
        >
        </add-project>

        <edit-project
            v-if="openEditModal"
            :openModalEdit="openEditModal"
            :form="form"
            :formLabelWidth="formLabelWidth"
            @openProjectEditModal="openEditDialogModal"
            @editedProject="editedProject"
        >

        </edit-project>

        

    </div>

</template>

<script>

import Welcome from './../../../Common/Welcome';
import AddProject from './project_crud/add_project';
import EditProject from './project_crud/edit_project';

import moment from 'moment';

export default {
    
    data() {

        return {

            loading:false,

            //table selection checkbox
            multipleSelection:[],

            //table pagination
            per_page: 10,
            page_number: 1,
            total: 0,
            pageSizes: [5,10, 20, 30, 40, 50, 100, 200],

            projects : [],
            search_string : '',
            hasProjects : false,

            deletingData : false,
            deleteDialogVisible : false,

            editingData:false,

            //bulk options
            bulkValue:'',
            bulkOptions:[
                {
                    value: 'delete',
                    label: 'Delete All'
                },
                {
                    value: 'pending',
                    label: 'Pending'
                },
                {
                    value: 'complete',
                    label: 'Completed'
                },
            ],
            selectVisibleForBulkAction:false,

            welcomeData:{
              'name':'Project'
            },

            addProjectModal:false,
            openEditModal:false,

            form: {
              name: '',
              description: '',
              duedate:''
            },

            formLabelWidth: '120px',
            errors:[]

        }
        
    },

    components:{ Welcome,AddProject,EditProject },

    methods: {

        addedProject(){
            this.addProjectModal = false;
            this.allProjects();
        },

        editedProject(){

            this.openEditModal = false;
            this.allProjects();
        },

        openDialogModal(val){
            this.addProjectModal = val;
        },

        openEditDialogModal(val){
            this.openEditModal = val;
        },

        $dateFormat(date) {

            let format = 'MMM DD, YYYY';
            let dateString = (date === undefined) ? null : date;
            let dateObj = moment(dateString);
            return dateObj.isValid() ? dateObj.format(format) : null;

        },

        createProject() {

          this.errors = [];
          this.form = {};
          this.addProjectModal = true;

        },

        //table selection checkbox
        handleSelectionChange(val) {

          this.multipleSelection = val;
            
        },
        
        //table pagination
        handleSizeChange(val) {

          this.per_page = val;
          this.allProjects();

        },

        handleCurrentChange(val) {

            this.page_number = val;
            this.allProjects();

        },

        addNewProject() {
          //  this.$router.push('/admin/add-category');
        },

        allProjects(){
          this.loading = true;
          let page = this.page_number;
          let perPage =  this.per_page;
          let search  = this.search_string;

          axios.get('/all-projects/?page='+page+'&paginate='+perPage+'&s='+search)
                .then(response => {

                    let all_projects  = response.data.projects.data;
                    this.projects     = all_projects;
                    this.total        = response.data.total;
                    this.hasProjects  = all_projects.length;

                })
                .catch(error => {
                    console.log(error.response);
                })
                .then(() => {
                    this.loading = false;  
                });

        },

        //categories crud delete
        confirmDelete(deleteData) {

            this.deletingData = deleteData;
            this.deleteDialogVisible = true;

        },

        deleteNow() {
            
            let slug = this.deletingData.slug;

            axios.delete('/project/delete/'+slug)
                .then(response => {
                    
                    this.$notify({
                        title: 'Success',
                        message: 'Successfully Deleted!',
                        type: 'success',
                        position: 'top-right'
                    });

                    this.allProjects();

                })
                .catch(error => {

                    this.$notify({

                        title: 'Error',
                        message: error.responseJSON?error.responseJSON.data.message:'Error',
                        type: 'error',
                        position: 'top-right'

                    });

                })
                .then(() => {

                    this.deleteDialogVisible = false;

                });
        },

        //categories crud update
        confirmEdit(editData) {


            this.loading = true;
            this.errors = [];

            axios.get('/project/'+editData.slug)
            .then(response => {

                this.form = response.data.project;
                this.openEditModal = true;

            })
                .catch(error => {

                    console.log(error);

                })
                .then(() => {

                    this.loading = false; 

                });


        },

        //bulk actions dialog modal
        doAction() {

            if (!this.multipleSelection.length || !this.bulkValue) {

              this.$notify({

                  title: 'Error',
                  message: 'Please select one to continue',
                  type: 'error',
                  position: 'top-right'

              });

            }else {

                this.selectVisibleForBulkAction = true;
            
            }

        },

        //bulk actions action 
        multipleSelectActionForBulkAction() {

            let bulkAction = this.bulkValue;

            axios.post('/projects/bulk-action-multiple', {

                rows: this.multipleSelection,
                bulk: bulkAction, 

            })
                .then(response => {
                    this.$notify({

                        title: 'Success',
                        message: bulkAction+' successfull\'y!',
                        type: 'success',
                        position: 'top-right'

                    });
                    this.allProjects();
                })
                .catch(error => {
                    this.$notify({

                        title: 'Error',
                        message: 'Can\'t '+bulkAction,
                        type: 'error',
                        position: 'top-right'

                    });
                })
                .then(() => {

                    this.selectVisibleForBulkAction = false;

                });

        }

    },

    mounted() {

        this.allProjects();

    }

}
</script>
