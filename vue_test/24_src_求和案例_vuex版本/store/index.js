// 该文件用于创建Vuex中最为核心的store

// 引入vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 准备actions,用于响应组件中的动作
// actions中一个方法如果处理的业务复杂可以通过context.dispatch派发给其他方法处理
const actions = {
    jia(context,value){
        //console.log('actions中的jia被调用了',context,value);
        context.commit('JIA',value)
        
    },
    jian(context,value){
        context.commit('JIAN',value)
    },
    jiaOdd(context,value){
        if(context.state.sum % 2) context.commit('JIA',value)
    },
    jiaWait(context,value){
        setTimeout(()=>{
            context.commit('JIA',value)
        },500)
    },
}

// 准备mutation,用于操作数据(state)
// mutation中触发的操作可以在开发者工具中监控到
const mutations = {
    JIA(state,value){
        //console.log('mutations中的JIA被调用了',state,value);
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    }
}

// 准备state,用于存储数据
const state = {
    sum: 0,     //当前的和
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})
