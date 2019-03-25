<template>
  <div class="hello">
    <h1>State以及它的辅助函数mapState</h1>
    state.name: {{name}} <br>
    state.count：{{count}}
    <button @click="add">直接++</button><br>
    countAlias：{{countAlias}} <br>
    countPlusLocalState：{{countPlusLocalState}} <br>
    <div class="row">
      <div class="col-12">
        <b>Store的State：</b>
        <pre>
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
        }
        </pre>
      </div>
      <div class="col-12">
        <b>组件JS部分：</b>
        <pre>
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
        },
        methods: {
          // 直接++
          add() {
            this.$store.state.count++
          }
        }
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  created() {
    console.log(this.$store.state.count)
  },
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
  },
  methods: {
    add() {
      this.$store.state.count++
    }
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