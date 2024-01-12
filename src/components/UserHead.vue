<template>
    <div class="UserHead">
        <div class="logoBox">
            <VueLogo size='small'></VueLogo>
        </div>
        <div class="right">
            <div class="userInfo">
                <div class="imgBox">
                    <!-- 设置头像 因为是本地图片，只能使用此方法动态加载，网络图片直接可以使用链接 -->
                    <img
                        v-if="userInfo.img"
                        style="width: 50px; height: 50px; border-radius: 50%"
                        :src="userInfo.img"
                        alt=""
                    />
                    <i v-else class="el-icon-user"></i>
                </div>
                <div class="userName">
                    <el-dropdown @command="handleMenuClick">
                        <span class="el-dropdown-link">
                            <i class="el-icon-more-outline"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="userCenter">
                                个人中心
                            </el-dropdown-item>
                            <el-dropdown-item command="settingCenter">
                                设置
                            </el-dropdown-item>
                            <el-dropdown-item command="Github">
                                Github
                            </el-dropdown-item>
                            <el-dropdown-item command="signOut">
                                退出帐号
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueLogo from './VueLogo.vue';

export default {
    name: "UserHead",
    components: {
        VueLogo
    },
    // 简单声明接收 props:['name','age']
    // 接收的同时对数据进行类型限制 props:{ name:String, age:Number }
    // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
    // props:{ name:{ type:String, required:true }, age:{ type:Number, default:99 } }
    props: [],
    data() {
        return {
            userInfo: {
                img: "/headImg.jpg",
            },
        };
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
    methods: {
        handleMenuClick(key) {
            switch (key) {
                case "Github":
                    window.open(
                        "https://github.com/ZhangYiBo1998/my-vue2-project"
                    );
                    break;
                case "signOut":
                    this.$router.push('/login');
                    break;
                default:
                    this.$router.push(`/${key}`);
                    break;
            }
        },
    },
};
</script>

<style scoped>
.UserHead {
    width: 100%;
    height: 65px;
    background-color: #fff;
    -webkit-box-shadow: rgba(128, 128, 128, 0.5) 8px 8px 30px;
    box-shadow: rgba(128, 128, 128, 0.5) 8px 8px 30px;
    position: fixed;
    top: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.UserHead .right {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
}

.UserHead .userInfo {
    margin-right: 10px;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
}

.UserHead .userInfo .imgBox {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
    background: #a9a7a7;
    display: flex;
    justify-content: center;
    align-items: center;
}

.UserHead .userInfo .imgBox i{
    transform: scale(2);
    color: white;
}

.UserHead .userInfo .userName {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: 4px;
    margin-right: 10px;
}

.UserHead .userInfo .userName button {
    border: none;
    background-color: rgb(245, 245, 245);
}

.UserHead .userInfo .userName .more {
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
}

.UserHead .userInfo .userName .el-icon-more-outline {
    transform: rotate(90deg);
}
</style>
