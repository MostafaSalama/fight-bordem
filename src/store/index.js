import Vue from 'vue';
import Vuex from 'vuex';
import { nanoid } from 'nanoid';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		activity: {},
		loading: false,
		isCurrentActivityLiked: false,
		favoriteActivities: [],
	},
	getters: {
		activity(state) {
			return state.activity.activity;
		},
	},
	mutations: {
		setActivity(state, payload) {
			state.activity = payload;
		},
		setLiked(state, value) {
			state.isCurrentActivityLiked = value;
		},
		addActivity(state, activity) {
			state.favoriteActivities = [activity, ...state.favoriteActivities];
		},
		setLoading(state, value) {
			state.loading = value;
		},
		removeActivity(state, activityId) {
			state.favoriteActivities = state.favoriteActivities.filter(
				(a) => a.id !== activityId,
			);
		},
	},
	actions: {
		async getActivity(context) {
			const API_URL = 'https://www.boredapi.com/api/activity';
			context.commit('setLoading', true);
			const response = await fetch(API_URL);
			const { activity } = await response.json();
			context.commit('setActivity', { activity, id: nanoid() });
			context.commit('setLiked', false);
			context.commit('setLoading', false);
		},
		setLiked(context, value) {
			if (value) {
				context.commit('addActivity', context.state.activity);
			} else {
				context.commit('removeActivity', context.state.activity.id);
			}
			context.commit('setLiked', value);
		},
	},
	modules: {},
});
