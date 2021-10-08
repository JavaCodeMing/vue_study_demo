<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
                </li>
                <li>
                    <router-link
                        class="list-group-item"
                        active-class="active"
                        to="/home/message"
                    >Message</router-link>
                </li>
            </ul>
            <!-- include不传则缓存该组件及其所有子组件;include属性值为组件名,传多个时如-> :include="['News','Message']"-->
            <keep-alive include="News">
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
};
</script>
