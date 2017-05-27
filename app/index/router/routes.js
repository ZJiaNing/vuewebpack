import Home from '../components/Home'
import ArticleList from '../components/ArticleList'

// 我们晚点在讨论嵌套路由。
const routes = [{
  path: '/home',
  component: Home
}, {
  path: '/article',
  component: ArticleList
}, {
  path: '*',
  redirect: '/home'
}]
