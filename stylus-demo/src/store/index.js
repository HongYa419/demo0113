import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import creatPersistedState from 'vuex-persistedstate'
export default new Vuex.Store({
    state:{
        userinfo:null
    },
    mutations:{
        setUserInfo(state,data){
            state.userinfo = data
        }
    },
    plugins:[creatPersistedState({
        storage:window.sessionStorage
    })]
})