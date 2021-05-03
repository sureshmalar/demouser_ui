import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
function lazyLoad(component, view) {
  return () => import(`@/module/${component}/${view}.vue`)
}
export default []
