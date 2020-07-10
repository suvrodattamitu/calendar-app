<template>
    <div>
        <!-- Add new Expense modal -->
        <el-dialog title="Add New Expense" :visible.sync="openAddModal" width="80%" :close-on-click-modal="false">
            <el-form :model="form">
                <el-form-item label="Name" :label-width="formLabelWidth">
                    <el-input type="text" v-model="form.name" placeholder="Expense Name" autocomplete="off"></el-input>
                    <p class="error-warning" v-if="errors.name">{{errors.name[0]}}</p>
                </el-form-item>
                <el-form-item label="Description" :label-width="formLabelWidth">
                    <el-input type="textarea" :rows="2" v-model="form.description" placeholder="Expense Description" autocomplete="off"></el-input>
                    <p class="error-warning" v-if="errors.description">{{errors.description[0]}}</p>
                </el-form-item>
                <el-form-item label="Amount" :label-width="formLabelWidth">
                    <el-input
                        v-model="form.amount"
                        type="number"
                        placeholder="Amount">
                    </el-input>
                    <p class="error-warning" v-if="errors.amount">{{errors.amount[0]}}</p>
                </el-form-item>
                 <el-form-item label="Note" :label-width="formLabelWidth">
                    <el-input
                        v-model="form.note"
                        type="textarea"
                        placeholder="Note">
                    </el-input>
                    <p class="error-warning" v-if="errors.note">{{errors.note[0]}}</p>
                </el-form-item>
                <el-form-item label="Date" :label-width="formLabelWidth">
                    <el-date-picker
                        v-model="form.expense_date"
                        type="date"
                        placeholder="Pick a day"
                        value-format="yyyy-MM-dd HH:mm:ss">
                    </el-date-picker>
                    <p class="error-warning" v-if="errors.expense_date">{{errors.expense_date[0]}}</p>
                </el-form-item>
                <el-form-item :label-width="formLabelWidth">
                <el-button type="primary" size="medium" @click="saveExpense">Save</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
export default {
    
    props:['openModal','form','formLabelWidth'],
    data() {
        return {
            openAddModal:this.openModal,
            errors:[]
        }
    },

    watch:{
        openAddModal(val){
            this.$emit('openExpenseAddModal', val);
        }
    },

    methods:{
        saveExpense() {

            this.loading = true;

            axios.post('/add-expense',this.form)
                .then(response => {

                    this.$emit('addedExpense', false);
                    this.$notify({

                        title: 'Success',
                        message: 'Expense Saved Successfuly!',
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
                    this.loading = false;
                });

        },
    }

}
</script>