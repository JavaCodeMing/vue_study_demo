<template>
    <h2>当前求和为: {{sum}}</h2>
    <button @click="sum++">点我+1</button>
    <br />
    <h2>当前点击时鼠标的坐标为: x:{{point.x}},y:{{point.y}}</h2>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted } from "vue";
import usePoint from '../hooks/usePoint'
export default {
    name: "Demo",
    setup() {
        // 数据
        let sum = ref(0);
        /* let point = reactive({
            x: 0,
            y: 0,
        });

        function savePoint(event) {
            point.x = event.pageX;
            point.y = event.pageY;
            console.log(event.pageX, event.pageY);
        }
        onMounted(() => {
            window.addEventListener("click", savePoint);
        });
        onUnmounted(() => {
            window.removeEventListener("click", savePoint);
        }); */
        let point = usePoint();
        return {
            sum,
            point,
        };
    },
};
</script>