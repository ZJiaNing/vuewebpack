<template>
  <div class="">
    <section id="" class="nav">
      <!-- 简单的条件切换 starts -->
      <label>
        <!-- 可以使用watch去监听type，当type发生改变的额时候自然就调用相关的函数，去更新视图 -->
        <select class="" name="" v-model="type">
          <option value="HTML">HTML</option>
          <option value="Javascript">Javascript</option>
          <option value="CSS">CSS</option>
        </select>
      </label>
      <!-- 简单的条件切换 ends -->
      <!-- 简单的做了一个toggle事件去控制切换 -->
      <a href="javascript: void(0);" class="icon" v-bind:class="{ 'icon-list' : isFold, 'icon-menu': !isFold}" @click="toggle"></a>
      <!-- <a href="javascript: void(0);" class="icon icon-menu" @click="toggle"></a> -->
    </section>
    <ul v-bind:class="{ 'fold' : isFold, 'list': !isFold}">
      <li v-for="item in listData">
        <router-link :to="{ name: 'Detail', params: {id: item.id}}">
          <div class="con">
            <!-- <img src="../assets/images/books.jpg" alt="" /> -->
            <img :src="item.src" />
            <p>发现最好的你-设计中如何打造最合适的组件<i></i></p>
            <p><i></i>{{item.date}}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
// 引入mock动态生成json数据
import Mock from 'mockjs'
// var Mock = require('mockjs')

export default {
  name: 'articlelist',
  props: ['typeData'],
  data: function() {
    return {
      msg: 'This is Collection Page!',
      isFold: true,
      listData: {},
      type: "HTML"
    }
  },
  created: function (){
    this.getListData(this.type);
  },
  methods: {
    getListData: function (type){
      console.log('getListData: ' + type);
      console.log('you are ask for article list data!');
      // 设置一个局部变量来接收this，可以减少作用域的检索
      var vm = this
      Mock.mock('http://g.cn', {
        'list|10': [{
          'id|+1': 1,
          'flowername': 'ROSE',
          'src': Mock.Random.dataImage('462x174', 'Hello, CAT'),  // 这个地址是网络地址，不知道能不能直接用呢
          'description': Mock.Random.sentence(),
          'date': Mock.mock('@date()')
        }]
      });

      // 获取数据的几种方式
      // NO1.  jQuery的ajax请求，NONONO~~~

      // NO.2  使用http方式去请求数据
      // vm.$http.get('http://g.cn')
      // .then((response) => {
      //   console.log('this is the right side');
      //   console.log(response);
      //
      //   vm.listData = response.data.list;
      //   console.log('dddd');
      //   console.log(vm.listData);
      //   }).catch(function(response) {
      //       console.log('some thing happens wrong.');
      //       console.log(response)
      //   });

      // NO.3 使用Resource请求数据的方法
      // 之前尝试的时候一直没有成功，但是我找不到原因，，，，这次就可以了，，，啥意思呢？？
      // resource的几种方式，GET方法是其中的一种
      var resource = vm.$resource('http://g.cn');
      resource.get()
        .then(response => {
          vm.listData = response.data.list;
          console.log('the right side is: ');
          console.log(vm.listData);
        })
        .catch(response => {
          console.log('some thing happens wrong.');
        })
    },
    toggle: function (){
      // 这个函数用来控制fold和list的切换。。。这边仅仅是修改ul的样式，，，并不涉及到重新
      // 进行视图的切换，因为那样的话会重新进行数据的请求
      this.isFold = !this.isFold;
    },
    // searchArticles: function (v){
    //   var vm = this;
    //   // 是这样做的吗？我有一丝丝怀疑
    //   var val = v.target.value;
    //   console.log('the current value you got is: ' + val);
    //   vm.getListData(val);
    // }
  },
  watch: {
    'type': {
      handler: function (val, oldval){
        // 如果使用箭头函数的话，this的指向是会丢失的，，这个应该怎么解决吧，总不至于不能使用箭头函数了吧
        var vm = this;
        console.log('watching: ' + val);
        vm.getListData(val);
      },
      deep: true  // 深度观察
    }
  }
}
</script>

<!-- query && params 的区别 -->
<!-- query顾名思义就是查询嘛，所以就是URL中?后面的部分， params的访问方式就是RESTFUL的风格 -->
<!-- 20161130：The reason is arrow functions bind the parent context, so this will not be the Vue instance as you expect -->
