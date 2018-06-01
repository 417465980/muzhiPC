<template>
    <div class="markfqa " @click.stop="close" v-show="bool">
            <transition enter-active-class="animated flipInX"  leave-active-class="animated flipOutX"  tag="div">
                <div class="markbox markbox-gift">
					<div class="close" @click.stop="close">×</div>
					<div @click.prevent="close">
						<div class="mark-content">
							<p>
								<span class="f20 lh24">请到app领取</span><br>
								<a :href="markhtml" class="markhtml">点击下载app</a>
							</p>
						</div>  
					</div>
                </div>
             </transition>
        </div>
</template>
<script>
    export default {
        props:{
            'mark-data':{
                type: Object,
                default: {} //这样可以指定默认的值
            }
        },
        data(){
            return {
                markhtml:'',
                bool:false
            }
        },
        methods:{
			markfqa(download){
                this.markhtml = download
                this.bool =!this.bool
            },
            close(){
                this.bool =!this.bool
            }
		}
    }
</script>
<style>

</style>

