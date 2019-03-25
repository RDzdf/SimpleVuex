<template>
  <div class="hello" style="padding-bottom: 100px;text-align: center;">
    <h1>{{ msg }}</h1>
    <h2>最简单的一个例子</h2>
    <div class="row">
      <div class="col-12">
        <cart></cart>
      </div>
      <div class="col-12">
        <product></product>
      </div>
    </div>
  </div>
</template>

<script>
import cart from '../components/cart.vue'
import product from '../components/product.vue'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '欢迎来到我的vuex学习项目'
    }
  },
  components: {
    cart,
    product
  }
}
</script>
