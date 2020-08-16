<template>
  <v-app>
    
    <v-main style="margin-top:90px;" v-loading="loading" element-loading-text="Please Wait...">

        <Create @show_all_notes="showAllNotes" />

        <Notes v-if="notes.length" :notes="notes" @show_all_notes="showAllNotes"/>

        <div class="fluentmanagement_pagination" v-if="notes.length">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page_number"
            :page-size="per_page"
            :page-sizes="pageSizes"
            layout="total, sizes, prev, pager, next"
            :total="total">
          </el-pagination>
        </div>
     

    </v-main>

  </v-app>
</template>

<style lang="scss">

  .fluentmanagement_pagination{
    float:right;
    margin: 0px 38px 0px 0px;
  }

</style>

<script>

import Create from './Create.vue';
import Notes from './Notes';

export default {

    components: {
      Create,
      Notes,
    },

    data() {

      return {
        
        loading: false,
        notes: [],
        //table pagination
        per_page: 20,
        page_number: 1,
        total: 0,
        pageSizes: [5,10, 20, 30, 40, 50, 100, 200],

      }

    },

    methods: {

      //table pagination
      handleSizeChange(val) {

        this.per_page = val;
        this.getAllNotes();

      },

      handleCurrentChange(val) {

          this.page_number = val;
          this.getAllNotes();

      },

      showAllNotes() {

        this.getAllNotes()

      },

      getAllNotes() {

        this.loading = true;
        let page = this.page_number;
        let perPage =  this.per_page;

        this.loading = true;
        axios.get('/all-notes/?page='+page+'&paginate='+perPage)
          .then(response => {

            this.notes     = response.data.notes.data;
            this.total     = response.data.total;

          })
          .catch(error => {
            console.log(error);
          })
          .then(() => {
            this.loading = false;
          });

      }

    },

    mounted() {
      this.getAllNotes();
    }

//   loading = true;
//   refreshLoading = false;

//   async created() {
//     this.loading = true;
//     await this.getNotes();
//     this.loading = false;
//   }

//   async refresh() {
//     this.refreshLoading = true;
//     await this.getNotes();
//     this.refreshLoading = false;
//   }

//   @globalModule.State
//   snackbar!: Snackbar;

//   @notesModule.Action
//   getNotes!: () => Promise<Note[]>;

}
</script>
