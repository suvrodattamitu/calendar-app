<template>

    <div v-loading="loading" element-loading-text="Loading...Please Wait..." class="wppayforms">

        <el-row style="margin-top:60px;">
            <el-col :md="{span: 22, offset: 1}">
                <!-- start: PAGE HEADER -->
                <div class="el-row">
                    <div class="col-sm-12">
                        <!-- start: PAGE TITLE & BREADCRUMB -->
                        <ol class="breadcrumb">
                            <li>
                                <i class="clip-file"></i>
                                <router-link to="/admin/todos">
                                    Projects
                                </router-link>
                            </li>
                            <li class="active">
                                {{project_slug}}
                            </li>
                        </ol>
                        <!-- end: PAGE TITLE & BREADCRUMB -->
                    </div>
                </div>

                <div class="el-row">
                    <div class="col-sm-12 header-introduction">
                        <div>
                            <h2>{{ project.name }}</h2>
                            <p>{{ project.description }}</p>
                        </div>
                        <p>Posted by {{user.name}} at {{ $getDate( project.created_at) }}</p>
                    </div>
                </div>

                <!-- start: PAGE CONTENT -->
                <div v-if="!has_tasks">
                    <welcome :additionalData="welcomeData" @createNewOne="createTask"></welcome>
                </div>

                <!--We Have forms Now Start-->
                <div v-else class="all_payforms_wrapper payform_section">
                    
                    <!--Header start-->
                    <div class="payform_section_header all_payment_form_wrapper">
                        
                        <h1 class="payform_section_title">
                            {{ 'Tasks' }}
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

                                <el-input @keyup.enter.native="getProjectWithTasksBySlug()" size="small" placeholder="Search" v-model="search_string" class="input-with-select">
                                    <el-button @click="getProjectWithTasksBySlug()" slot="append" icon="el-icon-search"></el-button>
                                </el-input>

                                <el-button class="payform_action_button" @click="createTask()" size="small" type="primary">
                                    {{ 'Add New Task'  }}
                                </el-button>

                            </div>
                            
                        </div>

                    </div>
                    <!--header end-->

                    <!--table start-->
                    <div class="payform_section_body">
                        <el-table style="width: 100%" :data="tasks" @selection-change="handleSelectionChange" ref="multipleTable">
                        
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
                            prop="name"
                            >
                            </el-table-column>

                            <el-table-column 
                            label="Description"
                            prop="description">
                            </el-table-column>

                            <el-table-column
                                label="Status">

                                <template slot-scope="scope">
                                {{ scope.row.completed?'Completed':'Pending' }}
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

        <add-task 
            v-if="openTaskModal"
            :openModal="openTaskModal"
            :form="taskForm"
            :formLabelWidth="formLabelWidth"
            :projectSlug="project_slug"
            @openTaskAddModal="openDialogModal"
            @addedTask="addedTask"
        >
        </add-task>

        <edit-task
            v-if="openEditModal"
            :openModalEdit="openEditModal"
            :form="taskForm"
            :formLabelWidth="formLabelWidth"
            @openTaskEditModal="openEditDialogModal"
            @editedTask="editedTask"
        >

        </edit-task>

    </div>
</template>


<style lang="scss">

    .header-introduction{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

</style>

<script>

import Welcome from './../../../../Common/Welcome';
import moment from 'moment';
import AddTask from './../../task/task_crud/add_task';
import EditTask from './../../task/task_crud/edit_task';

export default {

    components:{Welcome,AddTask,EditTask},

    data() {

        return {

            loading:false,
            project_slug:'',
            //table pagination
            per_page: 10,
            page_number: 1,
            total: 0,
            pageSizes: [5,10, 20, 30, 40, 50, 100, 200],
            search_string:'',
            project:{},
            tasks:[],
            has_tasks : false,

            welcomeData:{
              'name':'Task'
            },

            //bulk options
            bulkValue:'',
            bulkOptions:[{
                value: 'delete',
                label: 'Delete All'
            }],

            user:{},

            errors:{},
            taskForm:{
                name:'',
                description:'',
                duedata:''
            },
            openTaskModal:false,
            openEditModal:false,
            formLabelWidth: '120px',

            deletingData : false,
            deleteDialogVisible : false,
            selectVisibleForBulkAction:false,

        }

    },

    methods:{

        $getDate(str){
            if(str){
                return this.$dateFormat(str.substring(0, 10));
            }
        },

        confirmEdit(editData){

            this.loading = true;
            this.errors = [];

            axios.post('/project/task/'+editData.slug,{'project_slug':this.project_slug})
                .then(response => {

                    this.openEditModal = true;
                    this.taskForm = response.data.task;

                })
                .catch(error => {

                    console.log(error);

                })
                .then(() => {

                    this.loading = false; 

                });


      
        },

        editedTask(){
            this.openEditModal = false;
            this.allProjects();
        },

        openEditDialogModal(val){
            this.openEditModal = val;
        },

        //table selection checkbox
        handleSelectionChange(val) {

          this.multipleSelection = val;
            
        },
        
        //table pagination
        handleSizeChange(val) {

          this.per_page = val;
          this.getProjectWithTasksBySlug();

        },

        handleCurrentChange(val) {

            this.page_number = val;
            this.getProjectWithTasksBySlug();

        },

        $dateFormat(date) {

            let format = 'MMM DD, YYYY';
            let dateString = (date === undefined) ? null : date;
            let dateObj = moment(dateString);
            return dateObj.isValid() ? dateObj.format(format) : null;

        },

        addedTask(){
            this.openTaskModal = false;
            this.getProjectWithTasksBySlug();
        },

        openDialogModal(val){
            this.openTaskModal = val;
        },

        createTask(){

          this.errors = [];
          this.taskForm = {};
          this.openTaskModal = true;       

        },

        getProjectWithTasksBySlug(){

            this.loading    = true;
            let page        = this.page_number;
            let perPage     = this.per_page;
            let search      = this.search_string;
            let slug        = this.project_slug;

            axios.get('/get-project-tasks/?page='+page+'&paginate='+perPage+'&s='+search+'&slug='+slug)
                .then(response => {

                    let project  = response.data.project;
                    this.project = project;
                    this.tasks   = project.tasks;
                    this.has_tasks = project.tasks.length;
                    this.user    = project.user;
                    console.log(project.tasks.length);

                })
                .catch(error => {
                    console.log(error);
                })
                .then(() => {
                    this.loading = false;  
                });

        },

        //categories crud delete
        confirmDelete(deleteData) {
            console.log(deleteData);
            this.deletingData = deleteData;
            this.deleteDialogVisible = true;

        },

        deleteNow() {
            
            let slug = this.deletingData.slug;

            axios.post('/task/delete/'+slug,{'project_slug':this.project_slug})
                .then(response => {
                    
                    console.log(response.data);

                    this.$notify({
                        title: 'Success',
                        message: 'Successfully Deleted!',
                        type: 'success',
                        position: 'top-right'
                    });

                    this.getProjectWithTasksBySlug();

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

        //bulk actions dialog modal
        doAction() {

            if (!this.multipleSelection.length || !this.bulkValue) {

              this.$notify({

                  title: 'Error',
                  message: 'Please select one to continue',
                  type: 'error',
                  position: 'top-right'

              });

            }else if (this.bulkValue == 'delete') {

                this.selectVisibleForBulkAction = true;
            
            }

        },

        //bulk actions action 
        multipleSelectActionForBulkAction() {

            let bulkAction = this.bulkValue;

            axios.post('/tasks/delete-multiple', {

                rows: this.multipleSelection,
                bulk: bulkAction,
                project_slug: this.project_slug 

            })
                .then(response => {

                    console.log(response.data);
                    this.$notify({

                        title: 'Success',
                        message: bulkAction+' successfull\'y!',
                        type: 'success',
                        position: 'top-right'

                    });

                    this.getProjectWithTasksBySlug();

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

    mounted(){

        this.project_slug = this.$route.params.project_slug;
        this.getProjectWithTasksBySlug();
        
    }

}
</script>