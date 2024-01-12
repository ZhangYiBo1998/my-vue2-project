import VueRouter from 'vue-router';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SettingCenter from '../pages/SettingCenter';
import UserCenter from '../pages/UserCenter';


import AboutMe from '../components/AboutMe';
import Game from '../components/game/Game';
import Gobang from '../components/game/Gobang';
import Tank from '../components/game/Tank';
import Initialization from '../components/Initialization';
import SVGStudy from '../components/SVGStudy';
import VuexDemo from '../components/VuexDemo';
import WXModuleTool from '../components/WXModuleTool';

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
        name: "VuexDemo",
        path: "/home/VuexDemo",
        component: VuexDemo,
        meta: {
            title: "VuexDemo案例",
            icon: "el-icon-s-order",
        }
    },
    {
        name: "game",
        path: "/home/game",
        component: Game,
        meta: {
            title: "游戏",
            icon: "el-icon-menu",
        },
        children: [
            {
                name: "gobang",
                path: "/home/game/gobang",
                component: Gobang,
                meta: {
                    title: "五子棋",
                },
            },
            {
                name: "tank",
                path: "/home/game/tank",
                component: Tank,
                meta: {
                    title: "坦克大战",
                },
            },
        ],
    },
    {
        name: "SVGStudy",
        path: "/home/SVGStudy",
        component: SVGStudy,
        meta: {
            title: "SVG练习",
            icon: "el-icon-s-marketing",
        },
    },
    {
        name: "WXModuleTool",
        path: "/home/WXModuleTool",
        component: WXModuleTool,
        meta: {
            title: "微信链接工具",
            icon: "el-icon-s-data",
        },
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