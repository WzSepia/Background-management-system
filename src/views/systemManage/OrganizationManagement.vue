<template>
	<div class="organization_management">
		<iframe src="https://map.baidu.com/@12954897,4841785,13z"></iframe>
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
	.organization_management,
	iframe {
		width: 100%;
		height: 100%;
	}
</style>
