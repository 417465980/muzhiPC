<template>
	<div id="login" @keyup.enter="login" ref="login">
        <div class="login">
            <div class="min-width">
                <ul>
                    <li class="login-cont-left"><img class="login-left-img" src="../../assets/images/loginleft.png" alt=""></li>
                    <li class="login-cont-right">
                        <div class="login-warp">
                            <div class="login-margin">
                                <ol>
                                    <li><label class="username input-hover" for="username"><input type="text" value="checkedRemmber"  id="username" placeholder="请输入用户名" v-model="username"></label></li>  
                                    <li><label class="psd input-hover" for="psd"><input id="psd" :type="type" placeholder="请输入密码" v-model="password"><i class="eye" @click="changeType"></i></label></li> 
                                </ol>
                                <div>
                                    <p class="remmberme"><input class="radioR" type="checkbox" @change="remmberme" v-model="checked"><span>记住我的两周</span></p>
                                    <router-link to="/service" tag="span" class="forgetpsd pis-hover" >忘记密码?</router-link>
                                </div>
                                <div><input class="background loginbtn" type="button" @click="login" value="登录" ></div>
                                <div><p class="unregistered">还没注册拇指账户？<router-link to="/register" tag="span" class="pis-hover">立即注册&gt;&gt;</router-link></p></div>
                            </div>
                            <transition>
                                <div class="hint" ref="hint">
                                    <span ref="hint-content"></span>
                                </div>
                            </transition>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
	</div>
</template>
<script>
import axios from "axios";
import qs from "qs";
import { mapMutations, mapState } from "vuex";
import { url, resPassword, regUserName, hint } from "../../common/js/general";

export default {
  data() {
    return {
      username: "",
      password: "",
      type: "password",
      checked: localStorage.checked || true,
      userInput: {
        prompt: true,
        promptContent: "6-15位（仅限数字、英文）",
        textActive: false
      } //登录注册验证提示
    };
  },
  methods: {
    login() {
      const that = this;
      this.userInput.textActive = true;
      let paramsUrl = qs.stringify({
        username: this.username,
        password: this.password
      });
      axios
        .post(url + "/muzhiplat/pc2/user/login", paramsUrl)
        .then(function(res) {
          if (res.data.msg.indexOf("登陆成功") != -1) {
            res.data.msg = "登录成功";
          }
          hint(that.$refs, res.data.msg);
          if (res.data.ret) {
            window.localStorage.setItem(
              "userdata",
              JSON.stringify(res.data.rows.user)
            );
            window.localStorage.setItem(
              "userData",
              JSON.stringify(res.data.rows.user)
            );

            window.localStorage.setItem(
              "token",
              JSON.stringify(res.data.token)
            );
            window.localStorage.setItem(
              "game",
              JSON.stringify(res.data.rows.game)
            );
            that.setUserdata();
            that.setToken();
            that.setGame();
            setTimeout(function() {
              that.$router.push({
                path: "/"
              });
            }, 1000);
          }
        })
        .catch(function(res) {});
    },
    checkUser() {
      this.userInput.textActive = true;
      this.userInput.prompt = regUserName.test(this.username);
      if (regUserName.test(this.username)) {
        this.userInput.promptContent = "通过";
      } else {
        this.userInput.promptContent = "6-15位（仅限数字、英文）";
      }
    },
    changeType() {
      if (this.type == "text") {
        this.type = "password";
      } else {
        this.type = "text";
      }
    },
    remmberme() {
      if (this.checked) {
        window.localStorage.setItem("checked", "checked");
      } else {
        window.localStorage.removeItem("checked");
      }
    },
    ...mapMutations({
      setUserName: "SET_USER_NAME",
      setUserdata: "SET_USERDATA",
      setToken: "SET_TOKEN",
      setGame: "SET_GAME"
    })
  },
  mounted() {
    if (this.checked) {
      window.localStorage.setItem("checked", "checked");
      //this.username = JSON.parse(window.localStorage.getItem("userdata")).name;
    } else {
      window.localStorage.removeItem("checked");
    }
    let height = parseInt(getComputedStyle(this.$refs.login, null).height);
    if (height <= document.documentElement.clientHeight - 296 - 133) {
      this.$refs.login.style.height =
        document.documentElement.clientHeight - 296 - 133 + "px";
    }
  },
  computed: {
    ...mapState(["userdata", "token", "game"])
  }
};
</script>
<style scoped lang="stylus" >
.login {
    height: 100%;
    width: 100%;
    min-width: 1200px;
    background: url('../../assets/images/loginbac.jpg') repeat center top;
}

.login-left-img {
    width: 400px;
    margin-top: 80px;
}

.login-cont-left {
    float: left;
    height: 100%;
}

.login-cont-right {
    float: right;
    height: 100%;
    position: relative;

    .login-warp {
        width: 320px;
        height: 360px;
        margin-top: 80px;
        box-sizing: border-box;
        border: 3px solid rgba(255, 255, 255, 0.2);
        border-radius: 6px;
    }
}

.login-margin {
    height: 100%;
    padding: 0px 22px;
    background: rgba(255, 255, 255, 0.7);

    ol {
        padding-top: 50px;
    }

    .username, .psd {
        display: inline-block;
        position: relative;
        margin-top: 20px;
        width: 100%;
        height: 40px;
        background: #fff;
        border-radius: 6px;

        span {
            display: none;
            position: absolute;
            top: 40px;
            left: 0;
            font-size: 12px;
            width: 200px;
        }

        .text-active {
            display: inline-block;
        }
    }

    .username:before {
        content: '';
        display: inline-block;
        position: absolute;
        width: 40px;
        height: 40px;
        background: url('../../assets/images/icon_spri.png') no-repeat -103px -98px;
    }

    .psd:before {
        content: '';
        display: inline-block;
        position: absolute;
        width: 40px;
        height: 40px;
        background: url('../../assets/images/icon_spri.png') no-repeat -130px -98px;
    }

    #username, #psd {
        display: inline-block;
        width: 230px;
        height: 38px;
        margin-top: 1px;
        line-height: 38px;
        color: #999;
        font-size: 14px;
        border: none;
        background: #fff;
        box-sizing: border-box;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        margin-left: 40px;
    }
}

.remmberme {
    display: inline-block;
    margin-top: 10px;
    font-size: 12px;
    color: #999;

    input {
        width: 12px;
        height: 12px;
        border: 1px solid #d6d6d6;
        font-size: 12px;
        vertical-align: middle;
    }

    span {
        vertical-align: middle;
        padding-left: 3px;
    }
}

.forgetpsd {
    margin-top: 10px;
    float: right;
    color: #922ba8;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
}

.loginbtn {
    width: 100%;
    border: none;
    height: 45px;
    border-radius: 6px;
    font-size: 18px;
    line-height: 45px;
    margin-top: 20px;
    cursor: pointer;

    &:active {
        background: #999 !important;
    }
}

.unregistered {
    margin-top: 20px;
    font-size: 14px;
    color: #999;
    text-align: center;

    span {
        color: #922ba8;
        cursor: pointer;
    }
}

.eye {
    display: inline-block;
    position: absolute;
    right: 3px;
    top: 1px;
    width: 38px;
    height: 38px;
    background: #fff url('../../assets/images/eye.png') no-repeat center center;
    background-size: 100% auto;
    cursor: pointer;
}

.hint {
    position: absolute;
    top: 36%;
    left: 50%;
    width: 100%;
    text-align: center;
    z-index: 100;
    display: none;
    max-width: 768px;
    transform: translateX(-50%);
}
</style>