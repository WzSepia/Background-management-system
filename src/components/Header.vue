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
		<div class="user_box fr">
			<div class="user_info">
				<p>{{time}}</p>
				<p>2020年9月14日</p>
			</div>
			<div class="user_icon">
				<i class="fa fa-user"></i>
				<p>超级管理员</p>
			</div>
			<div class="user_btns">
				<el-button type="primary" title="设置密码" size="mini" icon="el-icon-setting" @click="dialogFormVisible = true">
				</el-button>
				<el-button type="danger" title="退出系统" size="mini" icon="el-icon-error" @click="quitSystem">
				</el-button>
				<el-dialog title="修改登陆密码" :visible.sync="dialogFormVisible">
					<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
						<el-form-item label="旧密码:" prop="oldPass">
							<el-input type="password" v-model="ruleForm2.oldPass" auto-complete="off"></el-input>
						</el-form-item>
						<el-form-item label="密码:" prop="pass">
							<el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
						</el-form-item>
						<el-form-item label="确认密码:" prop="checkPass">
							<el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button @click="resetForm('ruleForm2'),dialogFormVisible = false">取 消</el-button>
							<el-button @click="resetForm('ruleForm2')">重 置</el-button>
							<el-button type="primary" @click="submitForm('ruleForm2'),resetForm('ruleForm2'),dialogFormVisible = false">确 定</el-button>
						</el-form-item>
					</el-form>
				</el-dialog>
			</div>
		</div>
	</div>
</template>

<script>
	import store from '../store/index.js';
	import axios from 'axios';

	import {
		mapState,
	} from 'vuex';

	export default {
		name: 'Header',
		data() {
			var checkOldPass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入旧密码'));
				} else {
					callback();
				}
			};
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					if (this.ruleForm2.checkPass !== '') {
						this.$refs.ruleForm2.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.ruleForm2.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				//默认展示第几个头部tab
				activeName: 0,
				//头部页签数据
				header_list: [],
				//时间：hh:mm:ss
				time: "",
				//判断弹窗的显示隐藏
				dialogFormVisible: false,
				//弹出框表单数据
				ruleForm2: {
					pass: '', //当前密码
					checkPass: '', //二次密码检测
					oldPass: '' //旧密码
				},
				//检测规则
				rules2: {
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}],
					oldPass: [{
						validator: checkOldPass,
						trigger: 'blur'
					}]
				}
			}
		},
		//store配置
		store,
		//计算
		computed: {
			...mapState([""])
		},
		//方法集
		methods: {
			//带图片的点击(old)
			listClick(src) {
				console.log(src);
			},
			//页签切换
			headerTabsClick(tab, event) {
				void(event);
				this.activeName = tab.name;
				this.$message({
					type: "success",
					message: "点击到第" + tab.name + "个索引页签"
				})
				//请求数据
				// axios.post({
				// 		url: "",
				// 		param: {},
				// 		timeout: 3000
				// 	}).then(res => {
				// 		if(res){
				// 			this.$message({
				// 				type: "success",
				// 				message: "修改成功!!"
				// 			});
				// 		}
				// 	})
				// 	.catch((error) => {
				// 		console.log("error", error)
				// 	})
			},
			//实时时间展示
			timeClock() {
				setInterval(() => {
					const h = new Date().getHours();
					const m = new Date().getMinutes();
					const s = new Date().getSeconds();
					this.time = h + ":" + m + ":" + s;
				}, 1000)
			},
			//退出系统
			quitSystem() {
				this.$confirm('确定退出系统?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'info'
				}).then(() => {
					sessionStorage.eleToken = "";
					this.$message({
						type: 'success',
						message: '退出成功!'
					})
					setTimeout(() => {
						location.reload() // 强制刷新
					}, 1000)
				}).catch(() => {
					// this.$message({
					// 	type: 'info',
					// 	message: '已取消退出'
					// })
				})
			},
			//设置密码提交
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert("修改成功！");
						//请求数据
						// axios.post({
						// 		url: "",
						// 		param: {},
						// 		timeout: 3000
						// 	}).then(res => {
						// 		if(res){
						// 			this.$message({
						// 				type: "success",
						// 				message: "修改成功!!"
						// 			});
						// 		}
						// 	})
						// 	.catch((error) => {
						// 		console.log("error", error)
						// 	})
					} else {
						this.$message.error("提交失败")
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		},
		created() {
			this.timeClock();
			//
			axios.get("/json/headerList.json", {
					timeout: 3000,
				}).then(res => {
					this.header_list = res.data;
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
		padding: 5px 5px 0 0;
	}

	.header_logo {
		width: 200px;
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

	.user_box {
		display: flex;
	}

	.user_info {
		font-size: 12px;
		margin: 10px 4px 0 0;
	}

	.user_icon i {
		font-size: 40px;
	}

	.user_icon p {
		font-size: 12px;
	}

	.user_btns {
		margin-top: 10px;
	}

	.el-form-item__label {
		color: #000000;
	}
	
	@media screen and (min-width:1800px) {
		.header .el-tabs__item {
			padding: 0 20px;
		}
	}
	
	@media screen and (min-width:1660px) and (max-width:1800px) {
		.header .el-tabs__item {
			padding: 0 20px;
		}
	}
	
	@media screen and (min-width:1420px) and (max-width:1660px) {
		.header .el-tabs__item {
			padding: 0 5px;
		}
	}
	
	@media screen and (max-width:1420px) {
		.header .el-tabs__item {
			padding: 0 1px;
		}
	}
</style>
