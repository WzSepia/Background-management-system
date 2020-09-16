<template>
	<div class="log_management">
		<iframe src="https://www.douyu.com"></iframe>
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
	.log_management,
	iframe {
		width: 100%;
		height: 100%;
	}
</style>
