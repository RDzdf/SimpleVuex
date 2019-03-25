<template>
  <div class="hello">
    <h1>我是study模块组件</h1>
    <h4>Vuex 允许我们将 store 分割成模块（module）。</h4>
    <h4>每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块。</h4>
    <h5>我们甚至可以在模块操作根路径的状态，比如我们根路径的num，我们来试试看加10：</h5>
    <button @click="sum">子模块操作根状态</button>
    根状态$store.state.num: {{this.$store.state.num}}
    <h5>我们在子模块中直接获取根状态，子模块的count + 根状态的num = {{total}}</h5>
    <p>
      如果希望你的模块具有更高的封装度和复用性，
      你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。
      当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。
    </p>
    <h4>命名空间和createNamespacedHelpers辅助函数</h4>
    <pre>
      import { createNamespacedHelpers } from 'vuex'
      const { mapState, mapGetters, mapActions } = createNamespacedHelpers('study')
    </pre>
    <div class="row">
      <div class="col-12">
        <b>study模块的store实例：</b>
        <pre>
        // study模块
        const state = {
          count: 0,
          str: null,
          arr: [],
          form: {
            name: '默认名字'
          }
        }
        // 对于模块内部的 getter，根节点状态会作为第三个参数暴露出来：划重点，第三个参数！
        const getters = {
          total (state, getter, rootState) {
            return state.count + rootState.num
          },
          count: state => state.count
        }
        const mutations = {
        }
        // 对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState：
        const actions = {
          sum({rootState}) {
            rootState.num += 10
          }
        }
        export default {
          namespaced: true,
          state,
          getters,
          mutations,
          actions
        }

        </pre>
      </div>
      <div class="col-12">
        <b>组件JS部分：</b>
        <pre>
        computed: {
          // 在 `/study` 中查找
          ...mapState({
            count: state => state.count,
          }),
          ...mapGetters(['total'])
        },
        created() {
        },
        methods: {
          ...mapActions([
            'sum'
          ])
        }
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('study')
export default {
  computed: {
    // 在 `/study` 中查找
    ...mapState({
      count: state => state.count,
    }),
    ...mapGetters(['total'])
  },
  created() {
  },
  methods: {
    ...mapActions([
      'sum'
    ])
  }
}
</script>