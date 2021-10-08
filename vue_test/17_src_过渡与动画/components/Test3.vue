<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- 如果transition标签设置name属性为hello,则需要将样式中.v-enter-active和.v-leave-active改为.hello-enter-active和.hello-leave-active -->
        <!-- <transition name="hello" appear>
        <h1 v-show="isShow" >你好啊！</h1>
        </transition>-->

        <transition-group 
            appear
            name="animate__animated animate__bounce" 
            enter-active-class="animate__swing"
            leave-active-class="animate__backOutUp"
        >
            <h1 v-show="!isShow" key="1">你好啊！</h1>
            <h1 v-show="isShow" key="2">尚硅谷！</h1>
        </transition-group>
        
    </div>
</template>

<script>
import 'animate.css'
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
}

</style>