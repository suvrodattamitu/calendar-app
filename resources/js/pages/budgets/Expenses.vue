<template>

    <div v-loading="loading" element-loading-text="Loading...Please Wait..." class="wppayforms">

        <el-row style="margin-top:60px;">
            <el-col :md="{span: 22, offset: 1}">
                <!-- start: PAGE HEADER -->
               
                <ol class="breadcrumb">
                    <li>
                        <i class="clip-file"></i>
                        <router-link to="/admin/budgets">
                            Budgets
                        </router-link>
                    </li>
                    <li class="active">
                        Expenses
                    </li>
                </ol>
                    
                <!-- end: PAGE HEADER -->

                <!-- start: PAGE CONTENT -->
                <div v-if="!expenses.length">
                    <welcome :additionalData="welcomeData" 
                        @createNewOne="createExpense">
                    </welcome>
                </div>

                <!--We Have forms Now Start-->
                <div v-else class="all_payforms_wrapper payform_section">
                    
                    <!--Header start-->
                    <div class="payform_section_header all_payment_form_wrapper">
                        
                        <h1 class="payform_section_title">
                            {{ 'Expenses' }}
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

                                <el-input @keyup.enter.native="allExpenses()" size="small" placeholder="Search" v-model="search_string" class="input-with-select">
                                    <el-button @click="allExpenses()" slot="append" icon="el-icon-search"></el-button>
                                </el-input>

                                <el-button class="payform_action_button" @click="createExpense()" size="small" type="primary">
                                    {{ 'Add New Expense'  }}
                                </el-button>

                            </div>
                            
                        </div>

                    </div>
                    <!--header end-->

                    <!--table start-->
                    <div class="payform_section_body">
                        <el-table style="width: 100%" :data="expenses" @selection-change="handleSelectionChange" ref="multipleTable">
                        
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
                                    :to="{ name: 'expense', params: { expense_slug: scope.row.slug } }">
                                    {{ scope.row.name }}
                                </router-link>
                            </template>
                            </el-table-column>

                            <el-table-column 
                            label="Description"
                            prop="description">
                            </el-table-column>


                            <el-table-column
                                label="Due date">
                                <template slot-scope="scope">
                                {{ $dateFormat(scope.row.expense_date) }}
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

        <add-expense 
            v-if="addExpenseModal"
            :openModal="addExpenseModal"
            :form="form"
            :formLabelWidth="formLabelWidth"
            @openExpenseAddModal="openDialogModal"
            @addedExpense="addedExpense"
        >
        </add-expense>

        <edit-expense
            v-if="openEditModal"
            :openModalEdit="openEditModal"
            :form="form"
            :formLabelWidth="formLabelWidth"
            @openExpenseEditModal="openEditDialogModal"
            @editedExpense="editedExpense"
        >

        </edit-expense>

        

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
import AddExpense from './expenses/AddExpense';
import EditExpense from './expenses/EditExpense';

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

            expenses : [],
            search_string : '',
            hasExpenses : false,

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
              'name':'Expense'
            },

            addExpenseModal:false,
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

    components:{ Welcome,AddExpense,EditExpense },

    methods: {

        addedExpense(){
            console.log('here i am');
            this.addExpenseModal = false;
            this.allExpenses();
        },

        editedExpense(){

            console.log('here i am');
            this.openEditModal = false;
            this.allExpenses();
        },

        openDialogModal(val){
            this.addExpenseModal = val;
            //console.log()
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

        createExpense() {

          this.errors = [];
          this.form = {};
          this.addExpenseModal = true;

        },

        //table selection checkbox
        handleSelectionChange(val) {

          this.multipleSelection = val;
            
        },
        
        //table pagination
        handleSizeChange(val) {

          this.per_page = val;
          this.allExpenses();

        },

        handleCurrentChange(val) {

            this.page_number = val;
            this.allExpenses();

        },

        addNewExpense() {
          //  this.$router.push('/admin/add-category');
        },

        allExpenses(){
          this.loading = true;
          let page = this.page_number;
          let perPage =  this.per_page;
          let search  = this.search_string;

          axios.get('/all-expenses/?page='+page+'&paginate='+perPage+'&s='+search)
                .then(response => {

                    let all_expenses  = response.data.expenses.data;
                    this.expenses     = all_expenses;
                    this.total        = response.data.total;
                    this.hasExpenses  = all_expenses.length;
                    console.log(response.data);

                })
                .catch(error => {
                    // if(error.response.status === 500){
                    //     this.allExpenses();
                    // }
                    console.log('errors found ',error.response);
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

            axios.delete('/expense/delete/'+id)
                .then(response => {
                    
                    console.log(response.data);

                    this.$notify({
                        title: 'Success',
                        message: 'Successfully Deleted!',
                        type: 'success',
                        position: 'top-right'
                    });

                    this.allExpenses();

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

            axios.get('/expense/'+editData.id)
            .then(response => {

               
                this.form = response.data.expense;
                console.log('i am call')
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

            axios.post('/expenses/delete-multiple', {

                rows: this.multipleSelection,
                bulk: bulkAction, 

            })
                .then(response => {

                    console.log(response.data);
                    this.$notify({

                        title: 'Success',
                        message: bulkAction+' successfull\'y!',
                        type: 'success',
                        position: 'top-right'

                    });

                    this.allExpenses();

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

        this.allExpenses();

    }

}
</script>
