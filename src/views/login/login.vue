<template>
	<div class="login posa">
		<el-form :model="loginUser"></el-form>
	</div>
</template>

<script>
	export default {
		name: "Login",
		data() {
			return {
				loginUser: {
					user: "super",
					password: "Aa_123456"
				}
			}
		},
		methods: {
			submitForm(formName) {
				console.log(formName);
			},
			isEmpty(value) {
				console.log(value);
			}
		}
	}
</script>

<style scoped>
	.login {
		width: 100%;
		height: 100%;
		background-color: #004E84ac;
		z-index: 100;
	}
</style>
