<template>
  <div id="app">
    <navbar></navbar>
    <div class="router-container">
      <router-view></router-view>
    </div>
    <blogfooter></blogfooter>
  </div>
</template>

<script>
import NavBar from './NavBar'
import BlogFooter from './BlogFooter'
export default {
  name: 'app',
  data: function () {
    return {
      msg: 'Welcome to the Flower Shop',
      hlw: 'hello, world!'
    }
  },
  components: {
    'navbar': NavBar,   // 或者可以这么写： 'topbar': Topbar
    'blogfooter': BlogFooter
  }
}
</script>

<style lang="scss">
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body{
  background-color: #f6f1ea;
  font-family: "helvetica neue",arial,sans-serif;
  /*#09c 某个漂亮的蓝色*/
}
/*设置滚动条的宽高，width控制纵向滚动条宽度，height同理.*/
body::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}
/*设置拖动条的样式*/
body::-webkit-scrollbar-thumb{
    background-color: #ff8400;
    /*设置滚动条圆角*/
    border-radius: 4px;
}
/*设置滚动条轨道*/
body::-webkit-scrollbar-track{
    background-color: rgb(255,255,255);
    border-radius: 4px;
}
/*设置滚动条被点下时的样式*/
body::-webkit-scrollbar-thumb:active{
    background-color: #ccc;
}
ul{
  list-style: none;
}
a{
  text-decoration: none;
  color: #000000;
}
.main-wrap{

}
.container{
  width: 1280px;
  height: auto;
  position: relative;
  /*background-color: pink;*/
  margin: 0 auto;
}
.w-per-50{
  width: 50%;
}
.w-per-80{
  width: 80%;
}
.mar-tt-20{
  margin: 20px 0;
}
.mar-t-73{
  margin-top:73px!important;
}
.div-flex{
  display: flex;
}
.fl-r{
  float: right;
}
.fl-l{
  float: left;
}
</style>
