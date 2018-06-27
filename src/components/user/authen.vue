<template>
    <div>
      <div class="tc m20 f18 g6" v-if="userdata.certificationStatus==0"><img src="../../assets/images/mzapp.png" alt=""><p>系统升级中</p></div>
      <div class="tc m20 f18 g6" v-else-if="userdata.certificationStatus==1"><img src="../../assets/images/mzapp.png" alt=""><p>已认证</p></div>
      <div class="tc m20 f18 g6" v-else-if="userdata.certificationStatus==3"><img src="../../assets/images/mzapp.png" alt=""><p>认证中</p></div>
      <div class="authen" v-else>
      <ul>
        <li><label for="name">用户姓名</label><input id="name" v-model="realname"  @blur='passUsername' placeholder="请输入本人的真实姓名" type="text">&nbsp;&nbsp;<span ref="passrealname" class="passrealname"></span></li>
        <li><label for="idcade">用户身份证号</label><input id="idcode" @blur='validateIdCard(idcode)'  v-model="idcode" placeholder="请正确输入本人的身份证号" type="text">&nbsp;&nbsp;<span ref="validateCode" class="validateCode"></span></li>
        <li><input type="button" class="sub background" @click="authen" value="提交"></li>
      </ul>
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
import crypto from "crypto";
import { hint } from "common/js/general";
import { mapState } from "vuex";
export default {
  data() {
    return {
      realname: "",
      idcode: "",
      pass: false
    };
  },
  methods: {
    authen() {
      let that = this;
      if (!that.passname) {
        hint(that.$refs, "请填写真实姓名");
        return false;
      }
      if (!that.pass) {
        hint(that.$refs, "身份证号码格式错误！");
        return false;
      }

      const hash = crypto.createHash("md5");
      hash.update(that.idcode);
      hash.update("mzGame");
      hash.update(that.userdata.name);
      var mzhash = hash.digest("hex");

      let paramsUrl = qs.stringify({
        username: that.userdata.name,
        card_id: that.idcode,
        game_id: 301,
        realname: that.realname,
        sign: mzhash
      });

      axios
        .post(
          "http://gm.91muzhi.com:8080/sdk/realNameAuthentication/getBeginAuthenUser.do",
          paramsUrl
        )
        .then(function(res) {
          hint(that.$refs, res.data.authenResultMsg);
          that.userdata.certificationStatus = 3;
          window.localStorage.setItem(
            "userdata",
            JSON.stringify(that.userdata)
          );
        })
        .catch(function(res) {});
    },
    validateIdCard(idCard) {
      let that = this;
      //15位和18位身份证号码的正则表达式
      var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
      //如果通过该验证，说明身份证格式正确，但准确性还需计算
      if (regIdCard.test(idCard)) {
        if (idCard.length == 18) {
          var idCardWi = new Array(
            7,
            9,
            10,
            5,
            8,
            4,
            2,
            1,
            6,
            3,
            7,
            9,
            10,
            5,
            8,
            4,
            2
          ); //将前17位加权因子保存在数组里
          var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
          var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
          for (var i = 0; i < 17; i++) {
            idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
          }
          var idCardMod = idCardWiSum % 11; //计算出校验码所在数组的位置
          var idCardLast = idCard.substring(17); //得到最后一位身份证号码

          //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
          if (idCardMod == 2) {
            if (idCardLast == "X" || idCardLast == "x") {
              that.$refs.validateCode.style.color = "#3c763d";
              that.$refs.validateCode.innerHTML = "格式正确";
              that.pass = true;
            } else {
              that.$refs.validateCode.style.color = "#a94442";
              that.$refs.validateCode.innerHTML = "身份证号码格式错误！";
            }
          } else {
            //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
            if (idCardLast == idCardY[idCardMod]) {
              that.$refs.validateCode.style.color = "#3c763d";
              that.$refs.validateCode.innerHTML = "格式正确";
              that.pass = true;
            } else {
              that.$refs.validateCode.style.color = "#a94442";
              that.$refs.validateCode.innerHTML = "身份证号码格式错误！";
            }
          }
        }
      } else {
        that.$refs.validateCode.style.color = "#a94442";
        that.$refs.validateCode.innerHTML = "身份证号码格式错误！";
      }
    },
    passUsername() {
      let that = this;
      var reg = /[\u4e00-\u9fa5]/;
      if (reg.test(that.realname)) {
        that.$refs.passrealname.style.color = "#3c763d";
        that.$refs.passrealname.innerHTML = "通过";
        that.passname = true;
      } else {
        that.$refs.passrealname.style.color = "#a94442";
        that.$refs.passrealname.innerHTML = "请输入正确的姓名";
      }
    }
  },
  computed: {
    ...mapState(["userdata", "token", "game"])
  },
  watch: {
    userdata: "charge"
  }
};
</script>
<style scope>
.authen li {
  margin-top: 20px;
  text-align: center;
  cursor: pointer;
  position: relative;
}
.authen label {
  width: 120px;
  display: inline-block;
  text-align: left;
}
.authen input {
  background: rgba(100, 100, 100, 0.1);
  border: none;
  height: 48px;
  width: 300px;
  margin: 0 auto;
  border-radius: 6px;
  text-indent: 6px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
}
.authen span {
  position: absolute;
  font-size: 14px;
  color: #666;
  line-height: 48px;
}
.authen .sub {
  display: block;
  width: auto;
  padding: 0 60px;
  margin: 0 auto;
  text-align: center;
}
</style>

