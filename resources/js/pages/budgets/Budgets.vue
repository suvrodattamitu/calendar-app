<template>
    <div class="dashboard-container" v-loading="loading" element-loading-text="Loading...Please Wait...">
        
        <el-row>
            <div :md="12" :offset="1" class="button-group">
                <el-button type="primary" @click="redirectToExpenses">Expenses</el-button>
                <el-button type="primary" @click="redirectToIncomes">Incomes</el-button>
            </div>
        </el-row>

        <el-row>
            <div class="cards-container">
                <el-col :md="7" class="card-col">

                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>Daily Report</span>
                            <el-button style="float: right; padding: 3px 0" type="text">
                                <i class="fa fa-bar-chart" aria-hidden="true"></i>
                            </el-button>
                        </div>
                        <div class="text item">
                            <p>Total Income : {{ dailyIncome }}  <span v-html="globalSettings.currency_symbol"></span></p>
                            <p>Total Expense : {{ dailyExpense }} <span v-html="globalSettings.currency_symbol"></span></p>
                            <p>Income - Expense = {{ dailyIncome-dailyExpense }} <span v-html="globalSettings.currency_symbol"></span></p>
                        </div>
                    </el-card>

                </el-col>

                <el-col :md="7" class="card-col">

                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>Weekly Report</span>
                            <el-button style="float: right; padding: 3px 0" type="text">
                                <i class="fa fa-bar-chart" aria-hidden="true"></i>
                            </el-button>
                        </div>
                        <div class="text item">
                            <p>Total Income : {{ weeklyIncome }}  <span v-html="globalSettings.currency_symbol"></span></p>
                            <p>Total Expense : {{ weeklyExpense }} <span v-html="globalSettings.currency_symbol"></span></p>
                            <p>Income - Expense = {{ weeklyIncome-weeklyExpense }} <span v-html="globalSettings.currency_symbol"></span></p>
                        </div>
                    </el-card>
                    
                </el-col>

                <el-col :md="7" class="card-col">

                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>Monthly Report</span>
                            <el-button style="float: right; padding: 3px 0" type="text">
                                <i class="fa fa-bar-chart" aria-hidden="true"></i>
                            </el-button>
                        </div>
                        <div class="text item">
                            <p>Total Income : {{ monthlyIncome }}  <span v-html="globalSettings.currency_symbol"></span></p>
                            <p>Total Expense : {{ monthlyExpense }} <span v-html="globalSettings.currency_symbol"></span></p>
                            <p>Income - Expense = {{ monthlyIncome-monthlyExpense }} <span v-html="globalSettings.currency_symbol"></span></p>
                        </div>
                    </el-card>
                    
                </el-col>
            </div>
        </el-row>

        <el-row>
            <el-col :md="24" :offset="1" class="chart-details">
                <h4>Income VS Expense 2020</h4> 
                <div class="chart-container">
                    <div class="chart">
                        <line-chart 
                            v-if="datacollection && chartOptions"
                            :height="300"
                            :width="500" 
                            :chartdata="datacollection" 
                            :chartoption="chartOptions"
                        >
                        </line-chart>
                    </div>
                </div>
            </el-col>

            <!-- <el-col :xs="24" :span="6" class="nddiv">
                <h4>Income VS Expense 2020</h4> 
                <div class="chart-container">

                    <div class="chart">
                        <bar-chart 
                            v-if="datacollection && chartOptions" 
                            :chartdata="datacollection" 
                            :chartoption="chartOptions"
                        >
                        </bar-chart>
                    </div>
                </div>
            </el-col> -->

        </el-row>

    </div>
</template>

<style lang="scss">

    .button-group{
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        //margin:0px 8px;
        margin-right:72px;
    }

    .cards-container{
        display: flex;
        align-items: center;
        justify-content: center;
        // flex-direction: column;

        .card-col {
            margin:0px 8px;
            // width: 320px !important;
            // margin-bottom:15px;
            // .box-card{
            //     //width:320px;
            //     width: 100%;
            // }
        }

    }

    .chart-details{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .chart-container{
            display: flex;
            align-items: center;
            justify-content: center;
            width:500px;
            max-width: 500px;
            @media only screen and (max-width: 600px) {
                max-width: 320px;
            }
            .chart{
                width: 100%;
            }
        }
    }

    .dashboard-container{

        .nddiv{
            margin-left:3%;
        }

        margin-top:90px;

        .button-group{
            margin-bottom: 10px;
        }

        @media only screen and (max-width: 600px) {
            margin-top:170px;
        }

        // .chart-container {
        //     display: flex;
        //     border-radius: 6px;
        //     box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        //     background-color: #FFFFFF;
        //     color: #252422;
        //     margin-bottom: 20px;
        //     position: relative;
        //     z-index: 1;
        //     max-width: 320px;
        //     .chart {
        //         padding: 15px 15px 10px 15px;
        //         width: 100%;
        //         max-width: 300px;
        //     }
        // }

        
        
           
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

        
    }

</style>

<script>

import moment from 'moment';
import LineChart from './../../charts/LineChart';
import BarChart from './../../charts/BarChart';

export default {

    data(){
        return {
            datacollection : null,
            chartOptions : null,
            loading : false,

            dailyExpense : 0,
            dailyIncome : 0,
            monthlyExpense : 0,
            monthlyIncome : 0,
            weeklyExpense : 0,
            weeklyIncome : 0,
            loading: false

        }
    },

    components:{LineChart,BarChart},

    methods:{

        redirectToExpenses(){
            this.$router.push('/admin/budgets/expenses')
        },

        redirectToIncomes(){
            this.$router.push('/admin/budgets/incomes')
        },

        //charts
        fillData (incomes,expenses) {

            this.datacollection = {
                fill:true,
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                {
                    label: "Income",
                    data: [incomes.January, incomes.February, incomes.March, incomes.April, incomes.May, incomes.June, incomes.July, incomes.August, incomes.September, incomes.October, incomes.November, incomes.December],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 0.2)',
                    borderWidth: 1
                },
                {
                    label: "Expense",
                    data: [expenses.January, expenses.February, expenses.March, expenses.April, expenses.May, expenses.June, expenses.July, expenses.August, expenses.September, expenses.October, expenses.November, expenses.December],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor:	'rgba(255,99,132,1)',
                    borderWidth: 1
                }]
                    
            }

            this.chartOptions = {

                pieceLabel: {
                    render: 'label'
                }, 
                legend: {
                    position: 'bottom',
                },
                tooltips: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            label: function(tooltipItem, data) {
                                return $('.currency').val()+tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            },
                        }
                    },
                hover: {
                        mode: 'nearest',
                        intersect: true
                    },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true,
                            callback: function(value, index, values) {
                                if(parseInt(value) >= 1000){
                                return  $('.currency').val()+value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                } else {
                                return $('.currency').val() + value;
                                }
                            }
                        }
                    }]
                }
                    

            }
        },
        getRandomInt () {
            return Math.floor(Math.random() * (50 - 5 + 1)) + 5
        },

        getBudgets(){

            this.loading = true;
            axios.get('/get-budgets')
                .then(response => {

                    console.log(response.data);
                    //daily budget
                    this.dailyExpense = response.data.dailyExpense;
                    this.dailyIncome  = response.data.dailyIncome;

                    //weekly budget
                    this.weeklyExpense = response.data.weeklyExpense;
                    this.weeklyIncome  = response.data.weeklyIncome;

                    //monthly budget
                    this.monthlyExpense = response.data.monthlyExpense;
                    this.monthlyIncome  = response.data.monthlyIncome;

                    let incomes = response.data.incomes;
                    let expenses = response.data.expenses;

                    this.fillData(incomes,expenses);

                })
                .catch(error => {
                    console.log(error);
                })
                .then(() => {
                    this.loading = false;
                });

        }
       
    },

    mounted(){

        this.getBudgets();
    }
}
</script>