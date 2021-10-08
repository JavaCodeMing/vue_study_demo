<template>
    <div class="school">
        <h2>学校名称: {{name}}</h2>
        <h2>学校地址: {{address}}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: "School",
    data() {
        return {
            name: "尚硅谷",
            address: "北京昌平",
        };
    },
    methods: {
        demo(msgName,data){
            console.log(this);
            console.log('有人发布了hello消息,hello消息的回调执行了,接收的数据为:',data);
        }
    },
    mounted() {
        //console.log("School", this)
        /* this.$bus.$on("hello", (data) => {
            console.log("我是School组件,收到了数据:", data)
        }) */
        // 方式一: 普通函数回调中this为undefined
        /* this.pubId = pubsub.subscribe('hello',function (msgName,data){
            console.log(this);
            console.log('有人发布了hello消息,hello消息的回调执行了,接收的数据为:',data);
        }) */
        // 方式二: 箭头函数回调中this为vc
        /* this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
            console.log(this);
            console.log('有人发布了hello消息,hello消息的回调执行了,接收的数据为:',data);
        }) */
        // 方式三: 将回调函数提到methods中,并在此使用,则回调函数中的this为vc
        this.pubId = pubsub.subscribe('hello',this.demo)
    },
    beforeDestroy() {
        // this.$bus.off('hello')
        pubsub.unsubscribe(this.pubId)
    }
};
</script>

<style scoped>
.school {
    background-color: skyblue;
    padding: 5px;
}
</style>