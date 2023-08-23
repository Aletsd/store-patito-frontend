import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './../views/HomePage.vue';
import LoginUser from './../views/LoginUser';
import RegisterUser from './../views/RegisterUser.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/login',
    name: 'LoginUser',
    component: LoginUser
  },
  {
    path: '/register',
    name: 'RegisterUser',
    component: RegisterUser
  }
];

const router = new VueRouter({
  routes
});

export default router;

