import Vue from "vue";
import Router from "vue-router";
import Home from "components/Home";
import Search from "components/search";
import GameCenter from "components/game/game-center";
import GiftCenter from "components/gift/gift-center";
import ActiveCenter from "components/active/active-center";
import NewsCenter from "components/news/news-center";
import NewDetail from "components/news/new-detail";
import User from "components/user/user-center";
import Service from "components/service/service";
import Recharge from "components/recharge/recharge";
import Account from "components/user/account";
import MyGame from "components/user/my-game";
import MyGift from "components/user/my-gift";
import MyCoupon from "components/user/my-coupon";
import MyWallet from "components/user/my-wallet";
import Login from "components/user/login";
import Register from "components/user/register";
import Mzagreement from 'components/user/mzagreement';

Vue.use(Router);
export default new Router({
  
  routes: [
    {
      path :'/',
      redirect: '/home'
    },
    {
      path: "/home",
      component: Home //首页
    },
    {
      path: "/gameCneter",
      component: GameCenter
    },
    {
      path: "/search",
      component: Search,
    },
    {
      path: "/giftCenter",
      component: GiftCenter
    },
    {
      path: "/activeCneter",
      component: ActiveCenter
    },
    {
      path: "/news",
      component: NewsCenter
    },
    {
      path: "/news/:id",
      component: NewDetail
    },
    {
      path: "/user",
      component: User,
      redirect:'/user/myCoupon',
      children:[
        {
          path: "myGame",
          component: MyGame
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
      path: "/recharge",
      component:Recharge
		},
		{
      path: "/service",
      component: Service
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
    }
    
  ]
  
});
