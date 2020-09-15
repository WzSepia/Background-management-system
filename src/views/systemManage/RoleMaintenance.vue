<template>
	<div class="role_maintenance">
		<h1>{{ msg }}</h1>
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
	.role_maintenance {}
</style>
