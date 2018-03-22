<template>
	<div class="clsifi_list">
		<ul class="clearfix">
			<li v-for="item in leisureList" :key="item.id">
				<div class="listIcon fl">
					<img :src="item.gmIcon" />
				</div>
				<div class="listTitle fl">
					<p>{{item.title}}</p>
					<span>类型：{{item.type}}&nbsp;&nbsp;&nbsp;&nbsp;大小{{item.appSize}}M</span>
					<p class="introduce">简介：{{item.describ}}</p>
					<div class="clearfix">
						<a class="getLb fl">
							<i class="gmCen_spri"></i>
							<span>礼包领取</span>
						</a>
						<a class="gmLoad fl">
							<i class="gmCen_spri"></i>
							<span>游戏下载</span>
						</a>
					</div>
				</div>
			</li>
		</ul>
		<div class="moreWrap">
			<load-more></load-more>
		</div>
	</div>
</template>
<script>
	import LoadMore from 'base/load-more'
	export default{
		components:{
			LoadMore
		},
		data(){
			return{
				leisureList:[
					{
						gmIcon:require('../assets/images/cen_gmIcon.png'),
						title:'正统三国',
						type:'角色扮演',
						appSize:'113',
						describ:'到地方了空格落地生根家乐福的后果到实例电饭锅火蓝刀锋接口纲来看电饭锅来看金额的个人提供'
					},
					{
						gmIcon:require('../assets/images/cen_gmIcon.png'),
						title:'正统三国',
						type:'角色扮演',
						appSize:'113',
						describ:'到地方了空格落地生根家乐福的后果到实例电饭锅火蓝刀锋接口纲来看电饭锅来看金额的个人提供'
					},
					{
						gmIcon:require('../assets/images/cen_gmIcon.png'),
						title:'正统三国',
						type:'角色扮演',
						appSize:'113',
						describ:'到地方了空格落地生根家乐福的后果到实例电饭锅火蓝刀锋接口纲来看电饭锅来看金额的个人提供'
					},
					{
						gmIcon:require('../assets/images/cen_gmIcon.png'),
						title:'正统三国',
						type:'角色扮演',
						appSize:'113',
						describ:'到地方了空格落地生根家乐福的后果到实例电饭锅火蓝刀锋接口纲来看电饭锅来看金额的个人提供'
					},
					{
						gmIcon:require('../assets/images/cen_gmIcon.png'),
						title:'正统三国',
						type:'角色扮演',
						appSize:'113',
						describ:'到地方了空格落地生根家乐福的后果到实例电饭锅火蓝刀锋接口纲来看电饭锅来看金额的个人提供'
					},
					{
						gmIcon:require('../assets/images/cen_gmIcon.png'),
						title:'正统三国',
						type:'角色扮演',
						appSize:'113',
						describ:'到地方了空格落地生根家乐福的后果到实例电饭锅火蓝刀锋接口纲来看电饭锅来看金额的个人提供'
					},
					{
						gmIcon:require('../assets/images/cen_gmIcon.png'),
						title:'正统三国',
						type:'角色扮演',
						appSize:'113',
						describ:'到地方了空格落地生根家乐福的后果到实例电饭锅火蓝刀锋接口纲来看电饭锅来看金额的个人提供'
					},
					{
						gmIcon:require('../assets/images/cen_gmIcon.png'),
						title:'正统三国',
						type:'角色扮演',
						appSize:'113',
						describ:'到地方了空格落地生根家乐福的后果到实例电饭锅火蓝刀锋接口纲来看电饭锅来看金额的个人提供'
					},
					{
						gmIcon:require('../assets/images/cen_gmIcon.png'),
						title:'正统三国',
						type:'角色扮演',
						appSize:'113',
						describ:'到地方了空格落地生根家乐福的后果到实例电饭锅火蓝刀锋接口纲来看电饭锅来看金额的个人提供'
					},
					{
						gmIcon:require('../assets/images/cen_gmIcon.png'),
						title:'正统三国',
						type:'角色扮演',
						appSize:'113',
						describ:'到地方了空格落地生根家乐福的后果到实例电饭锅火蓝刀锋接口纲来看电饭锅来看金额的个人提供'
					}
				],
			}
		}
	}
</script>
<style scoped>
	.clsifi_list{margin-top: 25px;}
	.clsifi_list ul li{width: 383px;height: 160px;border: 1px solid #e6e6e6;margin-bottom: 30px;}
	.clsifi_list ul li:nth-child(odd){float: left;}
	.clsifi_list ul li:nth-child(even){float: right;}
	.clsifi_list li .listIcon{height: 100%;width: 130px;display: flex;align-items: center;justify-content: center;margin-right: 15px;}
	.clsifi_list li .listIcon img{height: auto;max-height: 100%;max-width: 100%;}
	.clsifi_list li .listTitle p:first-child{font-size: 16px;line-height: 50px;}
	.clsifi_list li .listTitle span{font-size: 13px;color: #959595;}
	.clsifi_list li .listTitle .introduce{width:225px; font-size: 14px;color: #959595;line-height: 30px;margin-bottom: 10px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;}
	.clsifi_list li .listTitle a{height: 25px;width: 85px;border: 1px solid #c7c7c7;border-radius: 5px;display: flex;align-items: center;justify-content: center;}
	.clsifi_list li .listTitle a:first-child{margin-right: 8px;}
	.clsifi_list .listTitle .getLb i,.clsifi_list .listTitle .gmLoad i{display: inline-block; width: 12px; height: 12px;margin-right: 5px;}
	.clsifi_list .listTitle .getLb i{background-position: -106px -10px;}
	.clsifi_list .listTitle .gmLoad i{background-position: -10px -103px;}
	.clsifi_list .listTitle .getLb:hover i{ background-position:-106px -42px}
	.clsifi_list .listTitle .gmLoad:hover i{background-position:-42px -103px}
	.clsifi_list .moreWrap{margin-top: 30px;}
</style>
