<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- 如果transition标签设置name属性为hello,则需要将样式中.v-enter-active和.v-leave-active改为.hello-enter-active和.hello-leave-active -->
        <!-- <transition name="hello" appear>
        <h1 v-show="isShow" >你好啊！</h1>
        </transition>-->

        <transition-group name="hello" appear>
            <h1 v-show="isShow" key="1">你好啊！</h1>
            <h1 v-show="isShow" key="2">尚硅谷！</h1>
        </transition-group>
        
    </div>
</template>

<script>
export default {
    name: "Test",
    data() {
        return {
            isShow: true,
        };
    },
};
</script>

<style scoped>
h1 {
    background-color: orange;
    /* transition: 0.5s linear; */
}
/* 进入的起点,离开的终点 */
.hello-enter,
.hello-leave-to {
    transform: translateX(-100%);
}
/* 进入的终点,离开的起点 */
.hello-enter-to,
.hello-leave {
    transform: translateX(0);
}
.hello-enter-active,
.hello-leave-active {
    transition: 0.5s linear;
}
/* 离开的起点 */
/* .hello-leave{
    transform: translateX(0)
} */
/* 离开的终点 */
/* .hello-leave-to{
    transform: translateX(-100%)
} */
</style>