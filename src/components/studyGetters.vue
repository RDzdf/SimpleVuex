<template>
  <div>
    <h1>Getters以及它的辅助函数mapGetters </h1>
    <b> 通过属性访问显示元素：</b>（this.$store.getters.showElement）<br>
    {{this.$store.getters.showElement}} <br><br>
    <b>可以接受其他 getter 作为第二个参数</b>(showLength) <br>
    长度：{{showLength}} <br><br>
    <b>通过id获取数组中符合的同id数组元素： </b>(this.$store.getters.getElementById(2))<br>
    {{this.$store.getters.getElementById(2)}} <br><br>
    <b>mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性</b><br>
    元素名数组(elementNames)： {{elementNames}}<br><br>
    <!-- 如果你想将一个 getter 属性另取一个名字，使用对象形式 <br> -->
    <!-- {{names}} -->
    <div class="row">
      <div class="col-12">
        <b>Store的Getters：</b>
        <pre>
        getters: {
          showElement: state => {
            return state.array.filter(ele => ele.display)
          },
          form: state => state.form,
          // getters可以作为第二参数
          showLength: (state, getters) => {
            return getters.showElement.length
          },
          // 通过方法获取，可以传参哦
          getElementById: (state) => (id) => {
            return state.array.find(ele => ele.id === id)
          },
          elementNames: state => {
            return state.array.map(ele => ele.name)
          }
        },
        </pre>
      </div>
      <div class="col-12">
        <b>组件JS部分：</b>
        <pre>
        computed: {
          showLength() {
            return this.$store.getters.showLength
          },
          ...mapGetters([
            'elementNames'
          ])
        }
        </pre>
      </div>
    </div>
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