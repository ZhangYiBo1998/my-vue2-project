<template>
    <div class="VueLogo">
        <header class="App-header">
            <img :src="logo" class="App-logo" :class="`${size} ${animationClass}`" alt="logo" />
        </header>
    </div>
</template>

<script>
export default {
    name: "VueLogo",
    components: {},
    // 简单声明接收 props:['name','age']
    // 接收的同时对数据进行类型限制 props:{ name:String, age:Number }
    // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
    // props:{ name:{ type:String, required:true }, age:{ type:Number, default:99 } }
    props: ['size',"animation"],
    data() {
        return {
            logo: "/logo.png",
        };
    },
    // 计算属性
    computed: {
        animationClass(){
            return this.animation ? 'animation' : '';
        }
    },
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

<style scoped>
.VueLogo {
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.VueLogo .App-logo {
    height: 15vmin;
    pointer-events: none;
}

.VueLogo .small {
    height: 6vmin;
    pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
    /* .VueLogo .App-logo { */
    .VueLogo .animation {
        -webkit-animation: App-logo-spin infinite 20s linear;
        animation: App-logo-spin infinite 20s linear;
    }
}

.VueLogo .App-header {
    /* min-height: 100vh; */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
}

@-webkit-keyframes App-logo-spin {
    from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes App-logo-spin {
    from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>
