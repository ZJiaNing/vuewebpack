// 因为这边使用了import，这个是es6的语法，所以需要使用babel去编译

// 这份是入口文件，在这份文件中创建“根Vue”
// 感情能不能再仔细一点呢？你连大小写都不分的吗？
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './components/App'

import Home from './components/Home'
import routes from './router/routes'

// 注册插件
Vue.use(VueRouter);
Vue.use(VueResource);

// 引入路由
const router = new VueRouter({
  routes
});

Vue.config.debug = true;//开启错误提示

new Vue({
  router,
  // ES6新语法，箭头函数
  render: h => h(App)
}).$mount('#app')
