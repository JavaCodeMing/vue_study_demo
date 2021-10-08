<template>
    <h4>当前求和为: {{sum}}</h4>
    <button @click="sum++">点我sum+1</button>
    <hr />
    <h2>姓名: {{name}}</h2>
    <h2>年龄: {{age}}</h2>
    <h2>薪资: {{job.j1.salary}}K</h2>
    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">薪资</button>
</template>

<script>
import { ref, reactive, toRefs, readonly, shallowReadonly } from "vue";
export default {
    name: "Demo",
    setup() {
        // 数据
        let sum = ref(0);
        let person = reactive({
            name: "张三",
            age: 18,
            job: {
                j1: {
                    salary: 20,
                },
            },
        });

        // 适用场景: 数据来源于其他地方,且不允许修改
        // person = readonly(person);
        // person = shallowReadonly(person);

        // sum = readonly(sum);
        // sum = shallowReadonly(sum);

        return {
            sum,
            ...toRefs(person),
        };
    },
};
</script>