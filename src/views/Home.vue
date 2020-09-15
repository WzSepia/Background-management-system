<template>
	<div class="home">
		<h1>{{ msg }}</h1>
		<h1>计数器： {{ count }}</h1>
		<div>
			<el-button type="success" @click="add">+</el-button>
			<el-button type="danger" @click="reduce">-</el-button>
			<el-button type="warning" @click="$store.commit('add')">+</el-button>
			<el-button type="infor" @click="reduceAction">-</el-button>
		</div>
	</div>
</template>

<script>
	import store from "../store/index.js"
	import {mapState,mapMutations, mapGetters, mapActions} from "vuex"
export default {
	name: 'Home',
	data() {
		return {
			msg: 'Welcome to Your App'
		};
	},
	store,
	computed: {
		...mapState(['count']),
		...mapGetters(['count'])
	},
	methods: {
		...mapMutations(['add', 'reduce']),
		...mapActions(['addAction', 'reduceAction'])
	}
};
</script>


