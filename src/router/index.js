import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// lazy loading 처리
//const ServiceGroupApp = () => import('@/components/env/ServiceGroupApp');
export default new Router({
  routes: [
    {
      path: '/',
      name: '서비스 구룹 관리',
      component:() => import('@/components/env/ServiceGroupApp') 
    }
    /*
    ,
    {
      path: '/env',
      name: '서비스 구룹 관리',
      component: ServiceGroupApp
    }
    */
  ]
})
