<template>
    <h4>当前求和为: {{sum}}</h4>
    <button @click="sum++">点我sum+1</button>
    <hr />
    <h2>姓名: {{name}}</h2>
    <h2>年龄: {{age}}</h2>
    <h2>薪资: {{job.j1.salary}}K</h2>
    <h3 v-show="person.car">座驾信息:{{person.car}}</h3>
    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">薪资</button>
    <button @click="showRawPerson">输出最原始的person</button>
    <button @click="addCar">给人添加一台车</button>
    <button  @click="person.car.name += '!'">换车名</button>
    <button @click="person.car.price++">换价格</button>
</template>

<script>
import { ref, reactive, toRefs, toRaw, markRaw } from "vue";
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

        function showRawPerson() {
            // toRaw只能处理reactive包装的对象
            const p = toRaw(person);
            console.log(p);
        }

        function addCar() {
            let car = { name: "奔驰", price: 40 };
            // person.car = car;
            // markRaw将响应式对象中的属性标记为原始属性,即被标记的属性失去响应式
            person.car = markRaw(car);
        }

        return {
            sum,
            person,
            ...toRefs(person),
            showRawPerson,
            addCar,
        };
    },
};
</script>