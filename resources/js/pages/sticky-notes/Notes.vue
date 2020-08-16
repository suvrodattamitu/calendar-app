<template>
  <v-row v-if="notes" class="notes-wrapper">
    <v-col
      v-for="(note, idx) in notes"
      :key="idx"
      cols="12"
      sm="6"
      md="4"
      lg="3"
      xl="2"
      class="d-flex flex-column"
    >
      <NoteItem :note="note"  @show_all_notes="showAllNotes"/>
    </v-col>
  </v-row>
</template>

<style lang="scss">

  .notes-wrapper{
    margin: 0px 38px;
  }

</style>

<script>
import NoteItem from './Note.vue';
export default { 

  props: ['notes'],

  components: {
    NoteItem,
  },

  data() {

    return {
      
    }

  },

  methods: {

    showAllNotes(val) {
      this.$emit('show_all_notes',true);
    }

  }


  
}
</script>
