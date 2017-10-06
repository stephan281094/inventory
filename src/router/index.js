import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const Home = () => import('../pages/Home.vue')
const RecipesOverview = () => import('../pages/food/recipes/Overview.vue')
const RecipesDetail = () => import('../pages/food/recipes/Detail.vue')
const NotFound = () => import('../pages/NotFound.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    // scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: Home },
      { path: '/food/recipes', component: RecipesOverview },
      { path: '/food/recipes/:slug', component: RecipesDetail },
      { path: '*', component: NotFound }
    ]
  })
}
