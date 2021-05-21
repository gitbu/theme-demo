import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/cssTheme',
    name: 'css变量主题',
    component: () => import(/* webpackChunkName: "about" */ '../views/CssTheme.vue'),
  },
  {
    path: '/lessTheme',
    name: 'less变量主题',
    component: () => import(/* webpackChunkName: "about" */ '../views/LessTheme'),
  },
  {
    path: '/styleTheme',
    name: 'style变量主题',
    component: () => import(/* webpackChunkName: "about" */ '../views/StyleTheme.vue'),
  },
  {
    path: '/cssInJsTheme',
    name: 'cssInJs主题',
    component: () => import(/* webpackChunkName: "about" */ '../views/CssInJs'),
  },
  {
    path: '/cssVarsPonyfill',
    name: 'CssVarsPonyfill主题',
    component: () => import(/* webpackChunkName: "about" */ '../views/CssVarsPonyfill'),
  },
  {
    path: '/postcss',
    name: 'postcss主题',
    component: () => import(/* webpackChunkName: "about" */ '../views/PostcssTheme'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
