import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
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

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
