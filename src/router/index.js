import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:()=> import('@/view/home')
    },
    {
      path: '/apply',
      name: 'apply',
      component: () => import('@/view/apply')
    },
    {
      path: '/items',
      name: 'items',
      component: () => import('@/view/items'),
      children: [
        {
          path: '/',
          name: 'jewelitems',
          component: () => import('@/components/jewelitems')
        },
        {
          path: 'golditems',
          name: 'golditems',
          component: () => import('@/components/golditems')
        },
        {
          path: 'silveritems',
          name: 'silveritems',
          component: () => import('@/components/silveritems')
        }
      ]
    },
    {
      path: '/mien',
      name: 'mien',
      component: () => import('@/view/mien')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/view/register')
    },
    {
      path: '/mydidi',
      name: 'mydidi',
      component: () => import('@/view/mydidi')
    },
    {
      path: '/clientserver',
      name: 'clientserver',
      component: () => import('@/view/clientserver')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('@/view/news')
    },
    {
      path: '/newsitem',
      name: 'newsitem',
      component: () => import('@/components/newsitem')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/view/login')
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('@/view/project')
    },
    {
      path: '/balance',
      name: 'balance',
      component: () => import('@/view/balance')
    },
    {
      path: '/shenqing',
      name: 'shenqing',
      component: () => import('@/view/shenqing')
    },
    {
      path: '/changepwd',
      name: 'changepwd',
      component: () => import('@/view/changepwd')
    },
    {
      path: '/clientreg',
      name: 'clientreg',
      component: () => import('@/view/clientreg')
    }
  ]
})
