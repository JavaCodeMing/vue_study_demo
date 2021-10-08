<template>
    <div>
        <!-- <h1>当前求和为: {{he}}</h1>
        <h3>我在{{xuexiao}},学习{{xueke}}</h3>-->
        <h1>当前求和为: {{sum}}</h1>
        <h3>我在{{school}},学习{{subject}}</h3>
        <h3>当前求和放大10倍为: {{bigSum}}</h3>
        <h3 style="color:red;">Person组件中的总人数为: {{personList.length}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <!-- <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>-->
        <button @click="JIA(n)">+</button>
        <button @click="JIAN(n)">-</button>
        <button @click="jiaOdd(n)">当前求和为奇数再加</button>
        <button @click="jiaWait(n)">等一等再加</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
    name: "Count",
    data() {
        return {
            n: 1, //用户选择的数字
        };
    },
    computed: {
        ...mapState(["sum", "school", "subject", "personList"]),
        ...mapGetters(["bigSum"]),
    },
    methods: {
        ...mapMutations(["JIA", "JIAN"]),
        ...mapActions(["jiaOdd", "jiaWait"]),
    },
    mounted() {
        console.log("Count", this);
    },
};
</script>

<style>
button {
    margin-left: 5px;
}
</style>