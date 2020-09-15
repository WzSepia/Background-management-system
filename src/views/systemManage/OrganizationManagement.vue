<template>
	<div class="organization_management">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
	import store from "../../store/index.js"
	import {
		mapState
	} from "vuex"
	export default {
		name: 'OrganizationManagement',
		data() {
			return {
				msg: '组织机构管理'
			};
		},
		store,
		computed: {
			...mapState([""]),
		}
	};
</script>

<style scoped>
	.organization_management {}
</style>
