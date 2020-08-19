import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activity : '',
    loading:false
  },
  mutations: {
    setActivity(state,message) {
      console.log(typeof message)
      state.activity = message ;
    },
    setLoading(state,value){
      state.loading =  value ;
    }
  },
  actions: {
    async getActivity(context){
      const API_URL = 'https://www.boredapi.com/api/activity' ;
      context.commit("setLoading",true) ;
      const response = await fetch(API_URL) ;
      const {activity} = await response.json() ;
      context.commit('setActivity', activity) ;
      context.commit("setLoading",false);  
    }
  },
  modules: {
  }
})
