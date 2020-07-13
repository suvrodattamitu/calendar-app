<template>
    <div class="dashboard-container" v-loading="loading" element-loading-text="Loading...Please Wait...">
        <el-row>

            <el-col :span="6" :offset="1" class="card-col">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>Recent Events</span>
                        <el-button style="float: right; padding: 3px 0" type="text">
                            <i class="el-icon-alarm-clock icon-style"></i>
                        </el-button>
                    </div>
                    <div  v-if="events.length">
                        <div v-for="(event,index) in events" :key="index" class="text item">
                            <h5><i class="el-icon-date"></i>{{$dateFormat(event.start)}} To {{$dateFormat(event.end)}}</h5>
                            <p><i class="el-icon-time icon-style"></i>{{event.name}}</p>
                            <hr v-if="events.length>index+1">
                        </div>
                    </div>
                    <div v-else class="text item">
                        <p>No Recent Events Founds</p>
                    </div>
                </el-card>
            </el-col>

            <el-col :span="6" :offset="1" class="card-col">

                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>Recent Projects</span>
                        <el-button style="float: right; padding: 3px 0" type="text">
                            <i class="el-icon-trophy icon-style"></i>
                        </el-button>
                    </div>
                    <div v-if="projects.length">
                        <div v-for="(project,index) in projects" :key="index" class="text item">
                            <h5><i class="el-icon-date"></i>{{$dateFormat(project.duedate)}}</h5>
                            <p><i class="el-icon-check icon-style"></i>{{project.name}}</p>
                            <hr v-if="projects.length>index+1">
                        </div>
                    </div>
                    <div v-else class="text item">
                        <p>No Recent Projects Founds</p>
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
                        <p>Total Income : {{income}}$</p>
                        <p>Total Expense : {{expense}}</p>
                        <p>Income - Expense = {{(income-expense)}}</p>
                    </div>
                </el-card>

            </el-col>
            
        </el-row>
    </div>
</template>

<style lang="scss">

    .dashboard-container{
        margin-top:90px;
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
            events:[],
            projects:[],
            income:0,
            expense:0,
            loading:false
        }
    },

    methods:{

        $dateFormat(date) {

            if(date){

                let formatedDate = date.substr(0,10);

                let format = 'MMM DD, YYYY';
                let dateString = (formatedDate === undefined) ? null : formatedDate;
                let dateObj = moment(dateString);
                return dateObj.isValid() ? dateObj.format(format) : null;
            
            }

        },

        getEvents(){
            this.loading = true;
            axios.get('/get-dashboard-credentials')
                .then(response => {

                    this.events     = response.data.events;
                    this.projects   = response.data.projects;
                    this.income     = response.data.income;
                    this.expense    = response.data.expense;
                    console.log(response.data);

                })
                .catch(error => {
                    console.log(error);
                })
                .then(() => {
                    this.loading = false;
                });

        },
    },

    mounted(){
        this.getEvents();
        console.log('Dashboard');
    }
}
</script>