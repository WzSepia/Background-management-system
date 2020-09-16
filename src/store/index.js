import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 0,
		collapse: false,
		time: null,
		iframe_src: "",
		nav_list: [{
				path: "https://echarts.apache.org/zh/index.html",//'/UserMaintenance',
				name: '用户维护',
				icon: "el-icon-s-tools"
			},
			{
				path: "https://cn.vuejs.org/",//'/RoleMaintenance',
				name: '角色维护',
				icon: "el-icon-setting"
			},
			{
				path: "https://vuex.vuejs.org/zh/guide/",//'/BusinessListMaintenance',
				name: '业务清单维护',
				icon: "el-icon-goods"
			},
			{
				path: "http://v1.iviewui.com/",//'/OrganizationManagement',
				name: '组织机构管理',
				icon: "el-icon-s-help"
			},
			{
				path: "https://map.baidu.com/",//'/LogManagement',
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
			//console.log("collapse=", state.collapse);
		},
		navSelect(key, keyPath) {
			this.state.iframe_src = keyPath;
			//console.log(key, keyPath);
		}
	},
	actions: {},
	getters: {
		time(state) {
			const h = new Date().getHours();
			const m = new Date().getMinutes();
			const s = new Date().getSeconds();
			return state.time = h + ":" + m + ":" + s;
		}
	},
	modules: {}
})
