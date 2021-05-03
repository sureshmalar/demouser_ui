import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
function lazyLoad(view) {
  return () => import(`@/module/Developer/${view}/${view}.vue`)
}
export default [
  { path: '', component: lazyLoad('login') },
  { path: '/login', component: lazyLoad('login') },
  { path: '/register', component: lazyLoad('registration') },
  { path: '/developersList', component: lazyLoad('developersList') },
  { path: '/updateDeveloper', component: lazyLoad('updateDeveloper') },
  { path: '/forgetpsw', component: lazyLoad('forgetpassword') },
]
