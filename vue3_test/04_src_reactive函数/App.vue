<template>
    <h1>一个人的信息</h1>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>工作种类：{{person.job.type}}</h2>
    <h2>工作薪水：{{person.job.salary}}</h2>
    <h2>爱好：{{person.hobby}}</h2>
    <h2>测试的数据c：{{person.job.a.b.c}}</h2>
    <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref, reactive } from "vue";
export default {
    name: "App",
    setup() {
        // 数据
        /* let name = ref("张三");
        let age = ref(18);
        let job = reactive({
            type: "前端工程师",
            salary: "30k",
            a: {
                b: {
                    c: 666,
                },
            },
        });
        let hobby = reactive(["抽烟", "喝酒", "烫头"]); */
        let person = reactive({
            name: "张三",
            age: 18,
            job: {
                type: "前端工程师",
                salary: "30k",
                a: {
                    b: {
                        c: 666,
                    },
                },
            },
            hobby: ["抽烟", "喝酒", "烫头"],
        });

        // 方法
        /* function changeInfo() {
            console.log(name, age);
            name.value = "李四";
            age.value = 28;
            console.log(job);
            job.type = "UI设计师";
            job.salary = "25k";
            job.a.b.c = 999;
            hobby[0] = "学习";
        } */

        function changeInfo() {
            console.log(person);
            person.name = "李四";
            person.age = 28;
            person.job.type = "UI设计师";
            person.job.salary = "25k";
            person.job.a.b.c = 999;
            person.hobby[0] = "学习";
        }

        // 返回对象(常用)
        /* return {
            name,
            age,
            job,
            hobby,
            changeInfo,
        }; */
        return {
            person,
            changeInfo,
        };
    },
};
</script>
