<template>
	<div class="topBorder">
        <div class="chargeWrap clearfix">
            <div id="mainNav" class="fl tab"><!--左侧主导航-->
                <div class="Alipay active" payType="alipay" ><i></i>支付宝余额支付  <span></span> </div>
                <div class="weChat" payType="wftwxpay"><i></i>微信支付<span></span></div>
            </div>
            
            <div id="subNav" class="fr"><!--右侧子导航-->
            
                <div class="top1">
                    
                    <div class="account">
                        <span class="left">充值账号：</span>
                        <input type="text" placeholder="请填写你的用户名" name="name" v-model='userdata.name' class="input_txt"  id="user" :readonly="readonly"/>
                        <a id="change" href="javascript:;" @click="readonly=!readonly;" @blur="readonly=false;">更换</a>
                    </div>
                    <div class="position">
                        <span class="left">充值到：</span>
                        <span class="center">拇指币</span>
                    </div>
                    <div class="money">
                        <span class="left">充值金额：</span>
                        <span class="center tab_1" id="inputmoney">
                            <span class="checked_span">10元<input type="hidden" id="money" value="10"/><i></i></span>
                            <span>30元<input type="hidden" value="30"/><i></i></span>
                            <span>50元<input type="hidden" value="50"/><i></i></span>
                            <span>100元<input type="hidden" value="100"/><i></i></span>
                            <span>500元<input type="hidden" value="500"/><i></i></span>
                            <span>1000元<input type="hidden" value="1000"/><i></i></span>
                            <span>2000元<input type="hidden" value="2000"/><i></i></span>
                            <span><input type="text" id="other_mo">元<i></i></span>
                        </span>
                    </div>
                    <div class="recharge">
                        <span class="left"></span>
                        <span class="center" id="subBtn" data-toggle="" data-target="#myModal" >立即充值</span>
                        <input type="hidden" id="showdialog" name="showdialog" value = "0" />
						<form method= "post" action = "http://119.29.201.99/dist/topup/pay" commandName = "pay" name = "payForm" id= "payForm" ref="payForm" style = "display:none">
							<input name = "amount" id="amount" type="text" value = "">
							<input name = "payType" id="payType" type="text" value = "">
							<input name = "gameId" id="gameId" type="text" value = "">
							<input name = "packetId" id="packetId" type="text" value = "">
							<input name = "toUserName" id="toUserName" type="text" value = "">
						</form>
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
        
        <!-- 模态框（Modal） -->
			<!-- <div class="modal-backdrop"></div> -->
		<div class="container mtBor">
			<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
								&times;
							</button>
							<h4 class="modal-title text-center" id="myModalLabel">游戏实名登记</h4>
						</div>
						<form role="form" class="form-horizontal">
							<div class="modal-body mtBox">
								<div class="mtBegin">
									<p class="text-center artTitle"><span>根据《网络游戏管理暂行办法》</span><span>请先登记本人实名信息</span></p>
									<div class="form-group">
										<label class="col-xs-2 col-sm-2 col-md-2 col-lg-2 text-center" for="name">姓名</label>
										<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
											<input type="text" class="userName  btn-lg" id="name" placeholder="请填写真实姓名"/>
											<span class="validateName"></span>
										</div>
									</div>
									<div class="form-group">
										<label class="col-xs-2 col-sm-2 col-md-2 col-lg-2 text-center" for="code">证件号</label>
										<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
											<input type="text" class="idCode  btn-lg" id="code" placeholder="请填写真实有效身份证号"/>
											<span class="validateCode "></span>
										</div>
									</div>
									<div class="text-center borTop">
										<button type="button" class="btn submitBtn btn-block">确认登记</button>
									</div>
									<p class="small text-left rolePng">本次登记的是您本人在拇指游玩中的身份资料，请确保信息真实有效</p>
									<p class="small text-left  rolePng2">如需帮助，请联系客服。QQ：4009611191    电话：4009611191</p>
								</div>
								<div class=" mtSuccess">
									<img src='http://game.91muzhi.com/assets/images/auth/icon01.png' />
									<p>您已成功登记实名信息，请关闭该页面</p>
								</div>
								<div class="mtTimeout">
									<img src='http://game.91muzhi.com/assets/images/auth/icon02.png' />
									<p>认证失败，请<span>重新认证</span></p>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
        <div class="hint" ref="hint">
            <span ref="hint-content"></span>
        </div>
    </div>
</template>
<script>
    import  '../common/bower_components/jquery/dist/jquery'
    import {url, token , userdata,hint} from '../common/js/general'
   
    export default{
        data(){
            return {
                payType:'alipay'||'wftwxpay',
                gameId:299,
                packetId:100299001,
                amount:100,
                $refs :this.$refs,
                userdata,
                readonly:'readonly'
            }
        },
        methods:{

        },
        mounted(){
            var that = this;
            if(!token){
                this.readonly = false
            }
        	$('#other_mo').focus(function() {
                $("#radio_wrap li.checked i").css({
                    visibility : "hidden"
                });
                $("#radio_wrap li.checked").css({
                    border : "1px solid #CCC"
                });
            })   
            $('#other_mo').blur(function() {
                $("#radio_wrap li.checked i").css({
                    visibility : "visible"
                });
                if ($("#other_mo").val() < 0) {
                    hint(that.$refs,"填写其他金额不能小于0");
                    return false;
                }
            })   
            function menu(vd) {
                var ob1 = document.getElementById('zf' + vd);
                var ob2 = document.getElementById('me' + vd);
                // var card=document.getElementById('card');
                $("#card").val(vd);
                ob1.style.display = "block";
                ob2.style.cssText = "background-color: #EEDFCC;font-weight: 700;color:red;border-right:0;width:202px;position:relative;background:#fff";

                var num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
                for (var i = 0; i < num.length; i++) {
                    // alert(num[i]);
                    if (vd != num[i]) {
                        var ob3 = document.getElementById('zf' + num[i]);
                        var ob4 = document.getElementById('me' + num[i]);
                        ob3.style.display = "none";
                        ob4.style.cssText = "";
                    }
                }
            }
        
            function sub() {
                var user =userdata.name //`${sessionScope.user.name}`;
               
                var user_sure = $("#user").val();
                var other_mo = $("#other_mo");
                var other_checked = other_mo.parent().hasClass("checked_span");
                
                var test = /^[1-9]\d*$/;
                
                if (user == '') {
                    hint(that.$refs,'请先登录您的账号！');
                    return false;
                } else if (user_sure == "") {
                    hint(that.$refs,'充值账户不能为空！');
                    return false;
                } else if (other_checked && other_mo.val() != '' && !test.test(other_mo.val())) {
                    //alert('金额只能为1元以上的整数');
                    hint(that.$refs,'金额只能为1元以上的整数')
                    return false;
                }else return true;

            }   
            $("#subBtn").click(function(){
    
                if(sub()){
                    var status = userdata.certificationStatus//`${sessionScope.user.certificationStatus}`;
                    if(!status&&status=='4'){
                
                        if($("#showdialog").val()=='0'){
                        //弹框
                        $('#subBtn').attr('data-toggle','modal');
                        
                        $("#showdialog").val("1");
                        return ;
                        }else{
                            $('#subBtn').attr('data-toggle','');
                        }
                        
                    }else{
                        $('#subBtn').attr('data-toggle','');
                    }
                
                    var amount = 1;
                    var inputmoney = $("#inputmoney").find("span");
                    $.each(inputmoney,function(index,value){
                        if($(value).hasClass("checked_span")){
                            amount = $(this).find("input")[0].value;
                        }
                    });
                    
                    var pay = $("#mainNav").find("div");
                    var payType = "";
                    $.each(pay,function(index,value){
                        if($(value).hasClass("active")){
                            payType = $(this).attr('payType');
                        }
                    });
                    
                    var user_sure = $("#user").val();
                    $("#toUserName").val(user_sure);
                    $("#amount").val(amount);
                    $("#payType").val(payType);
                    $("#gameId").val("299");
                    $("#packetId").val("100299001");
                    $("#payForm").submit();
                }
            });   
            $('#mainNav>div').click(function() {
                $(this).addClass('active').siblings().removeClass('active');
            });
            $('#inputmoney>span').click(
                function() {
                    $(this).addClass('checked_span').siblings().removeClass(
                        'checked_span');
            });
            $('#change').click(function() {
                $('#user').val('');
            });

        }

    }
</script>
<style scoped>
    @import '../common/bower_components/bootstrap/dist/css/bootstrap.min.css';
    .chargeWrap{
        width: 1200px;
        margin: 60px auto ;
    }
    #mainNav{
        width: 316px;
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
#subNav{
	        width:800px;
	        padding: 10px;
	        border: 1px solid #dbdbdb;
	    }
	    #subNav .top1 div{
	        padding: 10px 0 20px 0;
	        font-size: 14px;
	    }
	    #subNav .top1 div .left,#subNav .top1 .account left{
	        display: inline-block;
	        width: 72px;
	        color: #979797;
	        text-align: right;
	        margin-right: 4px;
	        font-size:14px
	    }
	    #subNav .top1 .account{
	        display: flex;
	        align-items: center
	    }
	    #subNav .top1 .account input{
	        width: 170px;
	        height: 34px;
	        padding-left: 23px;
	        border: 1px solid #e4e4e4;

	    }
	    #subNav .top1 .account a{
	        display: inline-block;
	        height: 34px;
	        width: 70px;
	        line-height: 36px;
	        text-align: center;
	        border: 1px solid #e4e4e4;
	        border-left: none;
	        font-size: 14px;
	        font-weight: bold;
	        color: #8f24a5;
	    }
	    
	    #subNav .top1 .position .center{
	        display: inline-block;
	        width: 92px;
	        height: 41px;
	        line-height: 41px;
	        text-align: center;
	        border-radius: 6px;
	        color: #fff;
	        background: #912ba8;
	        cursor: pointer;
	    }
	    #subNav .top1 .money .center{
	        display: inline-block;
	        width: 400px;
	        vertical-align: top;
	    }
	    #subNav .top1 .money .left{
	        display: inline-block;
	        padding-top: 12px;
	    }
	    #subNav .top1 .money .center span{
	        display: inline-block;
	        position: relative;
	        width: 88px;
	        height: 41px;
	        font-size: 12px;
	        line-height: 40px;
	        text-align: center;
	        border: 1px solid #e4e4e4;
	        margin-right: 4px;
	        margin-bottom: 10px;
	        cursor: pointer;
	    }
	    
	    #subNav .top1 .money .center span:last-child input{
	        width: 52px;
	        height: 50%;
	        margin-right: 5px;
	        vertical-align: middle;
	        border-color: #ddd;
	    }
	    #subNav .top1 .money .center span i{
	        position: absolute;
	        right:-1px;
	        bottom: -2px;
	        width: 14px;
	        height: 14px;
	        /* background: url("img/yes.png")no-repeat; */
	        display: none;
	    }
	    #subNav .top1 .money .center span.checked_span{
	        width: 88px;
	        height: 41px;
	        border: 1px solid #912ba8;
	    }
	    #subNav .top1 .money .center span.active i{
	        display: block;
	    }
	    #subNav .top1 .recharge .center{
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
	        /* width: 100%; */
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
            margin:0;
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
		#user{
			margin: 0;
		}
</style>
