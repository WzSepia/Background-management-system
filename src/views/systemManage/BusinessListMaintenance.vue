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
				msg: '业务清单维护'
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
