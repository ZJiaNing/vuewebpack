<template>
  <div class="container">
    <!-- the banner starts -->
    <section class="banner">
      <div class="top-bk"></div>
    </section>
    <!-- the banner ends -->
    <!-- the seach starts -->
    <section class="search div-flex">
      <div class="w-per-50">
        <h2>Discover and create how-to guides</h2>
        <h2>on all your favorite topics.</h2>
      </div>
      <div class="w-per-50">
        <div class="btn-wrap">
          <button type="button" name="button">Visit me On Github</button>
        </div>
      </div>
    </section>
    <!-- the search ends -->
    <!-- the list starts -->
    <!-- think about seperating it or not later... -->
    <section class="book-list">
      <ul class="">
        <li class="book-bk">
          <a href="#"><span class="tips">生而有所为</span></a>
        </li><li class="bookshelf-bk">
          <a href="#"><span class="tips">生而有所为</span></a>
        </li><li class="bookhand-bk"><a href="#"><span class="tips">生而有所为</span></a></li><li class="bookhand-bk"><a href="#"><span class="tips">生而有所为</span></a></li><li class="bookhand-bk"><a href="#"><span class="tips">生而有所为</span></a></li><li class="book-bk">
          <a href="#"><span class="tips">生而有所为</span></a>
        </li><li class="bookshelf-bk">
          <a href="#"><span class="tips">生而有所为</span></a>
        </li>
      </ul>
    </section>
    <!-- the list ends -->
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'home',
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
.banner{
  width:100%;
  height: 500px;

  & .top-bk{
    width: 100%;
    height: 100%;
    display: inline-block;
    overflow: hidden;
    position: relative;
    background-image: url('../assets/images/top_bg.jpg');
    background-size: cover;
    background-position: center;
    transition: .3s background-image;
    -webkit-transition: .3s background-image;
  }
}

.search{
  width: 100%;
  height: 100px;
  background-color: #ffffff;

  & h2{
    line-height: 50px;
    padding-left: 50px;
    color: rgb(142,185,75)
  }

  & .btn-wrap{
    text-align: right;
    padding-right: 50px;
    padding-top: 20px;
  }

  & button{
    border: none;
    outline: none;
    background-color: #ff8400;
    width: 150px;
    height: 60px;
    color: #ffffff;
    font-size: 16px;
    border-radius: 4px;
  }
}

.book-list{
  & ul li{
    position: relative;
    height: 390px;
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;

    & a{
      width: 100%;
      height: 100%;
      display: inline-block;
    }

    & a:hover{
      background-color: rgba(255, 132, 0, 0.8);
    }

    & .tips{
      position: absolute;
      bottom: 20px;
      left: 10px;
      font-size: 16px;
      color: #ffffff;
      font-weight: bold;
    }
  }

  & ul li:nth-child(1), & ul li:nth-child(7){
    width: 66.666%;
  }

  & ul li:nth-child(2), & ul li:nth-child(6){
    width: 33.333%;
  }

  & ul li:nth-child(3), & ul li:nth-child(4), & ul li:nth-child(5){
    width: 33.333%;
  }
}
.book-bk{
  background-image:url('../assets/images/books.jpg')
}
.bookshelf-bk{
  background-image:url('../assets/images/bookshelf.jpeg')
}
.bookhand-bk{
  background-image: url('../assets/images/bookhand.jpeg');
}

</style>
