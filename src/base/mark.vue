<template>
	<div class="markfqa" @click.stop="close" v-show="bool">
            <transition enter-active-class="animated flipInX"  leave-active-class="animated flipOutX"  tag="div">
                <div class="markbox markbox-gift">
					<div class="close" @click.stop="close">×</div>
					<div @click.prevent="close">
						<div class="mark-content">
							<p>
								<span class="f18 lh24">请到拇指游戏宝领取</span><br>
								<img class="receive" src="../assets/images/2.png" alt="">
								<a href="http://tfyxb2017-1251304591.file.myqcloud.com/mzyxb/mzyxb_mzyw.apk" class="markhtml downbtn">马上下载</a>
							</p>
						</div>  
					</div>
                </div>
             </transition>
        </div>
</template>
<script>
export default {
  props: {
    markshow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    markfqa(download) {
      this.bool = !this.bool;
    },
    close() {
      this.bool = !this.bool;
    }
  },
  computed: {
    bool() {
      return this.markshow;
    }
  }
};
</script>
<style>
</style>

