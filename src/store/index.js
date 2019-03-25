import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import study from './modules/study'
import moduleA from './modules/moduleA'
import studyModel from './modules/studyModel'
import {
  SET_NAME,
  SET_AGE,
  SET_HEIGHT
} from './mutation-types' // 引入常量
import { strictEqual } from 'assert';
import { stat } from 'fs';

Vue.use(Vuex) // 显式地通过 Vue.use() 来安装 Vuex

export default new Vuex.Store({
  namespaced: true,
  state: {
    count: 0,
    name: '默认名字',
    array: [{
      name: '元素A',
      id: 1,
      display: true
    }, {
      name: '元素B',
      id: 2,
      display: false
    }],
    form: {
      name: null,
      age: null,
      height: null
    },
    num: 10
  },
  getters: {
    showElement: state => {
      return state.array.filter(ele => ele.display)
    },
    form: state => state.form,
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
  mutations: {
    increment(state) {
      // 变更状态
      state.count++
    },
    add(state, num) {
      state.count += num
    },
    addObj(state, obj) {
      state.count += Number(obj.num)
    },
    addList(state, arr) {
      state.array.push(arr)
    },
    // 当使用对象风格的提交方式，整个对象都作为载荷传给 mutation 函数
    addByType(state, payload) {
      state.count += payload.amount
      state.name = payload.name
    },
    // 使用常量
    [SET_NAME](state, form) {
      // state.form.name = form.name // 我们不建议使用这种方式
      Vue.set(state.form, 'name', form.name)
    },
    // 尝试异步
    [SET_AGE](state, form) {
      setTimeout(() => {
        Vue.set(state.form, 'age', form.age)
      }, 1000)
      setTimeout(() => {
        Vue.set(state.form, 'age', 12)
      }, 1100)
      setTimeout(() => {
        Vue.set(state.form, 'age', 34)
      }, 1200)
    },
    // 尝试Actions异步
    [SET_HEIGHT](state, height) {
      Vue.set(state.form, 'height', height)
    },
  },
  actions: {
    setHeight (context, form) {
      // context 你就理解成actions可以传入一个参数就是store本身(虽然并不是本身)。包含里面的state,getter,mutation,action
      context.commit('SET_HEIGHT', form.height)
      setTimeout(() => {
        context.commit('SET_HEIGHT', 180)
      }, 500)
      setTimeout(() => {
        context.commit('SET_HEIGHT', 185)
      }, 1000)
    },
    // actions触发mutations的increment
    increment({commit, state}) {
      commit('increment', state)
    },
    // mutation中的SET_NAME
    setName({commit, state}, form) {
      commit('SET_NAME', form) 
    },
    // 组合 Action
    actionA ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000)
      })
    },
    // 你甚至还能这么玩
    actionB ({ dispatch, commit }) {
      return dispatch('actionA').then(() => {
        setTimeout(() => {
          commit('add', 10)
        }, 1000)
      })
    }
  },
  modules: {
    cart,
    study,
    moduleA,
    studyModel
  }
})
