<template>
  <div>
    <b>通过Mutations触发状态更改： </b> <br><br>
    state.count++ <button @click="increment()">加一</button> <br>
    state.count = {{this.$store.state.count}} <br>
    <p>
       <b>PS:</b> 我们不能像调用state和gettern那样使用mutations，它更像是vue的methods,是注册了一个事件而已，调用它必须使用 <b>store.commit</b> <br>
       <s>this.$store.mutations('increment') </s><br>
      
    </p>
    <b> Payload(提交载荷)， 大白话就是可以传参:</b>(观察上面的count变化)<br><br>
    <button @click="add(10)">点击加10</button> <br> <br>

    <b>当你有多个参数时：传对象，实战中我们基本上都是传对象：</b> <br><br>
    输入数字：<input type="number" v-model="form.num"><button @click="addObj(form)">增加</button> <br> <br>
    <pre>{{form}}</pre>
    <br>
    
    <b>提交 mutation 的另一种方式是直接使用包含 type 属性的对象：</b>  <br><br>
    <button @click="addByType(100)">增加100</button> <br> <br>
    <b>调用常量方式定义的mutations修改姓名：</b>  <br> <br>
    输入姓名：<input type="text" v-model="form.name"><button @click="setName(form)">提交</button> <br>
    state.form.name = {{this.$store.state.form.name}} <br> <br>
    
    <button @click="addList">新增一个数组元素</button>
    <button @click="deleteList">删除一个数组元素</button>
    <pre>
      {{$store.state.array}}
    </pre>
    <b> 尝试异步修改状态发现依旧是可以的，但是为啥官方文档说不支持异步呢？：</b><br><br>
    输入年龄：<input type="text" v-model="form.age"><button @click="setAge(form)">提交</button> <br>
    （观察：别输入34，输入其他数字最后会变成34，我在mutations里做了异步处理！）
    state.form.age = {{this.$store.state.form.age}} <br>
    <p>其实并不是不支持，而是无法追踪状态！这个演示我们需要用到devtool,异步vuex不搭理他！详情请看简书上我的截图演示！</p>
    <b>所以有了Actions</b>
    <div class="row">
      <div class="col-12">
        <b>Store的Mutations：</b>
        <pre>
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
        </pre>
      </div>
      <div class="col-12">
        <b>组件JS部分：</b>
        <pre>
        methods: {
          /* 辅助函数
          ...mapMutations([
            'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

            // `mapMutations` 也支持载荷：
            'addObj' // 将 `this.addObj(obj)` 映射为 `this.$store.commit('addObj', obj)`
          ]),
          
          ...mapMutations({
            add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
          })
          */
          // 调用它必须使用store.commit
          increment() {
            this.$store.commit('increment')
          },
          // Payload(提交载荷)， 大白话就是可以传参
          add(num) {
            this.$store.commit('add', num)
          },
          // 传一个对象参数解决多参数问题
          addObj(obj) {
            this.$store.commit('addObj', obj)
          },
          addByType(num) {
            // 提交 mutation 的另一种方式是直接使用包含 type 属性的对象：
            this.$store.commit({
              type: 'addByType',
              amount: num,
              name: '123'

            })
          },
          addList() {
            this.$store.commit('addList', {
              name: '元素C',
              id: 3,
              display: true
            })
          },
          deleteList() {
            if (this.$store.state.array.length) {
              this.$store.state.array.splice(this.$store.state.array.length-1, 1)
            } else {
              alert("老哥没了！没得删除了！")
            }
          },
          // 调用常量方式定义的mutations修改姓名
          setName(form) {
            this.$store.commit('SET_NAME', form)
          },
          // 尝试异步
          setAge(form) {
            this.$store.commit('SET_AGE', form)
          }
        }
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      form: {
        num: 8,
        name: null
      }
    }
  },
  created() {
    // console.log(this.$store)
  },
  computed: {
  },
  methods: {
    /* 辅助函数
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'addObj' // 将 `this.addObj(obj)` 映射为 `this.$store.commit('addObj', obj)`
    ]),
    
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
    */
    // 调用它必须使用store.commit
    increment() {
      this.$store.commit('increment')
    },
    // Payload(提交载荷)， 大白话就是可以传参
    add(num) {
      this.$store.commit('add', num)
    },
    // 传一个对象参数解决多参数问题
    addObj(obj) {
      this.$store.commit('addObj', obj)
    },
    addByType(num) {
      // 提交 mutation 的另一种方式是直接使用包含 type 属性的对象：
      this.$store.commit({
        type: 'addByType',
        amount: num,
        name: '123'

      })
    },
    addList() {
      this.$store.commit('addList', {
        name: '元素C',
        id: 3,
        display: true
      })
    },
    deleteList() {
      if (this.$store.state.array.length) {
        this.$store.state.array.splice(this.$store.state.array.length-1, 1)
      } else {
        alert("老哥没了！没得删除了！")
      }
    },
    // 调用常量方式定义的mutations修改姓名
    setName(form) {
      this.$store.commit('SET_NAME', form)
    },
    // 尝试异步
    setAge(form) {
      this.$store.commit('SET_AGE', form)
    }
  }
}
</script>