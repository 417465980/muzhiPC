<template>
    <div class="topBorder">
        <div class="service">
            <div class="main_top">
                <h3>常见问题</h3>
                <div class="list">
                    <span  v-for="(item, index) in fqalist" :key="index" :class="{ul:true, active:index==active }" @click="seefqa(index)">
                        
                        <i :class="item[0]"></i><br>
                        <span class="li">{{item[1].name}}</span>
                    </span>
                </div>
                <transition-group enter-active-class=" zoomInLeft" leave-active-class=" zoomOutRight">
                    <div v-for="item in id" :key="item" v-show="item==activenum" class="details animated" >
                        <ul>
                            <li  v-for="(items, i) in rows" :key="i" v-if="item ==items.type.id" class="fl left">{{items.proTitle}}</li>
                        </ul>
                    </div>
                </transition-group>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import {url,hint} from 'common/js/general'
    export default{
        data(){
            return {
                id:[2,1,5,3,4,6],
                fqalist:{
                    one:[{one:true},{name:'充值问题'}],
                    two:[{two:true},{name:'账号问题'}],
                    three:[{three:true},{name:'礼包问题'}],
                    four:[{four:true},{name:'服务器问题'}],
                    five:[{five:true},{name:'活动问题'}],
                    six:[{six:true},{name:'其他问题'}],
                },
                pp:{'one':2,'two':1,'three':5,'four':3,'five':4,'six':6},
                active:'one',
                activenum:2,
                rows:[]
            }
        },
        methods:{
            queryFQAMsg(){
                let that = this;
                let paramsUrl = new URLSearchParams();
				paramsUrl.append('id',1);
				axios.post(url + '/muzhiplat/pc2/customer/queryFQAMsg').then(function(res){
                    hint(that.$refs,res.data.msg)
                    that.rows = res.data.rows
				}).catch(function(res){
					console.log(res)
				})
            },
            seefqa(index){
                this.active = index;
                this.activenum = this.pp[index];
            }
        },
        mounted(){
            this.queryFQAMsg()
            console.log(this.rows)
        }
    }
</script>
<style scoped>
    .service{
        width: 1200px;
        margin: 15px auto 0;
        padding-bottom: 20px
    }
    
    .main_top h3{
        font-size: 24px;
        font-weight: normal;
    }
    .main_top .list{
        width: 1068px;
        padding: 0 66px;
        height: 170px;
        margin: 0 auto;
        border-bottom: 1px solid #f0f0f0;
    }
    .main_top .list .active{
        /*color: #1196e1;*/
        color: red;
    }
    .main_top .list .ul{
        display: inline-block;
        margin-right: 123px;
        text-align: center;
        margin-top: 34px;
        cursor:pointer;
    }
    .main_top .list .ul .li{
        display: inline-block;
        padding-top: 10px;
        font-size: 17px;
    }
    .main_top .list .ul:last-child{
        margin-right: 0px;
    }
    .main_top .list .ul .one{
        display: inline-block;
        width: 56px;
        height: 56px;
        background: url("../assets/images/service.png")no-repeat 0 0;
    }
    .main_top .list .ul .two{
        display: inline-block;
        width: 56px;
        height: 56px;
        background: url("../assets/images/service.png")no-repeat -116px 0;
        margin-bottom: -5px;
    }
    .main_top .list .ul .three{
        display: inline-block;
        width: 56px;
        height: 56px;
        background: url("../assets/images/service.png")no-repeat -60px 0;
    }
    .main_top .list .ul .four{
        display: inline-block;
        width: 56px;
        height: 56px;
        background: url("../assets/images/service.png")no-repeat -177px 0;
        margin-bottom: -13px;
    }
    .main_top .list .ul .five{
        display: inline-block;
        width: 56px;
        height: 56px;
        background: url("../assets/images/service.png")no-repeat -234px 0;
        margin-bottom: -6px;
    }
    .main_top .list .ul .six{
        display: inline-block;
        width: 56px;
        height: 56px;
        background: url("../assets/images/service.png")no-repeat -300px 0;
    }
    .main_top .details{
        width: 1068px;
        height: 180px;
        padding: 30px 45px 30px 87px;
        margin: 0 auto;
        border-bottom: 1px solid #f0f0f0;
        color: #363636;
        font-size: 14px;
        display: none;
    }
    .main_top .active{
        display: block;
    }
    .main_top .details ul{
        width:100%;
    }
    .main_top .details ul li{
        list-style-type: disc;
        line-height: 35px;
        cursor:pointer;
    }
    .main_top .details ul li::before{
        content :'';
    }
    .main_top .details ul .left{
        width: 35%;
        margin-right: 218px;
    }

    .main_bottom h3{
        font-size: 24px;
        font-weight: normal;
        padding: 32px 0;
    }
    .main_bottom .telephone{
        display: inline-block;
        padding: 0 66px;
    }
    .main_bottom .telephone i{
        display: inline-block;
        width: 94px;
        height: 94px;
        background: url("../assets/images/public.png")no-repeat 0 0;

    }
    .main_bottom .telephone div{
        display: inline-block;
        vertical-align: top;
        line-height: 32px;
        padding-left: 15px;
    }
    .main_bottom .telephone div .phone{
        padding-top: 15px;
        font-size: 19px;
        font-weight: 500;
    }
    .main_bottom .telephone div .time{
        font-size: 14px;
        color: #363636;
    }

    /*时间*******************/
    .main_bottom .public{
        display: inline-block;
        padding-left: 200px;
    }
    .main_bottom .public i{
        display: inline-block;
        width: 94px;
        height: 94px;
        background: url("../assets/images/public.png")no-repeat -94px 0 ;

    }
    .main_bottom .public div{
        display: inline-block;
        vertical-align: top;
        line-height: 32px;
        padding-left: 15px;
    }
    .main_bottom .public div .phone{
        padding-top: 15px;
        font-size: 20px;
        font-weight: 500;
    }
    .main_bottom .public div .time{
        font-size: 14px;
        color: #363636;
    }
    .details li:hover{
        text-shadow: 1px 1px 1px #ea73b9
    }
</style>