<template>
	<div class="menu">
		<template v-for="(item,index) in items">
			<router-link :to="item.path" v-if="item.path" :key="index">
				<el-menu-item v-if="item.children == null || item.children.length == 0" :index="item.path">
					<i :class="item.icon"></i>
					<span>{{item.name}}</span>
				</el-menu-item>
			</router-link>
			<!-- 判断是否存在二级路由 -->
			<el-submenu v-if="item.children" :index="item.path" :key="index">
				<template slot="title">
					<i :class="item.icon"></i>
					<span>{{item.name}}</span>
				</template>
				<!-- 递归组件，把遍历的值传回子组件，完成递归调用 -->
				<Menu :items="item.children" />
			</el-submenu>
		</template>
	</div>
</template>
<script>
	import store from "../store/index.js"
	import {
		mapState
	} from "vuex"
	export default {
		name: "Menu",
		props: {
			items: Array
		},
		store,
		computed: {
			...mapState(["nav_list"])
		}
	}
</script>

<style>
	.menu {
		width: 100%;
		height: 100%;
	}

	.menu a {
		display: block;
		width: 100%;
		height: 60px;
		line-height: 60px;
		font-weight: bold;
		font-size: 18px;
		color: #ffffff;
	}

	.menu a:hover {
		background-color: #2d3742 !important;
	}

	.menu a.router-link-exact-active {
		color: #409eff;
		background-color: #004e84;
	}

	.el-menu {
		background-color: #334157 !important;
	}

	.el-menu-item span {
		color: #FFFFFF;
	}

	.el-menu--collapse span {
		display: none;
	}

	.el-menu-item:focus,
	.el-menu-item:hover {
		background-color: transparent !important;
	}

	.el-submenu__title {
		color: #FFFFFF !important;
	}

	.el-submenu__title:hover {
		background-color: #2d3742 !important;
	}
</style>
