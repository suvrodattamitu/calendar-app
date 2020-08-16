<template>
  <div>
    <v-card :color="card_color">
      <div class="pa-2">
        <v-text-field
          label="Title"
          single-line
          flat
          solo
          :value="title"
          @input="updateTitle"
          maxlength="30"
          counter
          background-color="transparent"
        ></v-text-field>
        <v-textarea
          auto-grow
          flat
          solo
          label="Take a note..."
          single-line
          :value="content"
          @input="updateContent"
          maxlength="100"
          counter
          background-color="transparent"
        ></v-textarea>
      </div>
      <v-card-actions>
        <v-btn icon @click="deleteNote" :loading="deleteLoading">
          <v-icon>fa-trash</v-icon>
        </v-btn>
        <ColorPickerMenu @color-selected="colorSelected" :selected="card_color" />
        <v-spacer></v-spacer>
        <v-btn text @click="showNoteDialog(false)">Close</v-btn>
        <v-btn text @click="updateNote" :loading="loading">Update</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>

  import ColorPickerMenu from './ColorPickerMenu.vue';

  export default  {

      components: {
        ColorPickerMenu,
      },
      props: ['selectedNote'],
      data() {
        return {
          loading: false,
          deleteLoading: false,
          content: this.selectedNote.content,
          title: this.selectedNote.title,
          card_color: this.selectedNote.color
        }
      },

      methods:{

          showNoteDialog(val) {
            this.$emit('hideModal',val);
          },
      
          colorSelected(color) {
            this.card_color = color;
          },

          updateNote() {

              let info = {

                'content' : this.content,
                'title'   : this.title,
                'color'   : this.card_color,
                'note_id' : this.selectedNote.id

              };

              axios.post('/update-note',  info )
                .then(response => {

                    this.$message({

                      message: 'Data updated successfully!',
                      type: 'success'

                    });

                    this.$emit('hideModal',false);

                })
                .catch(error => {

                  console.log(error);
                  
                })
                .then(() => {

                });

          },

          deleteNote() {

              let  note_id = this.selectedNote.id
              axios.delete('/delete-note/'+note_id )
                .then(response => {

                    this.$message({

                      message: 'Data deleted successfully!',
                      type: 'success'

                    });

                    this.$emit('hideModal',false);

                })
                .catch(error => {

                  console.log(error);
                  
                })
                .then(() => {

                });
          },

          updateContent(value) {
            this.content = value;
          },

          updateTitle(value) {
            this.title = value;
          }

      },

  }
</script>
