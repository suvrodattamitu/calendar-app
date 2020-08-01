<template>
    <div class="dashboard-container" v-loading="loading" element-loading-text="Loading...Please Wait...">
        <el-row>
            <el-col :span="6" :offset="1" class="card-col" key="1">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>Recent Events</span>
                        <i class="el-icon-alarm-clock icon-style"></i>
                            <!-- <span class="dashicons"></span> -->
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
    </div>
</template>


<style lang="scss">
    .icon-left{
        cursor: move;
        font-size:16px;
        padding:2px;
    }
    .icon-style{
        float: right;
        padding: 3px 0
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

    // computed:{

    //     globalSettings(){
    //         return  this.$store.getters.getSettings;
    //     }

    // },

    mounted(){
        this.getEvents();
        console.log('Dashboard');
    }
}
</script>