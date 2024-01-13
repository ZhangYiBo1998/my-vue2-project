<template>
    <div class="UserHead">
        <div class="left">
            <VueLogo class="logo" size="small"></VueLogo>

            <HoverOption title="主站" @click="toPage('/home/index')">
                <HoverItem
                    v-for="op in homeOptionArr"
                    :key="op.id"
                    :icon="op.icon"
                    :title="op.title"
                    :count="op.count"
                />
            </HoverOption>
            <HoverOption title="排行">
                <HoverItem
                    v-for="op in rankingList"
                    :key="op.id"
                    :icon="op.icon"
                    :title="op.title"
                    :count="op.count"
                />
            </HoverOption>
            <HoverOption title="直播"></HoverOption>
            <HoverOption title="会员购"> </HoverOption>
            <HoverOption title="漫画"> </HoverOption>
        </div>
        <div class="middle">
            <el-autocomplete
                popper-class="my-autocomplete"
                style="width: 100%"
                v-model="searchValue"
                :fetch-suggestions="querySearch"
                :placeholder="placeholder"
                @select="searchHandleSelect"
                @keyup.enter.native="handleIconClick"
            >
                <i
                    class="el-icon-search el-input__icon"
                    slot="suffix"
                    @click="handleIconClick"
                >
                </i>
                <template slot-scope="{ item }">
                    <div class="name">{{ item.value }}</div>
                </template>
            </el-autocomplete>
        </div>
        <div class="right">
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
            <div class="userContentBox">
                <HoverOption title="消息"> </HoverOption>
                <HoverOption title="动态"> </HoverOption>
                <HoverOption title="订阅"> </HoverOption>
                <HoverOption title="稍后再看"> </HoverOption>
                <HoverOption title="收藏"> </HoverOption>
                <HoverOption title="历史"> </HoverOption>
                <HoverOption title="创作中心"> </HoverOption>
            </div>
        </div>
    </div>
</template>

<script>
import VueLogo from "./VueLogo.vue";
import HoverOption from "./HoverOption.vue";
import HoverItem from "./HoverItem";

export default {
    name: "UserHead",
    components: {
        VueLogo,
        HoverOption,
        HoverItem,
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
            homeOptionArr: [
                {
                    id: 1,
                    icon: "",
                    title: "动画",
                    count: 12301,
                },
                {
                    id: 2,
                    icon: "",
                    title: "番剧",
                    count: 37,
                },
                {
                    id: 3,
                    icon: "",
                    title: "国创",
                    count: 2414,
                },
                {
                    id: 4,
                    icon: "",
                    title: "音乐",
                    count: 14049,
                },
                {
                    id: 5,
                    icon: "",
                    title: "舞蹈",
                    count: 3045,
                },
                {
                    id: 6,
                    icon: "",
                    title: "游戏",
                    count: 80432,
                },
                {
                    id: 7,
                    icon: "",
                    title: "知识",
                    count: 17372,
                },
            ],
            rankingList: [
                {
                    title: "综合热门",
                },
                {
                    title: "每周必看",
                },
                {
                    title: "入站必刷",
                },
                {
                    title: "排行榜",
                },
                {
                    title: "全站音乐榜",
                },
                {
                    title: "短剧榜",
                },
            ],
            searchHistory: [],
            searchValue: "",
        };
    },
    // 计算属性
    computed: {
        placeholder() {
            return this.searchHistory[0]?.value || "请输入搜索内容";
        },
    },
    // 监听属性
    watch: {},
    // 组件挂载完毕
    mounted() {
        this.searchHistory = JSON.parse(
            localStorage.getItem("searchHistory") || "[]"
        );
    },
    // 组件将要卸载
    beforeDestroy() {},
    // 定义函数
    methods: {
        toPage(path) {
            this.$router.push(path, () => {});
        },
        searchHandleSelect(key) {
            console.log("searchHandleSelect", key.value);
        },
        // 搜索框输入结束触发
        querySearch(value, callback) {
            console.log("querySearch", value);
            var searchHistory = this.searchHistory;
            var results = value
                ? searchHistory.filter(this.createFilter(value))
                : searchHistory;
            // 调用 callback 返回建议列表的数据
            callback(results);
        },
        createFilter(value) {
            console.log("createFilter");
            return (item) => {
                return (
                    item.value.toLowerCase().indexOf(value.toLowerCase()) === 0
                );
            };
        },
        // 点击搜索图标触发
        handleIconClick() {
            console.log("handleIconClick");
            let setArr = new Set([]);
            this.searchHistory.forEach((item) => {
                setArr.add(item.value);
            });

            setArr.add(this.searchValue);
            if (setArr.size > this.searchHistory.length) {
                this.searchHistory.unshift({
                    value: this.searchValue,
                });
                localStorage.setItem(
                    "searchHistory",
                    JSON.stringify(this.searchHistory)
                );
            }
        },
    },
};
</script>

<style lang="less" scoped>
.UserHead {
    width: 100%;
    height: 65px;
    background-color: #fff;
    box-shadow: rgba(128, 128, 128, 0.5) 8px 8px 30px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .left {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .logo {
            margin-right: 20px;
        }
    }

    .middle {
        max-width: 25%;
        min-width: 200px;
        .my-autocomplete {
            li {
                line-height: normal;
                padding: 7px;

                .name {
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                .addr {
                    font-size: 12px;
                    color: #b4b4b4;
                }

                .highlighted .addr {
                    color: #ddd;
                }
            }
        }
    }

    .right {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .imgBox {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 10px;
            background: #a9a7a7;
            display: flex;
            justify-content: center;
            align-items: center;

            i {
                transform: scale(2);
                color: white;
            }
        }

        .userContentBox {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin-bottom: 4px;
            margin-right: 10px;
        }
    }
}
</style>
