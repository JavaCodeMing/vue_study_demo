// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

//完整引入
// 引入ElementUI组件库
//import ElementUI from 'element-ui';
// 引入ElementUI全部样式
//import 'element-ui/lib/theme-chalk/index.css';

//按需引入
import { Button, Row, DatePicker } from 'element-ui';

// 关闭Vue的生产提示
Vue.config.productionTip = false
// 应用完整ElementUI插件
//Vue.use(ElementUI)

// 按需应用ElementUI插件
/* Vue.component('el-button', Button);
Vue.component('el-row', Row);
Vue.component('el-date-picker', DatePicker); */
Vue.use(Button)
Vue.use(Row)
Vue.use(DatePicker)

// 创建vm
const vm = new Vue({
  el: '#app',
  render: h => h(App),
})