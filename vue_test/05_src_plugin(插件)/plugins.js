export default {
    install(Vue, x, y, z) {
        console.log(x,y,z)
        // 全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })
        // 全局配置自定义指令
        Vue.directive('fbind',{
            bind(element, binding) {
                console.log('bind',this); 
                element.value = binding.value
            },
            inserted(element, binding) {
                //console.log('inserted',this);
                element.focus()
            },
            update(element, binding) {
                //console.log('updated',this);
                element.value = binding.value
                element.focus()
            },
        })
        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 100
                }
            },
        })
        // 给Vue原型上添加一个方法(vm和vc都能用)
        Vue.prototype.hello = ()=>{alert('你好啊')}
    }
}
