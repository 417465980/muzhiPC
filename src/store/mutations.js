import * as types from './mutation-types'

const mutations = {
  [types.SET_NEWS_INFO](state, newsInfo) {
    state.newsInfo = newsInfo
  },
  [types.SET_USER_NAME](state, userName) {
    state.userName = userName
  },
  [types.SET_SHOW](state, show) {
    state.show = true;
  },
  [types.SET_TOKEN](state, token) {
    if (window.localStorage.getItem('token')) {

      state.token = window.localStorage.getItem('token').slice(1, -1);
    } else {
      state.token = '';
    }

  },
  [types.SET_USERDATA](state, userdata) {
    if (window.localStorage.getItem('userdata')) {
      state.userdata = JSON.parse(window.localStorage.getItem('userdata'))
    } else {
      state.userdata = {
        accountId: null,
        auth: null,
        backgroundImg: null,
        bindstatus: null,
        birthDay: null,
        certificationStatus: null,
        consignee: null,
        contactNo: null,
        couponSum: null,
        email: null,
        gender: null,
        giftSum: null,
        goldAccount: null,
        id: null,
        identityCard: null,
        level: null,
        mUserIcon: null,
        mzAccount: null,
        name: null,
        nickName: null,
        onlyAccount: null,
        phoneNum: null,
        point: null,
        psd: null,
        qq: null,
        realName: null,
        receivedAddress: null,
        recentLoginAddr: null,
        recentLoginIp: null,
        recentLoginTime: null,
        signInToday: null,
        signInWhatDay: null,
        signature: null,
        upgradePoint: null,
        wx: null,
      }
    }
  },
  [types.SET_GAME](state, game) {
    if (window.localStorage.getItem('game')) {
      state.game = JSON.parse(window.localStorage.getItem('game'))
    } else {
      state.game = []

    }

  },
}


export default mutations
