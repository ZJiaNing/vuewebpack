import Home from '../components/Home'
import Article from '../components/Article'
import ArticleList from '../components/ArticleList'
import ArticleDetail from '../components/ArticleDetail'



// 我们晚点在讨论嵌套路由。
// 这次进行嵌套路由比较清楚，，增加一个children就可以了
const routes = [{
  path: '/home',
  component: Home
}, {
  path: '/article',
  component: Article,
  children: [{
    path: 'list',
    component: ArticleList
  }, {
    path: 'detail/:id/',
    name: 'Detail',
    component: ArticleDetail
  }]
}, {
  path: '*',
  redirect: '/home'
}]

export default routes

// 或者这么写 export {routes}
