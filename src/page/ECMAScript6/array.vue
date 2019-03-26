<template>
  <div class="hello">
    <h3>数组的结构</h3>
    <p><b>写在前面：</b>学习vuex必须理解和掌握几个简单的ECMAScript6或者7的方法知识！</p>

    <h4>数组赋值解构：</h4>
    <pre>
      let arr = ['Z_D_殿峰', 18, 60]
      let [name, age, weight] = this.arr

      console.log(name) // => Z_D_殿峰
      console.log(age) // => 18
      console.log(weight) // => 60
    </pre>
    (打开控制台查看打印效果)<button @click="arrayFun1">开始数组赋值解构：</button>

    <h4>数组函数传参解构：</h4>
    <pre>
      function arrayFun2([name, age, weight]) {
        console.log(name) // => Z_D_殿峰
        console.log(age) // => 18
        console.log(weight) // => 60
      }
      
      let arr = ['Z_D_殿峰', 18, 60]
      arrayFun2(arr)
    </pre>
    (打开控制台查看打印效果)<button @click="arrayFun2(arr)">开始数组函数传参解构</button>

    <h4>对象赋值解构：</h4>
    <pre>
      obj = {
        name: 'Z_D_殿峰',
        age: 18,
        weight: 60
      }
      let {name, age, weight} = obj

      console.log(name) // => Z_D_殿峰
      console.log(age) // => 18
      console.log(weight) // => 60
    </pre>
    (打开控制台查看打印效果)<button @click="objFun1()">开始对象赋值解构</button>

    <h4>对象函数传参解构：</h4>
    <pre>
      function objFun2({name, age, weight}) {
        console.log(name) // => Z_D_殿峰
        console.log(age) // => 18
        console.log(weight) // => 60
      }
      obj = {
        name: 'Z_D_殿峰',
        age: 18,
        weight: 60
      }
      objFun2(obj)
    </pre>
    (打开控制台查看打印效果)<button @click="objFun2(obj)">开始对象赋值解构</button>

    <h4>数组扩展运算符</h4>
    <P>扩展运算符用三个点号(...)表示，功能是把数组或类数组对象展开成一系列用逗号隔开的值</P>
    <pre>
      function arrayFun3(name, age, weight) {
        console.log(name) // => Z_D_殿峰
        console.log(age) // => 18
        console.log(weight) // => 60
      }
      let arr = ['Z_D_殿峰', 18, 60]// => ... = 'Z_D_殿峰', 18, 60
      arrayFun3(...arr)
    </pre>
    (打开控制台查看打印效果)<button @click="arrayFun3(...arr)">数组扩展运算</button>

    <h4>对象扩展运算符</h4>
    <P>也是三个点号(...)表示，对象的解构赋值用于从一个对象取值，相当于将目标对象自身的所有可遍历的、但尚未被读取的属性，分配到指定的对象上面。所有的键和它们的值，都会拷贝到新对象上面。</P>
    <pre>
      let obj = {
        name: 'Z_D_殿峰',
        age: 18,
        weight: 60
      }
      let obj1 = {
        job: '程序员'
      }
      let obj2 = {...obj, ...obj1}
      console.log(obj2) //=> { age: 18, job: "程序员", name: "Z_D_殿峰", weight: 60 }

      let {name, ...obj3} = {...obj2}
      console.log(name) // => 'Z_D_殿峰'
      console.log(obj3) // {age: 18, weight: 60, job: "程序员"}
    </pre>
    (打开控制台查看打印效果)<button @click="objFun3(...arr)">对象扩展运算</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        name: 'Z_D_殿峰',
        age: 18,
        weight: 60
      },
      arr: ['Z_D_殿峰', 18, 60]
    }
  },
  methods: {
    arrayFrom() {
      var obj = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
      }
      var arr = Array.from(obj)
      // a b c
    },
    arrayFun1() {
      let [name, age, weight] = this.arr
      console.log('数组赋值解构：')
      console.log(name) // => Z_D_殿峰
      console.log(age) // => 18
      console.log(weight) // => 60
    },
    arrayFun2([name, age, weight]) {
      console.log('数组函数传参解构：')
      console.log(name) // => Z_D_殿峰
      console.log(age) // => 18
      console.log(weight) // => 60
    },
    objFun1() {
      let { name, age, weight } = this.obj
      console.log('对象赋值解构：')
      console.log(name) // => Z_D_殿峰
      console.log(age) // => 18
      console.log(weight) // => 60
    },
    objFun2({ name, age, weight }) {
      console.log('对象函数传参解构：')
      console.log(name) // => Z_D_殿峰
      console.log(age) // => 18
      console.log(weight) // => 60
    },
    // 数组扩展运算符
    arrayFun3(name, age, weight) {
      console.log('数组扩展运算符运用')
      console.log(name) // => Z_D_殿峰
      console.log(age) // => 18
      console.log(weight) // => 60
    },
    // 对象扩展运算符
    objFun3() {
      let obj1 = {
        job: '程序员'
      }
      let obj2 = { ...this.obj, ...obj1 }// => 等同于Object.assign({}, obj, obj1)
      console.log(obj2) // => {name: 'Z_D_殿峰', age: 18, weight: 60, job: "程序员"}
      let { name, ...obj3 } = { ...obj2 }
      console.log(name) // => 'Z_D_殿峰'
      console.log(obj3) // => {age: 18, weight: 60, job: "程序员"}
    }
  }
}
</script>