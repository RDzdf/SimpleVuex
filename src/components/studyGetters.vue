<template>
  <div>
    通过属性访问： <br>
    显示元素：{{this.$store.getters.showElement}} <br><br>
    可以接受其他 getter 作为第二个参数 <br>
    长度：{{showLength}} <br><br>
    通过id获取数组中符合的 <br>
    同id数组元素： {{this.$store.getters.getElementById(2)}} <br><br>
    mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性<br>
    元素名数组： {{elementNames}}<br><br>
    <!-- 如果你想将一个 getter 属性另取一个名字，使用对象形式 <br> -->
    <!-- {{names}} -->

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    showLength() {
      return this.$store.getters.showLength
    },
    ...mapGetters([
      'elementNames'
    ])
  },
  //  如果你想将一个 getter 属性另取一个名字，使用对象形式
  // computed: mapGetters({
  //   names: 'elementNames'
  // })
}
</script>