<template>
    <div class="homePage">
        <UserHead />
        <div class="page-box">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import UserHead from "../components/UserHead";

export default {
    name: "Home",
    components: {
        UserHead,
    },
    // 简单声明接收 props:['name','age']
    // 接收的同时对数据进行类型限制 props:{ name:String, age:Number }
    // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
    // props:{ name:{ type:String, required:true }, age:{ type:Number, default:99 } }
    props: [],
    data() {
        return {};
    },
    // 计算属性
    computed: {},
    // 监听属性
    watch: {},
    // 组件挂载完毕
    mounted() {},
    // 组件将要卸载
    beforeDestroy() {},
    // 定义函数
    methods: {},
};
</script>

<style lang="less" scoped>
.homePage {
    margin: 0;
    padding: 70px 0 0 0;
    width: 100%;
    height: calc(100% - 70px);
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .page-box {
    width: 100%;
    height: 100%;
    background-color: #fff;
    /* margin: 10px; */
    border-radius: 10px;
    box-shadow: rgba(128, 128, 128, 0.5) 8px 8px 100px;
    display: flex;
    flex-direction: row;
}
}

.homePage .page-body {
    padding: 20px;
    width: 100%;
    overflow: auto;
}

/* 隐藏垂直滚动条 */
.homePage .page-body::-webkit-scrollbar {
    display: none;
}
</style>
