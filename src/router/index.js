import {createRouter, createWebHashHistory} from 'vue-router';
import HomePage from '../views/HomePage';
import LoginUser from '../views/LoginUser';
import RegisterUser from '../views/RegisterUser.vue';


const routes = [
    {
      path: '/',
      component: HomePage,
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

