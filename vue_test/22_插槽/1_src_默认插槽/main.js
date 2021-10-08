// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入vue-resource
import VueResource from 'vue-resource'
// 关闭Vue的生产提示
Vue.config.productionTip = false
// 使用插件
Vue.use(VueResource)

// 创建vm
new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
})