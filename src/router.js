import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/',
      redirect: 'home',
      name: 'Layout',
      component: () => import('./views/layout.vue'),
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('./views/Home/home.vue')
        },
        {
          path: 'orderList',
          name: 'OrderList',
          component: () => import('./views/orderList/orderList.vue')
        },
        {
          path: 'menuList',
          name: 'MenuList',
          component: () => import('./views/menuList/menuList.vue')
        },
        {
          path: 'typeList',
          name: 'TypeList',
          component: () => import('./views/typeList/typeList.vue')
        },
        {
          path: 'member',
          name: 'Member',
          component: () => import('./views/member/Member.vue')
        },
        {
          path: 'message',
          name: 'Message',
          component: () => import('./views/message/messageList.vue')
        },
        {
          path: 'admin',
          name: 'adminList',
          component: () => import('./views/admin/adminList.vue')
        }
      ]
    }
  ]
})
