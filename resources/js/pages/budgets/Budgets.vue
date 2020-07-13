<template>
    <div class="dashboard-container" v-loading="loading" element-loading-text="Loading...Please Wait...">
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

        </el-row>

        <el-row>
            <el-col 
                :xs="24" :span="6" :offset="1"
            >
                <h4>Income VS Expense 2020</h4> 
                <div class="chart-container">
                    <div class="chart">
                        <line-chart 
                            v-if="datacollection && chartOptions" 
                            :chartdata="datacollection" 
                            :chartoption="chartOptions"
                        >
                        </line-chart>
                    </div>
                </div>
            </el-col>

            <el-col 
                :xs="24" :span="6" class="nddiv"
            >
            <h4>Income VS Expense 2020</h4> 

                <div class="chart-container">
                    
                    <div class="chart">
                        <line-chart 
                            v-if="datacollection && chartOptions" 
                            :chartdata="datacollection" 
                            :chartoption="chartOptions"
                        >
                        </line-chart>
                    </div>
                </div>
            </el-col>

            <el-col 
                :xs="24" :span="6" class="nddiv"
            >
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
            </el-col>

        </el-row>

    </div>
</template>

<style lang="scss">

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

        .chart-container {
            display: flex;
            border-radius: 6px;
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
            background-color: #FFFFFF;
            color: #252422;
            margin-bottom: 20px;
            position: relative;
            z-index: 1;
            max-width: 320px;
            .chart {
                padding: 15px 15px 10px 15px;
                width: 100%;
                max-width: 300px;
            }
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
            width: 320px !important;
            margin-bottom:15px;
            .box-card{
                //width:320px;
                width: 100%;
            }
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
            datacollection:null,
            chartOptions:null,
            loading:false
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

            // let data = {
            //     ijan : null,
            //     ifeb : '',
            //     imar : '',
            //     iapr : null,
            //     imay : null,
            //     ijun : 0,
            //     ijul : 0,
            //     iags : 15,
            //     isep : 14,
            //     iokt : 1,
            //     inov : 8,
            //     ides : 40,

            //     ejan : 10,
            //     efeb : 10,
            //     emar : 10,
            //     eapr : 10,
            //     emay : 10,
            //     ejun : 10,
            //     ejul : 10,
            //     eags : 10,
            //     esep : 10,
            //     eokt : 10,
            //     enov : 10,
            //     edes : 10,
            // }

            this.datacollection = {
                fill:true,
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                {
                    label: "Income",
                    data: [incomes.January, incomes.February, incomes.March, incomes.April, incomes.May, incomes.June, incomes.July, incomes.August, incomes.Septermber, incomes.October, incomes.November, incomes.December],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 0.2)',
                    borderWidth: 1
                },
                {
                    label: "Expense",
                    data: [expenses.January, expenses.February, expenses.March, expenses.April, expenses.May, expenses.June, expenses.July, expenses.August, expenses.Septermber, expenses.October, expenses.November, expenses.December],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor:	'rgba(255,99,132,1)',
                    borderWidth: 1
                }]
                    
                // fill:true,
                // labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December'],
                // datasets: [{
                //     label: '# of Votes',
                //     data: [12, 19, 3, 5, 2, 3,15,5,20,10,2,6],
                //     backgroundColor:'transparent',
                //     borderColor: [
                //         'rgba(255, 99, 132, 1)',
                //     ],
                //     borderWidth: 4
                // }
                // ]
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
                    
                // responsive: true,
                // maintainAspectRatio: false,
                // legend: {
                //     display: true,
                //     labels: {
                //         fontColor: 'rgb(0, 0, 0)'
                //     },
                //     position: 'bottom'
                // },
                // scales: {
                //     display: true,
                //     scaleLabel: {
                //         display: true,
                //         labelString: 'Month'
                //     },
                //     yAxes: [{
                //         display: true,
                //         ticks: {
                //             beginAtZero: true
                //         },
                //         scaleLabel: {
				// 			display: true,
				// 			labelString: 'Value'
				// 		}
                //     }]
                // }

            }
        },
        getRandomInt () {
            return Math.floor(Math.random() * (50 - 5 + 1)) + 5
        },

        getBudgets(){

            this.loading = true;
            axios.get('/get-budgets')
                .then(response => {

                    // this.events     = response.data.events;
                    // this.projects   = response.data.projects;
                    // this.income     = response.data.income;
                    // this.expense    = response.data.expense;
                    console.log(response.data);

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