const url = 'http://game.91muzhi.com';
const paramsUrl = new URLSearchParams();
const resPassword = /\S{6,16}/;
const regUserName = /^[0-9a-zA-Z]{6,16}$/;
let hint = function(el,data){
    if(el.hint){
        el.hint.style.display = 'block';
        el['hint-content'].innerHTML = data;
        setTimeout(function(){
            el.hint.style.display = 'none';
        },1000)      
    }

};
let token = null;
if(window.localStorage.getItem('token')){
    token = window.localStorage.getItem('token').slice(1,-1);
}


let userdata = null||JSON.parse(window.localStorage.getItem('userdata'));
let game = null||JSON.parse(window.localStorage.getItem('game'));
userdata = Object.assign({
    accountId : "2377808",
    auth : 263,
    backgroundImg : "/assets/images/uBack/91577298-dbe1-46_Back.png",
    bindstatus : "false",
    birthDay : "2016-06-06",
    certificationStatus : null,
    consignee : "彭倩",
    contactNo : "13026662494",
    couponSum : 0,
    email : "8122107833@qq.com",
    gender : 0,
    giftSum : 123,
    goldAccount : 3616,
    id : 18624,
    identityCard : null,
    level : 9,
    mUserIcon : "/assets/images/uIcon/49d4fd9c-4950-40_Icon.png",
    mzAccount : 9,
    name : "pengqian",
    nickName : "人生如戏2号",
    onlyAccount : 0,
    phoneNum : "17512032399",
    point : null,
    psd : null,
    qq : "812210783",
    realName : null,
    receivedAddress : "湖南长沙深圳南山新材料1栋405妹纸游玩",
    recentLoginAddr : "北京市_北京市_119.29.139.157",
    recentLoginIp : "119.29.139.157",
    recentLoginTime : "2018-04-04 12:27:26",
    signInToday : null,
    signInWhatDay : null,
    signature : "to be or not to be222",
    upgradePoint : null,
    wx : "",
},userdata);

export {url,paramsUrl,resPassword,regUserName,hint,token,userdata,game}
