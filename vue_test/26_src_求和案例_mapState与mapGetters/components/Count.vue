<template>
    <div>
        <!-- <h1>当前求和为: {{he}}</h1>
        <h3>我在{{xuexiao}},学习{{xueke}}</h3> -->
        <h1>当前求和为: {{sum}}</h1>
        <h3>我在{{school}},学习{{subject}}</h3>
        <h3>当前求和放大10倍为: {{bigSum}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";
export default {
    name: "Count",
    data() {
        return {
            n: 1, //用户选择的数字
        };
    },
    computed: {
        /* he(){
            return this.$store.state.sum
        },
        xuexiao(){
            return this.$store.state.school
        },
        xueke(){
            return this.$store.state.subject
        }, */
        // 第一种写法: 借助mapState生成计算属性,从state中读取数据(对象写法)
        // 由于mapState({})返回值是对象,可以在前面用三个点将对象中的属性和值平铺展开(ES语法)
        //...mapState({ he: "sum", xuexiao: "school", xueke: "subject" }),
        // 第二种写法: 借助mapState生成计算属性,从state中读取数据(数组写法,要求state中的属性名和当前组件的计算属性名一致)
        ...mapState(['sum','school','subject']),

        /* bigSum() {
            return this.$store.getters.bigSum;
        }, */
        // 第一种写法: 借助mapGetters生成计算属性,从getters中读取数据(对象写法)
        //...mapGetters({bigSum: 'bigSum'}),
        // 第二种写法: 借助mapGetters生成计算属性,从getters中读取数据(数组写法,要求getters中的属性名和当前组件的计算属性名一致)
        ...mapGetters(['bigSum']),
    },
    methods: {
        increment() {
            //this.$store.dispatch("jia", this.n);
            this.$store.commit("JIA", this.n);
        },
        decrement() {
            //this.$store.dispatch("jian", this.n);
            this.$store.commit("JIAN", this.n);
        },
        incrementOdd() {
            this.$store.dispatch("jiaOdd", this.n);
        },
        incrementWait() {
            this.$store.dispatch("jiaWait", this.n);
        },
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