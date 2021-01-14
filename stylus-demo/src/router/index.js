import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      component: () => import('../components/pages/Layout'),
      children: [{
          path: '/',
          component: () => import('../components/pages/Studeny/index')
        },
        {
          path: '/info',
          component: () => import('../components/pages/Studeny/info')
        },
        {
          path: '/coures',
          component: () => import('../components/pages/Studeny/coures')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('../components/pages/Login')
    },
    {
      path:'/home',
      component:() => import('../components/pages/Home')
    }
  ]
})

router.beforeEach((to,from,next)=>{
    if(to.fullPath === '/login'){
        next();
    }else {
        // var userinfo = localStorage.getItem('userinfo');
        var userinfo = store.state.userinfo;
        if(userinfo === null){
            next('/login');
        }else {
            next();
        }
    }
})

export default router
