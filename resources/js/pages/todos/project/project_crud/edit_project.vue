<template>
    <div>
        <!-- Edit Project Modal -->
        <el-dialog title="Edit Project" :visible.sync="openEditModal" width="80%" :close-on-click-modal="false">
            <el-form :model="form">
              <el-form-item label="Name" :label-width="formLabelWidth">
                <el-input type="text" v-model="form.name" placeholder="Project Name" autocomplete="off"></el-input>
                <p class="error-warning" v-if="errors.name">{{errors.name[0]}}</p>
              </el-form-item>
              <el-form-item label="Description" :label-width="formLabelWidth">
                <el-input type="textarea" :rows="2" v-model="form.description" placeholder="Project Description" autocomplete="off"></el-input>
                <p class="error-warning" v-if="errors.description">{{errors.description[0]}}</p>
              </el-form-item>
              <el-form-item label="Date" :label-width="formLabelWidth">
                <el-date-picker
                  v-model="form.duedate"
                  type="date"
                  placeholder="Pick a day"
                  value-format="yyyy-MM-dd HH:mm:ss">
                </el-date-picker>
                <p class="error-warning" v-if="errors.duedate">{{errors.duedate[0]}}</p>
              </el-form-item>
              <el-form-item :label-width="formLabelWidth">
                <el-button type="primary" size="medium" @click="updateProject">Update</el-button>
              </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
export default {
    
    props:['openModalEdit','form','formLabelWidth'],
    data() {
        return {
            openEditModal:this.openModalEdit,
            errors:[]
        }
    },

    watch:{
        openEditModal(val){
            this.$emit('openProjectEditModal', val);
        }
    },

    methods:{
        updateProject(){

            //this.loading = true;
            let editData = this.form;

            axios.post('/project/'+editData.slug,editData)
                .then(response => {

                    this.$emit('editedProject', false);

                    this.$notify({

                        title: 'Success',
                        message: 'Project Updated Successfuly!',
                        type: 'success',
                        position: 'top-right'

                    });

                })
                .catch(error => {

                    if(error.response){

                        this.errors = error.response.data.errors;

                    }else{

                        this.$notify({

                            title: 'Error',
                            message: 'Something went wrong!',
                            type: 'error',
                            position: 'top-right'

                        }); 

                    }
                })
                .then(() => {
                    
                });

       
       },
    },

    mounted(){
        
    }

}
</script>