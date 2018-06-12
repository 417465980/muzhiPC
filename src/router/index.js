import Vue from 'vue';
import Router from 'vue-router';
// import Home from 'components/Home';
const Home = (resolve) => {
  import ('@/components/Home').then((module) => {
    resolve(module);
  });

};
// import GameCenter from 'components/game-center';
const GameCenter = (resolve) => {
  import ('@/components/game-center').then((module) => {
    resolve(module);
  });

};
// import GameAll from 'components/games/game-all';
const GameAll = (resolve) => {
  import ('@/components/games/game-all').then((module) => {
    resolve(module);
  });
};
// import CasualPuzzle from 'components/games/casual-puzzle';
const CasualPuzzle = (resolve) => {
  import ('@/components/games/casual-puzzle').then((module) => {
    resolve(module);
  });
};
// import RolePlay from 'components/games/role-play';
const RolePlay = (resolve) => {
  import ('@/components/games/role-play').then((module) => {
    resolve(module);
  });
};
// import BusinessStrategy from 'components/games/business-strategy';
const BusinessStrategy = (resolve) => {
  import ('@/components/games/business-strategy').then((module) => {
    resolve(module);
  });
};
// import Adventure from 'components/games/adventure';
const Adventure = (resolve) => {
  import ('@/components/games/adventure').then((module) => {
    resolve(module);
  });
};
// import Chessworld from 'components/games/chess-world';
const Chessworld = (resolve) => {
  import ('@/components/games/chess-world').then((module) => {
    resolve(module);
  });
};
// import FlightShoot from 'components/games/flight-shoot';
const FlightShoot = (resolve) => {
  import ('@/components/games/flight-shoot').then((module) => {
    resolve(module);
  });
};
// import NetworkGame from 'components/games/network-game';
const NetworkGame = (resolve) => {
  import ('@/components/games/network-game').then((module) => {
    resolve(module);
  });
};
// import Sport from 'components/games/sport';
const Sport = (resolve) => {
  import ('@/components/games/sport').then((module) => {
    resolve(module);
  });
};

// import GiftCenter from 'components/gift-center';
const GiftCenter = (resolve) => {
  import ('@/components/gift-center').then((module) => {
    resolve(module);
  });
};

// import GiftAll from 'components/gift/gift-all';
const GiftAll = (resolve) => {
  import ('@/components/gift/gift-all').then((module) => {
    resolve(module);
  });
};
// import Latest from 'components/gift/latest';
const Latest = (resolve) => {
  import ('@/components/gift/latest').then((module) => {
    resolve(module);
  });
};
// import Novice from 'components/gift/novice';
const Novice = (resolve) => {
  import ('@/components/gift/novice').then((module) => {
    resolve(module);
  });
};
// import Exclusive from 'components/gift/exclusive';
const Exclusive = (resolve) => {
  import ('@/components/gift/exclusive').then((module) => {
    resolve(module);
  });
};
// import Privilege from 'components/gift/privilege';
const Privilege = (resolve) => {
  import ('@/components/gift/privilege').then((module) => {
    resolve(module);
  });
};
// import Starting from 'components/gift/starting';
const Starting = (resolve) => {
  import ('@/components/gift/starting').then((module) => {
    resolve(module);
  });
};
// import Platinum from 'components/gift/platinum';
const Platinum = (resolve) => {
  import ('@/components/gift/platinum').then((module) => {
    resolve(module);
  });
};
// import Luxury from 'components/gift/luxury';
const Luxury = (resolve) => {
  import ('@/components/gift/luxury').then((module) => {
    resolve(module);
  });
};
// import Festival from 'components/gift/festival';
const Festival = (resolve) => {
  import ('@/components/gift/festival').then((module) => {
    resolve(module);
  });
};
// import Other from 'components/gift/other';
const Other = (resolve) => {
  import ('@/components/gift/other').then((module) => {
    resolve(module);
  });
};

// import ChargeCenter from 'components/charge-center';
const ChargeCenter = (resolve) => {
  import ('@/components/charge-center').then((module) => {
    resolve(module);
  });
};
// import ActiveCenter from 'components/active-center';
const ActiveCenter = (resolve) => {
  import ('@/components/active-center').then((module) => {
    resolve(module);
  });
};
// import Service from 'components/service';
const Service = (resolve) => {
  import ('@/components/service').then((module) => {
    resolve(module);
  });
};
// import NewsCenter from 'components/news-center';
const NewsCenter = (resolve) => {
  import ('@/components/news-center').then((module) => {
    resolve(module);
  });
};

// import NewsAll from 'components/news/news-all';
const NewsAll = (resolve) => {
  import ('@/components/news/news-all').then((module) => {
    resolve(module);
  });
};
// import NewsHot from 'components/news/news-hot';
const NewsHot = (resolve) => {
  import ('@/components/news/news-hot').then((module) => {
    resolve(module);
  });
};
// import Measure from 'components/news/measure';
const Measure = (resolve) => {
  import ('@/components/news/measure').then((module) => {
    resolve(module);
  });
};
// import Strategy from 'components/news/strategy';
const Strategy = (resolve) => {
  import ('@/components/news/strategy').then((module) => {
    resolve(module);
  });
};
// import Announce from 'components/news/announce';
const Announce = (resolve) => {
  import ('@/components/news/announce').then((module) => {
    resolve(module);
  });
};
// import newDetail from 'components/new-detail';
const newDetail = (resolve) => {
  import ('@/components/new-detail').then((module) => {
    resolve(module);
  });
};
// import GameDetail from 'components/games/game-detail';
const GameDetail = (resolve) => {
  import ('@/components/games/game-detail').then((module) => {
    resolve(module);
  });
};

// import User from "components/user/user-center";
const User = (resolve) => {
  import ('@/components/user/user-center').then((module) => {
    resolve(module);
  });
};
// import Account from "components/user/account";
const Account = (resolve) => {
  import ('@/components/user/account').then((module) => {
    resolve(module);
  });
};
const Authen = (resolve) => {
  import ('@/components/user/authen').then((module) => {
    resolve(module);
  });
};

// import MyGame from "components/user/my-game";
const MyGame = (resolve) => {
  import ('@/components/user/my-game').then((module) => {
    resolve(module);
  });
};
// import MyGift from "components/user/my-gift";
const MyGift = (resolve) => {
  import ('@/components/user/my-gift').then((module) => {
    resolve(module);
  });
};
// import MyCoupon from "components/user/my-coupon";
const MyCoupon = (resolve) => {
  import ('@/components/user/my-coupon').then((module) => {
    resolve(module);
  });
};
// import MyWallet from "components/user/my-wallet";
const MyWallet = (resolve) => {
  import ('@/components/user/my-wallet').then((module) => {
    resolve(module);
  });
};
// import Login from "components/user/login";
const Login = (resolve) => {
  import ('@/components/user/login').then((module) => {
    resolve(module);
  });
};
// import Register from "components/user/register";
const Register = (resolve) => {
  import ('@/components/user/register').then((module) => {
    resolve(module);
  });
};
// import Mzagreement from 'components/user/mzagreement';
const Mzagreement = (resolve) => {
  import ('@/components/user/mzagreement').then((module) => {
    resolve(module);
  });
};

// import Search from 'components/search';
const Search = (resolve) => {
  import ('@/components/search').then((module) => {
    resolve(module);
  });
};

const About = (resolve) => {
  import ('@/components/about').then((module) => {
    resolve(module);
  });
};

const Developer = (resolve) => {

  import ('@/components/developer').then((module) => {

    resolve(module);
  });
};
/* 
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router) */

/* const Home = (resolve) => {
  import('@/components/Home').then((module) => {
    resolve(module)
  })

}
 */




Vue.use(Router);
export default new Router({

  routes: [{
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Home
    },
    {
      path: '/game',
      component: GameCenter,
      redirect: '/game/all',
      children: [{
          path: 'all',
          component: GameAll,
        }, {
          path: 'casual',
          component: CasualPuzzle
        }, {
          path: 'role',
          component: RolePlay
        }, {
          path: 'business',
          component: BusinessStrategy
        }, {
          path: 'adventure',
          component: Adventure
        },
        {
          path: 'chess',
          component: Chessworld
        }, {
          path: 'shoot',
          component: FlightShoot
        }, {
          path: 'network',
          component: NetworkGame
        }, {
          path: 'sport',
          component: Sport
        }, {
          path: 'gamedetail',
          component: GameDetail
        }
      ]
    },
    {
      path: '/gift',
      component: GiftCenter,
      redirect: '/gift/all',
      children: [{
          path: 'all',
          component: GiftAll,
        },
        {
          path: 'latest',
          component: Latest
        },
        {
          path: 'novice',
          component: Novice
        },
        {
          path: 'exclusive',
          component: Exclusive
        },
        {
          path: 'privilege',
          component: Privilege
        },
        {
          path: 'starting',
          component: Starting
        },
        {
          path: 'platinum',
          component: Platinum
        },
        {
          path: 'luxury',
          component: Luxury
        },
        {
          path: 'festival',
          component: Festival
        },
        {
          path: 'other',
          component: Other
        }
      ]
    },
    {
      path: '/charge',
      component: ChargeCenter
    },
    {
      path: '/active',
      component: ActiveCenter
    },
    {
      path: '/service',
      component: Service
    },
    {
      path: '/news',
      component: NewsCenter,
      children: [{
          path: 'all',
          component: NewsAll,
        },
        {
          path: 'hot',
          component: NewsHot
        },
        {
          path: 'measure',
          component: Measure
        },
        {
          path: 'strategy',
          component: Strategy
        },
        {
          path: 'announce',
          component: Announce
        }
      ]
    },
    {
      path: '/news/:id',
      component: newDetail
    },
    {
      path: '/game/:id',
      component: GameDetail
    },
    {
      path: "/user",
      component: User,
      redirect: '/user/account',
      children: [{
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
        }, {
          path: "authen",
          component: Authen
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
      path: '/mzagreement',
      component: Mzagreement
    },
    {
      path: '/search/:keyword',
      component: Search
    }, {
      path: '/about',
      component: About
    }, {
      path: '/developer',
      component: Developer

    }


  ],
  /* 	scrollBehavior (to, from, savedPosition) {
  		if (savedPosition) {
  			return savedPosition;
  		} else {
  			return { x: 0, y: 0 };
  		}
  	}, */
});
