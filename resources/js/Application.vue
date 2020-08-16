<template>
    <div>
        <!--topnav start -->
        <nav class="navbar navbar-inverse navbar-fixed-top noborder br0 montserrat" role="navigation">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">

                        <ul class="nav-ul">
                            
                            <li v-for="menuItem in topMenus" :key="menuItem.route" class="nav-li">
                                <router-link  
                                    active-class="wpsr-tab-active" 
                                    exact  
                                    :class="[$route.fullPath.includes('/budgets') && menuItem.route === 'budgets' ? 'wpsr-tab-active router-link-active wpsr-tab' : '']"           
                                    :to="{ name: menuItem.route }"
                                >
                                    {{ menuItem.title }}
                                </router-link>
                            </li>
                            <li class="dropdown nav-li pull-right">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                    {{ username }} 
                                <span class="caret"></span></a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="#" @click.prevent="logoutUser">Logout</a></li>
                                    <li><a href="#" @click.prevent="goSettings()">Settings</a></li>
                                </ul>
                            </li>
                        </ul>
                </div>
               
            </div>
        </nav>
        <!--topnav end -->

        <!-- sidenav start -->
        <nav>
            <div id="sidenav" class="sidebar sidebar-hidden z-index1050 text-capitalize hidden-xs text-left">
                <ul class="nav montserrat text-uppercase">

                    <div class="list-inline margin-top-20 sidebar-btn">
                     
                        <div id="menu1" class="arrow-btn">
                            <!-- <v-icon>mdi-arrow-left</v-icon> -->
                            <span class="material-icons back-btn">keyboard_backspace</span>
                        </div>

                    </div>

                    <li class="text-center"><a href="#"><h4 class="lato fw500 text-white text-lowercase">24<span class="fw700">h<i class="fa fa-clock-o"></i>urs&nbsp;<sup><em class=""><span class="text-cyan">beta</span></em></sup></span> <span class="sr-only">(current)</span></h4></a></li>
                   
                    <li class="">
                        <a href="#">
                            {{ 'username' }}&nbsp;
                            <i class="fa fa-male pull-right text-light-grey line-height-2em"></i>
                        </a>
                        <ul class="nav bg-light-grey hidden">
                            <li class=""><a href="#">Logout</a></li>
                        </ul>
                    </li>

                    <li class="">
                        <a href="#">projects
                           
                            <span class="small badge">{{ 9 }} </span>                             
                            <i class="fa fa-caret-down pull-right text-light-grey line-height-2em"></i>
                        </a>
                        <!-- @if(count($projects)) -->
                            <ul class="nav bg-light-grey hidden">
                                <!-- @foreach($projects as $project) -->
                                    <li>
                                        <a href="#" class="">{{ 'project1' }}</a>
                                        <a href="#" class="">{{ 'project2' }}</a>
                                        <a href="#" class="">{{ 'project3' }}</a>
                                        <a href="#" class="">{{ 'project4' }}</a>
                                    </li>
                                <!-- @endforeach -->
                            </ul>
                        <!-- @endif -->
                    </li>
                </ul>
            </div>
        </nav>
        <!-- sidenav end   -->

        <router-view></router-view>
    </div>
</template>

<style lang="scss">

@media only screen and (max-width: 736px) and (min-width: 260px){

    .navbar-header a {
        font-size: 10px !important;
        padding: 20px 5px !important;
    }
    .nav-ul{
        position: fixed;
        width:100%;
        height: 80px;
        background:#63738D;
        text-align: center;
        transition: all .5s;
        .nav-li{
            display: inline-block;
        }
    }

    .navbar-header {
        margin-right: 0px !important;
        margin-left: 0px !important;
    }


}

.el-icon-edit{
    cursor: pointer;
    margin-right: 10px;
}

.el-icon-delete{
    cursor: pointer; 
}

.navbar{
    height: 80px;
    .nav-ul{
        .nav-li{
            display: inline-block;
        }
    }
}

.el-date-editor{
    width: 130px !important;
}
.wppayforms{  
    
    margin-top:90px;
    @media only screen and (max-width: 600px) {
        margin-top:170px;
    }

    .error-warning{
        color:#ff0000;
    }
    .payform_section_actions{

        display:flex;
        justify-content: space-between;

        .el-button{
            color:#ffffff;
        }

        @media only screen and (max-width: 600px) {

            display:flex;
            flex-direction:column;

        }

        .search_action_orders{
            display: flex;
            align-items: flex-end;
        }

        .payform_action{
            display:flex;
            flex-direction: row;

            @media only screen and (max-width: 600px) {
                margin-top: 10px;
            }

            .payform_action_button{
                margin-left:5px;
            }
        }

    }

    .payform_section_body{
        margin-top: 15px;
        .el-badge {
            margin-top: 5px;
        }
    }

}

.menu-dropdown-link{
    float: right;
}

.arrow-btn{
    .back-btn{
        cursor: pointer;
        color:#ffffff;
        margin: 0px 0px 8px 8px;
    }
}

.navbar-header{
    a{
      text-decoration: none;
      color: #fff;
      font-size: 14px;
      padding: 20px 15px;
      display: inline-block;
      transition: 0.4s;
      &.wpsr-tab-active{
          border-bottom: 1px solid rgb(255, 208, 75);//#409eff;
          color: rgb(255, 208, 75);
      }

      &:focus{
        outline: none;
        box-shadow: none;
      }
    }
  
}

</style>

<script>
    export default {
        name: 'global_wrapper',
        data() {
            return {
                topMenus: [],
                username: ''
            }
        },
        methods: {

            goSettings(){
                this.$router.push('/admin/settings');
            },
          
            logoutUser() {
                document.getElementById('logout-form').submit();
            },

            setTopmenu() {
                this.topMenus = [
                    {
                        route: 'dashboard',
                        title: 'Dashboard'
                    },
                    {
                        route: 'calendar',
                        title: 'Calendar'
                    },
                    {
                        route: 'todos',
                        title: 'Todos'
                    },
                    {
                        route: 'budgets',
                        title: 'Budgets'
                    },
                    {
                        route: 'notes',
                        title: 'Notes'
                    }
                ]
            },

            getGlobalSettings(){

                axios.get('/get-global-credentials')
                    .then(response => {

                        this.$store.dispatch('settingsAction',response.data.settings);

                    })
                    .catch(error => {
                        console.log(error);
                    })
                    .then(() => {
                        
                    });

            }

        },
        mounted() {

            this.username = window.user.user.name;

            this.setTopmenu();
            this.getGlobalSettings();
        }
    }
</script>