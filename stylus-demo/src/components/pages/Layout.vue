<template>
    <div class="page">
        <div class="top">
            <span class="fl">学生管理系统</span>
            <span class="fr">
                欢迎：{{ userinfo.username }}
                <a href="javascript:void(0);" @click="logout">退出</a>
            </span>
        </div>
        <div class="main">
            <div class="nav">
                <router-link exact-active-class="active" to="/">学生管理</router-link>
                <router-link active-class="active" to="/coures">课程管理</router-link>
                <router-link active-class="active" to="/info">个人信息</router-link>
            </div>
            <div class="right">
                <router-view></router-view>
            </div>
        </div>
        <div class="bottom">bottom</div>
    </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
export default {
    computed:{
        ...mapState(['userinfo'])
    },
    // data() {
    //     return {
    //         user:''
    //     }
    // },
    methods:{
        ...mapMutations(['setUserInfo']),
        logout(){
            // localStorage.removeItem('userinfo');
            this.setUserInfo(null);
            this.$router.replace('/login');
        }
    },
    mounted(){
        this.user = JSON.parse(localStorage.getItem('userinfo'))
    }
}
</script>

<style lang='stylus' scoped>
@import ('../../assets/css/index.styl');
    .page
        width 100vw
        height 100vh
        display flex
        flex-direction column
        .top
            height 50px
            background-color $bgcolor1
            line-height 50px
            .fl
                float left
                margin-left 20px
            .fr
                float right
                margin-right 25px
        .main
            flex 1
            display flex
            .nav
                width 120px
                background-color $bgcolor2
                a
                    display block
                    text-decoration none
                    text-align center
                    padding 15px
                .active
                    background-color #FFE4E1
            .right
                flex 1
        .bottom
            height 50px
            background-color $bgcolor3
</style>