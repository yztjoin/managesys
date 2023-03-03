import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name:'addArg',
    component: () => import('../pages/addArg.vue'),
    meta:{
      name:'新增二级商协议'
    }
  },
]

const router = createRouter({
  history:createWebHashHistory(),
  routes,
})
export default router