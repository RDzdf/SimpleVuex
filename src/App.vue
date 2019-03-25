<template>
  <div id="app">
    <ul class="nav-bar">
      <li>
        <router-link :to="{path:'/state'}">State</router-link>
      </li>
      <li>
        <router-link :to="{path:'/getters'}">Getters</router-link>
      </li>
      <li>
        <router-link :to="{path:'/mutations'}">Mutations</router-link>
      </li>
      <li>
        <router-link :to="{path:'/actions'}">Actions</router-link>
      </li>
      <li>
        <router-link :to="{path:'/module'}">Module</router-link>
      </li>
      <li>
        <router-link :to="{path:'/studyModel'}">表单处理</router-link>
      </li>
    </ul>
    <p class="logo"><img src="./assets/logo.png"></p>
    <p class="logo"><a href="https://www.jianshu.com/p/b0fce9a97485">链接：一个简单的vuex学习项目(作者简书针对此项目的记录）</a></p>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 996px;
  margin: 0 auto;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2{
  text-align: center;
}
.nav-bar {
  height: 42px;
  padding: 0;
  margin: 0 auto;
  width: 580px;
}
.nav-bar li {
  float: left;
  height: 40px;
  line-height: 40px;
  color: #000;
  font-size: 18px;
  width: 80px;
  text-align: center;
  border-bottom: 2px solid #fefefe;
  margin: 0 5px;
  list-style-type: none;
}
.nav-bar li a:hover {
  color: red !important;
}
.logo {
  text-align: center;
}
pre {
  background: #282c34;
  color: #abb2bf;
  padding: 10px;
  font-size: 14px;
  overflow: auto;
  font-family: auto;
  text-align: left;
}
.row .col-12 {
  width: 48%;
  float: left;
  margin: 1%;
}
</style>
