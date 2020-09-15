<template>
	<div class="user_maintenance">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
	import store from "../../store/index.js"
	import {
		mapState
	} from "vuex"
	export default {
		name: 'UserMaintenance',
		data() {
			return {
				msg: '用户维护'
			};
		},
		store,
		computed: {
			...mapState([""]),
		}
	};
</script>

<style scoped>
	.user_maintenance {}
</style>
