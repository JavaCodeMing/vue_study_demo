<template>
    <div>
        <h2 @click="showName">学生的姓名: {{name}}</h2>
        <h2>学生的性别: {{sex}}</h2>
    </div>
</template>

<script>
import { hunhe, hunhe2 } from "../mixin";
export default {
    name: "Student",
    data() {
        return {
            name: "张三",
            sex: "男",
        };
    },
    /* methods: {
        showName(){
            alert(this.name)
        }
    }, */
    //mixins: [hunhe, hunhe2],
};
</script>
