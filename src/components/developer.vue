<template>
<!--     <!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
	<meta name="apple-mobile-web-app-capable" content="yes"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<link rel="stylesheet" href="css/reset.css">
	<link rel="stylesheet" href="css/index.css">
	<title>拇指游玩平台网游</title>
</head>
<body>

	<header class="header">
		<div class="content">
			<a href="javascript:;"><img src="imgs/logo.png" alt=""></a>
			<div class="title"><span>拇指游戏平台网游接入说明</span></div>
		</div>
	</header> -->

	<div class="main">
		<div class="content">
			<div class="sub tab" id="fixed" style="position: static; top: 0px;">
				<div class="active"><span>新游接入</span><i></i></div>
				<div><span>合同、授权书</span><i></i></div>
				<div><span>SDK</span><i></i></div>
				<div><span>角标、LOGO</span><i></i></div>
				<div><span>素材需求</span><i></i></div>
				<div><span>商务需求说明</span><i></i></div>
				<div><span>财务结算信息</span><i></i></div>
				<div><span>API接口</span><i></i></div>
			</div>
			<div class="subMain fr list active" style="display: block">
				<h3>新游接入流程</h3>
				<div class="div">更新时间：2017-06-07</div>
				<h5>一、麻烦合作伙伴提供以下信息和游戏申请表到邮箱</h5>
				<p>qinzuocheng@91muzhi.com 抄送 chengcheng@91muzhi.com 和 xiehaiyuan@91muzhi.com</p>
				<p>等待邮件回复确认合作开始</p>
				<p>邮件标题写：XX新游接入</p>
				<p>邮件正文内容如下</p>
				<p>1、公司名称：</p>
				<p>2、游戏名称：</p>
				<p>3、游戏类型：</p>
				<p>4、研发商：</p>
				<p>5、发行商：</p>
				<p>6、排期计划：</p>
				<p>7、联系人电子名片：</p>
				<p>8、合同邮寄地址：</p>
				<p>9、预计上线时间(内测、公测)</p>
				<p>10、代理商还是研发商（代理必须是安卓渠道独代）</p>
				<p>11、请提供著作权或独代授权书扫描件</p>
				<p>12、开户银行：</p>
				<p>13、银行账号：</p>
				<p>14、产品测试数据，务必真实（可提升产品评级）</p>
				<p>如两个工作日没有收到邮件回复，请联系商务同学</p>
				<br>
				<br>

				<h5>二、请附上：</h5>
				<p>1、产品软件著作权（如没有此材料游戏不可上线）</p>
				<p>2、游戏demo</p>
				<p>3、游戏介绍PPT等资料</p>
				<br>
				<br>

				<h5>三、SDK接入问题请联系商务</h5>
				<p>1、确定产品是最新版本</p>
				<p>2、确定合作之后，拉技术讨论组</p>
				<br>
				<br>

				<h5>四、商务对接人信息</h5>
				<p>覃作成</p>
				<p>拇指游戏平台-商务经理</p>
				<p>深圳市拇指游玩科技有限公司</p>
				<p>QQ:2851520001</p>
				<p>邮箱：qinzuocheng@91muzhi.com</p>
				<p>网站：www.91muzhi.com</p>
				<p>地址：广东省深圳市南山区粤海街道高新中一道长园新材料港1栋四层北侧</p>
			</div>
			<div class="subMain fr list">
				<h3>合同、授权书</h3>
				<div class="div">更新时间：2017-06-07</div>
				<p>1、产品拇指游戏平台联运合同模板</p>
				<p>2、授权书（模版）   </p>
				<br>
				<p><a href="http://cdn.91muzhi.com/business/合同授权书.zip">点击下载 以上文件 >></a></p>
			</div>
			<div class="subMain fr list">
				<h3>拇指游玩SDK</h3>
				<div class="div">更新时间：2018-05-16</div>
				<h5>  在获取AppId和Key后，您需要根据我们的技术文档进行整合。</h5>
				<div class="border">
					<h4>Android游戏SDK 版本号：3.7.7</h4>
					<div class="div">更新于2018年05月16日</div>
					<p>1、修改部分界面UI布局；</p>
					<p>2、角色接口重构；</p>
					<p>3、支付接口新增参数；</p>
					<p>4、修复已知bug；</p>
					<br>
					<br>
					<a href="http://91muzhicom-1251304591.file.myqcloud.com/pic/SDK/android/%E6%8B%87%E6%8C%87%E6%B8%B8%E7%8E%A9%20Android%20SDK_3.7.7.zip"><span class="btn">下&nbsp;&nbsp;载</span></a>
				</div>
				<div class="border">
					<h4>iOS游戏SDK 版本号：4.5.4</h4>
					<div class="div">更新于2018年05月7日</div>
					<p>1、登陆接口增加testMode参数；</p>
					<p>2、支付接口增加CProleID参数；</p>
			<p>3、角色同步接口去掉chargeNum参数，并在回调处增加message 参数，以便于分析角色上传是否成功！</p>
					<br>
					<br>
					<a href="http://91muzhicom-1251304591.file.myqcloud.com/pic/SDK/ios/%E6%8B%87%E6%8C%87%E6%B8%B8%E7%8E%A9%20iOS%20SDK%28%20%E5%9B%BD%E5%86%85%E6%AD%A3%E5%BC%8F%E7%89%88%E6%9C%AC%EF%BC%9A4.5.4%20%20%29.rar"><span class="btn">下&nbsp;&nbsp;载</span></a>
				</div>
				<div class="border">
					<h4>H5游戏SDK 版本号：1.0.1</h4>
					<div class="div">更新于2018年01月08日</div>
					<p>1、更新SDK登陆界面样式；</p>
					<p>2、新增悬浮按钮导航功能；</p>
					<p>3、新增微端对接区分操作系统字段；</p>
					<br>
					<br>
					<a href="http://91muzhicom-1251304591.file.myqcloud.com/pic/SDK/H5%E6%B8%B8%E6%88%8FSDK/%E6%8B%87%E6%8C%87%E6%B8%B8%E7%8E%A9H5%E6%8E%A5%E5%85%A5%E6%96%87%E6%A1%A3.doc"><span class="btn">下&nbsp;&nbsp;载</span></a>
				</div>
			</div>
			<div class="subMain fr list">
				<h3>角标、LOGO</h3>
				<div class="div">更新时间：2017-06-07</div>
				<p>1、拇指游戏平台ICON角标</p>
				<p>2、拇指游戏平台横版闪屏LOGO</p>
				<p>3、拇指游戏平台竖版闪屏LOGO</p>
				<br>
				<p><a href="http://cdn.91muzhi.com/business/角标、logo.rar">点击下载 以上文件 >></a></p>
			</div>
			<div class="subMain fr list">
				<h3>素材需求</h3>
				<div class="div">更新时间：2017-06-07</div>
				<p>1、拇指游戏平台素材需求</p>
				<p>2、480x800宣传图</p>
				<p>3、730x315轮播图</p>
				<p>4、1000x560宣传图</p>
				<p>5、icon</p>
				<p>6、礼包</p>
				<p>7、软著及授权书</p>
				<p>8、游戏logo</p>
				<p>9、游戏简介、新闻、攻略</p>
				<p>10、游戏原画</p>
				<br>
				<p><a href="http://tfyxb2017-1251304591.file.myqcloud.com/business/scxq.zip">点击下载 以上文件 >></a></p>
			</div>
			<div class="subMain fr list">
				<h3>商务需求说明书</h3>
				<div class="div">更新时间：2017-06-07</div>
				<p>1、产品接入时务必带入拇指游戏平台角标</p>
				<p>2、产品接入时务必接入拇指游戏平台logo</p>
				<p>3、包名规则如下：<br>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;com.mzyw.cp公司缩写.xxxx游戏缩写</p>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例如：com.mzyw.hthd.jyqxz</p>
					<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(黑桃互动 金庸群侠传)</p>
				</p>
				<p>4、产品接入之前双方确定好合同具体事宜</p>
				<p>5、软著和授权书务必给到，授权书需要两份：1、研发授权给发行。2发行授权给拇指。</p>
				<p>6、请把整理好的素材分别放入相对应的文件夹内发送至商务邮箱</p>
				<p>7、如有任何疑问请联系商务人员</p>
				<br>
				<p>覃作成</p>
				<p>拇指游戏平台-商务经理</p>
				<p>深圳市拇指游玩科技有限公司</p>
				<p>QQ:2851520001</p>
				<p>邮箱：qinzuocheng@91muzhi.com</p>
				<p>网站：www.91muzhi.com</p>
				<p>地址：广东省深圳市南山区粤海街道高新中一道长园新材料港1栋四层北侧</p>
			</div>
			<div class="subMain fr list">
				<h3>财务结算信息</h3>
				<div class="div">更新时间：2017-06-07</div>
				<p>1、财务结算流程</p>
				<p>2、拇指游玩开票资料-文档</p>
				<p>3、增值税一般纳税人认定通知书-扫描件</p>
				<br>
				<p><a href="http://cdn.91muzhi.com/business/财务结算信息.zip">点击下载 以上文件 >></a></p>
			</div>
			<div class="subMain fr list">
				<h3>API接口</h3>
				<div class="div">更新时间：2018-01-31</div>
				<p>1、用户角色信息服务端对接文档</p>
				<br>
				<p><a href="http://91muzhicom-1251304591.file.myqcloud.com/pic/SDK/API%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/%E7%94%A8%E6%88%B7%E8%A7%92%E8%89%B2%E4%BF%A1%E6%81%AF%E6%9C%8D%E5%8A%A1%E7%AB%AF%E5%AF%B9%E6%8E%A5%E6%96%87%E6%A1%A3%20.docx">点击下载 以上文件 >></a></p>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>

</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    var tabbox = document.querySelectorAll(".tab div");
    var list = document.querySelectorAll(".list");
    for (var i = 0; i < tabbox.length; i++) {
      tabbox[i].index = i;
      tabbox[i].onclick = function() {
        for (var i = 0; i < tabbox.length; i++) {
          tabbox[i].className = "";
          this.className = " active";
          list[i].style.display = "none";
          list[this.index].style.display = "block";
        }
      };
    }
  }
};
</script>
<style>
.main {
  width: 100%;
  min-height: 820px;
  background: #f5f5f5;
}
.main .content {
  width: 1190px;
  margin: 0 auto;
  padding: 20px 0 62px 0;
}
.main .content .sub {
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
  padding: 10px 20px;
  width: 260px; /*需要修改的值*/
  height: 482px;
  background: #ffffff;
}
.main .content .sub div {
  cursor: pointer;
  padding-left: 20px;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #efefef;
}
.main .content .sub div:last-child {
  border-bottom: 0;
}
.main .content .sub div span {
  display: inline-block;
  margin: auto;
  line-height: 16px;
  padding-left: 16px;
  font-size: 14px;
  width: 204px;
}
.main .content .sub div i {
  display: inline-block;
  width: 8px;
  height: 12px;
  /* background-image: url("../imgs/sjx02.png"); */
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.main .content .sub div.active i {
  /* background-image: url("../imgs/sjx01.png"); */
}
.main .content .sub div.active span {
  display: inline-block;
  margin: auto;
  padding-left: 16px;
  line-height: 16px;
  width: 204px;
  color: #007de1;
  border-left: 2px solid #007de1;
}

.main .content .subMain {
  display: inline-block;
  width: 800px;
  min-height: 646px;
  padding: 30px 40px 60px 40px;
  background: #fff;
}
.main .content .list {
  display: none;
}
.main .content .list h3 {
  font-weight: 500;
  padding-left: 12px;
  line-height: 24px;
  font-size: 24px;
  color: #333;
  border-left: 4px solid #007de1;
}
.main .content .list h4 {
  font-weight: 500;
  font-size: 20px;
  color: #333;
  line-height: 34px;
}
.main .content .list h5 {
  font-weight: 500;
  font-size: 16px;
  color: #505050;
  line-height: 34px;
}
.main .content .list div.div {
  font-size: 14px;
  text-indent: 1.5em; /*文本首行缩进两个字符*/
  color: #a9a9a9;
  line-height: 54px;
}
.main .content .list p {
  font-size: 14px;
  text-indent: 2em; /*文本首行缩进两个字符*/
  color: #505050;
  line-height: 32px;
}
.main .content .list p a {
  color: #007de1;
}
.main .content .list div.border {
  position: relative;
  border: 1px solid #d7d7d7;
  margin: 20px 0 30px 0;
  padding: 20px;
  border-radius: 10px;
}
.main .content .list div.border .btn {
  position: absolute;
  font-size: 16px;
  right: 20px;
  bottom: 20px;
  width: 90px;
  height: 42px;
  line-height: 42px;
  text-align: center;
  border-radius: 7px;
  color: #fff;
  background-color: #007de1;
}
</style>

