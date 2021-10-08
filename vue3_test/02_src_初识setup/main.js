// 引入的不再是Vue的构造函数,引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// Vue3中的写法
//createApp(App).mount('#app')

// 创建应用实例对象--app(类似于之前Vue2中的vm,但app比vm更“轻”)
const app = createApp(App)
console.log('app:',app);
app.mount('#app')

// Vue2中的写法
/* const vm = new Vue({
    render: h => h(App)
})
vm.$mount('#app') */
