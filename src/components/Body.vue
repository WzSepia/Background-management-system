<template>
	<div class="main">
		<Aside />
		<!-- <Main /> -->
		<MainIframe :src='iframe_src?iframe_src:"https://vuetifyjs.com/zh-Hans/"' />
	</div>
</template>

<script>
	import store from "../store/index.js"
	import {
		mapState
	} from "vuex"
	import Aside from "./Aside.vue"
	//import Main from "./Main.vue"
	import MainIframe from "./MainIframe.vue"
	export default {
		name: 'Body',
		data() {
			return {}
		},
		store,
		components: {
			Aside,
			//Main,
			MainIframe
		},
		computed: {
			...mapState(["nav_list","iframe_src"])
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.main {
		display: flex;
		width: 100%;
		height: 100%;
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
</style>
