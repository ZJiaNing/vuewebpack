<template>
  <div class="">
    <section class="article-detail">
      <h2>发现最好的你-设计中如何打造最合适的组件</h2>
      <h3><span><i class="icon icon-user"></i>Ada</span><span><i class="icon icon-date"></i>2016-12-12</span></h3>
      <div class="word">
        <img src="../assets/images/books.jpg" alt="">
        <p>模块大家应该都不陌生，任何一个完整的界面，都会有多个功能模块，而每个模块内有相应的组件，每个组件中又有相应的元素，其中任何一点的变化，都会使用户对产品的认知发生改变。模块并不是一个新的概念，早在20世纪初期的建筑行业中，将建筑按照功能分成可以自由组合的建筑单元的概念就已经存在，同样也出现在早期的产品设计中，并且许多产品的设计都能将其很好运用，包括汽车，电脑，电器，鞋子等等。（如下图）</p>
      </div>
    </section>
    <comment></comment>
  </div>
</template>


<script type="text/javascript">
import Comment from './Comment'
export default {
  name: 'detail',
  data () {
    return {
      msg: 'this is article detail'
    }
  },
  methods: {
  },
  components: {
    'comment': Comment
  }
}
</script>

<style lang="scss">
.icon-user{
  background-image: url('../assets/images/user.png');
}
.icon-date{
  background-image: url('../assets/images/calendar.png');
}
.article-detail{
  background-color: white;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  min-height: 400px;
  margin-bottom: 20px;
  padding: 15px;

  & h2{
    line-height: 26px;
    font-size: 26px;
    font-weight: normal;
  }

  & h2::before{
    content: '';
    width: 3px;
    display: inline-block;
    background-color: #ff8400;
    height: 26px;
    vertical-align: bottom;
    margin-right: 5px;
  }

  & h3{
    font-size: 16px;
    font-weight: normal;
    text-align: right;

    & > span{
      padding: 0 20px;

      & > i{
        width: 16px;
        height: 16px;
        display: inline-block;
        margin-right: 5px;
      }
    }
  }

  & .word{
    margin-top: 15px;

    & img{
      width: 975px;
      height: 250px;
    }

    & p{
      line-height: 30px;
      text-indent: 22px;
      text-align: justify;
    }
  }
}
</style>
