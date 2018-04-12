<template>
    <div class="topBorder">
        <div class="chargeWrap clearfix">
            <div id="mainNav" class="fl tab"><!--左侧主导航-->
                <div class="Alipay active"><i></i>支付宝余额支付  <span></span> </div>
                <div class="weChat "><i></i>微信支付<span></span></div>
            </div>
            <div id="subNav" class="fr"><!--右侧子导航-->
                <div class="top">
                    <div class="account">
                        <span class="left">充值账号：</span>
                        <input type="text">
                        <a>更换</a>
                    </div>
                    <div class="position">
                        <span class="left">充值到：</span>
                        <span class="center">拇指币</span>
                    </div>
                    <div class="money">
                        <span class="left">充值金额：</span>
                        <span class="center tab_1">
                            <span class="active">10元<i></i></span>
                            <span>30元<i></i></span>
                            <span>50元<i></i></span>
                            <span>100元<i></i></span>
                            <span>500元<i></i></span>
                            <span>1000元<i></i></span>
                            <span>2000元<i></i></span>
                            <span><input type="text">元<i></i></span>
                        </span>
                    </div>
                    <div class="recharge">
                        <span class="left"></span>
                        <span class="center">立即充值</span>
                    </div>
                </div>

                <div class="bottom">
                    <h4><i></i>银行卡充值说明：</h4>
                    <p>针对银行卡帐号用户。</p>
                    <p>支持全国29家银行卡(需要开通网上银行)及快钱帐号。</p>
                    <br>
                    <h4><i></i>支付宝充值说明：</h4>
                    <p>您可以通过以下两种方式充值，方便快捷，安全可靠：</p>
                    <p>1、支付宝余额支付：只要您的支付宝账户中存有余额，就可以为游戏进行充值。</p>
                    <p>2、银行卡支付：只要您拥有与支付宝公司合作银行中的任意一张银行卡，并开通“网上银行”服务，即可完成充值。</p>
                    <p>手机充值卡充值说明：</p>
                    <p>1、支持卡种:</p>
                    <p>（1）全国性卡:</p>
                    <p class="cr"><span class="cl">全国联通卡:</span>卡号15位、密码19位；面额10、20、30、50、100、300、500元</p>
                    <p class="cr"><span class="cl">全国移动卡:</span>卡号17位、密码18位；面额10、20、30、50、100、300、500元</p>
                    <p class="cr"><span class="cl">全国电信卡:</span>卡号19位、密码18位；面额10、20、30、50、100、300、500元</p>
                    <p>（2）神州行地方卡:</p>
                    <p class="cr"><span class="cl">辽宁:</span>卡号16位,密码21位；面额:10、30、50、100、300、500元</p>
                    <p class="cr"><span class="cl">浙江:</span>卡号10位,密码8位；面额:10、20、30、50、100、200元</p>
                    <p class="cr"><span class="cl">福建:</span>卡号16位,密码17位；面额:10、20、30、50、100元</p>
                    <p class="cr"><span class="cl">江苏:</span>卡号16位,密码17位；面额:10、20、30、50元</p>
                    <p class="cl">2.请务必正确的选择您所使用的卡面额，以避免引起不必要的交易失败或交易余额丢失。</p>
                    <p class="ml">如：使用100元的卡进行支付但只选择50元面额，则系统认为实际支付金额为50元，其余部分将不予退还；使用50元的卡进行支付但选择100元面额，系统仅以50元的实际金额进行充值。</p>
                    <p class="cl">3.卡号密码输入次数超限，如需再次充值，请72小时后尝试，或选择其他渠道重新提交。请您点击确认前务必核实卡号及密码，以免带来不便。请充值时务必确认好您的充值金额准确无误后再进行充值，避免输错金额导致的失误，如因未仔细确认金额造成的充值问题，我们将一律不予处理此类退款申诉。</p>

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
    .chargeWrap{
        width: 1200px;
        margin: 60px auto 200px;
    }
    /*左侧主导航*/
    #mainNav{
        width: 259px;
    }
    #mainNav div{
        width: 100%;
        height: 54px;
        line-height: 54px;
        padding-left: 55px;
        cursor:pointer;
        color: #939393;
        font-size: 14px;
    }
    #mainNav div span{
        display: inline-block;
        font-size: 12px;
        font-weight: bold;
        width: 25px;
        height: 0;
        vertical-align: middle;
    }
    #mainNav .Alipay span{
        margin-left: 20px;
    }
    #mainNav .weChat span{
        margin-left: 73px;
    }
    #mainNav .active{
        color: #fff;
        background: -moz-linear-gradient(left,#4782c2,#cf2878);
        background: -o-linear-gradient(left,#4782c2,#cf2878);
        background: -webkit-gradient(linear,0 0,100% 100%,from(#4782c2), to(#cf2878));
        background:-webkit-linear-gradient(left,#4782c2,#cf2878);
        filter: progid:DXImageTransform.Microsoft.gradient(GradientType=1, startColorstr=#4782c2, endColorstr=#cf2878);
        -ms-filter: "progid:DXImageTransform.Microsoft.gradient (GradientType=1, startColorstr=#4782c2, endColorstr=#bc427d)";
        font-size: 16px;
    }
    #mainNav .active span{
        border-top: 2px solid #d482b0;
    }

    #mainNav .Alipay{
        border-top: 1px solid #dbdbdb ;
        border-bottom: 1px solid #dbdbdb ;
    }
    #mainNav .Alipay i{
        display: inline-block;
        width: 36px;
        height: 36px;
        margin-bottom: -12px;
        margin-right: 18px;
        background-image: url("../assets/images/wechat.png");
        background-repeat: no-repeat;
        background-position: 0 0;
    }
    #mainNav .weChat{
        border-bottom: 1px solid #dbdbdb ;
    }
    #mainNav .weChat i{
        display: inline-block;
        width: 36px;
        height: 36px;
        margin-bottom: -12px;
        margin-right: 18px;
        background-image: url("../assets/images/wechat.png");
        background-repeat: no-repeat;
        background-position: -36px 0;
    }

    /*右侧子导航*/
    #subNav{
        width:800px;
    }
    #subNav .top div{
        padding: 10px 0 20px 0;
        font-size: 14px;
    }
    #subNav .top div .left,#subNav .top .account left{
        display: inline-block;
        width: 72px;
        color: #979797;
        text-align: right;
        margin-right: 4px;
        font-size:14px
    }
    #subNav .top .account{
        font-size: 0;
        display: flex;
        align-items: center
    }
    #subNav .top .account input{
        width: 170px;
        height: 34px;
        padding-left: 23px;
        border: 1px solid #e4e4e4;

    }
    #subNav .top .account a{
        display: inline-block;
        height: 36px;
        width: 70px;
        line-height: 36px;
        text-align: center;
        border: 1px solid #e4e4e4;
        border-left: none;
        font-size: 14px;
        font-weight: bold;
        color: #8f24a5;
    }
    
    #subNav .top .position .center{
        display: inline-block;
        width: 92px;
        height: 41px;
        line-height: 41px;
        text-align: center;
        border-radius: 6px;
        color: #fff;
        background: #912ba8;
    }
    #subNav .top .money .center{
        display: inline-block;
        width: 400px;
        vertical-align: top;
    }
    #subNav .top .money .left{
        display: inline-block;
        padding-top: 12px;
    }
    #subNav .top .money .center span{
        display: inline-block;
        position: relative;
        width: 88px;
        height: 41px;
        font-size: 12px;
        line-height: 40px;
        text-align: center;
        border: 2px solid #e4e4e4;
        margin-right: 4px;
        margin-bottom: 10px;
        cursor: pointer;
    }
    
    #subNav .top .money .center span:last-child input{
        width: 52px;
        height: 50%;
        margin-right: 5px;
        vertical-align: middle;
        border-color: #ddd;
    }
    #subNav .top .money .center span i{
        position: absolute;
        right:-1px;
        bottom: -2px;
        width: 14px;
        height: 14px;
        background: url("../assets/images/yes.png")no-repeat;
        display: none;
    }
    #subNav .top .money .center span.active{
        width: 88px;
        height: 41px;
        border: 2px solid #912ba8;
    }
    #subNav .top .money .center span.active i{
        display: block;
    }
    #subNav .top .recharge .center{
        display: inline-block;
        width: 145px;
        height: 40px;
        font-size: 17px;
        line-height: 40px;
        text-align: center;
        border-radius: 6px;
        color: #fff;
        background: #912ba8;
        cursor:pointer;
    }

    #subNav .bottom{
        border: 1px solid #f0f0f0;
        margin-top: 40px;
        padding: 40px 60px;
        /*height: 500px;*/
        width: 100%;
    }
    #subNav .bottom h4{
        text-indent: -1.5em;
        font-size: 14px;
        line-height: 36px;
        color: #303030;
    }
    #subNav .bottom h4 i{
        display: inline-block;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #912ba8;
        vertical-align: middle;
        margin-right: 10px;
    }
    #subNav .bottom p{
        font-size: 12px;
        color: #676767;
        line-height: 30px;
    }
    #subNav .bottom p.cl{
        text-indent: -1.1em;
        margin-left: 12px;
    }
    #subNav .bottom .cr{
        margin-left: 30px;
    }
    #subNav .bottom .ml{
        margin-left: 12px;
    }
    #subNav .bottom .cl{
        color: #9828b0;
    }
</style>
