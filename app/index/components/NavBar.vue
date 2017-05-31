<template>
    <header>
      <img src="../assets/images/cat.jpg" />
      <ul>
        <!-- 切换状态，方法一:这种方法一开始用的时候，我就不喜欢，嘻嘻嘻，本着一颗简单的心，阅读文档，找到了方法二  -->
        <!-- <li v-for="(item, index) in items" :class="['list-item',item.active ? 'active' : '']" @click="active(index)"><router-link :to='item.text'>{{item.text}}</router-link></li> -->
        <!-- 切换状态，方法二：利用router-link自身的属性，但是我还不知道去哪里全局配置linkActiveClass  -->

        <li><router-link :to="{ path: '/home', activeClass: 'active'}">HOME</router-link></li>
        <li><router-link :to="{ path: '/article/list', activeClass: 'active'}">Articles</router-link></li>
        <li><router-link :to="{ path: '/Links', activeClass: 'active'}">Links</router-link></li>
        <li><router-link :to="{ path: '/About', activeClass: 'active'}">About</router-link></li>
      </ul>
    </header>

</template>

<script>
  // nav 是vue的保留name，不允许使用
  export default {
    name: 'navbar',
    data () {
      return {
        msg: 'This is Collection Page!'
        // 方法一的数据源
        // items: [
        //   {text: 'HOME', href: '/Home', active: true},
        //   {text: 'COLLECTION', href: '/Collection', active: false},
        //   {text: 'ABOUT', href: '/About', active: false},
        //   {text: 'CONTACT', href: '/Contact', active: false}
        // ]
      }
    },
    methods: {
      // 方法一的active方法
      // active: function (index) {
      //   this.items.forEach(function (item, i) {
      //     if (i === index) {
      //       item.active = true
      //     } else {
      //       item.active = false
      //     }
      //   })
      // }
    }
  }
</script>
<style lang="scss">
  header{
    background-color: white;
    border-bottom: 1px solid #dfdfdf;
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    z-index: 11;

    & img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid #ff8400;
      position: absolute;
      left: 40px;
      top: 5px;
    }

    & ul{
      margin: 0;
      padding: 0;
      height: 60px;
      line-height: 60px;
      /*text-align: right;*/
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;

      -webkit-flex-flow: row wrap;
      justify-content: flex-end;

      & li{
        position: relative;
        display: inline-block;
        padding: 0 20px;
        color: #ff8400;
        font-weight: bold;
        cursor: pointer;
        text-align: right;
        -webkit-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 0.5s;
        transition-duration: 0.5s;

        & a{
          color: #ff8400;
        }

        & a.router-link-active{
          font-weight: bolder;
        }
      }

      & li::before{
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ff8400;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%;
        transition-property: transform;
        -webkit-transition-duration: 0.5s;
        transition-duration: 0.5s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
      }

      & li:hover{
        & a{
          color: white;
        }

        &::before{
          -webkit-transform: scaleX(1);
          transform: scaleX(1);
        }
      }
    }
  }
</style>
