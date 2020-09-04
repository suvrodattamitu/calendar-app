<template>
    <div class="dashboard-container" v-loading="loading" element-loading-text="Loading...Please Wait...">
        <el-row>
            <el-col :span="6" :offset="1" class="card-col" key="1">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>Recent Events</span>
                        <i class="el-icon-alarm-clock icon-style"></i>
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

            <el-col :span="6" :offset="1" class="card-col" key="2">

                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>Recent Projects</span>
                        <i class="el-icon-trophy icon-style"></i>
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

            <el-col :span="6" :offset="1" class="card-col" key="3">

                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>Monthly Report</span>
                        <i class="fa fa-bar-chart icon-style" aria-hidden="true"></i>
                    </div>
                    <div class="text item">
                        <p>Total Income : {{income}} <span v-html="globalSettings.currency_symbol"></span> </p>
                        <p>Total Expense : {{expense}} <span v-html="globalSettings.currency_symbol"></span></p>
                        <p>Income - Expense = {{(income-expense)}} <span v-html="globalSettings.currency_symbol"></span></p>
                    </div>
                </el-card>

            </el-col>
        </el-row>

        <!-- <div class="wsk-float">
            <p>Are you intereseted to buy or use this app for free?</p>
            <a class="pulse-button" href="https://fluentmanagement.fluentpos.com/support" target="_blank">
                <span>Help Desk</span>
            </a>
        </div> -->

    </div>
</template>

<style lang="scss">

    //support button 
        

        .has-dim{
            height: 1000px;
        }
        .wsk-float{
            display: flex;
            position: fixed;
            bottom:40px;
            right: 40px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .wsk-float a, .wsk-float a span{
            color:#ffffff;
            //display: block;
            text-decoration: none;
            display:flex;
            align-items: center;
            justify-content: center;
            //margin-left:2px;
        }

        .pulse-button {
            position: relative;
            width: 70px;
            height: 70px;
            border: none;
            box-shadow: 0 0 0 0 rgba(41, 167, 26, .7);
            border-radius: 50%;
            background-color: #29a71a;
            // background-image: url(http://pngimg.com/uploads/whatsapp/whatsapp_PNG4.png);
            background-size:cover;
            background-repeat: no-repeat;
            cursor: pointer;
            -webkit-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
            -moz-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
            -ms-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
            animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
        }
        .pulse-button:hover 
        {
            -webkit-animation: none;-moz-animation: none;-ms-animation: none;animation: none;
        }

        @-webkit-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);}}
        @-moz-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);}}
        @-ms-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);}}
        @keyframes pulse {to {box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);}}
    
    //support button end

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
    }
}
</script>