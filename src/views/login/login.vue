<template>
	<div class="login posa">
		<div class="login_box">
			<el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名:" prop="user">
					<el-input type="text" v-model.trim="ruleForm.user" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码:" prop="pass">
					<el-input type="password" v-model.trim="ruleForm.pass" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')" :disabled="logClick">登陆</el-button>
					<el-button @click="resetForm('ruleForm')">重置</el-button>
					<el-button @click="registerForm('ruleForm')" style="display: none;">注册</el-button>
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
				logClick: false,
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
				let _that = this;
				let keyState = false;
				this.logClick = true;
				this.$refs[formName].validate((valid) => {
					//valid true / false
					if (valid) {
						_that.$axios.get("/users/searchUser")
							.then(function(response) {
								//console.log("response", response);
								let data = response.data;
								for (let i in data) {
									if (_that.ruleForm.user == data[i].name) {
										if (_that.ruleForm.pass == data[i].pass) {
											keyState = !keyState;
										}
									}
								}
								if (keyState) {
									sessionStorage.eleToken = response.data;
									_that.message("登陆成功");
									_that.$router.push("/index");
								}else{
									_that.message("登陆信息有误，请重新输入！");
									_that.$refs[formName].resetFields();
									return;
								}
							})
					} else {
						_that.message("提交失败！")
						return false;
					}
				});
				setTimeout(() => {
					this.logClick = false;
				}, 2000);
			},
			resetForm(formName) {
				this.message("重置成功！")
				this.$refs[formName].resetFields();
			},
			registerForm() {
				const _this = this;
				this.$axios.post("/users/addUser", this.ruleForm)
					.then(function(response) {
						if(response.status == 200){
							_this.message("注册成功！")
						}
						//console.log("注册：", response);
					})
			},
			message(msg) {
				this.$message({
					message: msg,
					type: 'warning'
				});
			}
		}
	}
</script>

<style>
	.login {
		width: 100%;
		height: 100%;
		background-color: #2c3e50ac;
		background-image: url(../../../public/images/rain.gif);
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
