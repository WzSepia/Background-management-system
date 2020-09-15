<template>
	<div id="app">
		<el-container>
			<el-header></el-header>
			<el-container>
				<el-aside width="260px"></el-aside>
				<el-main></el-main>
			</el-container>
		</el-container>
		<!-- <Header />
		<Body /> -->
	</div>
</template>

<script>
// @ is an alias to /src
//import Header from '@/components/Header.vue';
//import Body from '@/components/Body.vue';

export default {
	components: {
		//Header,
		//Body
	}
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	width: 100%;
	height: 100%;
}
</style>
