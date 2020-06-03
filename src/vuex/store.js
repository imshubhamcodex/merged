import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    email:Math.random().toString(36).substring(7),
    phone:Math.random().toString(36).substring(7)
  },
  mutations:{
    change(state,payload) {
        state.email = payload.email;
        state.phone = payload.phone;
      }
  },

  plugins: [createPersistedState()]
  
})