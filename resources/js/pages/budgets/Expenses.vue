<template>
    <div class="dashboard-container">
        <el-row>
            <el-col :span="22" :offset="1">

             
                <!-- start: PAGE TITLE & BREADCRUMB -->
                <ol class="breadcrumb">
                    <li>
                        <i class="clip-file"></i>
                        <router-link to="/admin/budgets">
                            Budgets
                        </router-link>
                    </li>
                    <li class="active">
                        Expenses
                    </li>
                </ol>
                <!-- end: PAGE TITLE & BREADCRUMB -->
                 

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

       
    },

    mounted(){
        console.log('Dashboard');
    }
}
</script>