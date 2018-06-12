<template>
	<div id="account">
		<div :class="{'edit':true}">
			<a href="javascript:;" ref="editable" @click="editable">编辑</a></div>
		<div class="account-wrap">
			<ul>
				<li>
					<label class="accout-label" for="userdata">用户名</label>
					<input id="userdata" placeholder="用户名" type="text" name="username" v-model="userdata.name" :readonly="readonly"></li>
				<li>
					<label class="accout-label" for="nickname">昵称</label>
					<input id='nickname' placeholder="请设置您的昵称" type="text" v-if="userdata.nickname!='undefined'" v-model="userdata.nickname" :readonly="readonly">
					<input id='nickname' placeholder="请设置您的昵称" type="text" v-else  :readonly="readonly"></li>
				<li>
					<p class="accout-label">性别</p>
					<label for="men">
						<input type="radio" id="men" value="0" v-model="userdata.gender"  :disabled="readonly" name="sex">男</label>&nbsp;&nbsp;
					<label for="women">
						<input type="radio" id="women" value="1" v-model="userdata.gender" :disabled="readonly" name="sex">女</label>
				</li>
				<li>
					<label class="accout-label" for="">实名认证状态</label>
					<span class="font-s-color333">{{userdata.certificationStatus|certificationStatus}}</span></li>
				<li>
					<label class="accout-label" for="">QQ</label>
					<input type="text"  v-model="userdata.qq" placeholder="请输入常用QQ号" :readonly="readonly"></li>
				<li>
					<label class="accout-label" for="">微信</label>
					<input type="text"  v-model="userdata.wx" placeholder="请输入您的微信号" :readonly="readonly"></li>
				<li>
					<label class="accout-label" for="">联系电话</label>
					<input type="text"  v-model="userdata.contactNo" placeholder="请输入您的联系电话" :readonly="readonly"></li>
				<li>
					<label class="accout-label" for="">地址</label>
					<input type="text"  v-model="userdata.receivedAddress" placeholder="请输入您的地址" :readonly="readonly"></li>
				<li>
					<label class="accout-label" for="">上次登录</label>
					<span class="font-s-color333">{{userdata.recentLoginTime}}</span></li>
				<li>
					<label class="accout-label" for="">最近登录IP</label>
					<span class="font-s-color333">{{userdata.recentLoginAddr}}</span></li>
			</ul>
			<div v-show="!readonly" :class="{'accout-submit':true}">
				<input @click="changeInfo" type="button" value="提交">
			</div>
		</div>
	{{userdata}}
		<transition>
			<div class="hint" ref="hint">
				<span ref="hint-content"></span>
			</div>
		</transition>
	</div>
</template>
<script>
import axios from "axios";
import qs from "qs";
import { url, hint } from "common/js/general";
import { mapState } from "vuex";
export default {
  data() {
    return {
      readonly: true
    };
  },
  computed: {
    ...mapState(["userdata", "token"])
  },
  filters: {
    certificationStatus(data) {
      if (data === 0) {
        return "系统升级中";
      } else if (data === 1) {
        return "已认证";
      } else if (data === 3) {
        return "认证中";
      } else {
        return "未认证";
      }
    }
  },
  methods: {
    editable() {
      this.readonly = !this.readonly;
      if (!this.readonly) {
        this.$refs.editable.className = "background";
      } else {
        this.$refs.editable.className = "";
      }
    },
    changeInfo() {
      let that = this;
      let paramsUrl = qs.stringify({
        sex: that.userdata.sex,
        qq: that.userdata.qq,
        wx: that.userdata.wx,
        phone: that.userdata.phone,
        address: that.userdata.address,
        nickname: that.userdata.nickname,
        token: that.token
      });

      axios
        .post(url + "/muzhiplat/pc2/user/edit", paramsUrl)
        .then(function(res) {
          hint(that.$refs, res.data.msg);
          if (res.data.msg.indexOf("登陆超时") == -1) {
            setTimeout(() => {
              that.$router.push("/login");
            }, 1000);
          }
        })
        .catch(function(res) {
          console.log(res);
        });
    }
  }
};
</script>
<style scoped lang="stylus">
#account {
	position: relative;
}

input[type='radio'] {
	display: inline-block;
	appearance: none;
	width: 13px;
	height: 13px;
	border: 3px solid #e6e6e6;
	margin: 0 10px;
	border-radius: 8px;
}

input[type='radio']:checked {
	border: 3px solid #820c9b;
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

	.accout-submit {
		width: 400px;
		height: 48px;
		margin-top: 50px;
		border-radius: 6px;
		background: #cf2878;
	}

	input[type='button'] {
		border: none;
		background: none;
		display: inline-block;
		width: 100%;
		height: 100%;
		color: #fff;
		font-size: 16px;
		cursor: pointer;
		border-radius: 6px;
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

		&:hover input[type='text']:not([readonly='readonly']) {
			box-shadow: inset 0 0 1px #820c9b;
		}
	}
}

input[type='button']:active {
	background: #999 !important;
}
</style>