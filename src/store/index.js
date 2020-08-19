import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activity : ''
  },
  mutations: {
    setActivity(state,message) {
      console.log(typeof message)
      state.activity = message ;
    }
  },
  actions: {
    async getActivity(context){
      const API_URL = 'https://www.boredapi.com/api/activity' ;
      const response = await fetch(API_URL) ;
      const {activity} = await response.json() ;
      context.commit('setActivity', activity) ;
    }
  },
  modules: {
  }
})
