<template>
    <div class="topBorder">
        <div class="service">
            <div class="main_top">
                <h3>常见问题</h3>
                <div class="list">
                    <span class="ul active">
                        <i class="one"></i><br>
                        <span class="li">充值问题</span>
                    </span>
                    <span class="ul">
                        <i class="two"></i><br>
                        <span class="li">账号问题</span>
                    </span>
                    <span class="ul">
                        <i class="three"></i><br>
                        <span class="li">礼包问题</span>
                    </span>
                    <span class="ul">
                        <i class="four"></i><br>
                        <span class="li">服务器问题</span>
                    </span>
                    <span class="ul">
                        <i class="five"></i><br>
                        <span class="li">活动问题</span>
                    </span>
                    <span class="ul">
                        <i class="six"></i><br>
                        <span class="li">其他问题</span>
                    </span>
                </div>
                <div class="details active">
                    <ul>
                        <li class="fl left">在手机上怎么充值拇指币？</li>
                        <li class="fl">拇指币充值游戏问题？</li>
                    </ul>
                    <ul>
                        <li class="fl left">拇指币有什么用？</li>
                        <li class="fl">拇指币要怎么查询？</li>
                    </ul>
                    <ul>
                        <li class="fl left">拇指币充值成功后，平台个人中心没有显示？</li>
                        <li class="fl">充值成功后多久才能到账？</li>
                    </ul>
                    <ul>
                        <li class="fl left">怎么查询网银扣费订单？</li>
                        <li class="fl">银行卡没有开通网银功能，能否充值？</li>
                    </ul>
                    <ul>
                        <li class="fl left">提示支付失败是什么原因？会不会扣费？</li>
                        <li class="fl">你们可以人工直接充值吗？</li>
                    </ul>
                </div>
                <div class="details">
                    <ul>
                        <li class="fl left">我的账号给了朋友玩，朋友把我的装备误删了怎么办？</li>
                        <li class="fl">拇指账号登录的游戏卸载后去哪里下载？</li>
                    </ul>
                    <ul>
                        <li class="fl left">用充值卡叠加充值游戏，没到账怎么办？</li>
                    </ul>
                </div>
                <div class="details">
                    <ul>
                        <li class="fl left">拇指的礼包如何领取？</li>
                        <li class="fl">同样的礼包能重复领取吗？</li>
                    </ul>
                    <ul>
                        <li class="fl left">游戏里同样的礼包不同的兑换码能再次使用吗？</li>
                        <li class="fl">礼包为什么不能使用？</li>
                    </ul>
                </div>
                <div class="details">
                    <ul>
                        <li class="fl left">黑屏、白屏、卡机、掉线如何处理？</li>
                        <li class="fl">手机内置截图方式？</li>
                    </ul>
                    <ul>
                        <li class="fl left">有效清理手机缓存方法？</li>
                    </ul>
                </div>
                <div class="details">
                    <ul>
                        <li class="fl left">为什么到了活动结束时间，奖励还没有收到？</li>
                        <li class="fl">怎么查看拇指游玩平台近期的活动？</li>
                    </ul>
                </div>
                <div class="details">
                    <ul>
                        <li class="fl left">忘记账号了怎么办？</li>
                        <li class="fl">一键注册的账号，忘记密码了怎么办？</li>
                    </ul>
                    <ul>
                        <li class="fl left">账号和密码都忘记了怎么办？</li>
                        <li class="fl">登陆不上游戏？</li>
                    </ul>
                    <ul>
                        <li class="fl left">角色不见了？</li>
                        <li class="fl">充值成功后多久才能到账？</li>
                    </ul>
                    <ul>
                        <li class="fl left">拇指账号如何更换手机绑定？</li>
                    </ul>
                </div>
            </div>

            <div class="main_bottom">
                <h3>联系我们</h3>
                <div class="telephone">
                    <i></i>
                    <div>
                        <p class="phone">400-9611-191</p>
                        <p class="time">工作时间：周一至周日 9:00-24:00</p>
                    </div>
                </div>
                <div class="public">
                    <i></i>
                    <div>
                        <p class="phone">微信公众号</p>
                        <p class="time">更多精彩福利，敬请关注</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{

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

</style>