<template>
    <div class="calendar-container" v-loading="loading" element-loading-text="Loading...Please Wait...">
        <v-app>
          <el-row>
            <el-col :span="22" :offset="1" class="card-col">
                    <v-sheet height="64">
                        <v-toolbar flat color="white">
                        
                        <el-button type="primary" size="medium" @click="openEventModal">New Event</el-button>

                        <v-btn fab text small color="grey darken-2" @click="prev">
                            <span class="material-icons">navigate_before</span>
                        </v-btn>
                        <v-btn fab text small color="grey darken-2" @click="next">
                            <span class="material-icons">navigate_next</span>
                        </v-btn>
                        <v-toolbar-title v-if="$refs.calendar">
                            {{ $refs.calendar.title }}
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-menu bottom right>
                            <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                outlined
                                color="grey darken-2"
                                v-bind="attrs"
                                v-on="on"
                            >
                                <span>{{ typeToLabel[type] }}</span>
                                <span class="material-icons">keyboard_arrow_down</span>
                            </v-btn>
                            </template>
                            <v-list>
                            <v-list-item @click="type = 'day'">
                                <v-list-item-title>Day</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="type = 'week'">
                                <v-list-item-title>Week</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="type = 'month'">
                                <v-list-item-title>Month</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="type = '4day'">
                                <v-list-item-title>4 days</v-list-item-title>
                            </v-list-item>
                            </v-list>
                        </v-menu>
                        </v-toolbar>
                    </v-sheet>

                    <!-- Add Event -->
                    <v-dialog v-model="dialog" max-width="500">
                      <v-card>
                        <v-container>
                          <v-form @submit.prevent="addEvent">
                            <v-text-field v-model="name" type="text" label="Event Name"></v-text-field>
                            <p class="error-warning" v-if="errors.name">{{errors.name[0]}}</p>
                            <v-text-field v-model="details" type="text" label="Event Details"></v-text-field>
                            <p class="error-warning" v-if="errors.details">{{errors.details[0]}}</p>
                            <v-text-field v-model="start" type="date" label="Start Date"></v-text-field>
                            <p class="error-warning" v-if="errors.start">{{errors.start[0]}}</p>
                            <v-text-field v-model="end" type="date" label="End Date"></v-text-field>
                             <p class="error-warning" v-if="errors.end">{{errors.end[0]}}</p>
                            <!-- <v-text-field v-model="color" type="color" label="Event Color"></v-text-field> -->
                            <p class="demonstration">Event Color</p>
                            <el-color-picker
                              v-model="color"
                              show-alpha
                              :predefine="predefineColors">
                            </el-color-picker><br>
                            <p class="error-warning" v-if="errors.color">{{errors.color[0]}}</p>
                            <v-btn type="submit" color="primary" class="mr-4" >Create Event</v-btn>
                          </v-form>
                        </v-container>
                      </v-card>
                    </v-dialog>

                    <v-sheet height="600">
                        <v-calendar
                        ref="calendar"
                        v-model="focus"
                        color="primary"
                        :events="events"
                        :event-color="getEventColor"
                        :type="type"
                        @click:event="showEvent"
                        @click:more="viewDay"
                        @click:date="viewDay"
                        @change="updateRange"
                        ></v-calendar>
                        <v-menu
                        v-model="selectedOpen"
                        :close-on-content-click="false"
                        :activator="selectedElement"
                        offset-x
                        >
                        <v-card
                            color="grey lighten-4"
                            min-width="350px"
                            flat
                        >
                            <v-toolbar
                            :color="selectedEvent.color"
                            dark
                            >
                            <v-btn icon @click="editEvent(selectedEvent)">
                                <span class="material-icons">edit</span>
                            </v-btn>
                            <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn icon @click="deleteEvent(selectedEvent.id)">
                                <span class="material-icons">delete</span>
                            </v-btn>
                            </v-toolbar>

                            <v-card-text>
                              <!-- <span v-html="selectedEvent.details"></span> -->
                              <form>
                                  <span v-if="currentlyEditing !== selectedEvent.id">
                                    {{ selectedEvent.details }}
                                  </span>
                                  <el-input
                                    type="textarea"
                                    :rows="2"
                                    v-else
                                    v-model="selectedEvent.details"
                                    placeholder="Add Note"
                                  >
                                  </el-input>
                                  <p class="error-warning" v-if="errors.details">{{errors.details[0]}}</p>
                              </form>
                            </v-card-text>

                            <v-card-actions>
                              <v-btn textcolor="secondary" @click="selectedOpen = false">Cancel</v-btn>
                              <v-btn textcolor="secondary" v-if="currentlyEditing === selectedEvent.id" @click="updateEvent(selectedEvent)">Update</v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-menu>
                    </v-sheet>
              </el-col>
          </el-row>
        </v-app>
    </div>
</template>

<style lang="scss">
  .calendar-container{
    margin-top:90px;
    @media only screen and (max-width: 600px) {
        margin-top:170px;
    }
    .v-form{
      margin: 38px;
    }
  }

  .el-color-dropdown__btn{
      span{
          color:#000000 !important;
      }
  }

  .error-warning{
    color:#ff0000;
  }
</style>

<script>
  export default {
    data: () => ({

      today: new Date().toISOString().substr(0,10),
      focus: new Date().toISOString().substr(0,10),
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      name:null,
      details:null,
      start:null,
      end:null,
      color:'#1976D2',
      currentlyEditing:null,

      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,

      events: [],
      dialog:false,
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday Birthday Birthday Birthday Birthday Birthday', 'Conference', 'Party'],

      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        '#c7158577'
      ],
      errors:[],
      loading:false

    }),

    mounted () {

      this.$refs.calendar.checkChange()
      this.getEvents();

    },
    methods: {

      openEventModal(){
        this.dialog = true;
        this.errors = [];
      },

      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = ''
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },


      editEvent(ev){
        this.errors = [];
        this.currentlyEditing = ev.id;
      },

      updateEvent(ev){
        this.errors = [];
        axios.post('/update-event',ev)
            .then(response => {

              this.selectedOpen = false;
              this.currentlyEditing = null;
              this.getEvents();

              this.$notify({

                  title: 'Success',
                  message:'Event deleted successfull\'y!',
                  type: 'success',
                  position: 'top-right'

              });

            })
            .catch(error => {
                if(error.response){
                  this.errors = error.response.data.errors;
                }
                console.log(error);
            })
            .then(() => {
                
            });

      },

      getEvents(){
        this.loading = true;
        axios.get('/all-events')
            .then(response => {

              this.events = response.data.events;

            })
            .catch(error => {
              console.log(error);
            })
            .then(() => {
              this.loading = false;
            });

      },

      deleteEvent(id){

        axios.delete('/delete-event/'+id)
          .then(response => {
            
            this.selectedOpen = false;
            this.currentlyEditing = null;

            this.$notify({

                title: 'Success',
                message:'Event deleted successfull\'y!',
                type: 'success',
                position: 'top-right'

            });

            this.getEvents();

          })
          .catch(error => {

          })
          .then(() => {

          });

      },

      addEvent(){
        
        let info = {
          name:this.name,
          details:this.details,
          start:this.start,
          end:this.end,
          color:this.color
        };

        this.errors = [];

        axios.post('/create-event',info)
            .then(response => {


              this.dialog = false;
              this.getEvents();
              this.$notify({
                  title: 'Success',
                  message: 'Event added successfully!',
                  type: 'success',
                  position: 'top-right'
              });

            })
            .catch(error => {

              if(error.response){
                this.errors = error.response.data.errors;
              }

              this.dialog=true;

              console.log(error);
              
            })
            .then(() => {
                
            });

      },
      
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        
        this.errors = [];
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          setTimeout(() => this.selectedOpen = true, 10)
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          setTimeout(open, 10)
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
      updateRange ({ start, end }) {
        this.getEvents();
        // const events = []

        // const min = new Date(`${start.date}T00:00:00`)
        // const max = new Date(`${end.date}T23:59:59`)
        // const days = (max.getTime() - min.getTime()) / 86400000
        // const eventCount = this.rnd(days, days + 20)

        // for (let i = 0; i < eventCount; i++) {
        //   const allDay = this.rnd(0, 3) === 0
        //   const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        //   const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        //   const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        //   const second = new Date(first.getTime() + secondTimestamp)

        //   events.push({
        //     name: this.names[this.rnd(0, this.names.length - 1)],
        //     start: first,
        //     end: second,
        //     color: this.colors[this.rnd(0, this.colors.length - 1)],
        //     timed: !allDay,
        //   })
        // }

        // this.events = events
      },
      // rnd (a, b) {
      //   return Math.floor((b - a + 1) * Math.random()) + a
      // },
    },
  }
</script>
