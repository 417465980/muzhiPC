var url = 'http://game.91muzhi.com';
var  paramsUrl = new URLSearchParams();
var resPassword = /\S{6,16}/;
var regUserName = /^[0-9a-zA-Z]{6,16}$/;
var hint = function(el,data){
    el.hint.style.display = 'block';
    el['hint-content'].innerHTML = data;
    setTimeout(function(){
        el.hint.style.display = 'none';
    },1000)
}
export {url,paramsUrl,resPassword,regUserName,hint}
