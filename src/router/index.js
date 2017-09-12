import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import DetailPage from '@/views/Detail'
import OrderList from '@/views/OrderList'
import DetailAnaPage from '@/views/detail/Analysis'
import DetailCouPage from '@/views/detail/Count'
import DetailForPage from '@/views/detail/Forecast'
import DetailPubPage from '@/views/detail/Publish'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/orderList',
      component: OrderList
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'analysis',
          component: DetailAnaPage
        }, {
          path: 'count',
          component: DetailCouPage
        }, {
          path: 'forecast',
          component: DetailForPage
        }, {
          path: 'publish',
          component: DetailPubPage
        }
      ]
    }
  ]
})
