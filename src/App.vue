<template>
	<div id="app">
		<el-container>
			<el-header height="80px">
				<el-row>
					<el-col :span="24">
						<div class="grid-content bg-purple-dark">
							<Header />
						</div>
					</el-col>
				</el-row>
			</el-header>
			<el-container>
				<Body />
			</el-container>
		</el-container>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Header from '@/components/Header.vue';
	import Body from '@/components/Body.vue';

	export default {
		components: {
			Header,
			Body
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

	.el-container {
		width: 100%;
		height: 100%;
	}

	.el-header {
		padding: 0 !important;
	}
</style>
