import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: "/",
		redirect: "index"
	}, 
	// {
	// 	path: '/home',
	// 	name: 'Home',
	// 	component: Home
	// },
	{
		path: '/index',
		name: 'Index',
		component: () => import('../views/index.vue'),
		meta: {
			title: "首页"
		},
		redirect: "/UserMaintenance",
		children: [{
				path: '/UserMaintenance',
				name: '用户维护',
				component: () => import('../views/systemManage/UserMaintenance.vue')
			},
			{
				path: '/RoleMaintenance',
				name: '角色维护',
				component: () => import('../views/systemManage/RoleMaintenance.vue')
			},
			{
				path: '/BusinessListMaintenance',
				name: '业务清单维护',
				component: () => import('../views/systemManage/BusinessListMaintenance.vue')
			},
			{
				path: '/OrganizationManagement',
				name: '组织机构管理',
				component: () => import('../views/systemManage/OrganizationManagement.vue')
			},
			{
				path: '/LogManagement',
				name: '日志管理',
				component: () => import('../views/systemManage/LogManagement.vue')
			}
		]
	},
	{
		path: '/Login',
		name: '登陆',
		component: () => import('../views/login/Login.vue')
	},


]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

//路由守卫
router.beforeEach((to, from, next) => {
	// const isLogin = !!localStorage.eleToken;
	// if (to.path === "/login") {
	// 	next()
	// } else {
	// 	isLogin ? next() : next("/login")
	// }
	next()
	//console.log(to, from, next);
	this.$router.push()
})

export default router
