<template>
  <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <!-- 如果transition标签设置name属性为hello,则需要将样式中.v-enter-active和.v-leave-active改为.hello-enter-active和.hello-leave-active -->
      <transition name="hello" appear>
        <h1 v-show="isShow" >你好啊！</h1>
      </transition>
      
  </div>
</template>

<script>
export default {
    name: 'Test',
    data() {
        return {
            isShow: true
        }
    },

}
</script>

<style scoped>
h1{
    background-color: orange;
}
/* .v-enter-active{
    animation: atguigu 0.5s linear;
}
.v-leave-active{
    animation: atguigu 0.5s linear reverse;
} */
.hello-enter-active{
    animation: atguigu 0.5s linear;
}
.hello-leave-active{
    animation: atguigu 0.5s linear reverse;
} 
@keyframes atguigu{
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0px);
    }
}
</style>