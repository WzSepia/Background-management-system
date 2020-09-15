<template>
	<div class="log_management">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
	import store from "../../store/index.js"
	import {
		mapState
	} from "vuex"
	export default {
		name: 'LogManagement.vue',
		data() {
			return {
				msg: '日志管理'
			};
		},
		store,
		computed: {
			...mapState([""]),
		}
	};
</script>

<style scoped>
	.log_management {}
</style>
