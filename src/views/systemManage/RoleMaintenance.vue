<template>
	<div class="role_maintenance">
		<iframe src="https://xueshu.baidu.com/usercenter/index/detail?tab_id=2&id=118"></iframe>
	</div>
</template>

<script>
	import store from "../../store/index.js"
	import {
		mapState
	} from "vuex"
	export default {
		name: 'RoleMaintenance',
		data() {
			return {
				msg: '角色维护'
			};
		},
		store,
		computed: {
			...mapState([""]),
		}
	};
</script>

<style scoped>
	.role_maintenance,
	iframe {
		width: 100%;
		height: 100%;
	}
</style>
