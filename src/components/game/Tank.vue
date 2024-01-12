<template>
    <div>Tank</div>
</template>

<script>

export default {
    name: "Tank",
    components: {},
    // 简单声明接收 props:['name','age']
    // 接收的同时对数据进行类型限制 props:{ name:String, age:Number }
    // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
    // props:{ name:{ type:String, required:true }, age:{ type:Number, default:99 } }
    props:[],
    data() {
        return {
            
        }
    },
    // 计算属性
    computed: {
        
    },
    // 监听属性
    watch: {
        
    },
    // 组件挂载完毕
    mounted() {},
    // 组件将要卸载
    beforeDestroy() {},
    // 定义函数
    methods: {
        
    },
};

</script>

<style scoped>

</style>