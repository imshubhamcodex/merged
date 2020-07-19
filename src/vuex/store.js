import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    email:"",
    phone:"",
    createAccount:false,
    userID:""
  },
  mutations:{
    change(state,payload) {
        state.email = payload.email;
        state.phone = payload.phone;
      },
      createAcc(state,val){
        state.createAccount = val.setVal;
      },
      setUserID(state,val){
        state.userID = val.setVal
      }
  },

  plugins: [createPersistedState()]
  
})