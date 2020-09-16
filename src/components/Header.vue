<template>
	<div class="header">
		<div class="header_logo fl">后台管理系统</div>
		<!-- <ul class="header_lists fl">
			<li class="fl" v-for="(item, index) in header_lists" :key="index">
				<img :src="require(item.src)" @click="listClick(item.src_click)" />
				<p>{{ item.name }}</p>
			</li>
		</ul> -->
		<div class="fl">
			<el-tabs v-model="activeName" @tab-click="headerTabsClick">
				<el-tab-pane v-for="(item, index) in header_list" :key="index" :label="item.name" :name="index+''"></el-tab-pane>
			</el-tabs>
		</div>
		<div class="fr">
			<div class="fl">2020年9月14日</div>
			<div class="fl">2</div>
			<div class="fl">超级管理员</div>
			<div class="key fl">4</div>
			<div class="close fl">5</div>
		</div>
	</div>
</template>

<script>
	import store from '../store/index.js';
	import axios from 'axios';

	import {
		mapState,
		mapMutations,
		mapActions
	} from 'vuex';

	export default {
		name: 'Header',
		data() {
			return {
				activeName: 0,
				header_list: []
			}
		},
		store,
		computed: {
			...mapState(["headerList"])
		},
		methods: {
			...mapMutations(["setList"]),
			...mapActions(["getList"]),
			listClick(src) {
				console.log(src);
			},
			headerTabsClick(tab, event) {
				void(event);
				this.activeName = tab.name;
			}
		},
		created() {
			axios.get("/json/headerList.json", {
					timeout: 3000,
				})
				.then(res => {
					console.log(res.data)
					this.header_list = res.data;
					console.log("this.header_list=", this);
				})
				.catch((error) => {
					console.log("error", error)
				})
		}
	};
</script>

<style>
	.header {
		width: 100%;
		height: 80px;
		color: #FFFFFF;
		background-color: #2c3e50;
		border-bottom: 1px solid #1f2d3d;
		overflow: hidden;
		padding: 5px 31px 0 0;
	}

	.header_logo {
		width: 260px;
		height: 100%;
		line-height: 80px;
		font-size: 22px;
		text-align: center;
	}

	.header_lists li {
		width: 80px;
		height: 80px;
		text-align: center;
		cursor: pointer;
	}

	.header_lists li:hover {
		transform: scale(1.05);
	}

	.header_lists li img {
		margin: 1px 0 3px 0;
	}

	.header_lists li p {
		font-size: 13px;
	}

	.header .el-tabs__item {
		padding: 0 5px;
		color: #FFFFFF !important;
	}

	.el-tabs__item.is-active {
		color: #409EFF !important;
	}

	.key {
		width: 42px;
		height: 42px;
		border: 1px solid #409EFF;
	}

	.close {
		width: 42px;
		height: 42px;
		border: 1px solid #409EFF;
	}
</style>
