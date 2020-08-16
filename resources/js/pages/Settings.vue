<template>
    <div>
        
        <div v-loading="loading" element-loading-text="Loading...Please Wait..." class="wppayforms">

            <!-- start: PAGE HEADER -->
            <el-row>
                <el-col :md="{span: 6, offset: 6}">
                    <el-form>
                        <el-form-item label="Currency" :label-width="formLabelWidth">
                            <el-select 
                            v-model="currency" 
                            clearable 

                            filterable
                            allow-create
                            default-first-option
                            placeholder="Search Your Currency"

                            v-if="currencies.length">
                                <el-option
                                v-for="(item,index) in currencies"
                                :key="index"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <p class="error-warning" v-if="errors.currency">{{errors.name[0]}}</p>
                        </el-form-item>
                    
                        <el-form-item label="Name" :label-width="formLabelWidth">
                            <el-input placeholder="Software Name" v-model="software_name"></el-input>
                            <p class="error-warning" v-if="errors.name">{{errors.name[0]}}</p>
                        </el-form-item>

                        <el-form-item label="" :label-width="formLabelWidth">
                            <el-button type="primary" size="medium" @click="updateSettings">Save</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>

        </div>

    </div>
</template>

<style lang="scss">

    .currency-list{
        margin-top:70px;
    }

    .form-item{
        margin-top:8px;
    }

</style>

<script>


export default {
    
    data(){
        return{
            errors:[],
            currency:'USD',
            currencies:[],
            software_name:'',
            loading:false,
            formLabelWidth: '70px'
        }
    },

    methods: {
        getSettings(){
            this.loading = true;
            axios.get('/get-settings-credentials')
                .then(response => {

                    let settings = response.data.settings;
                    
                    if( settings && settings.general_settings ){
                        this.software_name  = settings.general_settings.software_settings.software_name;
                        this.currency       = settings.general_settings.currency_settings.currency_code;
                    }

                    this.currencies = response.data.currencies;

                })
                .catch(error => {
                    console.log(error);
                })
                .then(() => {
                    this.loading = false;
                });
        },

        updateSettings(){

            let updateData = {

                'currency_code' : this.currency,
                'software_name' : this.software_name,

            };

            axios.post('/settings/update',updateData)
                .then(response => {

                    this.$store.dispatch('settingsAction',response.data.settings);

                    this.getSettings();

                    this.$notify({

                        title: 'Success',
                        message: 'Settings Updated Successfuly!',
                        type: 'success',
                        position: 'top-right'

                    });

                })
                .catch(error => {

                })
                .then(() => {
                    this.loading = false;
                });
        }

    },

    mounted() {

        this.getSettings();

    }

}
</script>