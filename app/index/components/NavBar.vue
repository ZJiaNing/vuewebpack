<template>
  <div>
      <ul>
        <!-- 切换状态，方法一:这种方法一开始用的时候，我就不喜欢，嘻嘻嘻，本着一颗简单的心，阅读文档，找到了方法二  -->
        <!-- <li v-for="(item, index) in items" :class="['list-item',item.active ? 'active' : '']" @click="active(index)"><router-link :to='item.text'>{{item.text}}</router-link></li> -->
        <!-- 切换状态，方法二：利用router-link自身的属性，但是我还不知道去哪里全局配置linkActiveClass  -->
        <!-- <li><router-link :to="{ path: '/Home', activeClass: 'active'}">HOME</router-link></li>
        <li><router-link :to="{ path: '/Collection', activeClass: 'active'}">COLLECTION</router-link></li>
        <li><router-link :to="{ path: '/About', activeClass: 'active'}">ABOUT</router-link></li>
        <li><router-link :to="{ path: '/Cart', activeClass: 'active'}">CART</router-link></li> -->
        <li><h2>Home</h2></li>
        <li>Article</li>
        <li>Link</li>
        <li>About</li>
      </ul>
      <div class="my-container">
        <h1>Hello, world!</h1>
        <h3>wahahahah</h3>
      </div>
  </div>
</template>

<script>
  // nav 是vue的保留name，不允许使用
  import '../assets/scss/fan'
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
