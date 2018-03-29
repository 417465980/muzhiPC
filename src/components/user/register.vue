<template>
	<div id="register" class="max-width">
        <div class="register-box">
            <div>
                <p class="font-size-normal">拇指账号？</p>
                <router-link to="/login" tag="span" class="background margin-s button-normal cp">马上登录</router-link>
            </div>
            <div class="register-wrap">
                <div class="mauto tl register-main">
                    <h3 class="g0 n f28 pb40 ">注册拇指游戏平台</h3>
                    <form action="" methods="post">
                        <ul>
                            <li>
                                <label class="accout-label" for="username">用户名</label>
                                <input id="username" class="input-common" placeholder="6-15位（仅限数字、英文）" type="text" name="username" ></li>
                            <li>
                                <label class="accout-label" for="password">密码</label>
                                <input name="password" class="input-common" id='password' placeholder="请输入密码" type="password" ></li>
                            <li>
                                <label class="accout-label" for="">重复密码</label>
                                <input name="passwordrepeat" class="input-common" id="passwordrepeat" type="password" placeholder="请输入重复密码" ></li>
                            <li>
                                <label class="accout-label" for="">E-mail</label>
                                <input name="nickname" class="input-common" type="text" placeholder="请输入您常用email" ></li>
                        </ul>
                         <div><p class="unregistered tl">我已阅读并同意<router-link to="/mzagreement" tag="span">《拇指通行证用户服务协议》</router-link></p></div>
                        <input class="background register-sub tc br6 f16 wh cp" ref="sub" type="submit" value="提交">
                    </form>
                </div>
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
@import '../../common/style/common.css'
.unregistered
    
    font-size 14px
    color #999
    span 
        color #922ba8
        cursor pointer
.register-wrap 
    width: auto;
    vertical-align: middle;
    li 
        height: 56px;
        .accout-label 
            min-width: 64px;
            padding-right: 10px;
            text-align: left;
            display: inline-block;
            font-size: 14px;
            color: #999;
            line-height: 36px;
        .input-common
            min-width: 330px;
            width: auto;
            height: 36px;
            line-height: 36px;
            padding: 0 2rem;
            font-size: 14px;
            color: #333;
            border-radius: 6px;
            appearance: none;
            border: 1px solid #e4e4e4;
            box-sizing: border-box;
.accout-submit
    width 400px
    height 48px
    margin-top 50px
    border-radius 6px
    background #cf2878
    input[type="submit"]
        border none
        background none 
        display inline-block
        width 100%
        height 100%
        color #fff
        font-size 16px
        cursor pointer
.register-main
    width 460px
    margin 0 auto 
.register-sub
    display block
    width 270px
    height 50px
    line-height 50px
    border none 
    margin 40px auto 100px
    &:active
        background #999 !important
</style>