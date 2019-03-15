<template>
  <div class="hello" style="padding-bottom: 100px;">
    <h1>{{ msg }}</h1>
    <h2>下面是两个组件</h2>
    <ul>
      <li>
        <cart></cart>
      </li>
      <li>
        <product></product>
      </li>
    </ul>
    <ul>
      <li>
        <study-state></study-state>
      </li>
    </ul>
    <ul>
      <li>
        <h1>Getters以及它的辅助函数mapGetters </h1>
      </li>
    </ul>
    <div style="padding-left: 300px;text-align: left;">
      <study-getters></study-getters>
    </div>
    
    <ul>
      <li>
        <h1>Mutations以及它的辅助函数mapMutations </h1>
      </li>
    </ul>
    <div style="padding-left: 300px;text-align: left;">
      <study-mutations></study-mutations>
    </div>

    
    <ul>
      <li>
        <h1>Ations以及它的辅助函数mapActions </h1>
      </li>
    </ul>
    <div style="padding-left: 300px;text-align: left;">
      <study-actions></study-actions>
    </div>
  </div>
</template>

<script>
import cart from '../components/cart.vue'
import product from '../components/product.vue'
import studyState from '../components/studyState.vue'
import studyGetters from '../components/studyGetters.vue'
import studyMutations from '../components/studyMutations.vue'
import studyActions from '../components/studyActions.vue'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '欢迎来到我的vuex学习项目'
    }
  },
  components: {
    cart,
    product,
    studyState,
    studyGetters,
    studyMutations,
    studyActions
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
