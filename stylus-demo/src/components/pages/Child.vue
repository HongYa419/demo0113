<template>
    <div>
        <h2>Child组件</h2>
        <p>仓库中的msg为:{{ str }}</p>
        <p>仓库中的newnum为:{{ num }}</p>
        <p>仓库中的newnum为:{{ newnum }}</p>
        <!-- <button @click="changeNum()">改变仓库中的msg-action</button> -->
        <button @click="setnum()">改变仓库中的num-mutations</button>
        <button @click="changeMsgSync()">改变仓库中的num-actions</button>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
    computed:{
        // ...mapState(['msg','num']),
        ...mapState({
            str:state=>state.msg,
            num:state=>state.num
        }),
        ...mapGetters(['newnum'])
    },
    methods:{
        // ...mapMutations(['changeNum']),
        ...mapMutations({
            setnum:'changeNum'
        }),
        ...mapActions(['changeMsgSync'])
    }
}
</script>

<style>

</style>