<template>
	<div class="main">
		<div class="nav fl">
			<!-- <router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link> -->
			<router-link v-for="(item, index) in nav_list" :key="index" :to="item.link">{{ item.name }}</router-link>
		</div>
		<div class="view fr"><router-view /></div>
	</div>
</template>

<script>
import store from '../store/index.js';
import { mapState } from 'vuex';
export default {
	name: 'Body',
	props: {
		msg: String
	},
	store,
	computed: {
		...mapState(['nav_list'])
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
	width: 100%;
	height: calc(100% - 80px);
}
.nav {
	width: 260px;
	height: 100%;
	background-color: #324057;
	overflow-x: hidden;
	overflow-y: auto;
}

.nav a {
	display: block;
	width: 100%;
	height: 60px;
	line-height: 60px;
	font-weight: bold;
	font-size: 18px;
	color: #ffffff;
}

.nav a.router-link-exact-active {
	color: #409eff;
	background-color: #004e84;
}

.view {
	width: calc(100% - 260px);
	height: 100%;
	background-color: bisque;
	overflow-x: hidden;
	overflow-y: auto;
}
</style>
