

import { getField, updateField } from 'vuex-map-fields';
const state = {
  foo: '',
  form: {
    name: 123
  }
}
// 对于模块内部的 getter，根节点状态会作为第三个参数暴露出来：划重点，第三个参数！
const getters = {
  getField
}
const mutations = {
  updateField
}
export default {
  namespaced: true,
  state,
  getters,
  mutations
}
