import {createRouter, createWebHashHistory} from 'vue-router';
import Dashboard from '../views/Dashboard';
import LoginUser from '../views/LoginUser';
import RegisterUser from '../views/RegisterUser.vue';


const routes = [
    {
      path: '/',
      component: Dashboard,
    },
    {
      path: '/login',
      component: LoginUser,
    },
    {
      path: '/register',
      component: RegisterUser,
    },
    
  ];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;

