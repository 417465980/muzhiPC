<template>
    <div class="regInfo">
       <div class="reg_pic"></div>
       <router-link to="/register" class="">立即注册</router-link>
       <ul class="bar">
           <router-link to="/login" tag="li" v-for="(item,index) in regBtn" :key="index" :class="{active: curIndex === index}" @mouseover.native="showBg(index)">
               <i class="user_spri" :class="{on: chanIndex === index}"></i>
               <span>{{item}}</span>
           </router-link>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      curIndex: 0,
      chanIndex: 0,
      regBtn: ["礼包", "礼劵", "拇指币"],
      path: ["/gift", "game", ""]
    };
  },
  methods: {
    showBg(index) {
      this.curIndex = index;
      this.chanIndex = index;
    }
  }
};
</script>
<style scoped>
.regInfo {
  border: 1px solid #e9e9e9;
  height: 399px;
  width: 350px;
  padding: 20px;
  position: relative;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  border-right: none;
}
.regInfo .reg_pic {
  width: 310px;
  height: 190px;
  background: url("../assets/images/cen_gmIcon.png") no-repeat center center;
  background-size: 50% auto;
}
.regInfo a {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 18px;
  color: #666;
}
.regInfo a:hover {
  color: #820c9b;
  text-decoration: underline;
}
.regInfo .bar {
  position: absolute;
  top: 155px;
}
.regInfo .bar li {
  color: #979797;
  position: relative;
  width: 310px;
  height: 50px;
  line-height: 52px;
  margin-top: 20px;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  cursor: pointer;
}
.regInfo .bar li.active {
  color: #fff;
  background-color: rgba(106, 164, 228, 0.9);
}
.regInfo .bar li i {
  display: inline-block;
  position: absolute;
  top: 13px;
  left: 100px;
}
.regInfo .bar li span {
  font-size: 19px;
  margin-left: 140px;
}
.regInfo .bar li:first-child i {
  width: 24px;
  height: 24px;
  background-position: -54px -206px;
}
.regInfo .bar li:nth-of-type(2) i {
  width: 26px;
  height: 20px;
  background-position: -238px -206px;
}
.regInfo .bar li:last-child i {
  width: 27px;
  height: 20px;
  background-position: -145px -206px;
}
.regInfo .bar li:first-child i.on {
  background-position: -10px -206px;
}
.regInfo .bar li:nth-of-type(2) i.on {
  background-position: -192px -206px;
}
.regInfo .bar li:last-child i.on {
  background-position: -98px -206px;
}
</style>    
