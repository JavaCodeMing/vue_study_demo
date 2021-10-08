<template>
    <!-- <transition name="todo" appear> -->
        <li>
            <label>
                <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
                <!-- 如下代码也能实现功能,但不推荐,因为修改了props,有点违反原则 -->
                <!-- <input type="checkbox" v-model="todo.done" /> -->
                <span v-show="!todo.isEdit">{{todo.title}}</span>
                <input
                    type="text"
                    v-show="todo.isEdit"
                    :value="todo.title"
                    @blur="handleBlur(todo, $event)"
                    ref="inputTitle"
                />
            </label>
            <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
            <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
        </li>
    <!-- </transition> -->
</template>

<script>
import pubsub from "pubsub-js";
export default {
    name: "MyItem",
    // 声明接收todo对象
    props: ["todo"],
    methods: {
        // 勾选或取消勾选
        handleCheck(id) {
            this.$bus.$emit("checkTodo", id);
        },
        // 删除
        handleDelete(id) {
            if (confirm("确认删除吗？")) {
                //this.$bus.$emit('deleteTodo',id)
                pubsub.publish("deleteTodo", id);
            }
        },
        // 编辑
        handleEdit(todo) {
            // todo.isEdit = true   //这样修改不会生成响应式的get和set方法
            if (todo.hasOwnProperty("isEdit")) {
                todo.isEdit = true;
            } else {
                console.log("todo身上没有isEdit");
                this.$set(todo, "isEdit", true);
            }
            // this.$refs.inputTitle.focus()    //此时还没有修改模板,无法获取到焦点
            // $nextTick会在DOM节点更新完成之后执行
            this.$nextTick(function () {
                this.$refs.inputTitle.focus();
            });
        },
        // 处理input失去焦点
        handleBlur(todo, e) {
            todo.isEdit = false;
            if (!e.target.value.trim()) return alert("不能输入为空！");
            this.$bus.$emit("updateTodo", todo.id, e.target.value);
        },
    },
};
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover {
    background-color: #ddd;
}

li:hover button {
    display: block;
}

.todo-enter-active{
    animation: atguigu 0.4s linear;
}
.todo-leave-active{
    animation: atguigu 0.4s linear reverse;
} 
@keyframes atguigu{
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0px);
    }
}
</style>