<template>
    <div class="wpsr_social_review_global">
        <div class="wpsr_social_review_global_main_nav">
            <span>{{ 'Clever Ninja' }}</span>
            <router-link v-for="menuItem in topMenus" :key="menuItem.route" 
            active-class="wpsr-tab-active" 
            exact             
            :to="{ name: menuItem.route }">
                {{ menuItem.title }}
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
.wpsr_social_review_global{
    // display:flex;
    // align-items: center;
    // justify-content: center;
    .wpsr_social_review_global_main_nav{
    background-color: #5525d9;
    padding: 0 20px;
    span{
      color: #fff;
      font-size: 18px;
      padding-right: 50px;
      font-weight: 700;
    }
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