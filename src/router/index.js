import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('../views/Sobre.vue')
    },
    {
      path: '/restrito',
      name: 'restrito',
      component: () => import('../views/Restrito.vue'), 
      meta:{autenticar:true}
    }
  ]
})

// Função para privar rotas
router.beforeEach((to, from, next) => {

  // Condicional 
  if(to.matched.some(record => record.meta.autenticar)){

    if(localStorage.getItem('nome') === null) {
      next({
        path: '/',
        query: { redirect: to.fullPath}
      });
    } else {
      next();
    }
  } else {
    next();
  }

});
export default router
