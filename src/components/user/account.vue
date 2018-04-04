<template>
	<div id="account">
		<div :class="{'edit':true}">
			<a href="javascript:;" ref="editable" @click="editable">编辑</a></div>
		<div class="account-wrap">
			<ul>
				<li>
					<label class="accout-label" for="username">用户名</label>
					<input id="username" placeholder="用户名" type="text" name="username" v-model="info.username" :readonly="readonly"></li>
				<li>
					<label class="accout-label" for="nickname">昵称</label>
					<input id='nickname' placeholder="请设置您的昵称" type="text" v-model="info.nickname" :readonly="readonly"></li>
				<li>
					<p class="accout-label">性别</p>
					<label for="men">
						<input type="radio" id="men" value="man" checked v-model="info.sex"  :disabled="readonly" name="sex">男</label>&nbsp;&nbsp;
					<label for="women">
						<input type="radio" id="women" value="woman" v-model="info.sex" :disabled="readonly" name="sex">女</label>
						
				</li>
				<li>
					<label class="accout-label" for="">实名认证状态</label>
					<span class="font-s-color333">未认证</span></li>
				<li>
					<label class="accout-label" for="">QQ</label>
					<input type="text"  v-model="info.qq" placeholder="请输入常用QQ号" :readonly="readonly"></li>
				<li>
					<label class="accout-label" for="">微信</label>
					<input type="text"  v-model="info.wx" placeholder="请输入您的微信号" :readonly="readonly"></li>
				<li>
					<label class="accout-label" for="">联系电话</label>
					<input type="text"  v-model="info.phone" placeholder="请输入您的联系电话" :readonly="readonly"></li>
				<li>
					<label class="accout-label" for="">地址</label>
					<input type="text"  v-model="info.address" placeholder="请输入您的地址" :readonly="readonly"></li>
				<li>
					<label class="accout-label" for="">上次登录</label>
					<span class="font-s-color333">2017-10-30&nbsp;18:22</span></li>
				<li>
					<label class="accout-label" for="">最近登录IP</label>
					<span class="font-s-color333">127.0.0.1</span></li>
			</ul>
			<div :class="{'accout-submit':true}">
				<input @click="changeInfo" type="button" value="提交">
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
import axios from 'axios';
import {url,hint,token} from '../../common/js/general'
export default {
  data() {
    return {
		readonly: true,
		info:{
			username:'lw3333',
			sex:'man',
			qq:'2',
			wx:'3',
			phone:'4',
			address:'1',
			nickname:'2',
			token
		}
    };
  },
  methods: {
    editable() {
		this.readonly = !this.readonly;
		if(!this.readonly){
			this.$refs.editable.className = "background";
		}else{
			this.$refs.editable.className = "";
		}
	},
	changeInfo(){
		let paramsUrl =  new URLSearchParams();
		let that = this;
		paramsUrl.append('username',that.info.username);
		paramsUrl.append('sex',that.info.sex);
		paramsUrl.append('qq',that.info.qq);
		paramsUrl.append('wx',that.info.wx)
		paramsUrl.append('phone',that.info.phone)
		paramsUrl.append('address',that.info.address)
		paramsUrl.append('nickname',that.info.nickname)
		paramsUrl.append('token',that.info.token)
		axios.post(url+'/muzhiplat/pc2/user/edit',paramsUrl).then(function(res){
			console.log(res.data)
			hint(that.$refs,res.data.msg)
		}).catch(function(res){
			console.log(res)
		})

	}
  },
  mounted(){
  },

};
</script>
<style scoped lang="stylus">
	
	#account {
		position: relative;
	}

	.edit {
		position: absolute;
		right: 0;
		top: 0;
		z-index: 9;
		text-align: right;

		a {
			dispaly: inline-block;
			padding: 10px 20px;
			border: 1px solid #999;
			border-radius: 6px;
			font-size: 14px;
			color: #666;
			background: none;

			&:hover {
				background: linear-gradient(left, #6461a5, #cf2878);
				background: -webkit-linear-gradient(left, #6461a5, #cf2878);
				color: #fff;
			}
		}
	}
	.account-wrap {
		width: auto;
		display: table-cell;
		vertical-align: middle;
		.accout-submit{
			width 400px
			height 48px
			margin-top 50px
			border-radius 6px
			background #cf2878

		}
			input[type="button"]{
				border none
				background none 
				display inline-block
				width 100%
				height 100%
				color #fff
				font-size 16px
				cursor pointer
				border-radius 6px
			}
		
			li {
				height: 56px;
				.accout-label {
					min-width: 64px;
					padding-right: 10px;
					text-align: left;
					display: inline-block;
					font-size: 14px;
					color: #999;
					line-height: 36px;
				}

				input[type='text'] {
					min-width: 220px;
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
				}
			}
	}
	input[type="button"]:active{
		background #999 !important
	}
</style>