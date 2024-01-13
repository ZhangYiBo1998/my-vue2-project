import VueRouter from 'vue-router';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SettingCenter from '../pages/SettingCenter';
import UserCenter from '../pages/UserCenter';


import AboutMe from '../components/AboutMe';
import Initialization from '../components/Initialization';

export const navRouterArr = [
    {
        name: "index",
        path: "/home/index",
        component: Initialization,
        meta: {
            title: "首页",
            icon: "el-icon-s-home",
        }
    },
    {
        name: "about",
        path: "/home/about",
        component: AboutMe,
        meta: {
            title: "关于我",
            icon: "el-icon-s-comment",
        },
    },
]

export const indexRouter = navRouterArr[0].path;

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            name: "home",
            path: "/home",
            component: Home,
            children: navRouterArr,
            meta: {
                title: "首页",
            }
        },
        {
            path: "/login",
            component: Login,
            meta: {
                title: "登录",
            }
        },
        {
            name: "个人中心",
            path: "/userCenter",
            component: UserCenter,
            meta: {
                title: "个人中心",
            }
        },
        {
            name: "设置中心",
            path: "/settingCenter",
            component: SettingCenter,
            meta: {
                title: "设置中心",
            }
        },
    ]
})

//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to) => {
    // console.log('后置路由守卫', to, from)
    document.title = to.meta.title || 'my-vue2-project'
})

export default router;