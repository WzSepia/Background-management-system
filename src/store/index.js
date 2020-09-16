import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 0,
		collapse: false,
		nav_list: [{
				path: '/UserMaintenance',
				name: '用户维护',
				icon: "el-icon-s-tools"
			},
			{
				path: '/RoleMaintenance',
				name: '角色维护',
				icon: "el-icon-setting"
			},
			{
				path: '/BusinessListMaintenance',
				name: '业务清单维护',
				icon: "el-icon-goods"
			},
			{
				path: '/OrganizationManagement',
				name: '组织机构管理',
				icon: "el-icon-s-help"
			},
			{
				path: '/LogManagement',
				name: '日志管理',
				icon: "el-icon-s-order"
			}
		]
	},
	mutations: {
		collapseChange(state) {
			//点击隐藏左侧菜单栏
			state.collapse = !state.collapse;
			//非父子组件传值
			//bus.$emit("collapse", this.collapse);
			console.log("collapse=", state.collapse);
		}
	},
	actions: {},
	getters: {},
	modules: {}
})
