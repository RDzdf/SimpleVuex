// 主要来处理表单对象的监听和改变，绑定v-model
const state = {
  form: {
    name: '默认名字',
    age: null,
    sex: null,
    address: null,
    height: null,
    weight: null,
    interest: null,
    job: null,
  }
}
// 对于模块内部的 getter，根节点状态会作为第三个参数暴露出来：划重点，第三个参数！
const getters = {
  form: state => state.form
}
const mutations = {
  ['SET_FORM'](state, data) {
    for (let key in data) {
      Vue.set(state.form, key, data[key])
    }
  }
}
// 对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState：
const actions = {
  setForm({commit}, data) {
    commit('SET_FORM', data)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
