<template>
  <div class="article-comment">
    <div class="note">
        <div class="avatar">
            <div class="avatar-inner"></div>
        </div>
        <div class="note-content">
            <h3>爪哇国的little rabit</h3>
            <p>小么小二郎呀，背着书包上学堂，不怕风雨吹，不怕太阳晒，我是一只来自爪哇国的小兔子，我的名字叫Little rabit。小么小二郎呀，背着书包上学堂，不怕风雨吹，不怕太阳晒，我是一只来自爪哇国的小兔子，我的名字叫Little rabit。</p>
            <p class="note-info">
                <time>2016-06-15</time>
                <i class="heart"></i>
            </p>
        </div>
    </div>
    <div class="note">
        <div class="avatar">
            <div class="avatar-inner"></div>
        </div>
        <div class="note-content">
            <h3>爪哇国的little rabit</h3>
            <p>小么小二郎呀，背着书包上学堂，不怕风雨吹，不怕太阳晒，我是一只来自爪哇国的小兔子，我的名字叫Little rabit。小么小二郎呀，背着书包上学堂，不怕风雨吹，不怕太阳晒，我是一只来自爪哇国的小兔子，我的名字叫Little rabit。</p>
            <p class="note-info">
                <time>2016-06-15</time>
                <i class="heart"></i>
            </p>
        </div>
    </div>
    <div class="note">
        <div class="avatar">
            <div class="avatar-inner"></div>
        </div>
        <div class="note-content">
            <h3>爪哇国的little rabit</h3>
            <p>小么小二郎呀，背着书包上学堂，不怕风雨吹，不怕太阳晒，我是一只来自爪哇国的小兔子，我的名字叫Little rabit。小么小二郎呀，背着书包上学堂，不怕风雨吹，不怕太阳晒，我是一只来自爪哇国的小兔子，我的名字叫Little rabit。</p>
            <p class="note-info">
                <time>2016-06-15</time>
                <i class="heart"></i>
            </p>
        </div>
    </div>
    <div class="note">
        <div class="avatar">
            <div class="avatar-inner"></div>
        </div>
        <div class="note-content">
            <h3>爪哇国的little rabit</h3>
            <p>小么小二郎呀，背着书包上学堂，不怕风雨吹，不怕太阳晒，我是一只来自爪哇国的小兔子，我的名字叫Little rabit。小么小二郎呀，背着书包上学堂，不怕风雨吹，不怕太阳晒，我是一只来自爪哇国的小兔子，我的名字叫Little rabit。</p>
            <p class="note-info">
                <time>2016-06-15</time>
                <i class="heart"></i>
            </p>
        </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'comment'
}
</script>

<style lang="scss">
.article-comment::-webkit-scrollbar{
  width: 4px;
  height: 8px;
}
.article-comment::-webkit-scrollbar-thumb{
  /*background-color: #8eb94b;*/
  background-color: #ff8400;
  /*设置滚动条圆角*/
  border-radius: 4px;
}
.article-comment{
  background-color: white;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  max-height: 200px;
  overflow-y: scroll;
}
.note{
    width: 95%;
    /*min-height: 150px;*/
    padding: 10px 0;
}
.avatar{
    position: relative;
    top: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 2px solid #ff8400;
}
.avatar-inner{
    width: 40px;
    height: 40px;
    border-radius: 20px;
    left: 3px;
    top: 3px;
    position: relative;
    background-image: url("../assets/images/rabit.jpg");
    background-repeat: no-repeat;
    -webkit-background-size:contain;
    background-size:contain;
    -webkit-transition: transform 0.35s;
    transition: transform 0.35s;
}
/*如下面，前后两者必须是“父子”关系*/
.note:hover .avatar-inner{
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
}
.note-content{
    width: auto;
    margin-top: -50px;
    margin-left: 50px;
    padding:0 0 0 32px;
    border-radius: 10px;
    /*box-shadow: 0 1px 2px rgba(0,0,0,.15), 0 1px 0 rgba(255,255,255,.75) inset;*/
    box-shadow: 0 1px 2px rgba(255,132,0,1), 0 1px 0 rgba(255,132,0,.75) inset;

    & h3{
      margin:0;
      padding:10px 0;
      font-size:16px;
      font-weight:normal;
    }

    & p{
      margin:0px;
      font-size:12px;
      line-height: 22px;
    }
    & p.note-info{
      margin:3px 0;

      & i.heart{
        background-image: url("../assets/images/greay-heart.png");
        display: inline-block;
        width: 16px;
        height: 16px;
        background-repeat: no-repeat;
        background-size: contain;
        vertical-align: middle;
        cursor: pointer;
      }

      & i.heart:hover{
        background-image: url("../assets/images/pink-heart.png");
      }
    }
}

</style>
