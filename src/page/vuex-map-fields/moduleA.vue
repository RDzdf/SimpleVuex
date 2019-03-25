<template>
  <div class="hello">
    <input v-model="foo">
    <b>vuex里的foo：</b><br>
    <div style="text-align: left;margin: 0 auto;">
      <pre>{{ foo }}</pre>
    </div>
    <input v-model="form.name">
    <input v-model="form.age">
    <b>vuex里的表单数据：</b><br>
    <div style="text-align: left;margin: 0 auto;">
      <pre>{{ form }}</pre>
    </div>
    <br><br><br><br>
  </div>
</template>

<script>
import { createHelpers } from 'vuex-map-fields';

// // `fooModule` is the name of the Vuex module.
const { mapFields } = createHelpers({
  getterType: 'fooModule/getField',
  mutationType: 'fooModule/updateField',
});
export default {
  computed: {
    ...mapFields([
      'foo', 'form'
    ])
  }
}
</script>