<template>
    <div>
        <h1>home组件</h1>
        <p>仓库中的msg为:{{ $store.state.msg }}</p>
        <p>仓库中的num为:{{ $store.state.num }}</p>
        <p>仓库中的newnum为:{{ $store.getters.newnum }}</p>
        <button @click="$store.commit('changeNum')">改变仓库中的num-mutations</button>
        <button @click="$store.dispatch('changeMsgSync')">改变仓库中的msg-action</button>
        <hr>
        <p>back模块中num为：{{ $store.state.back.num }}</p>
        <button @click="$store.commit('back/changeNum')">改变back模块中的num</button>
        <hr>
        <v-child></v-child>
    </div>
</template>

<script>
import vChild from './Child'
export default {
    components:{
        vChild
    }
}
</script>

<style>

</style>