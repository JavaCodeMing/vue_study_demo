/* 
  该文件是整个文件的入口文件
*/
// 引入Vue(残缺版的Vue,实际上是node_modules/vue中的package.json中module指定的)
import Vue from 'vue'
// 引入App组件,它是所有组件的父组件
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false
/* 
  不同版本的vue:
    1.js与vue.runtime.xxx.js的区别:
      1.1.vue.js是完整版的vue,包含:核心功能+模板解析器
      1.2.vue.runtime.xxx.js是运行版的vue,只包含:核心功能,没有模板解析器
    2.因为vue, runtime,xxx,js没有模板解析器,所以不能使用 template配置项,需要使用render函数接收到的 createElement函数去指定具体内容
*/

// 测试关闭语法检查
function e(){

}

// 创建Vue实例对象---vm
new Vue({
  // el: '#app',  // 等效于.$mount('#app')

  // 使用render函数加载一个App组件
  render: h => h(App),

  // 使用render函数加载一个h1标签
  /* render(createElement){
    return createElement('h1','你好啊')
  } */

  // render函数的简写版
  // render: h => h('h1','你好啊')

  // 以下代码在残缺版的Vue中不支持配置,此时需要借助render函数
  // template: `<App></App>`,
  // components: { App }
}).$mount('#app')
