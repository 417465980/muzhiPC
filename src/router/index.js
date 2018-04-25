import Vue from 'vue';
import Router from 'vue-router';
import Home from 'components/Home';
import GameCenter from 'components/game-center';

import GameAll from 'components/games/game-all';
import CasualPuzzle from 'components/games/casual-puzzle';
import RolePlay from 'components/games/role-play';
import BusinessStrategy from 'components/games/business-strategy';
import Adventure from 'components/games/adventure';
import Chessworld from 'components/games/chess-world';
import FlightShoot from 'components/games/flight-shoot';
import NetworkGame from 'components/games/network-game';
import Sport from 'components/games/sport';

import GiftCenter from 'components/gift-center';

import GiftAll from 'components/gift/gift-all';
import Latest from 'components/gift/latest';
import Novice from 'components/gift/novice';
import Exclusive from 'components/gift/exclusive';
import Privilege from 'components/gift/privilege';
import Starting from 'components/gift/starting';
import Platinum from 'components/gift/platinum';
import Luxury from 'components/gift/luxury';
import Festival from 'components/gift/festival';
import Other from 'components/gift/other';

import ChargeCenter from 'components/charge-center';
import ActiveCenter from 'components/active-center';
import Service from 'components/service';
import NewsCenter from 'components/news-center';

import NewsAll from 'components/news/news-all';
import NewsHot from 'components/news/news-hot';
import Measure from 'components/news/measure';
import Strategy from 'components/news/strategy';
import Announce from 'components/news/announce';
import newDetail from 'components/new-detail';
import GameDetail from 'components/games/game-detail';

import User from "components/user/user-center";
import Account from "components/user/account";
import MyGame from "components/user/my-game";
import MyGift from "components/user/my-gift";
import MyCoupon from "components/user/my-coupon";
import MyWallet from "components/user/my-wallet";
import Login from "components/user/login";
import Register from "components/user/register";
import Mzagreement from 'components/user/mzagreement';

import Search from 'components/search';

Vue.use(Router);
export default new Router({

	routes: [
	  	{
	        path: '/',
			redirect: '/index'
		},
		{
	        path: '/index',
	     	component: Home
	    },
	    {
			path:'/game',
			component:GameCenter,
			redirect:'/game/all',
			children:[
				{
					path:'all',
					component:GameAll,
				},{
					path:'casual',
					component:CasualPuzzle
				},{
					path:'role',
					component:RolePlay
				},{
					path:'business',
					component:BusinessStrategy   
				},{
					path:'adventure',
					component:Adventure   
				},
				{
					path:'chess',
					component:Chessworld   
				},{
					path:'shoot',
					component:FlightShoot   
				},{
					path:'network',
					component:NetworkGame 
				},{
					path:'sport',
					component:Sport
				},{
					path:'gamedetail',
					component:GameDetail
				}
			]
		},
		{
			path:'/gift',
			component:GiftCenter,
			redirect:'/gift/all',
			children:[
				{
					path:'all',
					component:GiftAll,
				},
				{
					path:'latest',
					component:Latest
				},
				{
					path:'novice',
					component:Novice
				},
				{
					path:'exclusive',
					component:Exclusive   
				},
				{
					path:'privilege',
					component:Privilege   
				},
				{
					path:'starting',
					component:Starting   
				},
				{
					path:'platinum',
					component:Platinum   
				},
				{
					path:'luxury',
					component:Luxury   
				},
				{
					path:'festival',
					component:Festival   
				},
				{
					path:'other',
					component:Other   
				}
			]
		},
		{
			path:'/charge',
			component:ChargeCenter
		},
		{
			path:'/active',
			component:ActiveCenter
		},
		{
			path:'/service',
			component:Service
		},
		{
			path:'/news',
			component:NewsCenter,
			children:[
				{
					path:'all',
					component:NewsAll,
				},
				{
					path:'hot',
					component:NewsHot
				},
				{
					path:'measure',
					component:Measure
				},
				{
					path:'strategy',
					component:Strategy   
				},
				{
					path:'announce',
					component:Announce   
				}
			]
		},
		{
			path: '/news/:id',
			component:newDetail
		},
		{
			path: '/game/:id',
			component:GameDetail
		},
		{
			path: "/user",
			component: User,
			redirect:'/user/account',
			children:[
				{
					path: "myGame",
					component: MyGame,
					
				},
				{
					path: "myGift",
					component: MyGift
				},
				{
					path: "myCoupon",
					component: MyCoupon,
				},
				{
					path: "myWallet",
					component: MyWallet
				},
				{
					path: "account",
					component: Account
				}
			]
		},
		{
			path: "/login",
			component: Login
		},
		{
			path: "/register",
			component: Register
		},
		{
			path:'/mzagreement',
			component : Mzagreement
		},
		{
			path :'/search/:keyword',
			component:Search
		}
	],
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	},
});
