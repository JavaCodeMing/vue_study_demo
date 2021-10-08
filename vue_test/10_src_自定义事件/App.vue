<template>
    <div class="app">
        <h1>{{msg}},学生姓名:{{studentName}}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现: 子给父传递数据 -->
        <School :getSchoolName="getSchoolName"/>
        <!-- 通过父组件给子组件绑定一个自定义事件实现: 子给父传递数据(第一种写法:使用v-on或@) -->
        <!-- <Student @atguigu="getStudentlName" @demo="m1"/> -->

        <!-- 通过父组件给子组件绑定一个自定义事件实现: 子给父传递数据(第二种写法:使用ref) -->
        <Student ref="student" @click.native="show"/>
    </div>
</template>

<script>
// 引入组件
import Student from "./components/Student";
import School from "./components/School";
export default {
    name: "App",
    components: { Student, School },
    data() {
        return {
            msg: '你好啊',
            studentName: '',
        }
    },
    methods:{
        getSchoolName(name){
            console.log('App收到了学校名:',name);
        },
        /* getStudentlName(name,x,y,z){
            console.log('App收到了学生名:',name,x,y,z);
        } */
        getStudentlName(name,...params){
            console.log('App收到了学生名:',name,params);
            this.studentName = name
        },
        m1(){
            console.log('demo事件被触发了');
        },
        show(){
            alert(123)
        }
    },
    mounted() {
        this.$refs.student.$on('atguigu',this.getStudentlName)    // 绑定自定义事件
        //this.$refs.student.$once('atguigu',this.getStudentlName)  // 绑定自定义事件(一次性)
    }
};
</script>

<style>
.app {
    background-color: gray;
    padding: 10px;
}
</style>