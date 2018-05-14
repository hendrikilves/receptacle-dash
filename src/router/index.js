import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard'
import Deployments from '../components/Deployments'
import Nodes from '../components/Nodes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/deployments',
      name: 'Deployments',
      component: Deployments
    },
    {
      path: '/nodes',
      name: 'Nodes',
      component: Nodes
    }
  ]
})
