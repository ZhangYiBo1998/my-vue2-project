<template>
    <div class="App bg-image bg-skyblue">
        <router-view></router-view>
    </div>
</template>

<script>
import { getCookie } from "./utils/index";
import { indexRouter } from "./router/index";

export default {
    name: "App",
    components: {},
    mounted() {
        if (getCookie("userInfo")) {
            this.$router.replace(
                {
                    path: indexRouter,
                },
                () => {}
            );
        } else {
            this.$router.replace(
                {
                    path: "/login",
                },
                () => {}
            );
        }
    },
};
</script>

<style>
body {
    margin: 0;
}

.App {
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
}

.fontSize-small {
    font-size: 12px;
}

.bg-skyblue {
    background-color: skyblue;
}

.bg-image {
    background: url(./assets/nekos.jpg) no-repeat;
    background-size: 100% auto;
}
</style>
