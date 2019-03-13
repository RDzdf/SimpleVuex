
// 进阶和了解
// state状态 定义和保存所有数据，辅助函数mapState
const state = {
  count: 0,
  str: null,
  arr: [],
  form: {
    name: '默认名字'
  }
}
const getters = {}
const actions = {}
const mutations = {}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
} 
