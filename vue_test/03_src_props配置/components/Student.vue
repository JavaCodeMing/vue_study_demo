<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>学生的姓名: {{name}}</h2>
        <h2>学生的性别: {{sex}}</h2>
        <h2>学生的年龄: {{age+1}}</h2>
        <h2>学生的年龄: {{myAge}}</h2>
        <button @click="updateAge">尝试修改收到的年龄</button>
    </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        console.log(this)
        return {
            msg: '我是一个尚硅谷的学生',
            myAge: this.age,
        };
    },
    methods: {
        updateAge(){
            this.myAge++
        }
    },
    // 简单声明接收
    props: ['name','sex','age']  

    // 接收的同时对数据进行类型限制
    /* props: {
        name: String,
        sex: String,
        age: Number
    } */

    // 接收的同时对数据进行类型限制+默认值的指定+必要性的限制
    /* props: {
        name:{
            type: String,   //属性类型
            required: true  //是否必传
        },
        sex:{
            type: String,
            required: true
        },
        age:{
            type: Number,
            default: 99    //默认值
        }
    } */
};
</script>
