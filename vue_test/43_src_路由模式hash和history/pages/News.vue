<template>
    <ul>
        <li :style="{opacity}">欢迎学习Vue</li>
        <li>
            news001
            <input type="text" />
        </li>
        <li>
            news002
            <input type="text" />
        </li>
        <li>
            news003
            <input type="text" />
        </li>
    </ul>
</template>

<script>
export default {
    name: "News",
    data() {
        return {
            opacity: 1,
        };
    },
    /* mounted() {
        this.timer = setInterval(() => {
            console.log('@定时器回调');
            vm.opacity -= 0.01;
            if (vm.opacity <= 0) vm.opacity = 1;
        });
    },
    beforeDestroy() {
        console.log("News组件即将被销毁");
        clearTimeout(this.timer);
    }, */
    // 两个新的生命周期钩子
    activated() {
        console.log('News组件被激活了');
        this.timer = setInterval(() => {
            console.log('@定时器回调');
            this.opacity -= 0.01;
            if (this.opacity <= 0) this.opacity = 1;
        });
    },
    deactivated(){
        console.log('News组件失活了');
        clearTimeout(this.timer);
    }
};
</script>
