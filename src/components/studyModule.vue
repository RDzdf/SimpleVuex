<template>
  <div class="hello">
    <h1>我是学习组件</h1>
    <h2>State的辅助函数mapState</h2>
    state.study.count：{{count}} <br>
    <!-- state.study：{{countAlias}} <br>
    countPlusLocalState：{{countPlusLocalState}} <br> -->
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('study')
export default {
  computed: {
    // 在 `some/nested/module` 中查找
    ...mapState({
      count: state => state.count,
    })
  },
  created() {
    console.log(this.$store)
  },
  // 辅助函数
  // computed: mapState({
  //   // 箭头函数可使代码更简练
  //   count: state => state.count,

  //   // 传字符串参数 'count' 等同于 `state => state.study`
  //   countAlias: 'count',

  //   // 为了能够使用 `this` 获取局部状态，必须使用常规函数
  //   countPlusLocalState (state) {
  //     return state.study.count + 1
  //   }
  // }),
  methods: {
    reduce() {
      this.$store.commit('reduce')
    }
  }
}
</script>