<template>
  <div>
    通过Mutations触发状态更改： <br>
    state.count++ <button @click="increment()">加一</button> <br>
    state.count = {{this.$store.state.count}} <br>
    <p>
      我们不能直接调用this.$store.mutations('increment') <br>
      它更像是vue的methods,是注册了一个事件而已，调用它必须使用store.commit
    </p>
    Payload(提交载荷)， 大白话就是可以传参 <br>
    <button @click="add(10)">点击加10</button> <br> <br>
    当你有多个参数时：传对象，实战中我们基本上都是传对象 <br>
    输入数字：<input type="number" v-model="form.num"><button @click="addObj(form)">增加</button> <br> <br>
    <br>
    提交 mutation 的另一种方式是直接使用包含 type 属性的对象： <br>
    <button @click="addByType(100)">增加100</button> <br> <br>
    调用常量方式定义的mutations修改姓名： <br>
    输入姓名：<input type="text" v-model="form.name"><button @click="setName(form)">提交</button> <br> <br>
    <br>
    state.form.name = {{this.$store.state.form.name}} <br>
    输入年龄：<input type="text" v-model="form.age"><button @click="setAge(form)">提交</button> <br> <br>
    尝试异步修改状态发现依旧是可以的，但是为啥官方文档说不支持异步呢？：<br>
    state.form.age = {{this.$store.state.form.age}} <br>
    <p>并不是不支持，而是无法追踪状态！这个演示我们需要用到devtool,异步vuex不搭理他！详情请看简书上我的截图演示！</p>
    <b>所以有了Actions</b>
  </div>
</template>

<script>
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
    console.log(this.$store)
  },
  computed: {
  },
  methods: {
    // 调用它必须使用store.commit
    increment() {
      this.$store.commit('increment')
    },
    // Payload(提交载荷)， 大白话就是可以传参
    add(num) {
      // this.$store.commit('add', num)
    },
    // 传一个对象参数解决多参数问题
    addObj(obj) {
      this.$store.commit('addObj', obj)
    },
    addByType(num) {
      // 提交 mutation 的另一种方式是直接使用包含 type 属性的对象：
      this.$store.commit({
        type: 'addByType',
        amount: num
      })
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