import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AuthenticationView from '../views/AuthenticationView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthenticationView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const auth = getAuth();

  // logged user tries to visit /auth page redirect to /
  if(to.fullPath === '/auth' && auth.currentUser) {
    next('/')
    return
  }
  // secure auth required routes.
  if (requiresAuth) {
    if (auth.currentUser) {
      next();
    } else {
      next({ name: 'auth' });
    }
  } else {
    next();
  }
});

export default router
