<template>

    <div v-loading="loading" element-loading-text="Loading...Please Wait..." class="wppayforms">

        <!-- start: PAGE HEADER -->
        <div class="row">
            <div class="col-sm-12">
                <!-- start: PAGE TITLE & BREADCRUMB -->
                <ol class="breadcrumb">
                    <li>
                        <i class="clip-file"></i>
                        <router-link to="/admin">
                            Dashboard
                        </router-link>
                    </li>
                    <li class="active">
                        Projects / All Projects
                    </li>
                </ol>
                <!-- end: PAGE TITLE & BREADCRUMB -->
            </div>
        </div>
        <!-- end: PAGE HEADER -->

        <!-- start: PAGE CONTENT -->
        <div v-if="!projects.length">
          <welcome :additionalData="welcomeData" @createNewOne="createProject"></welcome>
        </div>

        <!--We Have forms Now Start-->
        <div v-else class="all_payforms_wrapper payform_section">
            
            <!--Header start-->
            <div class="payform_section_header all_payment_form_wrapper">
                
                <h1 class="payform_section_title">
                    {{ 'All Projects' }}
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
                    prop="name">
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

        <!-- Add new Project modal -->
        <el-dialog title="Add New Project" :visible.sync="addProjectModal" width="80%" :close-on-click-modal="false">
            <el-form :model="form">
              <el-form-item label="Name" :label-width="formLabelWidth">
                <el-input type="text" v-model="form.name" placeholder="Project Name" autocomplete="off"></el-input>
                <p class="error-warning" v-if="errors.name">{{errors.name[0]}}</p>
              </el-form-item>
              <el-form-item label="Description" :label-width="formLabelWidth">
                <el-input type="textarea" :rows="2" v-model="form.description" placeholder="Project Description" autocomplete="off"></el-input>
                <p class="error-warning" v-if="errors.description">{{errors.description[0]}}</p>
              </el-form-item>
              <el-form-item label="Date" :label-width="formLabelWidth">
                <el-date-picker
                  v-model="form.duedate"
                  type="date"
                  placeholder="Pick a day"
                  value-format="yyyy-MM-dd HH:mm:ss">
                </el-date-picker>
                <p class="error-warning" v-if="errors.duedate">{{errors.duedate[0]}}</p>
              </el-form-item>
              <el-form-item :label-width="formLabelWidth">
                <el-button type="primary" size="medium" @click="saveProject">Save</el-button>
              </el-form-item>
            </el-form>
        </el-dialog>

        <!-- Edit Project Modal -->
        <el-dialog title="Edit Project" :visible.sync="openEditModal" width="80%" :close-on-click-modal="false">
            <el-form :model="form">
              <el-form-item label="Name" :label-width="formLabelWidth">
                <el-input type="text" v-model="form.name" placeholder="Project Name" autocomplete="off"></el-input>
                <p class="error-warning" v-if="errors.name">{{errors.name[0]}}</p>
              </el-form-item>
              <el-form-item label="Description" :label-width="formLabelWidth">
                <el-input type="textarea" :rows="2" v-model="form.description" placeholder="Project Description" autocomplete="off"></el-input>
                <p class="error-warning" v-if="errors.description">{{errors.description[0]}}</p>
              </el-form-item>
              <el-form-item label="Date" :label-width="formLabelWidth">
                <el-date-picker
                  v-model="form.duedate"
                  type="date"
                  placeholder="Pick a day"
                  value-format="yyyy-MM-dd HH:mm:ss">
                </el-date-picker>
                <p class="error-warning" v-if="errors.duedate">{{errors.duedate[0]}}</p>
              </el-form-item>
              <el-form-item :label-width="formLabelWidth">
                <el-button type="primary" size="medium" @click="updateProject">Update</el-button>
              </el-form-item>
            </el-form>
        </el-dialog>

    </div>

</template>

<style lang="scss">
    .error-warning{
      color:#ff0000;
    }
    .payform_section_actions{

      display:flex;
      justify-content: space-between;

      .el-button{
        color:#ffffff;
      }

      @media only screen and (max-width: 600px) {

          display:flex;
          flex-direction:column;

      }

      .search_action_orders{
          display: flex;
          align-items: flex-end;
      }

      .payform_action{
          display:flex;
          flex-direction: row;

          @media only screen and (max-width: 600px) {
              margin-top: 10px;
          }

          .payform_action_button{
              margin-left:5px;
          }
      }

  }

  .payform_section_body{
      margin-top: 15px;
      .el-badge {
          margin-top: 5px;
      }
  }

</style>

<script>

import Welcome from './../../Common/Welcome';
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
            bulkOptions:[{
                value: 'delete',
                label: 'Delete All'
            }],
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

    components:{ Welcome },

    methods: {

        updateProject(){

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

        saveProject() {

            this.loading = true;

            axios.post('/add-project',this.form)
              .then(response => {

                  console.log(response);

                  this.addProjectModal = false;

                  this.allProjects();

                  this.$notify({

                      title: 'Success',
                      message: 'Project Saved Successfuly!',
                      type: 'success',
                      position: 'top-right'

                  });

              })
              .catch(error => {

                  if(error.response){

                    this.errors = error.response.data.errors;

                  }else{

                      this.$notify({

                          title: 'Error',
                          message: 'Something went wrong!',
                          type: 'error',
                          position: 'top-right'

                      }); 

                  }
              })
              .then(() => {
                //this.addProjectModal = false;
                this.loading = false;
              });

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
                console.log(all_projects);

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

            this.deletingData = deleteData;
            this.deleteDialogVisible = true;

        },

        deleteNow() {
            
            let id = this.deletingData.id;

            axios.delete('/category/delete/'+id)
            .then(response => {
                
                this.$notify({
                    title: 'Success',
                    message: 'Successfully Deleted!',
                    type: 'success',
                    position: 'top-right'
                });
                this.allCategories();

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
                //console.log(response.data);
                // this.itemName = response.data.editData.name;
                // this.hasEditData = true;

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

            }else if (this.bulkValue == 'delete') {

                this.selectVisibleForBulkAction = true;
            
            }

        },

        //bulk actions action 
        multipleSelectActionForBulkAction() {

            let bulkAction = this.bulkValue;

            axios.post('/categories/deletemultiple', {

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

                    this.allCategories();

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
