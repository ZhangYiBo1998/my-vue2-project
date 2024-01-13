<template>
    <div class="hoverItem">
        <span class="icon">{{ icon }}</span>
        <span class="title">{{ title }}</span>
        <span class="count">{{ count }}</span>
    </div>
</template>

<script>
export default {
    name: "HoverItem",
    components: {},
    // 简单声明接收 props:['name','age']
    // 接收的同时对数据进行类型限制 props:{ name:String, age:Number }
    // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
    // props:{ name:{ type:String, required:true }, age:{ type:Number, default:99 } }
    props: ["icon", "title", "count"],
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
.hoverItem {
    min-width: 150px;
    height: 40px;
    display: flex;
    align-content: center;
    justify-content: space-around;
    background: #fff;
    border-radius: 8px;
    font-size: 12pt;
    position: relative;
    box-sizing: border-box;
    flex-wrap: wrap;
    cursor: pointer;

    span{
        line-height: 40px;
    }

    .icon {
        width: 25px;
        height: 25px;
    }
    
    .title {
        min-width: 4em;
        text-align: left;
    }

    .count {
        width: 40px;
        font-size: 14px;
        text-align: right;
    }
}
.hoverItem:hover {
    background: rgb(221, 218, 218);
}
</style>
