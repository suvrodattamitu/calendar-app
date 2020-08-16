export default{

	state:{

        settings: {},
        note: null,
        show_note: false

    },

	getters:{

        getSettings(state) {
            return state.settings;
        },
        getNote(state) {
            return state.note;
        },
        showNote(state) {
            return state.show_note;
        }

    },

    mutations:{

        setSettings(state,data) {
            state.settings = data;
        },
        setNote(state,data) {
            state.note = data;
        },
        setShowNote(state,data) {
            console.log('show note',data)
            state.show_note = data;
        }

    },

	actions:{

        settingsAction(context,data) {
            context.commit('setSettings',data);
        },
        setNoteAction(context,data) {
            context.commit('setNote',data);
        },
        setShowNoteDialogAction(context,data) {
            context.commit('setShowNote',data);
        },
        

  }

};
