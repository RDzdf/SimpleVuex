<template>
  <div class="hello">
    <h1>我是产品组件</h1>
    <button @click="reduce">点击减1</button> <br>
    仔细观察产品数量：{{this.$store.state.cart.count}}
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    reduce() {
      this.$store.commit('reduce')
    }
  }
}
</script>