<template>
	<div class="aside fl">
		<div class="collapse-btn" @click="collapseChange">
			<i class="el-icon-menu icon-btn"></i>
		</div>
		<el-row class="tac">
			<el-col :span="12">
				<el-menu mode="vertical" :collapse="collapse" default-active="$router.link" class="el-menu-vertical-demo" @select="handleSelect">
					<Menu :items="items" />
				</el-menu>
			</el-col>
		</el-row>
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
			return {
				items: [{
					link: "/",
					name: "Home",
					icon: "el-icon-menu"
				}, {
					link: "/about",
					name: "About",
					icon: "el-icon-service",
					children: [{
						link: "/more",
						name: "试试"
					}]
				}]
			}
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
	.main {
		width: 100%;
		height: 100%;
	}

	.aside {
		width: auto;
		height: 100%;
		background-color: #324057;
		overflow-x: hidden;
		overflow-y: auto;
	}

	.el-menu {
		background-color: transparent;
	}

	.collapse-btn {
		color: #FFFFFF;
		cursor: pointer;
	}
</style>
