import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'

Vue.use(Vuex) // 显式地通过 Vue.use() 来安装 Vuex

export default new Vuex.Store({
  modules: {
    cart
  }
})
