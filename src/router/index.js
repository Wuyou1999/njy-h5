import Vue from 'vue'
import Router from 'vue-router'
/* import HelloWorld from '@/components/HelloWorld' */

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			redirect: 'index',
		},
		{
			//主页
			path: '/index',
			redirect: 'Njy',
			component: resolve => require(['../components/Index.vue'], resolve),
			meta: {
				title: '主页'
			},
			children: [{
					path: '/njy',
					component: resolve => require(['../components/Njy.vue'], resolve),
					meta: {
						title: '首页'
					}
				},
				{

					path: '/news',
					component: resolve => require(['../components/News.vue'], resolve),
					meta: {
						title: '资讯'
					}
				},
				{

					path: '/video',
					component: resolve => require(['../components/Video.vue'], resolve),
					meta: {
						title: '视频'
					}
				},
				{
					path: '/question',
					component: resolve => require(['../components/Question.vue'], resolve),
					meta: {
						title: '提问'
					}
				},
				{
					path: '/chat',
					component: resolve => require(['../components/Chat.vue'], resolve),
					meta: {
						title: '交流'
					}
				},
				{
					path: '/zhibo',
					component: resolve => require(['../components/Zhibo.vue'], resolve),
					meta: {
						title: '直播'
					}
				},
			]
		}
	]
})
