// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: {
                isAuth: true,
                title: '关于'
            }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '首页' },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: {
                        isAuth: true,
                        title: '新闻'
                    },
                    /* beforeEnter: (to, from, next) => {
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('school') === 'atguigu') {
                                next()
                            } else {
                                alert('当前学校名无权限')
                            }
                        } else {
                            next()
                        }
                    } */
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: {
                        isAuth: true,
                        title: '消息'
                    },
                    children: [
                        {
                            name: 'xiangqing',
                            // 注意: 如果是query传参此处不能用占位符,如果是params可以使用占位符如: '/detail/:id/:titlle'
                            path: 'detail',
                            component: Detail,
                            meta: { title: '详情' },
                            // props的第一种写法,值为对象,该对象中的所有key-va1ue都会以props的形式传给Detai1组件
                            //props: {a:1,b:'hello'}
                            // props的第二种写法,值为布尔值,若布尔值为真,就会把该路由组件收到的所有params参数,以props的形式传给Detai1组件
                            //props: true
                            // props的第二种写法,值为函数
                            props($route) {
                                return { id: $route.query.id, title: $route.query.title }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

// 全局前置路由守卫--初始化的时候被调用和每次路由切换之前被调用
/* router.beforeEach((to, from, next) => {
    console.log('前置路由守卫：', 'to:', to, 'from:', from)
    if (to.meta.isAuth) {
        if (localStorage.getItem('school') === 'atguigu') {
            next()
        } else {
            alert('当前学校名无权限')
        }
    } else {
        next()
    }
}) */

// 全局后置路由守卫--初始化的时候被调用和每次路由切换之后被调用
router.afterEach((to, from) => {
    console.log('后置路由守卫：', 'to:', to, 'from:', from)
    document.title = to.meta.title || '路由示例'
})

export default router