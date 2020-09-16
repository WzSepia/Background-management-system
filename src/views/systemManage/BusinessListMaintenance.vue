<template>
	<div class="organization_management">
		<iframe src="https://element.eleme.cn/2.0/#/zh-CN/component/installation"></iframe>
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
	.organization_management,
	iframe {
		width: 100%;
		height: 100%;
	}
</style>
