<template>
	<div class="user_maintenance">
		<iframe src="https://www.163.com/"></iframe>
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
	.user_maintenance ,iframe{
		width: 100%;
		height: 100%;
	}
</style>
