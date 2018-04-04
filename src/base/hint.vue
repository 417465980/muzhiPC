<template>
        <div class="hint" ref="hint">
            <span ref="hint-content"></span>
        </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="stylus" >
.hint {
    position: fixed;
    top: 30%;
    left: 50%;
    width: 100%;
    text-align: center;
    z-index: 100;
    display: none;
    max-width: 768px;
    transform: translateX(-50%);
}
.hint span {
    display: inline-block;
    background: rgba(0,0,0,.7);
    font-size: 16px;
    color: #fff;
    padding: 6px 16px;
    border-radius: 6px;
}
			

</style>