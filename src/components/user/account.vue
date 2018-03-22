<template>
	<div id="account">
		<div :class="{'edit':true}">
			<a href="javascript:;" @click="editable">编辑</a></div>
		<div class="account-wrap">
			<form action="" method="post">
				<ul>
					<li>
						<label class="accout-label" for="username">用户名</label>
						<input id="username" placeholder="用户名1" type="text" name="username" :readonly="readonly"></li>
					<li>
						<label class="accout-label" for="nickname">昵称</label>
						<input name="nickname" id='nickname' placeholder="未设置昵称" type="text" :readonly="readonly"></li>
					<li>
						<p class="accout-label">性别</p>
						<label for="men">
							<input type="radio" id="men" name="nickname" value="男" checked :disabled="readonly">男</label>&nbsp;&nbsp;
						<label for="women">
							<input type="radio" id="women" name="nickname" value="女" :disabled="readonly">女</label>
					</li>
					<li>
						<label class="accout-label" for="">实名认证状态</label>
						<span name="nickname" class="font-s-color333">未认证</span></li>
					<li>
						<label class="accout-label" for="">QQ</label>
						<input name="nickname" type="text" placeholder="18546542853" :readonly="readonly"></li>
					<li>
						<label class="accout-label" for="">微信</label>
						<input name="nickname" type="text" placeholder="weixin1" :readonly="readonly"></li>
					<li>
						<label class="accout-label" for="">联系电话</label>
						<input name="nickname" type="text" placeholder="15454545454" :readonly="readonly"></li>
					<li>
						<label class="accout-label" for="">地址</label>
						<input name="nickname" type="text" value="广东省深圳市南山区粤海街道高新中一道长园新材1栋4楼拇指游玩" :readonly="readonly"></li>
					<li>
						<label class="accout-label" for="">上次登录</label>
						<span name="nickname" class="font-s-color333">2017-10-30&nbsp;18:22</span></li>
					<li>
						<label class="accout-label" for="">最近登录IP</label>
						<span name="nickname" class="font-s-color333">127.0.0.1</span></li>
				</ul>
				<div :class="{'accout-submit':true}">
					<input type="submit" value="提交">
				</div>
			</form>
		</div>
	</div>
</template>
<script>
export default {
  data() {
    return {
      readonly: true,
      checked: "checked"
    };
  },
  methods: {
    editable() {
      this.readonly = !this.readonly;
    }
  }
};
</script>
<style scoped lang="stylus">
@import '../../common/style/same.css';

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
		input[type="submit"]{
			border none
			background none 
			display inline-block
			width 100%
			height 100%
			color #fff
			font-size 16px
			cursor pointer
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
</style>