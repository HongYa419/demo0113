<template>
    <div class="page">
        <form class="form-horizontal login">
            <h2 class="text-center">登录页面</h2>
            <div class="form-group">
                <label class="col-sm-2 control-label"></label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" placeholder="请输入用户名" v-model="info.username">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label"></label>
                <div class="col-sm-8">
                    <input type="password" class="form-control" placeholder="请输入密码" v-model="info.password">
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label"></label>
                <div class="col-sm-8">
                    <button type="button" @click="dologin" class="btn btn-primary">登录</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            info:{
                username:'',
                password:''
            }
        }
    },
    methods: {
        dologin(){
            if(this.info.username == '' || this.info.password == ''){
                alert('请输入用户名或密码')
            }else{
                // localStorage.setItem('userinfo',JSON.stringify(this.info))
                this.$store.commit("setUserInfo",this.info)
                this.$router.replace('/');
            }
        }        
    }
}
</script>

<style lang="stylus" scoped>
@import ('../../assets/css/index.styl');
.page
    width 100vw
    height 100vh
    background-color $bgcolor2
    position fixed
    .login
        width 500px
        height 300px
        background-color #fff
        margin 100px auto
        border-radius 20px
        overflow hidden
        h2
            padding 20px
        .btn
            width 100%
</style>