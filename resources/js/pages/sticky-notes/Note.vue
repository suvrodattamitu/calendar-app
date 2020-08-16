<template>
  <div>
    <v-card
      :color="note.color"
      outlined
      hover
      class="flex d-flex flex-column"
      @mouseenter="toggleEditIcon"
      @mouseleave="toggleEditIcon"
      @click="viewNote"
    >
      <v-card-title>
        {{ note.title }}
        <v-spacer></v-spacer>
        <v-btn icon :ripple="false">
          <v-icon v-show="showEditIcon">fa-pencil</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text v-text="note.content"></v-card-text>
    </v-card>

    <div v-if="showDialog">
      <v-dialog v-model="showDialog" persistent max-width="500">
          <show-note-modal :selectedNote="note" @hideModal="hideModalDialog"></show-note-modal>
      </v-dialog>
    </div>

  </div>

</template>

<script>

  import ShowNoteModal from './NoteModal';

  export default {
    props: ['note'],

    components: {
      ShowNoteModal
    },
    
    data() {

      return {

        showEditIcon: false,
        showDialog: false

      }

    },

    methods: {

        hideModalDialog( val ) {

          this.$emit('show_all_notes',true);
          this.showDialog = val;

        },

        toggleEditIcon() {
          this.showEditIcon = !this.showEditIcon;
        },

        viewNote() {
          this.showDialog  = true;
        }

    }

  }

</script>

