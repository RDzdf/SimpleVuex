<template>
  <div>
    输入身高：<input type="text" v-model="form.height"><button @click="setHeight(form)">提交</button> <br> <br>
    state.form.height = {{this.$store.state.form.height}} <br><br>
    <p>mapActions映射</p>
    <button @click="increment">提交increment, count++</button> <br>
    this.$store.state.count = {{this.$store.state.count}}<br> <br>
    <p>`mapActions` 也支持载荷：</p>
    输入姓名：<input type="text" v-model="form.name"><button @click="setName(form)">提交</button> <br>
    state.form.name = {{this.$store.state.form.name}} <br><br>
    <p>mapActions映射increment为add</p>
    <button @click="add">提交increment, count++</button> <br>
    <p>高级玩法</p>
    <button @click="actionA">加一后，再加一</button> <br>
    <p>进阶玩法</p>
    <button @click="actionB">加一后，再加十一</button> <br>
    <div class="row">
      <div class="col-12">
        <b>Store的Actions：</b>
        <pre>
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
        </pre>
      </div>
      <div class="col-12">
        <b>组件JS部分：</b>
        <pre>
        methods: {
          // 尝试异步
          setHeight(form) {
            // 这儿和mutations的commit一样，actions需要用dispatch去触发
            this.$store.dispatch('setHeight', form)
          },
          // mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）
          ...mapActions([
            'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

            // `mapActions` 也支持载荷：
            'setName' // 将 `this.setName(form)` 映射为 `this.$store.dispatch('setName', form)`
          ]),
          ...mapActions({
            add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
          }),
          // 高级操作
          actionA() {
            this.$store.dispatch('actionA').then(() => {
              // 十秒以后再加一
              setTimeout(() => {
                this.add()
              }, 1000)
            })
          },
          // 进阶级
          actionB() {
            this.$store.dispatch('actionB')
          }
        }
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      form: {
        num: 8,
        name: null
      }
    }
  },
  methods: {
    // 尝试异步
    setHeight(form) {
      // 这儿和mutations的commit一样，actions需要用dispatch去触发
      this.$store.dispatch('setHeight', form)
    },
    // mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）
    ...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

      // `mapActions` 也支持载荷：
      'setName' // 将 `this.setName(form)` 映射为 `this.$store.dispatch('setName', form)`
    ]),
    ...mapActions({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    }),
    // 高级操作
    actionA() {
      this.$store.dispatch('actionA').then(() => {
        // 十秒以后再加一
        setTimeout(() => {
          this.add()
        }, 1000)
      })
    },
    // 进阶级
    actionB() {
      this.$store.dispatch('actionB')
    }
  }

}
</script>