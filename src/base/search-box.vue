<template>
    <div class="search">
        <input type="text" placeholder="还珠格格" @blur.prevent="serBlFn" @focus.prevent="serFoc">
        <div class="searchBtn">
            <i class="icon_spri"></i>
        </div>
        <div class="history" v-show="showHis === true">
            <div class="serLate">
                <p>最近搜索</p>
                <ul>
                    <li>还珠格格</li>
                    <li>正统三国</li>
                </ul>
            </div>
            <div class="serAll">
                <p>大家都在搜</p>
                <ul>
                    <li>御剑仙途</li>
                    <li>魔法门传奇</li>
                    <li>江湖侠客</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      showHis: false
    };
  },
  methods: {
    serBlFn() {
      this.showHis = false;
    },
    serFoc() {
      this.showHis = true;
    }
  }
};
</script>
<style scoped>
.search {
  height: 93px;
  font-size: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.search input,
.search .searchBtn {
  width: 45px;
}
.search input {
  height: 30px;
  font-size: 10px;
  width: 165px;
  border-radius: 15px 0 0 15px;
  border: 1px solid #dadada;
  color: #a9a9a9;
  padding-left: 20px;
}
.search .searchBtn {
  height: 34px;
  border-radius: 0 15px 15px 0;
  background-color: #bb3679;
  display: inline-block;
  position: relative;
}
.search .searchBtn i {
  display: block;
  width: 16px;
  height: 14px;
  background-position: -87px -112px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -8px;
  margin-top: -7px;
}
.search .history {
  width: 200px;
  background: #ffffff;
  padding: 10px 10px 15px 16px;
  position: absolute;
  top: 66px;
  left: 5px;
  z-index: 999;
  font-size: 12px;
}
.search .history li {
  margin-top: 10px;
  cursor: pointer;
}
.search .history .serLate li {
  color: #999999;
}
.search .history .serAll {
  margin-top: 15px;
}
.search .history .serAll li {
  color: rgb(204, 104, 154);
}
</style>
