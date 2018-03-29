<template>
	<div id="login">
        <div class="login">
            <div class="min-width">
                <ul>
                    <li class="login-cont-left"><img class="login-left-img" src="../../assets/images/loginleft.png" alt=""></li>
                    <li class="login-cont-right">
                        <div class="login-warp">
                            <div class="login-margin">
                                <ol>
                                    <li><label class="username" for="username"><input type="text" id="username" placeholder="请输入用户名"></label></li>  
                                    <li><label class="psd" for="psd"><input id="psd" type="text" placeholder="请输入密码"></label></li> 
                                </ol>
                                <div>
                                    <p class="remmberme"><input class="radioR" type="checkbox" checked><span>记住我的两周</span></p>
                                    <router-link to="/forgetpsd" tag="span" class="forgetpsd">忘记密码?</router-link>
                                </div>
                                <div><input class="background loginbtn" type="button" value="登录"></div>
                                <div><p class="unregistered">还没注册拇指账户？<router-link to="/register" tag="span">立即注册&gt;&gt;</router-link></p></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
	</div>
</template>
<script>
	export default{
		data(){
			return {

			}
		}
	}	
</script>
<style scoped lang="stylus" >
.login
    height 520px
    width 100%
    min-width 1200px
    background url('../../assets/images/loginbac.jpg') repeat ;
.login-left-img
    width 400px
    margin-top 80px
.login-cont-left
    float left
    height 520px
.login-cont-right
    float right
    height 520px
    .login-warp
        width 320px
        height 360px
        margin-top 80px
        box-sizing border-box
        border 3px solid rgba(255,255,255,.2)
        border-radius 6px
.login-margin
    height 100%
    padding 0px 22px 
    background rgba(255,255,255,.7)
    ol
        padding-top 50px
    .username,.psd
        display inline-block
        position relative
        margin-top 20px
        width 100%
        height 40px
        background #fff
        border-radius 6px
    .username:before 
        content ''
        display inline-block
        position absolute
        width 40px
        height 40px
        background url(../../assets/images/icon_spri.png) no-repeat -103px -98px
    .psd:before 
        content ''
        display inline-block
        position absolute
        width 40px
        height 40px
        background url(../../assets/images/icon_spri.png) no-repeat -130px -98px
    #username ,#psd
        display inline-block 
        width 222px 
        line-height 38px 
        color #999 
        font-size 14px
        border none 
        background #fff 
        box-sizing border-box 
        margin-left 40px 
.remmberme
    display inline-block
    margin-top 10px
    font-size 12px
    color #999
    width auto
        input 
            width 12px
            height 12px
            border 1px solid #d6d6d6
            font-size 12px
.forgetpsd
    margin-top 10px
    float right
    color #922ba8
    font-size 12px
    text-decoration underline
    cursor pointer
.loginbtn
    width 100%
    border none 
    height 45px
    border-radius 6px 
    font-size 18px
    line-height 45px
    margin-top 20px
    cursor pointer
    &:active
        background #999 !important
.unregistered
    margin-top 20px
    font-size 14px
    color #999
    text-align center
    span 
        color #922ba8
        cursor pointer

</style>