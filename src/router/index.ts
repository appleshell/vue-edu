import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login/index.vue')
	},
	{
		path: '', // 默认子路由
		component: Layout,
		children: [
			{
				path: '/',
				name: 'home',
				component: () => import('@/views/home/index.vue')
			},
			{
				path: '/role',
				name: 'role',
				component: () => import('@/views/role/index.vue')
			},
			{
				path: '/menu',
				name: 'menu',
				component: () => import('@/views/menu/index.vue')
			},
			{
				path: '/resource',
				name: 'resource',
				component: () => import('@/views/resource/index.vue')
			},
			{
				path: '/course',
				name: 'course',
				component: () => import('@/views/course/index.vue')
			},
			{
				path: '/user',
				name: 'user',
				component: () => import('@/views/user/index.vue')
			},
			{
				path: '/advert',
				name: 'advert',
				component: () => import('@/views/advert/index.vue')
			},
			{
				path: '/advert-space',
				name: 'advert-space',
				component: () => import('@/views/advert-space/index.vue')
			}
		]
	},
	{
		path: '*',
		name: '404',
		component: () => import('@/views/error-page/404.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
