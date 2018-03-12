import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import GameCenter from 'components/game-center'
import GiftCenter from 'components/gift-center'
import ActiveCenter from 'components/active-center'
import NewsCenter from 'components/news-center'
import newDetail from 'components/new-detail'
Vue.use(Router)

export default new Router({
	 mode:'history',
	  routes: [
	  	{
	      	path: '/',
	     	component: Home //首页
	    },
	    {
			path:'/gameCneter',
			component:GameCenter  //游戏中心
		},
		{
			path:'/giftCenter',
			component:GiftCenter 	//礼包中心
		},
		{
			path:'/activeCneter',
			component:ActiveCenter   //活动中心
		},
		{
			path:'/news',
			component:NewsCenter 	//新闻中心
		},
		{
			path: '/news/:id',
			component:newDetail   //新闻详情
		}
	  ],
	  scrollBehavior (to, from, savedPosition) {
		  if (savedPosition) {
		    return savedPosition
		  } else {
		    return { x: 0, y: 0 }
		  }
	   }
})
