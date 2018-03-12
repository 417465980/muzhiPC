<template>
	<div class="gm_clsifi">
		<div class="clsifi_title">
			<div class="clsifi_icon">
				<slot></slot>
			</div>
			<div class="type_wrap">
				<div class="clsifi_type clearfix"  v-for="item in typeFields">
					<a class="fl">
						{{item}}
						<b><i></i><i></i></b>
					</a>
					<div class="clsifi_arrow fl">
						<div>
							<i></i>
							<i></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:{
			typeFields:{
				type:Array,
				default:[]
			}
		},
		data(){
			return{
				
			}
		}
	}
</script>
<style scoped>
	.clsifi_title .clsifi_icon span{font-size: 20px;}
	.clsifi_title .clsifi_icon .giftCen_icon{width: 24px;height: 24px;background: url('../assets/images/giftCen_icon.png') no-repeat center center;}
	.clsifi_title .type_wrap{margin: 5px 0 30px;border-bottom: 1px solid #e9e9e9;height: 44px;}
	.clsifi_title .clsifi_type{display: inline-block;height:36px;padding-top: 10px;}
	.clsifi_title .clsifi_type:hover{cursor:pointer;}
	.clsifi_title .clsifi_type a,.clsifi_title .clsifi_type .clsifi_arrow{ height:35px;display:block;}
	.clsifi_title .clsifi_type a{color: #999999;font-size: 12px;font-family: simsun,"宋体";position: relative;}
	.clsifi_title .clsifi_type a b{position: absolute;left: 50%;margin-left: -8px;top:34px;display: block;}
	
	.clsifi_title .clsifi_type .clsifi_arrow i,.clsifi_title .clsifi_type a i{
			width: 0; height: 0;display: block;position: absolute;left: 0;z-index: 5;overflow: hidden;
	}
	.clsifi_title .clsifi_type a i{content:''; border-bottom: 2px transparent dashed;
   			 border-left: 6px transparent dashed;border-right: 6px transparent dashed;
    }
	.clsifi_title .clsifi_type a i:first-child{top:1px;border-top: 6px solid rgba(153,153,153,0.5);}
	.clsifi_title .clsifi_type a i:last-child{border-top: 6px white solid;}
	.clsifi_title .clsifi_type .clsifi_arrow{width: 19px;}
	.clsifi_title .clsifi_type .clsifi_arrow div{position: relative;width: 14px;height: 11px;top: 4px;left: 4px;}
	.clsifi_title .clsifi_type .clsifi_arrow i{top: -3px;border-top: 6px transparent dashed;border-right: 4px transparent dashed;border-bottom: 6px transparent dashed;}
	.clsifi_title .clsifi_type .clsifi_arrow i:first-child{left: 1px;border-left: 6px #999999 solid;}
	.clsifi_title .clsifi_type .clsifi_arrow i:last-child{border-left: 6px white solid;}
</style>