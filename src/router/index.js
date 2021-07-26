import Vue from 'vue';
import VueRouter from 'vue-router';
// import Dashboard from '@/components/Dashboard';
import Login from '@/components/Login';
import Home from '../views/Home.vue';
import View from '../views/View.vue';
import Subscribe from '../views/Subscribe.vue';
import Store from '../views/Store.vue';
import Task from '@/components/home/Task';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  // linkExactActiveClass: 'active',
  // linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requiresPath: true,
      },
    },
    {
      path: '/origin',
      name: 'Dashboard',
      component: () => import('@/components/Dashboard'),
      children: [
        {
          name: 'Home',
          path: '/home',
          component: Home,
        },
        {
          name: 'View',
          path: '/view',
          component: View,
        },
        {
          name: 'Subscribe',
          path: '/subscribe',
          component: Subscribe,
        },
        {
          name: 'Store',
          path: '/store',
          component: Store,
        },
        {
          name: 'Task',
          path: '/home/task',
          component: Task,
        },
      ],
    },
  ],
});

export default router;
