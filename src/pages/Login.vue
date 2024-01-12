<template>
    <div class="loginPage">
        <transition
            appear
            name="animate__animated"
            enter-active-class="animate__swing"
        >
            <div class="login-box">
                <div class="image-box">
                    <span class="title">WelCome!!!</span>
                </div>

                <!-- 使用element-ui的表单组件 -->
                <div>
                    <el-form
                        :model="userInfo"
                        ref="dynamicValidateForm"
                        label-width="100px"
                        class="demo-dynamic"
                    >
                        <el-form-item
                            label="用户名"
                            prop="userName"
                            :rules="[
                                {
                                    required: true,
                                    message: '请输入用户名',
                                    trigger: 'blur',
                                },
                            ]"
                        >
                            <el-input v-model="userInfo.userName"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="密码"
                            prop="password"
                            :rules="[
                                {
                                    required: true,
                                    message: '请输入密码',
                                    trigger: 'blur',
                                },
                            ]"
                        >
                            <el-input
                                type="password"
                                v-model="userInfo.password"
                                autocomplete="off"
                            ></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-checkbox v-model="userInfo.remember"
                                >备选项</el-checkbox
                            >
                        </el-form-item>
                        <el-form-item>
                            <el-button
                                type="primary"
                                @click="submitForm(userInfo)"
                            >
                                {{ loginBtnStr }}
                            </el-button>
                            <el-link
                                style="margin-left: 20px"
                                type="primary"
                                @click="changeLoginState"
                            >
                                {{ linkBtnStr }}
                            </el-link>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { proxy53000 } from "../utils/proxy_variable";
import { getCookie, saveCookie } from "../utils/index";
import axios from "axios";

export default {
    name: "Login",
    components: {},
    // 简单声明接收 props:['name','age']
    // 接收的同时对数据进行类型限制 props:{ name:String, age:Number }
    // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
    // props:{ name:{ type:String, required:true }, age:{ type:Number, default:99 } }
    props: [],
    data() {
        return {
            userInfo: {
                userName: "",
                password: "",
                remember: false,
            },
            isLogin: true,
        };
    },
    // 计算属性
    computed: {
        loginBtnStr() {
            return this.isLogin ? "登录" : "注册";
        },
        linkBtnStr() {
            return this.isLogin ? "去注册" : "去登录";
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
        submitForm(values) {
            console.log("submitForm", values);
            const vc = this;

            if (!(values.userName && values.password)) {
                return;
            }

            axios({
                method: "GET",
                url: `/${proxy53000}/user?userName=${values.userName}`,
            })
                .then((res) => {
                    const data = res.data[0] || {};
                    if (this.isLogin) {
                        // 登录
                        if (
                            data.userName === values.userName &&
                            data.password === values.password
                        ) {
                            // 储存cookie，以便检测是否登录
                            values.remember &&
                                saveCookie([
                                    {
                                        objKey: "userInfo",
                                        objValue: data,
                                    },
                                ]);

                            //跳转主页/home路由，replace()让用户登录后无法返回登录页
                            vc.$router.replace("/home");

                            vc.$message({
                                message: "登录成功",
                                type: "success",
                            });
                        } else {
                            vc.$message.error("登录失败");
                        }
                        return false;
                    } else {
                        //注册
                        if (data.userName) {
                            vc.$message.error("注册失败，用户已存在");
                            return false;
                        } else {
                            // 链式调用axios，避免回调地狱
                            return axios({
                                method: "post",
                                url: `/${proxy53000}/user`,
                                data: {
                                    userName: values.userName,
                                    password: values.password,
                                    power: "normal",
                                },
                            });
                        }
                    }
                })
                .then((res) => {
                    if (!res) {
                        // 如果返回false，则不执行后续代码
                        return;
                    }
                    vc.isLogin = true;
                    vc.$message({
                        message: "注册成功",
                        type: "success",
                    });
                })
                .catch((error) => {
                    console.log("错误信息：\n", error);
                });
        },
        changeLoginState() {
            this.isLogin = !this.isLogin;
        },
    },

    // 组件被激活
    activated() {
        if (getCookie("userInfo")) {
            this.$router("/home");
        }
    },
};
</script>

<style scoped>
.loginPage {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.loginPage .login-box {
    width: 450px;
    height: 450px;
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    border-radius: 25px;
    -webkit-animation: login-box-appear 1s linear forwards;
    animation: login-box-appear 1s linear forwards;
    opacity: 0.95;
}

@-webkit-keyframes login-box-appear {
    0% {
        -webkit-transform: rotate(0deg) scale(0.1, 0.1);
        transform: rotate(0deg) scale(0.1, 0.1);
        border-radius: 50%;
    }

    60% {
        -webkit-transform: rotate(0deg) scale(1, 1);
        transform: rotate(0deg) scale(1, 1);
        border-radius: 25px;
    }

    65% {
        -webkit-transform: rotate(5deg);
        transform: rotate(5deg);
        border-radius: 25px;
    }

    75% {
        width: 500px;
        height: 500px;
        -webkit-transform: rotate(-5deg);
        transform: rotate(-5deg);
        border-radius: 25px;
    }

    85% {
        width: 500px;
        height: 500px;
        -webkit-transform: rotate(5deg);
        transform: rotate(5deg);
        border-radius: 25px;
    }

    95% {
        width: 500px;
        height: 500px;
        -webkit-transform: rotate(-5deg);
        transform: rotate(-5deg);
        border-radius: 25px;
    }

    100% {
        width: 500px;
        height: 500px;
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        border-radius: 25px;
    }
}

@keyframes login-box-appear {
    0% {
        -webkit-transform: rotate(0deg) scale(0.1, 0.1);
        transform: rotate(0deg) scale(0.1, 0.1);
        border-radius: 50%;
    }

    60% {
        -webkit-transform: rotate(0deg) scale(1, 1);
        transform: rotate(0deg) scale(1, 1);
        border-radius: 25px;
    }

    65% {
        -webkit-transform: rotate(5deg);
        transform: rotate(5deg);
        border-radius: 25px;
    }

    75% {
        width: 500px;
        height: 500px;
        -webkit-transform: rotate(-5deg);
        transform: rotate(-5deg);
        border-radius: 25px;
    }

    85% {
        width: 500px;
        height: 500px;
        -webkit-transform: rotate(5deg);
        transform: rotate(5deg);
        border-radius: 25px;
    }

    95% {
        width: 500px;
        height: 500px;
        -webkit-transform: rotate(-5deg);
        transform: rotate(-5deg);
        border-radius: 25px;
    }

    100% {
        width: 500px;
        height: 500px;
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        border-radius: 25px;
    }
}

.loginPage .image-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 10px;
}

.loginPage .title {
    font-size: 3em;
}

.loginPage .option {
    margin-top: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.loginPage .option .text {
    width: 65px;
    /* text-align: right; */
    line-height: normal;
}

.loginPage .button-box {
    margin-top: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
</style>
