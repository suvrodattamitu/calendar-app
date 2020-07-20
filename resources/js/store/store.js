export default{

	state:{

        settings:{},

    },

	getters:{

        getSettings(state){
            return state.settings;
        },

    },

    mutations:{

        setSettings(state,data){
            state.settings = data;
        }

    },

	actions:{

        settingsAction(context,data){
            context.commit('setSettings',data);
        },

  }

};
