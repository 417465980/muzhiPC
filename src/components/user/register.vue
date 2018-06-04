<template>
	<div id="register" class="max-width" ref="register">
        <div class="register-box">
            <div>
                <p class="font-size-normal">没有拇指账号？</p>
                <router-link to="/login" tag="span" class="background margin-s button-normal cp">马上登录</router-link>
            </div>
            <div class="register-wrap">
                <div class="mauto tl register-main">
                    <h3 class="g0 n f28 pb40 ">注册拇指游戏平台</h3>
                    <ul>
                        <li>
                            <label class="accout-label" for="username">用户名</label>
                            <input @input="checkUser" @blur="checkname" class="input-common" placeholder="6-15位（仅限数字、英文）" type="text" v-model='username'>
                            <span :class="{'text-danger':!userInput.prompt,'text-success':userInput.prompt,'text-active':userInput.textActive}">{{userInput.promptContent}}</span></li>
                        <li>
                            <label class="accout-label" for="password">密码</label>
                            <input @input="checkPsd" class="input-common" placeholder="请输入密码" :type="type" v-model='password'>
                            <span :class="{'text-danger':!psdInput.prompt,'text-success':psdInput.prompt,'text-active':psdInput.textActive}">{{psdInput.promptContent}}</span>
                            <i class="eye" @click="changeType"></i></li>
                        <li>
                            <label class="accout-label" for="">重复密码</label>
                            <input @input="checkPsdRepeat" class="input-common" :type="type" placeholder="请输入重复密码" v-model="passwordrepeat">
                            <span :class="{'text-danger':!repeatPsdInput.prompt,'text-success':repeatPsdInput.prompt,'text-active':repeatPsdInput.textActive}">{{repeatPsdInput.promptContent}}</span>
                            <i class="eye" @click="changeType"></i></li>
                    </ul>
                    <div><p class="unregistered tl"><input class="radioR" type="checkbox" v-model="checked">我已阅读并同意<router-link to="/mzagreement" tag="span">《拇指通行证用户服务协议》</router-link></p></div>
                    <input class="background register-sub tc br6 f16 wh cp" ref="sub" @click="mobileDoReg" type="button" value="提交">
                </div>
            </div>
        </div>
        <transition>
			<div class="hint" ref="hint">
				<span ref="hint-content"></span>
			</div>
		</transition>
	</div>
</template>
<script>
import axios from "axios";
import qs from "qs";
import { url, resPassword, regUserName, hint } from "../../common/js/general";

export default {
  data() {
    return {
      username: "",
      password: "",
      passwordrepeat: "",
      type: "password",
      checked: false,
      userInput: {
        prompt: false,
        promptContent: "6-15位（仅限数字、英文）",
        textActive: false
      }, //登录注册验证提示
      psdInput: {
        prompt: false,
        promptContent: "最少5位",
        textActive: false
      },
      repeatPsdInput: {
        prompt: false,
        promptContent: "两次输入不一致",
        textActive: false
      },
      $refs: ""
    };
  },
  methods: {
    mobileDoReg() {
      const that = this;

      this.userInput.textActive = this.psdInput.textActive = this.repeatPsdInput.textActive = true;
      if (
        this.userInput.prompt &&
        this.psdInput.prompt &&
        this.repeatPsdInput.prompt &&
        this.checked
      ) {
        let paramsUrl = qs.stringify({
          username: this.username,
          password: this.password
        });
        axios
          .post(url + "/muzhiplat/pc2/user/register", paramsUrl)
          .then(function(res) {
            if (res.data.msg == "注册成功") {
              if (that.userInput.prompt) {
                let paramsUrl = qs.stringify({
                  username: that.username,
                  password: that.password
                });

                axios
                  .post(url + "/muzhiplat/pc2/user/login", paramsUrl)
                  .then(function(res) {
                    hint(that.$refs, res.data.msg);
                    if (res.data.ret) {
                      that.$store.state.userName = res.data.rows.user;
                      that.$store.state.token = res.data.token;
                      that.$store.state.game = res.data.rows.game;
                      window.localStorage.setItem(
                        "userdata",
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

                      setTimeout(function() {
                        that.$router.push({
                          path: "/"
                        });
                      }, 1000);
                    }
                  })
                  .catch(function(res) {});
              }
              /*  setTimeout(function() {
                that.$router.push("/login");
              }, 2000); */
            }
            if (res.data.ret) {
              hint(that.$refs, res.data.msg);
            }
          })
          .catch(function(res) {
            console.log(res);
          });
      }
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
    checkPsd() {
      this.psdInput.textActive = true;
      this.psdInput.prompt = resPassword.test(this.password);
      if (resPassword.test(this.password)) {
        this.psdInput.promptContent = "通过";
      } else {
        this.psdInput.promptContent = "最少5位";
      }
    },
    checkPsdRepeat() {
      this.repeatPsdInput.textActive = true;
      if (this.password == this.passwordrepeat) {
        this.repeatPsdInput.prompt = true;
        this.repeatPsdInput.promptContent = "密码输入一致";
      } else {
        this.repeatPsdInput.prompt = false;
        this.repeatPsdInput.promptContent = "两次密码输入不一致，请重新输入";
      }
    },
    changeType() {
      if (this.type == "text") {
        this.type = "password";
      } else {
        this.type = "text";
      }
    },
    checkname() {
      const that = this;
      if (regUserName.test(this.username)) {
        let paramsUrl = new URLSearchParams();
        paramsUrl.append("name", that.username);
        axios
          .post(url + "/newMobile/checkname", paramsUrl)
          .then(function(res) {
            if (res.data.result == 1) {
              that.userInput.prompt = false;
              that.userInput.promptContent = "该用户名已存在";
            } else if (res.data.result == -1) {
              that.userInput.prompt = true;
              that.userInput.promptContent = "该用户名可用";
            }
          })
          .catch(function(res) {
            console.log(res);
          });
      }
    }
  },
  mounted() {
    let height = parseInt(getComputedStyle(this.$refs.register, null).height);
    if (height <= document.documentElement.clientHeight - 296 - 133) {
      this.$refs.register.style.height =
        document.documentElement.clientHeight - 296 - 133 + "px";
    }
  }
};
</script>
<style scoped lang="stylus" >
.unregistered {
  font-size: 12px;
  color: #999;

  span {
    color: #922ba8;
    cursor: pointer;
  }
}

.register-wrap {
  width: auto;
  vertical-align: middle;
  padding-bottom: 100px;

  li {
    height: 56px;
    position: relative;

    .accout-label {
      min-width: 64px;
      padding-right: 10px;
      text-align: left;
      display: inline-block;
      font-size: 14px;
      color: #999;
      line-height: 36px;
    }

    .input-common {
      min-width: 330px;
      width: auto;
      height: 40px;
      line-height: 40px;
      padding: 0 2rem;
      font-size: 14px;
      color: #333;
      border-radius: 6px;
      appearance: none;
      border: 1px solid #e4e4e4;
      box-sizing: border-box;
    }

    span {
      display: none;
      position: absolute;
      top: 10px;
      left: 415px;
      font-size: 12px;
      width: 200px;
    }

    .text-active {
      display: inline-block;
    }
  }
}

.radioR {
  width: 12px;
  height: 12px;
  border: 1px solid #d6d6d6;
  font-size: 12px;
  margin: 0px 4px 0px 0;
}

.eye {
  display: inline-block;
  position: absolute;
  right: 56px;
  top: 1px;
  width: 38px;
  height: 38px;
  background: #fff url('../../assets/images/eye.png') no-repeat center center;
  background-size: 100% auto;
  cursor: pointer;
}

.accout-submit {
  width: 400px;
  height: 48px;
  margin-top: 50px;
  border-radius: 6px;
  background: #cf2878;

  input[type='button'] {
    border: none;
    background: none;
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
}

.register-main {
  width: 460px;
  margin: 0 auto;
}

.register-sub {
  display: block;
  width: 270px;
  height: 50px;
  line-height: 50px;
  border: none;
  margin: 40px auto 0;

  &:active {
    background: #999 !important;
  }
}
</style>