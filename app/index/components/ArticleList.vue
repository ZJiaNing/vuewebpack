<template>
  <div class="">
    <section id="" class="nav">
      <a href="#" class="icon icon-list"></a>
      <a href="#" class="icon icon-menu"></a>
    </section>
    <ul class="fold">
      <li>
        <!-- <router-link :to="{ path: '/article/detail', activeClass: 'active'}">HOME</router-link> -->
        <router-link :to="{ name: 'Detail', params: {id: 1}}">
          <div class="con">
            <img src="../assets/images/books.jpg" alt="" />
            <p>发现最好的你-设计中如何打造最合适的组件<i></i></p>
            <p><i></i>2016-12-12</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Detail', params: {id: 2}}">
          <div class="con">
            <img src="../assets/images/books.jpg" alt="" />
            <p>发现最好的你-设计中如何打造最合适的组件<i></i></p>
            <p><i></i>2016-12-12</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Detail', params: {id: 3}}">
          <div class="con">
            <img src="../assets/images/books.jpg" alt="" />
            <p>发现最好的你-设计中如何打造最合适的组件<i></i></p>
            <p><i></i>2016-12-12</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Detail', params: {id: 4}}">
          <div class="con">
            <img src="../assets/images/books.jpg" alt="" />
            <p>发现最好的你-设计中如何打造最合适的组件<i></i></p>
            <p><i></i>2016-12-12</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Detail', params: {id: 5}}">
          <div class="con">
            <img src="../assets/images/books.jpg" alt="" />
            <p>发现最好的你-设计中如何打造最合适的组件<i></i></p>
            <p><i></i>2016-12-12</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'articlelist',
  data () {
    return {
      msg: 'This is Collection Page!'
    }
  },
  methods: {
  }
}
</script>

<!-- query && params 的区别 -->
<!-- query顾名思义就是查询嘛，所以就是URL中?后面的部分， params的访问方式就是RESTFUL的风格 -->
