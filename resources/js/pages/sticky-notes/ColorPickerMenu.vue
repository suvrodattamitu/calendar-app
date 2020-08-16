<template>
  <v-menu open-on-hover :close-on-content-click="false" top offset-y v-model="open">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>fa-eyedropper</v-icon>
      </v-btn>
    </template>

    <v-card max-width="160" tile>

      <v-card-text class="pa-2 d-flex flex-wrap">
        <v-tooltip
          color="grey darken-3"
          bottom
          v-for="(value, name) in colors"
          :key="name"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              :color="`${name !== 'Default' ? value : ''}`"
              @click="colorSelected(name)"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>
                {{
                  name !== 'Default'
                    ? selectedIcon(value, false)
                    : selectedIcon(value, true)
                }}
              </v-icon>
            </v-btn>
          </template>
          <span>{{ name }}</span>
        </v-tooltip>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>

  export default  {

    props:['selected'],

    data() {
      return {
          colors: {
            Default : 'none',
            Red : 'red accent-1',
            Orange : 'orange accent-2',
            Yellow : 'yellow accent-1',
            Green : 'light-green accent-1',
            Blue : 'cyan lighten-4',
            Purple : 'purple lighten-4',
            Pink : 'pink lighten-4'
          },
          open: false,
      }
    },

    methods: {

      selectedIcon(color, blank) {
        const defaultIcon = blank
          ? 'fa-circle'
          : 'fa-circle';
        const checkedIcon = blank ? 'fa-check-circle' : 'fa-check-circle';
        return this.selected === color ? checkedIcon : defaultIcon;
      },

      colorSelected(color) {
        this.$emit('color-selected',this.colors[color]);
      }

    },

    watch:{
      open(val){

        this.$emit('colorMenuOn',val);

      }
    },

    mounted(){

    }
  
 }
</script>
