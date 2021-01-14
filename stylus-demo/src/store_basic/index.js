import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'
import getters from './getter'
import mutations from './mutation'
import actions from './action'

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{
        back:{
            namespaced:true,
            state:{
                num:200
            },
            mutations:{
                changeNum(state){
                    state.num += 10;
                }
            }
        }
    }
})