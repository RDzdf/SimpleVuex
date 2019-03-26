import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/state',
      name: 'state',
      component: () => import('@/components/studyState')
    },
    {
      path: '/getters',
      name: 'getters',
      component: () => import('@/components/studyGetters')
    },
    {
      path: '/mutations',
      name: 'mutations',
      component: () => import('@/components/studyMutations')
    },
    {
      path: '/actions',
      name: 'actions',
      component: () => import('@/components/studyActions')
    },
    {
      path: '/module',
      name: 'module',
      component: () => import('@/components/studyModule')
    },
    {
      path: '/studyModel',
      name: 'studyModel',
      component: () => import('@/components/studyModel')
    },
    {
      path: '/ES6',
      name: 'ES6',
      component: () => import('@/page/ECMAScript6/array')
    }
  ]
})
