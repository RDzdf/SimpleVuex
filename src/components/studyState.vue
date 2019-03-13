<template>
  <div class="hello">
    <h1>State以及它的辅助函数mapState</h1>
    state.count：{{count}} <br>
    countAlias：{{countAlias}} <br>
    countPlusLocalState：{{countPlusLocalState}} <br>
    state.name：{{name}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      name: state => state.name,
      count: state => state.count,
      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: 'count',
      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState(state) {
        return state.study.count + 1
      }
    })
  }
  // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
  /* 
  // 你可以尝试把上面的注销然后使用下面的这个，两种方式都应该了解
  computed: mapState([
    'count', 'name'
  ])
   */
}
</script>