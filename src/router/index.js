import Vue from 'vue'
import Router from 'vue-router'
//import ServiceSearch from '@/components/env/ServiceSearch'
import ServiceGroupApp from '@/components/env/ServiceGroupApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '서비스 구룹 관리',
      component: ServiceGroupApp
    }
    ,
    {
      path: '/env',
      name: '서비스 구룹 관리',
      component: ServiceGroupApp
    }
  ]
})
