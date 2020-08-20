import Vue from 'vue'
import Vuex from 'vuex'
import {nanoid} from 'nanoid'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activity : {},
    loading:false,
    isCurrentActivityLiked:false,
    favoriteActivities:[]
  },
  getters:{
    activity(state){
      return state.activity.activity ;
    }
  },
  mutations: {
    setActivity(state,payload) {
      state.activity = payload ;
    },
    setLiked(state,value) {
        state.isCurrentActivityLiked = value ;
        if(state.isCurrentActivityLiked) {
          state.favoriteActivities.unshift(state.activity) ;
        }
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
      context.commit('setActivity', {activity,id:nanoid()}) ;
      context.commit('setLiked',false);
      context.commit("setLoading",false);
    }
  },
  modules: {
  }
})
