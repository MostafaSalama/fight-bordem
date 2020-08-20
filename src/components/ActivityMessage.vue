<template>
	<div class="container">
		<p>{{ activity }}</p>
		<HeartIcon @update-liked="updateLiked" :fill-color="fillColor"></HeartIcon>
	</div>
</template>
<script>
import { mapGetters, mapState } from 'vuex';
import HeartIcon from './HeartIcon';

export default {
	name: 'ActivityMessage',
	components: { HeartIcon },
	computed: {
		...mapGetters(['activity']),
		...mapState(['isCurrentActivityLiked']),
		fillColor() {
			return this.isCurrentActivityLiked ? '#E0245E' : '#f5efef';
		},
	},
	methods: {
		updateLiked() {
			this.$store.dispatch('setLiked',!this.isCurrentActivityLiked);
		},
	},
};
</script>
<style scoped>
.container {
	text-align: center;
	margin-top: 20px;
	font-size: 2.5rem;
	font-style: italic;
	font-weight: 900;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	padding: 20px;
	word-break: break-word;
}
</style>
