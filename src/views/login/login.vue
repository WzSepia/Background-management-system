<template>
	<div class="login posa">
		<div class="login_box">
			<el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名:" prop="user">
					<el-input type="text" v-model="ruleForm.user" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码:" prop="pass">
					<el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
					<el-button @click="resetForm('ruleForm')">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
	export default {
		name: "Login",
		data() {
			var checkUser = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('用户名不能为空'));
				} else {
					setTimeout(() => {
						callback();
					}, 1000);
				}
			};
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					callback();
				}
			};
			return {
				ruleForm: {
					pass: '',
					user: ''
				},
				rules2: {
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					user: [{
						validator: checkUser,
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					//valid true / false
					if (valid) {
						// this.$axios.post("/api/user/addUser",this.ruleForm)
						// .then(res=>{
						sessionStorage.eleToken = valid; //res.data;
						// 	console.log(res);
						this.$message({
							message: '登陆成功',
							type: 'success'
						});
						this.$router.push("/index");
						//})
					} else {
						this.$message({
							type: "warning",
							message: "'error submit!!'"
						});
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		},
	}
</script>

<style>
	.login {
		width: 100%;
		height: 100%;
		background-color: #2c3e50ac;
		background-image: url(../../../public/img/rain.gif);
		background-repeat: no-repeat;
		background-size: cover;
		z-index: 100;
	}

	.login_box {
		width: 400px;
		height: 200px;
		position: absolute;
		left: 50%;
		top: 50%;
		padding: 20px;
		transform: translate(-50%, -50%);
		border-radius: 4px;
		box-shadow: 0 4px 10px 4px #000000;
		background-color: rgba(12, 12, 12, .8);
	}

	.el-form-item__label {
		color: #FFFFFF;
	}
</style>
