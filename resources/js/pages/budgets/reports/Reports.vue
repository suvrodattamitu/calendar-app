<template>
    <div id="target-scroll" class="report-container" v-loading="loading" element-loading-text="Loading...Please Wait...">

        <el-row>

            <el-col>
                <div class="date-picker">
                    <date-range-picker 
                        @update="update"
                        :to='toDate'
                        :from='fromDate'
                        :panel='panelNow'
                        :theme='theme'
                    />
                </div>
            </el-col>

            <el-col>
                <div class="reports-wrapper">

                    <div class="reports-details">

                        <h2>Budget Reports</h2>
            
                    </div>

                    <div class="pie-chart-container" id="reports">

                        <div class="chart">

                            <pie-chart
                                v-if="chartData && chartOptions"
                                :chartdata="chartData" 
                                :chartoption="chartOptions"
                                :height="300"
                                :width="400"
                            />

                        </div>

                        <div class="chart">

                            <bar-chart
                                v-if="chartData && chartOptions"
                                :chartdata="chartData" 
                                :chartoption="chartOptions"
                                :height="300"
                                :width="400"
                            />

                        </div>

                    </div>

                </div>
            </el-col>

        </el-row>

    </div>
</template>

<script>

import PieChart from '../../../charts/PieChart';
import BarChart from '../../../charts/BarChart';

export default {

    components: { PieChart,BarChart },

    data() {

        return {

            theme :{
                primary: '#C208DC',
                secondary: '#2D3E50',
                ternary: '#93A0BD',
                border: '#e6e6e6',
                light: '#ffffff',
                dark: '#000000',
                hovers: {
                    day: '#CCC',
                    range: '#e6e6e6'
                }
            },

            totalSale:0,
            totalExpense:0,
            totalProfit:0,

            chartData: null,

            chartOptions : null,

            loadChart:false,
            toDate:new Date().toISOString(),
            fromDate:new Date().toISOString(),
            panelNow:'range',

            loading:false
            
        }

    },

    methods: {

        selectDate(val) {

        },

        scrollBottomToTop() {

            window.scrollTo({ left: 0, top: 9999, behavior: "smooth" }); 

        },

        fillData(incomes,expenses,profits){

            console.log(incomes,' ex ',expenses, ' pro ',profits);
            let reports = [];
            reports.push(incomes);
            reports.push(expenses);
            reports.push(profits);

            this.chartData = {
                
                hoverBackgroundColor: "red",
                hoverBorderWidth: 10,
                labels: ["Income", "Expense", "Profit"],
                datasets: [
                    {
                        label: '',
                        backgroundColor: ["#00D8FF", "#C40F64", "#E46651"],
                        data: reports
                    }
                ]
 
            }

            this.chartOptions = {
                pieceLabel: {
                    render: 'label'
                }, 
                legend: {
                    display:false,
                },
                tooltips: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            label: function(tooltipItem) {
                                    return tooltipItem.yLabel;
                            }
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
                },
                plugins: {
                  labels: {
                    render: () => {}
                  }
                }

            }

        },

        update(values) {

            this.chartData = null;
            this.chartOptions = null;

            this.loading    = true;
            let info = {

                'to'    :   values.to,
                'from'  :   values.from,
                'panel' :   values.panel,

            }

            let that = this;
            this.loadChart = false;

            axios.post('/budget/reports',info)
                .then(response => {

                    console.log('budget reports',response);
                    
                    if( response.data ) {
                        
                        this.totalSale      = response.data.range_sell;
                        this.totalExpense   = response.data.range_expense;
                        this.totalProfit    =  response.data.range_profit;

                        this.fillData(this.totalSale,this.totalExpense,this.totalProfit);

                        // this.pieChartData.datasets[0].data = [];
                        // this.barChartData.datasets[0].data = [];
                            
                        // let reports = [];
                        // reports.push(this.totalSale);
                        // reports.push(this.totalExpense);
                        // reports.push(this.profit);

                        // this.pieChartData.datasets[0].data = reports;
                        // this.barChartData.datasets[0].data = reports;

                        // this.loadChart = true;

                        // this.loading = false; 
                        // this.scrollBottomToTop();

                    }
                    
                })
                .catch(error => {

                    console.log(error);

                })
                .then(() => {

                   this.loading = false; 

                });

        }

    },

    // computed:{

    //     getSettings() {

    //         return this.$store.getters.getSettings;

    //     }

    // },

    mounted(){

        let values = {

            'to': this.toDate,
            'from':this.fromDate,
            'panel':this.panelNow

        }

        this.update(values);

    }

}
</script>


<style lang="scss">

    .report-container{
        // margin-top:90px;
        margin:90px 20px 20px 20px;
    }

    @media only screen and (max-width: 600px) {

        .mj-daterange-picker-controls .mj-daterange-picker-button {
            min-width: 130px !important;
        }
        .pie-chart-container{
            display:flex;
            flex-direction:column;
            clear:both;
            justify-content: space-between;
            align-content: center;
            align-items: center;
            margin:20px;
            .chart{
                width:300px;
                height: 300px;
            }
        }

        .date-picker{
            width: 300px;
            .mj-daterange-picker {
                min-width: 300px;
            }
            .panels-choices {
                padding: 0px !important;

                .panel-button {

                    padding: 5px 5px !important;

                }
            }
        }
    }

    @media only screen and (min-width: 600px) {
        .pie-chart-container{
            display:flex;
            align-content: center;
            align-items: center;
            justify-content: space-between;
            .chart{
                width:300px;
                height: 300px;
            }
        }
    }

    .pie-chart-container {
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        margin:20px;
        
    }

    .reports-details{

        display: flex;
        align-items: center;
        justify-content: center;
        margin:25px 0px;

        .item{
            align-items: center;
            flex-basis: 33%;
            margin-top:20px;
            background-color: aquamarine;
            padding: 10px;
            margin:10px;
        }
    }

</style>