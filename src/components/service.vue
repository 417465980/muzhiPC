<template>
    <div class="topBorder" ref="service">
        <div class="service">
            <div class="main_top">
                <h3>常见问题</h3>
                <div class="list">
                    <span  v-for="(item, index) in fqalist" :key="index" :class="{ul:true, active:index==active }" @click="seefqa(index)">
                        
                        <i :class="item[0]" ></i><br>
                        <span class="li hoveraction pis-hover">{{item[1].name}}</span>
                    </span>
                </div>
                <div v-for="item in id" :key="item" v-show="item==activenum" class="details animated" >
                    <ul>
                        <li v-for="(items, i) in rows" :key="i" v-if="item ==items.type.id" :data-prodetail="items.proDetail" @click="markfqa" class="hoveraction pis-hover">{{items.proTitle}}</li>
                    </ul>
                </div>
            </div>
        </div>
       
        <div class="markfqa" @click.stop="close" v-show="bool">
            <transition enter-active-class="animated flipInX"  leave-active-class="animated flipOutX"  tag="div">
                <div class="markbox">
                    
                        <div class="close" @click.stop="close">×</div>
                        <div @click.prevent="close">
                           <h3>{{markfqadata.proTitle}}</h3>
                        <div >
                            <p v-html="$options.filters.editPro(markfqadata.proDetail)"></p>
                        </div>  
                        </div>
                       
                
                </div>
             </transition>
        </div>
        
    </div>
</template> 
<script>
import axios from "axios";
import qs from "qs";
import { url, hint } from "common/js/general";
export default {
  data() {
    return {
      id: [2, 1, 5, 3, 4, 6],
      fqalist: {
        one: [{ one: true }, { name: "充值问题" }],
        two: [{ two: true }, { name: "账号问题" }],
        three: [{ three: true }, { name: "礼包问题" }],
        four: [{ four: true }, { name: "服务器问题" }],
        five: [{ five: true }, { name: "活动问题" }],
        six: [{ six: true }, { name: "其他问题" }]
      },
      pp: { one: 2, two: 1, three: 5, four: 3, five: 4, six: 6 },
      active: "one",
      activenum: 2,
      rows: [],
      markfqadata: {
        proTitle: "",
        proDetail: ""
      },
      bool: false,
      valueP: "aaaaaaa"
    };
  },
  methods: {
    queryFQAMsg() {
      let that = this;
      let paramsUrl = qs.stringify({
        is: 1
      });
      axios
        .post(url + "/muzhiplat/pc2/customer/queryFQAMsg")
        .then(function(res) {
          hint(that.$refs, res.data.msg);
          that.rows = res.data.rows;
        })
        .catch(function(res) {
          console.log(res);
        });
    },
    seefqa(index) {
      this.active = index;
      this.activenum = this.pp[index];
    },
    markfqa(e) {
      var event = event || e;
      var target = event.target || event.srcElement;
      this.markfqadata.proTitle = target.innerText;
      if (typeof target.dataset != "undefined") {
        this.markfqadata.proDetail = target.dataset.prodetail;
      } else {
        this.markfqadata.proDetail = target.getAttribute("data-prodetail");
      }
      this.bool = !this.bool;
    },
    close() {
      this.bool = !this.bool;
    }
  },
  mounted() {
    this.queryFQAMsg();
    let height = parseInt(getComputedStyle(this.$refs.service, null).height);
    if (height <= document.documentElement.clientHeight - 296 - 133) {
      this.$refs.service.style.height =
        document.documentElement.clientHeight - 296 - 133 - 21 + "px";
    }
  },
  filters: {
    editPro(val) {
      return val.replace(/\r\n/g, "<br>");
    }
  }
};
</script>
<style scoped>
.service {
  width: 1200px;
  margin: 15px auto 0;
  padding-bottom: 20px;
}

.main_top h3 {
  font-size: 24px;
  font-weight: normal;
}
.main_top .list {
  width: 1068px;
  padding: 0 66px;
  height: 170px;
  margin: 0 auto;
  border-bottom: 1px solid #f0f0f0;
}
.main_top .list .active {
  /*color: #1196e1;*/
  color: #820c9b;
}
.main_top .list .ul {
  display: inline-block;
  margin-right: 123px;
  text-align: center;
  margin-top: 34px;
  cursor: pointer;
}
.main_top .list .ul .li {
  display: inline-block;
  padding-top: 10px;
  font-size: 17px;
}

.main_top .list .ul:last-child {
  margin-right: 0px;
}
.main_top .list .ul .one {
  display: inline-block;
  width: 56px;
  height: 56px;
  background: url("../assets/images/service.png") no-repeat 0 0;
}
.main_top .list .ul .two {
  display: inline-block;
  width: 56px;
  height: 56px;
  background: url("../assets/images/service.png") no-repeat -116px 0;
  margin-bottom: -5px;
}
.main_top .list .ul .three {
  display: inline-block;
  width: 56px;
  height: 56px;
  background: url("../assets/images/service.png") no-repeat -60px 0;
}
.main_top .list .ul .four {
  display: inline-block;
  width: 56px;
  height: 56px;
  background: url("../assets/images/service.png") no-repeat -177px 0;
  margin-bottom: -13px;
}
.main_top .list .ul .five {
  display: inline-block;
  width: 56px;
  height: 56px;
  background: url("../assets/images/service.png") no-repeat -234px 0;
  margin-bottom: -6px;
}
.main_top .list .ul .six {
  display: inline-block;
  width: 56px;
  height: 56px;
  background: url("../assets/images/service.png") no-repeat -300px 0;
}
.main_top .details {
  width: 1068px;
  height: 180px;
  padding: 30px 45px 30px 87px;
  margin: 0 auto;

  color: #363636;
  font-size: 14px;
}
.main_top .active {
  display: block;
}
.main_top .details ul {
  width: 100%;
}
.main_top .details ul li {
  list-style-type: disc;
  line-height: 35px;
  cursor: pointer;
}
.main_top .details ul li::before {
  content: "";
}
.main_top .details ul .left {
  width: 35%;
  margin-right: 218px;
}

.main_bottom h3 {
  font-size: 24px;
  font-weight: normal;
  padding: 32px 0;
}
.main_bottom .telephone {
  display: inline-block;
  padding: 0 66px;
}
.main_bottom .telephone i {
  display: inline-block;
  width: 94px;
  height: 94px;
  background: url("../assets/images/public.png") no-repeat 0 0;
}
.main_bottom .telephone div {
  display: inline-block;
  vertical-align: top;
  line-height: 32px;
  padding-left: 15px;
}
.main_bottom .telephone div .phone {
  padding-top: 15px;
  font-size: 19px;
  font-weight: 500;
}
.main_bottom .telephone div .time {
  font-size: 14px;
  color: #363636;
}

/*时间*******************/
.main_bottom .public {
  display: inline-block;
  padding-left: 200px;
}
.main_bottom .public i {
  display: inline-block;
  width: 94px;
  height: 94px;
  background: url("../assets/images/public.png") no-repeat -94px 0;
}
.main_bottom .public div {
  display: inline-block;
  vertical-align: top;
  line-height: 32px;
  padding-left: 15px;
}
.main_bottom .public div .phone {
  padding-top: 15px;
  font-size: 20px;
  font-weight: 500;
}
.main_bottom .public div .time {
  font-size: 14px;
  color: #363636;
}

.group {
  min-height: 300px;
  height: 300px;
  overflow: hidden;
  border-bottom: 3px solid #f0f0f0;
}
</style>