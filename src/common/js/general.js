let url = 'http://game.91muzhi.com';
let  paramsUrl = new URLSearchParams();
let resPassword = /\S{6,16}/;
let regUserName = /^[0-9a-zA-Z]{6,16}$/;
let hint = function(el,data){
    el.hint.style.display = 'block';
    el['hint-content'].innerHTML = data;
    setTimeout(function(){
        el.hint.style.display = 'none';
    },1000)
};
let token = null||window.localStorage.getItem('token');
let userdata = null||JSON.parse(window.localStorage.getItem('userdata'));
export {url,paramsUrl,resPassword,regUserName,hint,token,userdata}
