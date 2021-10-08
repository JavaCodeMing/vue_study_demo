<template>
    <input type="text" v-model="keyWord" />
    <h3>{{keyWord}}</h3>
</template>

<script>
import { ref, customRef } from "vue";
export default {
    name: "App",
    setup() {
        // 自定义一个ref
        function myRef(value, delay) {
            let timer;
            return customRef((trace, trigger) => {
                return {
                    get() {
                        console.log(`有人从myRef这个容器中读取数据了,我把${value}给他了`);
                        trace(); // 通知Vue追踪value的变化(提前和get商量一下,让他认为这个value是有用的)
                        return value;
                    },
                    set(newValue) {
                        console.log(`有人把myRef这个容器中的数据修改为了:${newValue}`);
                        timer = setTimeout(() => {
                            value = newValue;
                            trigger(); // 通过Vue去重新解析模板
                        },delay);
                    },
                };
            });
        }
        // let keyWord = ref('hello'); // 使用vue提供的ref
        let keyWord = myRef("hello",500); //使用程序员自定义的ref
        return {
            keyWord,
        };
    },
};
</script>
