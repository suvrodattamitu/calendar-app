<template>
    <div class="dashboard-container">
        <el-row>
            <el-col :span="24" :offset="1" class="button-group">
                <el-button type="primary" @click="redirectToExpenses">Expenses</el-button>
                <el-button type="primary" @click="redirectToIncomes">Incomes</el-button>
            </el-col>

            <el-col :span="6" :offset="1" class="card-col">

                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>Daily Report</span>
                        <el-button style="float: right; padding: 3px 0" type="text">
                            <i class="fa fa-bar-chart" aria-hidden="true"></i>
                        </el-button>
                    </div>
                    <div class="text item">
                        <p>{{'Total Income : 50000$'}}</p>
                        <p>{{'Total Expense : 40000$'}}</p>
                        <p>{{'Income - Expense = 10000$'}}</p>
                    </div>
                </el-card>

            </el-col>

            <el-col :span="6" :offset="1" class="card-col">

                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>Weekly Report</span>
                        <el-button style="float: right; padding: 3px 0" type="text">
                            <i class="fa fa-bar-chart" aria-hidden="true"></i>
                        </el-button>
                    </div>
                    <div class="text item">
                        <p>{{'Total Income : 50000$'}}</p>
                        <p>{{'Total Expense : 40000$'}}</p>
                        <p>{{'Income - Expense = 10000$'}}</p>
                    </div>
                </el-card>
                
            </el-col>

            <el-col :span="6" :offset="1" class="card-col">

                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>Monthly Report</span>
                        <el-button style="float: right; padding: 3px 0" type="text">
                            <i class="fa fa-bar-chart" aria-hidden="true"></i>
                        </el-button>
                    </div>
                    <div class="text item">
                        <p>{{'Total Income : 50000$'}}</p>
                        <p>{{'Total Expense : 40000$'}}</p>
                        <p>{{'Income - Expense = 10000$'}}</p>
                    </div>
                </el-card>
                
            </el-col>
            
            <el-col :span="6" :offset="1" class="card-col">

                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>Yearly Report</span>
                        <el-button style="float: right; padding: 3px 0" type="text">
                            <i class="fa fa-bar-chart" aria-hidden="true"></i>
                        </el-button>
                    </div>
                    <div class="text item">
                        <p>{{'Total Income : 50000$'}}</p>
                        <p>{{'Total Expense : 40000$'}}</p>
                        <p>{{'Income - Expense = 10000$'}}</p>
                    </div>
                </el-card>
                
            </el-col>

            <el-col :span="6" :offset="1" class="card-col">

                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>Yearly Report</span>
                        <el-button style="float: right; padding: 3px 0" type="text">
                            <i class="fa fa-bar-chart" aria-hidden="true"></i>
                        </el-button>
                    </div>
                    <div class="text item">
                        <p>{{'Total Income : 50000$'}}</p>
                        <p>{{'Total Expense : 40000$'}}</p>
                        <p>{{'Income - Expense = 10000$'}}</p>
                    </div>
                </el-card>
                
            </el-col>

            <el-col :span="6" :offset="1" class="card-col">

                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>Overall Report</span>
                        <el-button style="float: right; padding: 3px 0" type="text">
                            <i class="fa fa-bar-chart" aria-hidden="true"></i>
                        </el-button>
                    </div>
                    <div class="text item">
                        <p>{{'Total Income : 50000$'}}</p>
                        <p>{{'Total Expense : 40000$'}}</p>
                        <p>{{'Income - Expense = 10000$'}}</p>
                    </div>
                </el-card>
                
            </el-col>
        </el-row>
    </div>
</template>

<style lang="scss">

    .dashboard-container{
        margin-top:90px;

        .button-group{
            margin-bottom: 10px;
        }

        @media only screen and (max-width: 600px) {
            margin-top:170px;
        }

        .icon-style{
            margin-right: 5px;
            font-size:16px;
            font-weight: 700;
        }

       .text {
            font-size: 14px;
            .el-icon-date{
                margin-right: 5px;
                font-size:16px;
                font-weight: 700;
            }
        }

        .item {
            margin-bottom: 18px;
        }

        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }
        .clearfix:after {
            clear: both
        }

        .card-col {
            width: 300px;
            margin-bottom:15px;
            .box-card{
                width: 100%;
            }
        }
    }

</style>

<script>

import moment from 'moment';

export default {

    data(){
        return {
            
        }
    },

    methods:{

        redirectToExpenses(){
            this.$router.push('/admin/budgets/expenses')
        },

        redirectToIncomes(){
            this.$router.push('/admin/budgets/incomes')
        }
       
    },

    mounted(){
        console.log('Dashboard');
    }
}
</script>