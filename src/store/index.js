import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import study from './modules/study'
import moduleA from './modules/moduleA'

Vue.use(Vuex) // 显式地通过 Vue.use() 来安装 Vuex

export default new Vuex.Store({
  namespaced: true,
  state: {
    count: 0,
    name: '默认名字',
    array: [{name: '元素A', id: 1, display: true}, {name: '元素B', id: 2, display: false}]
  },
  getters: {
    showElement: state => {
      return state.array.filter(ele => ele.display)
    },
    // getters可以作为第二参数
    showLength: (state, getters) => {
      return getters.showElement.length
    },
    // 通过方法获取，可以传参哦
    getElementById: (state) => (id) => {
      return state.array.find(ele => ele.id === id)
    },
    elementNames: state => {
      return state.array.map(ele => ele.name)
    }
  },
  modules: {
    cart,
    study,
    moduleA
  }
})
