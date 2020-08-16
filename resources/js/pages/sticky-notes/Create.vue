<template>
  <v-row justify="center">
    <v-col cols="12" md="8" lg="6" xl="4" v-click-outside="onClickOutside">
      <v-card :color="card_color">
        <div class="pa-2">
          <v-text-field
            v-model="note.title"
            v-show="titleFieldVisible"
            label="Title"
            single-line
            flat
            solo
            background-color="transparent"
            maxlength="30"
            counter
          ></v-text-field>
          <v-textarea
            v-model="note.content"
            @focus="showTitleFieldAndActions"
            :rows="2"
            auto-grow
            flat
            solo
            label="Make a note..."
            single-line
            maxlength="100"
            counter
            background-color="transparent"
          ></v-textarea>
        </div>
        <v-card-actions v-show="actionsVisible">
          <ColorPickerMenu @color-selected="colorSelected" :selected="card_color" @colorMenuOn="colorMenuOpened" />
          <v-spacer></v-spacer>
          <v-btn text @click="close">Close</v-btn>
          <v-btn text @click="saveNote">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

import ColorPickerMenu from './ColorPickerMenu';

export default {

  components: {

    ColorPickerMenu,

  },

  data() {

    return {

      note : {
        title: '',
        content: '',
        color: 'none',
      },

      colorMenuOpen: false,
      titleFieldVisible : false,
      actionsVisible : false,
      card_color: 'none'

    }

  },

  methods: {

    colorMenuOpened(val){
      this.colorMenuOpen = val;
    },

    colorSelected(color) {
      this.card_color = color;
    },

    onClickOutside() {
      if (!this.colorMenuOpen) {
        this.close();
      }
    },

    showTitleFieldAndActions() {
      this.titleFieldVisible = true;
      this.actionsVisible = true;
    },

    hideTitleFieldAndActions() {
      this.titleFieldVisible = false;
      this.actionsVisible = false;
    },

    saveNote(){

      this.note['color'] = this.card_color;

      axios.post('/save-note',this.note)
        .then(response => {

          this.$message({

            message: 'Data saved successfully!',
            type: 'success'

          });

          this.close();

          this.$emit('show_all_notes',true);

        })
        .catch(error => {
          console.log(error);
        })
        .then(() => {
          this.loading = false;
        });

    },

    close() {

        this.hideTitleFieldAndActions();

        this.note = {
          title: '',
          content: '',
        };

        this.card_color = 'none';
          
    }

  }
  

}
</script>
