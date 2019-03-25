<template>
  <div class="hello">
    <h1>表单的双向绑定（v-model）处理</h1>
    姓名： <input type="text" v-model="form.name">
    年龄： <input type="text" v-model="form.age"> <br><br>
    性别： <input type="text" v-model="form.sex">
    地址： <input type="text" v-model="form.address"> <br><br>
    身高： <input type="text" v-model="form.height">
    体重： <input type="text" v-model="form.weight"> <br><br>
    工作： <input type="text" v-model="form.job">
    爱好： <input type="text" v-model="form.interest">
    <br><br>
    <b>vuex里的表单数据：</b><br>
    <div style="text-align: left;margin: 0 auto;">
      <pre>{{ $store.state.studyModel.form }}</pre>
    </div>
    <br><br><br><br>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('studyModel')
export default {
  computed: {
    ...mapGetters(['form'])
  },
  methods: {
    ...mapActions([
      'setForm'
    ])
  },
  watch: {
    'form': {
      deep: true,
      handler(newValue, oldValue) {
        for (let key in newValue) {
          if (newValue[key] !== oldValue[key]) {
            this.setForm({ key: newValue[key] })
          }
        }
      }
    }
  }
}
</script>