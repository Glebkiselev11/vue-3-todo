import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		meta: { layout: 'main' },
		component: Home
	},
	{
		path: '/register',
		name: 'Register',
		meta: { layout: 'empty' },
		// route level code-splitting
		// this generates a separate chunk (register.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
	},
	{
		path: '/login',
		name: 'Login',
		meta: { layout: 'empty' },
		component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
