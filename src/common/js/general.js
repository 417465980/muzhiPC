const url = 'http://game.91muzhi.com';
const resPassword = /\S{6,16}/;
const regUserName = /^[0-9a-zA-Z]{6,16}$/;

let hint = function (el, data) {
  if (el.hint) {
    el.hint.style.display = 'block';
    el['hint-content'].innerHTML = data;
    setTimeout(function () {
      el.hint.style.display = 'none';
    }, 1000);
  }

};
export {
  url,
  resPassword,
  regUserName,
  hint
};
