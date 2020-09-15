import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 0,
		header_lists: [{
			src: require("../assets/menu1.png"),
			name: "地图控件管理"
		}, {
			src: require("../assets/menu2.png"),
			name: "元数据管理"
		}, {
			src: require("../assets/menu3.png"),
			name: "专题管理"
		}, {
			src: require("../assets/menu4.png"),
			name: "非结构化文档"
		}, {
			src: require("../assets/menu5.png"),
			name: "信息服务"
		}, {
			src: require("../assets/menu6.png"),
			name: "数据源管理"
		}, {
			src: require("../assets/menu7.png"),
			name: "质量管理"
		}, {
			src: require("../assets/menu8.png"),
			name: "资源目录"
		}, {
			src: require("../assets/menu9.png"),
			name: "查询检索"
		}, {
			src: require("../assets/menu10.png"),
			name: "共享交换"
		}, {
			src: require("../assets/menu11.png"),
			name: "系统管理"
		}, {
			src: require("../assets/menu12.png"),
			name: "功能清单"
		}, {
			src: require("../assets/menu13.png"),
			name: "数据生态注册"
		}],
		nav_list: [{
			link: "/",
			name: "Home"
		}, {
			link: "/about",
			name: "About"
		}]
	},
	mutations: {
		add(state) {
			return state.count += 1
		},
		reduce(state) {
			return state.count -= 1
		}
	},
	actions: {
		addAction(context) {
			context.commit("add");
		},
		reduceAction({
			commit
		}) {
			commit("reduce");
		}
	},
	getters: {
		count(state) {
			console.clear();
			console.log("数变了");
			return state.count += 0
		}
	},
	modules: {

	}
})
