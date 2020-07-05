<template>
    <div class="todos-container">

      <div v-if="projects.length">
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">Id</th>
                        <th class="text-left">Name</th>
                        <th class="text-left">Author</th>
                        <th class="text-left">Tasks</th>
                        <th class="text-left">Created</th>
                        <th class="text-left">Updated</th>
                        <th class="text-left">Duedate</th>
                        <th class="text-left">Status</th>
                        <th class="text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="project in projects" :key="project.id">
                        <td>{{ project.id }}</td>
                        <td>{{ project.name }}</td>
                        <td>{{ project.author }}</td>
                        <td>{{ project.tasks }}</td>
                        <td>{{ project.created_at }}</td>
                        <td>{{ project.updated_at }}</td>
                        <td>{{ project.duedate }}</td>
                        <td>{{ project.completed }}</td>
                        <td>Delete || Edit</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
      </div>

      <div v-else>
        No projects found

        <el-button
          plain
          @click="open1">
          Success
        </el-button>
      </div>

  </div>
</template>

<style lang="scss">
  .todos-container{
    margin-top:60px;
  }
</style>

<script>
  export default {

    data: () => ({

      projects: [
        // {
        //   id:1,
        //   name: 'coding',
        //   author: 'suvro',
        //   tasks:[],
        //   created_at:'',
        //   updated_at:'',
        //   duedate:'',
        //   completed:1,

        // }, 
      ],
    }),

    methods:{

      open1() {
        
        this.$notify({
          title: 'Success',
          message: 'This is a success message',
          type: 'success'
        });

        //this.$message('This is a message.');
      },

      getAllProjects(){

        axios.get('/all-projects')
          .then(response => {

            //this.projects = response.data.projects;
            console.log(response.data);

          })
          .catch(error => {
              console.log(error);
          })
          .then(() => {
              
          });

      }

    },

    mounted(){

      this.getAllProjects();

    }

  }
</script>
