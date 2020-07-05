<template>
    <div>
        <!-- <div class="wpsr_social_review_global_main_nav">
            <span>{{ 'Clever Ninja' }}</span>
            <router-link v-for="menuItem in topMenus" :key="menuItem.route" 
            active-class="wpsr-tab-active" 
            exact             
            :to="{ name: menuItem.route }">
                {{ menuItem.title }}
            </router-link>
            <a href="#" @click.prevent="logoutUser">
                        <i class="clip-exit"></i> &nbsp;Log Out
                    </a>

        </div> -->

        <!--topnav start -->
        <nav class="navbar navbar-inverse navbar-fixed-top noborder br0 montserrat" role="navigation">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <router-link class="navbar-brand font26" to="/admin">
                            <span class="lato fw300">24&nbsp;
                                <span class="lato fw700">h<i class="fa fa-clock-o"></i>urs</span>
                            </span>
                        </router-link>
                       
                        <router-link v-for="menuItem in topMenus" :key="menuItem.route" 
                        active-class="wpsr-tab-active" 
                        exact             
                        :to="{ name: menuItem.route }">
                            {{ menuItem.title }}
                        </router-link>
                        
                        <!-- <a href="#" @click.prevent="logoutUser">
                            <i class="clip-exit"></i> &nbsp;Log Out
                        </a> -->

                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse navbar-ex1-collapse">
                    <ul class="nav navbar-nav navbar-right text-capitalize opacity75">
                        <li><a href="#">Projects</a></li>
                        <!-- <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </li> -->
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                {{ 'user name' }} 
                            <span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#" @click.prevent="logoutUser">Logout</a></li>
                            </ul>
                        </li>
                
                        <li>
                            <ul class="list-inline margin-top-20">
                                <li>
                                    <a href="#sidenav" id="menu" class="menu-btn">
                                        <div class="menu-btn-block top"></div>
                                        <div class="menu-btn-block middle"></div>
                                        <div class="menu-btn-block bottom"></div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
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
      //text-transform: capitalize;
      padding: 20px 15px;
      display: inline-block;
      transition: 0.4s;
     // border-bottom: 2px solid transparent;
      &.wpsr-tab-active{
          //border-bottom: 2px solid #409eff;
          border-bottom: 1px solid rgb(255, 208, 75);//#409eff;
          color: rgb(255, 208, 75);
        //background-color: #b030a8;
        //border-bottom: 2px solid #409EFF; //ffd65b;
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
                topMenus: []
            }
        },
        methods: {
          
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
                    }
                ]
            }
        },
        mounted() {
            this.setTopmenu();
        }
    }
</script>