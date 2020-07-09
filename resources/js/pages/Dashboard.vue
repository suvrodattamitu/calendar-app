<template>
    <div class="dashboard-container">
        <el-row>

            <el-col :span="6" :offset="1" class="card-col">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>Events</span>
                        <el-button style="float: right; padding: 3px 0" type="text">
                            <i class="el-icon-alarm-clock icon-style"></i>
                        </el-button>
                    </div>
                    <div class="text item" v-for="(event,index) in events" :key="index">
                        <h5><i class="el-icon-date"></i>{{$dateFormat(event.start)}} To {{$dateFormat(event.end)}}</h5>
                        <p><i class="el-icon-time icon-style"></i>{{event.name}}</p>
                        <hr v-if="events.length>index+1">
                    </div>
                </el-card>
            </el-col>

            <el-col :span="6" :offset="1" class="card-col">

                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>Projects</span>
                        <el-button style="float: right; padding: 3px 0" type="text">
                            <i class="el-icon-trophy icon-style"></i>
                        </el-button>
                    </div>
                    <div class="text item" v-for="(project,index) in projects" :key="index">
                        <h5><i class="el-icon-date"></i>{{$dateFormat(project.duedate)}}</h5>
                        <p><i class="el-icon-check icon-style"></i>{{project.name}}</p>
                        <hr v-if="projects.length>index+1">
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

            <!-- <el-col :span="6" :offset="1" class="card-col">

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
                
            </el-col> -->
            
            
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
            projects:[]
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

            axios.get('/get-dashboard-credentials')
                .then(response => {

                    this.events = response.data.events;
                    this.projects = response.data.projects;
                    console.log(response.data);

                })
                .catch(error => {
                    console.log(error);
                })
                .then(() => {
                    
                });

        },
    },

    mounted(){
        this.getEvents();
        console.log('Dashboard');
    }
}
</script>