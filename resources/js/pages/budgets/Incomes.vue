<template>

    <div v-loading="loading" element-loading-text="Loading...Please Wait..." class="wppayforms">

        <el-row style="margin-top:60px;">
            <el-col :md="{span: 22, offset: 1}">
                <!-- start: PAGE HEADER -->
                <div class="el-row">
                    <div class="col-sm-12">
                        <ol class="breadcrumb">
                            <li>
                                <i class="clip-file"></i>
                                <router-link to="/admin/budgets">
                                    Budgets
                                </router-link>
                            </li>
                            <li class="active">
                                Incomes
                            </li>
                        </ol>
                    </div> 
                </div>
                    
                <!-- end: PAGE HEADER -->

                <!-- start: PAGE CONTENT -->
                <div v-if="!incomes.length">
                    <welcome :additionalData="welcomeData" @createNewOne="createIncome"></welcome>
                </div>

                <!--We Have forms Now Start-->
                <div v-else class="all_payforms_wrapper payform_section">
                    
                    <!--Header start-->
                    <div class="payform_section_header all_payment_form_wrapper">
                        
                        <h1 class="payform_section_title">
                            {{ 'Incomes' }}
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

                                <el-input @keyup.enter.native="allIncomes()" size="small" placeholder="Search" v-model="search_string" class="input-with-select">
                                    <el-button @click="allIncomes()" slot="append" icon="el-icon-search"></el-button>
                                </el-input>

                                <el-button class="payform_action_button" @click="createIncome()" size="small" type="primary">
                                    {{ 'Add New Income'  }}
                                </el-button>

                            </div>
                            
                        </div>

                    </div>
                    <!--header end-->

                    <!--table start-->
                    <div class="payform_section_body">
                        <el-table style="width: 100%" :data="incomes" @selection-change="handleSelectionChange" ref="multipleTable">
                        
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
                                label="Amount"
                                prop="amount"
                            >
                            </el-table-column>

                            <el-table-column
                                label="Due date">
                                <template slot-scope="scope">
                                {{ $dateFormat(scope.row.income_date) }}
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

        <add-income 
            v-if="addIncomeModal"
            :openModal="addIncomeModal"
            :form="form"
            :formLabelWidth="formLabelWidth"
            @openIncomeAddModal="openDialogModal"
            @addedIncome="addedIncome"
        >
        </add-income>

        <edit-income
            v-if="openEditModal"
            :openModalEdit="openEditModal"
            :form="form"
            :formLabelWidth="formLabelWidth"
            @openIncomeEditModal="openEditDialogModal"
            @editedIncome="editedIncome"
        >

        </edit-income>

        

    </div>

</template>

<script>


import Welcome from './../../Common/Welcome';
import AddIncome from './incomes/AddIncome';
import EditIncome from './incomes/EditIncome';

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

            incomes : [],
            search_string : '',
            hasIncomes : false,

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
              'name':'Income'
            },

            addIncomeModal:false,
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

    components:{ Welcome,AddIncome,EditIncome },

    methods: {

        addedIncome(){
            console.log('here i am');
            this.addIncomeModal = false;
            this.allIncomes();
        },

        editedIncome(){

            console.log('here i am');
            this.openEditModal = false;
            this.allIncomes();
        },

        openDialogModal(val){
            this.addIncomeModal = val;
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

        createIncome() {

          this.errors = [];
          this.form = {};
          this.addIncomeModal = true;

        },

        //table selection checkbox
        handleSelectionChange(val) {

          this.multipleSelection = val;
            
        },
        
        //table pagination
        handleSizeChange(val) {

          this.per_page = val;
          this.allIncomes();

        },

        handleCurrentChange(val) {

            this.page_number = val;
            this.allIncomes();

        },

        addNewIncome() {
          //  this.$router.push('/admin/add-category');
        },

        allIncomes(){
          this.loading = true;
          let page = this.page_number;
          let perPage =  this.per_page;
          let search  = this.search_string;

          axios.get('/all-incomes/?page='+page+'&paginate='+perPage+'&s='+search)
                .then(response => {

                    let all_incomes  = response.data.incomes.data;
                    this.incomes     = all_incomes;
                    this.total        = response.data.total;
                    this.hasIncomes  = all_incomes.length;
                    console.log(response.data);

                })
                .catch(error => {
                    // if(error.response.status === 500){
                    //     this.allIncomes();
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

            axios.delete('/income/delete/'+id)
                .then(response => {
                    
                    console.log(response.data);

                    this.$notify({
                        title: 'Success',
                        message: 'Successfully Deleted!',
                        type: 'success',
                        position: 'top-right'
                    });

                    this.allIncomes();

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

            axios.get('/income/'+editData.id)
            .then(response => {

               
                this.form = response.data.income;
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

            axios.post('/incomes/delete-multiple', {

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

                    this.allIncomes();

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

        this.allIncomes();

    }

}
</script>
