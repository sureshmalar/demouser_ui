import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Card from 'primevue/card'
import SelectButton from 'primevue/selectbutton'
import FileUpload from 'primevue/fileupload'
import VeeValidate, { Validator } from 'vee-validate' //npm i vee-validate@2.1.7 --save
import Menu from 'primevue/menu'
import { NumbersOnly } from './directives/numberOnly'
import AxiosPlugin from 'vue-axios-cors'
import Textarea from 'primevue/textarea'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
import Dialog from 'primevue/dialog'

import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import 'bootstrap'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'

Vue.config.productionTip = false
Vue.prototype.$primevue = Vue.observable({ ripple: true })

Vue.use(VeeValidate, {
  Validator,
})

Vue.component('Textarea', Textarea)
Vue.component('InputText', InputText)
Vue.component('Dropdown', Dropdown)
Vue.component('Button', Button)
Vue.component('Menubar', Menubar)
Vue.component('TabView', TabView)
Vue.component('TabPanel', TabPanel)
Vue.component('Card', Card)
Vue.component('SelectButton', SelectButton)
Vue.component('FileUpload', FileUpload)
Vue.component('Menu', Menu)
Vue.directive('numbersOnly', NumbersOnly)
Vue.component('DataTable', DataTable)
Vue.component('Column', Column)
Vue.component('ColumnGroup', ColumnGroup)
Vue.component('Dialog', Dialog)
Vue.use(AxiosPlugin)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

export default {
  VeeValidate,
}
