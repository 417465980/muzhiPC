import vue from 'vue'

const url = 'http://game.91muzhi.com';
const resPassword = /\S{6,16}/;
const regUserName = /^[0-9a-zA-Z]{6,16}$/;

let hint = function (el, data) {
  if (el.hint) {
    el.hint.style.display = 'block';
    el['hint-content'].innerHTML = data;
    setTimeout(function () {
      el.hint.style.display = 'none';
    }, 1000)
  }

};
let token = null;
if (window.localStorage.getItem('token')) {
  token = window.localStorage.getItem('token').slice(1, -1);
}



let userdata = JSON.parse(window.localStorage.getItem('userdata')) || null;

let game = JSON.parse(window.localStorage.getItem('game')) || null;
userdata = Object.assign({
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
}, userdata);


export {
  url,
  resPassword,
  regUserName,
  hint,
  token,
  userdata,
  game
}
