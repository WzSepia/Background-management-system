<template>
	<div class="header">
		<div class="header_logo">后台管理系统 {{ $store.state.count }}</div>
		<ul class="header_lists">
			<li class="fl" v-for="(item, index) in header_lists" :key="index">
				<img :src="item.src" @click="listClick(item.src_click)" />
				<p>{{ item.name }}</p>
			</li>
		</ul>
		<div>
			<!-- <el-button type="infor">点击</el-button> -->
			<div class="fl">2020年9月14日</div>
			<div class="fl">2</div>
			<div class="fl">超级管理员欢迎您！</div>
			<div class="key fl">4</div>
			<div class="close fl">5</div>
		</div>
	</div>
</template>

<script>
	import store from '../store/index.js';
	import {
		mapState
	} from 'vuex';

	export default {
		name: 'Header',
		store,
		computed: {
			...mapState(['header_lists'])
		},
		methods: {
			listClick(src) {
				console.log(src);
			}
		}
	};
</script>

<style scoped>
	.header {
		display: flex;
		width: 100%;
		height: 80px;
		color: aliceblue;
		background-color: #2c3e50;
		border-bottom: 1px solid #1f2d3d;
		overflow: hidden;
		padding: 5px 0;
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
