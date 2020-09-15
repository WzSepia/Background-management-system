<template>
	<div class="aside fl">
		<div class="collapse-btn" @click="collapseChange">
			<i class="el-icon-s-grid icon-btn"></i>
		</div>
		<el-menu mode="vertical" :collapse="collapse" default-active="1" class="el-menu-vertical" @select="handleSelect">
			<Menu :items="nav_list" />
		</el-menu>
	</div>
</template>

<script>
	//import bus from "../common/bus.js"
	import Menu from "./Menu.vue"
	import store from '../store/index.js';
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		name: 'Aside',
		data() {
			return {}
		},
		components: {
			Menu
		},
		store,
		computed: {
			...mapState(['nav_list', "collapse"])
		},
		methods: {
			...mapMutations(["collapseChange"]),
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.aside {
		width: auto;
		height: 100%;
		background-color: #324057;
		overflow-x: hidden;
		overflow-y: auto;
	}

	.el-menu {
		border-right: none;
		background-color: #324057 !important;
	}

	.collapse-btn {
		color: #FFFFFF;
		cursor: pointer;
		padding-right: 24px;
		text-align: right;
	}

	.el-menu-vertical-demo {
		width: 64px;
	}

	.el-menu-vertical:not(.el-menu--collapse) {
		width: 260px;
		min-height: 400px;
	}
</style>
