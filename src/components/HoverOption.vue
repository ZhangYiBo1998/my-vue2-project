<template>
    <div class="tabItem" @mouseover="mouseover" @mouseleave="mouseleave">
        <p class="title">
            {{ title }}
        </p>
        <div class="hoverBox" :class="displayClass">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "HoverOption",
    components: {},
    // 简单声明接收 props:['name','age']
    // 接收的同时对数据进行类型限制 props:{ name:String, age:Number }
    // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
    // props:{ name:{ type:String, required:true }, age:{ type:Number, default:99 } }
    props: ["title"],
    data() {
        return {
            display: false,
        };
    },
    // 计算属性
    computed: {
        displayClass() {
            return this.display ? "showStyle" : "hideStyle";
        },
    },
    // 监听属性
    watch: {},
    // 组件挂载完毕
    mounted() {},
    // 组件将要卸载
    beforeDestroy() {},
    // 定义函数
    methods: {
        mouseover() {
            this.display = true;
        },
        mouseleave() {
            this.display = false;
        },
    },
};
</script>

<style lang="less" scoped>
.tabItem {
    max-height: 75vh;
    padding: 20px 0;
    cursor: pointer;
    .title {
        padding: 0 8px;
    }
    .hoverBox {
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
        border: 1px solid rgba(136, 136, 136, 0.1333333333);
        border-radius: 8px;
    }
    .showStyle {
        display: block;
        position: absolute;
        transform: translate(calc(-50% + 1.5em), 5px);
    }
    .hideStyle {
        display: none;
    }
}
</style>
