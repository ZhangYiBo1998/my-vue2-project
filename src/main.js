import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import store from './store';
//完整引入
// 引入ElementUI组件库
import ElementUI from 'element-ui';
// 引入ElementUI全部样式
import 'element-ui/lib/theme-chalk/index.css';
//按需引入
// import { Button,Row,DatePicker } from 'element-ui';


// 关闭生产环境提示
Vue.config.productionTip = false;
Vue.use(VueRouter)

//应用ElementUI
Vue.use(ElementUI);

// 按需引入
// Vue.component(Button.name, Button);
// Vue.component(Row.name, Row);
// Vue.component(DatePicker.name, DatePicker);

new Vue({
  render: h => h(App),
  store,
  router,
  beforeCreate() {
    // 在Vue原型上增加一个自定义字段，名为$bus
    // 将$bus字段的值设置为vue实例对象，目的是让所有组件都能访问和使用
    // 即全局事件总线（各组件之间进行数据传递）
    Vue.prototype.$bus = this;
  },
}).$mount('#app')
