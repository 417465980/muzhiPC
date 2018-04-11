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
                                    <li><label class="username" for="username"><input type="text" value="checkedRemmber" @input="checkUser" id="username" placeholder="请输入用户名" v-model="username"><span :class="{'text-danger':!userInput.prompt,'text-success':userInput.prompt,'text-active':userInput.textActive}">{{userInput.promptContent}}</span></label></li>  
                                    <li><label class="psd" for="psd"><input id="psd" :type="type" placeholder="请输入密码" v-model="password"><i class="eye" @click="changeType"></i></label></li> 
                                </ol>
                                <div>
                                    <p class="remmberme"><input class="radioR" type="checkbox" @change="remmberme" v-model="checked"><span>记住我的两周</span></p>
                                    <router-link to="/forgetpsd" tag="span" class="forgetpsd">忘记密码?</router-link>
                                </div>
                                <div><input class="background loginbtn" type="button" @click="login" value="登录"></div>
                                <div><p class="unregistered">还没注册拇指账户？<router-link to="/register" tag="span">立即注册&gt;&gt;</router-link></p></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <transition>
			<div class="hint" ref="hint">
				<span ref="hint-content"></span>
			</div>
		</transition>
	</div>
</template>
<script>
    import axios from 'axios'
    import {url,resPassword,regUserName,hint,userdata,token} from '../../common/js/general'
	export default{
		data(){
			return {
                username:'',
                password:'',
                type:'password',
                checked:localStorage.checked||false,
                userInput :{
                    prompt :false,
                    promptContent:'6-15位（仅限数字、英文）',
                    textActive :false
                },//登录注册验证提示
			}
        },
        methods:{
            login(){
                const that = this
                this.userInput.textActive =true
                if(this.userInput.prompt){
                    let paramsUrl = new URLSearchParams()
                    paramsUrl.append('username', this.username);
                    paramsUrl.append('password', this.password);
                    axios.post(url + '/muzhiplat/pc2/user/login',paramsUrl).then(function(res){
                        
                        hint(that.$refs,res.data.msg)
                        if(res.data.ret){
                           
                            window.localStorage.setItem('userdata',JSON.stringify(res.data.rows.user))
                            window.localStorage.setItem('token',JSON.stringify(res.data.token))
                            window.localStorage.setItem('game',JSON.stringify(res.data.rows.game))
                            setTimeout(function(){
                                that.$router.push('/home');
                                window.location.reload()
                            },2000)
                        }
                    }).catch(function(res){
                        
                    })
                }
            },
            checkUser(){
                this.userInput.textActive = true
                this.userInput.prompt = regUserName.test(this.username)
                if(regUserName.test(this.username)){
                    this.userInput.promptContent = "通过"
                }else{
                    this.userInput.promptContent = "6-15位（仅限数字、英文）"
                }
            },
            changeType(){
                if(this.type == 'text'){
                    this.type = 'password'
                }else{
                    this.type = 'text'
                }
               
            },
            remmberme(){
                if(this.checked){
                    window.localStorage.setItem('checked','checked')
                }else{
                    window.localStorage.removeItem('checked')
                }
            }
       
        },
        mounted(){
            if(this.checked){
                window.localStorage.setItem('checked','checked')
                this.username = userdata.name
                
            }else{
                window.localStorage.removeItem('checked')
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
        span 
            display none
            position absolute
            top 40px
            left 0
            font-size 12px
            width 200px
        .text-active
            display inline-block
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
.eye
    display inline-block
    position absolute
    right 0
    top 1px
    width 38px
    height 38px
    background #fff url(../../assets/images/eye.png) no-repeat center center
    background-size 100% auto
    cursor pointer
</style>