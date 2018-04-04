<template>
	<div id="user-info">
        <div class="max-width">
            <div class="user-information">
                <div class="user-icon">
                  <img :src="userdata.mUserIcon|addHttp"  alt="">
                </div>
                
                <div class="g-userinfo">
                    <p class="user-truename" v-if="userdata.realName">{{userdata.realName}}</p>
                    <p class="user-truename" v-else>muzhiyouwan</p><br>
                    <p class="username"><span>用户名：</span><span>{{userdata.name}}</span></p><br>
                    <p class="user-trade"><img :src="'../../assets/images/vip_'+userdata.level+'.png'" alt=""></p>
                </div>
            </div>            
        </div>
        <div class="login_botm">
            <ul class="clearfix ">
                <li class="gift">
                    <i class="user_spri"></i>
                    <p><a>礼包：</a><span>5</span></p>
                </li>
                <li class="lj">
                    <i class="user_spri"></i>
                    <p><a>礼劵：</a><span>10</span></p>
                </li>
                <li class="muzhi_money">
                    <i class="user_spri"></i>
                    <p><a>拇指币：</a><span>0</span></p>
                </li>
            </ul>
        </div>
	</div>
</template>
<script>
import {url,userdata, token} from '../../common/js/general'
export default {
  data() {
    return {
      userdata
    };
  },
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

.login_botm li a 
  color: #746aa7;

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
  background-position: -10px -10px;

.login_botm .lj i 
  background-position: -108px -10px;

.login_botm .muzhi_money i 
  background-position: -108px -108px;

.login_botm p 
  vertical-align: middle;
  display: inline-block;

</style>