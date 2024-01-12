import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    // actions——用于响应组件中的动作
    actions: {
        increment(content, value) {
            console.log('actions中的increment被调用了')
            content.commit('Increment', value)
        },
        incrementOdd(context, value) {
            console.log('actions中的incrementOdd被调用了')
            if (context.state.sum % 2) {
                context.commit('IncrementOdd', value)
            }
        },
        incrementWait(context, value) {
            console.log('actions中的incrementWait被调用了')
            setTimeout(() => {
                context.commit('IncrementWait', value)
            }, 500)
        }
    },
    // mutations——用于操作数据（state）
    mutations: {
        Increment(state, value) {
            console.log('mutations中的Increment被调用了')
            state.sum += value;
        }
    },
    // state——用于存储数据
    state: {
        sum: 0
    },
    // getters——用于将state中的数据进行二次加工
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
})