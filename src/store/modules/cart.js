

// 两种方式
/* 
const state = {}
const getters = {}
const actions = {}
const mutations = {}
export default {
  state,
  getters,
  actions,
  mutations
} 
*/
/* 
export default {
  state: {},
  getters: {},
  actions: {},
  mutations: {}
} 
*/
// 无忧无劣爱用那种用那种我喜欢第二种，官方用的第一种。
// 最简单的例子
export default {
  // 定义状态
  state: {
    count: 0, // 货物数量
    str: null,
    arr: [],
    form: {}
  },
  getters: {

  },
  actions: {

  },
  mutations: {
    increment (state) { // 增一
      state.count++
    },
    reduce (state) { // 减一
      state.count--
    }
  }
} 