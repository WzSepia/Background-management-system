<template>
	<div class="view fr">
		<router-view />
	</div>
</template>

<script>
	import store from '../store/index.js';
	import {
		mapState
	} from 'vuex';
	export default {
		name: 'Main',
		props: {
			msg: String
		},
		store,
		computed: {
			...mapState(['nav_list'])
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.view {
		width: 100%;
		height: 100%;
		background-color: bisque;
		overflow-x: hidden;
		overflow-y: auto;
	}
</style>
