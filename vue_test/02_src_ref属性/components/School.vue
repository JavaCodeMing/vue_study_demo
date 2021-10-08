<template>
    <div class="demo">
        <h1>学校的名称:{{name}}</h1>
        <h1>学校的地址:{{address}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'School',
        data() {
            return{
                name: '尚硅谷',
                address: '北京昌平',
            }
        }
    };
</script>

<style>
    .demo {
        background-color:gray
    }
</style>