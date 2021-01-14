<template>
    <div class="delitem">
        <button class="btn btn-danger" @click="isShow=true">删除</button>
        <div class="page" v-show="isShow">
            <div class="content">
                <h2>确定要删除此学生吗?</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow:false
        }
    }
}
</script>

<style lang="stylus" scoped>
@import('../../assets/css/index.styl')
    .delitem
        display inline-block
        .page
            getpage()
            .content
                getcontent()
</style>