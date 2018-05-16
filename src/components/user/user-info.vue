<template>
	<div id="user-info">
        <div class="max-width">
            <div class="user-information">
                <div class="user-icon">
                  <img v-if="userdata.mUserIcon" :src="userdata.mUserIcon|addHttp" alt="">
                  <img v-else src="../../assets/images/user_icon.png" alt="">
                </div>
                <div class="g-userinfo">
                    <p class="user-truename" v-if="userdata.realName">{{userdata.realName}}</p>
                    <p class="user-truename" v-else-if="userdata.nickName">{{userdata.nickName=='undefined'?'请设置您的昵称':userdata.nickName}}</p>
                    <p class="user-truename" v-else >拇指小可爱</p><br>
                    <p class="username"><span>用户名：</span><span v-if="userdata.name">{{userdata.name}}</span><span v-else>拇指小可爱</span></p><br>
                    <p class="user-trade"><img :src="'static/images/vip_'+userdata.level+'.png'" alt=""></p>
                </div>
            </div>            
        </div>
        <div class="login_botm">
            <ul class="clearfix ">
                <li :class="{gift:true,giftnone1:gift == 2}">
                    <i class="user_spri"></i>
                    <p><a>礼包：</a><span>{{userdata.giftSum||0}}</span></p>
                </li>
                <li :class="{lj:true,giftnone2:gift == 3}">
                    <i class="user_spri"></i>
                    <p><a>礼劵：</a><span>{{userdata.couponSum||0}}</span></p>
                </li>
                <router-link to="/myWallet" tag="li" :class="{muzhi_money:true,giftnone3:gift == 4}">
                  <i class="user_spri"></i>
                  <p><a>拇指币：</a><span>{{userdata.mzAccount||0}}</span></p>
                </router-link>
          
            </ul>
        </div>
	</div>
</template>
<script>
import {url,userdata, token} from '../../common/js/general'
export default {
  data() {
    return {
      userdata,
			
    };
  },
  props:['gift'],
  filters:{
    addHttp(data){
      return url+data
    }
  }
};
</script>
<style scoped lang="stylus">
#user-info 
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #e9e9e9;
  border-top: 1px solid #e9e9e9;
  padding: 30px 0;

.user-information 
  float: left;
  width: 400px;
  .user-icon 
    width: 103px;
    height:97px;
    overflow: hidden;
    display inline-block
    img 
      max-height 100%
      max-width none
.g-userinfo 
  vertical-align: top;
  display: inline-block;
  font-size: 0;

.g-userinfo p 
  display: inline-block;
  padding-left: 20px;

.user-truename 
  font-size: 14px;
  color: #820c9b;
  padding-top: 10px;

.username 
  font-size: 18px;
  line-height: 42px;
  color: #000;


.login_botm .lj 
  position: relative;

.login_botm li 
  float: left;
  font-size: 16px;
  text-align: center;
  margin-top: 10px;

.login_botm li a ,.login_botm li span
  color: #b6b6b6;

.login_botm li 
  color: #af2f7d;
  padding-right: 20px;


.login_botm li i 
  vertical-align: middle;
  width: 78px;
  height: 78px;
  display: inline-block;
  margin-bottom: 3px;

.login_botm .gift i 
  background-position:-206px -108px;

.login_botm .lj i 
  background-position: -10px -108px;

.login_botm .muzhi_money i 
  background-position: -206px -10px;

.login_botm .giftnone1 i
  background-position:  -10px -10px;
.login_botm .giftnone2 i
  background-position: -108px -10px;
.login_botm .giftnone3 i
  background-position: -108px -108px;
.login_botm .giftnone3 a,.login_botm .giftnone2 a,.login_botm .giftnone1 a
  color:#af2f7d;
.login_botm .giftnone3 span,.login_botm .giftnone2 span,.login_botm .giftnone1 span
  color:#af2f7d;
.login_botm p 
  vertical-align: middle;
  display: inline-block;

</style>