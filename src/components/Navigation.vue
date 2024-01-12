<template>
    <div class="Navigation">
        <div class="head">
            <br />
            <VueLogo size="small" />
        </div>

        <div>
            <div class="el-radio-group-box">
                <el-radio-group
                    v-model="isCollapse"
                    style="margin-bottom: 20px"
                >
                    <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group>
            </div>
            <el-menu
                default-active="1-4-1"
                class="el-menu-vertical-demo"
                :collapse="isCollapse"
            >
                <div
                    :class="hideMenuClass"
                    v-for="item in navRouterArr"
                    :key="item.path"
                >
                    <el-menu-item
                        v-if="!(item.children && item.children.length)"
                        :index="item.path"
                        @click="navigateFuc(item.path)"
                    >
                        <i :class="item.meta.icon"></i>
                        <span slot="title">{{ item.meta.title }}</span>
                    </el-menu-item>

                    <el-submenu v-else :index="item.path">
                        <div slot="title">
                            <i :class="item.meta.icon"></i>
                            <span slot="title">{{ item.meta.title }}</span>
                        </div>
                        <el-menu-item-group>
                            <el-menu-item
                                v-for="it in item.children"
                                :key="it.path"
                                :index="it.path"
                                @click="navigateFuc(it.path)"
                            >
                                {{ it.meta.title }}
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </div>
            </el-menu>
        </div>
    </div>
</template>

<script>
import VueLogo from "./VueLogo";
import { navRouterArr } from "../router";

export default {
    name: "Navigation",
    components: { VueLogo },
    // 简单声明接收 props:['name','age']
    // 接收的同时对数据进行类型限制 props:{ name:String, age:Number }
    // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
    // props:{ name:{ type:String, required:true }, age:{ type:Number, default:99 } }
    props: [],
    data() {
        return {
            isCollapse: false,
            navRouterArr: navRouterArr,
        };
    },
    // 计算属性
    computed: {
        hideMenuClass() {
            return this.isCollapse ? "el-menu--collapse" : "";
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
        navigateFuc(path) {
            this.$router.push(path, () => {});
        },
    },
};
</script>

<style scoped>
.Navigation {
    overflow: auto;
    flex-shrink: 0;
}

.Navigation::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    display: none;
}

.Navigation .head {
    padding-bottom: 10px;
    border-bottom: #fff solid 1px;
}

.el-radio-group-box {
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
