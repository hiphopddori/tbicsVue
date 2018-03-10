import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// lazy loading 처리
//const ServiceGroupApp = () => import('@/components/env/ServiceGroupApp');
export default new Router({
  routes: [
    {
      path: '/service',
      name: '서비스 구룹 관리',
      component:() => import('@/components/env/ServiceGroupApp') 
    }
    ,
    {
      path: '/map',
      name: '품질지도 분석',
      component:() => import('@/components/map/QualityAnalysis')
    }
    ,
    {
      path: '/',
      name: '품질지도 분석',
      component:() => import('@/components/map/QualityAnalysis')
    }
  ]
})