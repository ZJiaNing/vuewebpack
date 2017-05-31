<template>
  <div class="container mar-t-73">
    <section class="div-flex">
      <!-- main article list starts  -->
      <section class="article-list">
        <router-view></router-view>
      </section>
      <!-- main article list ends  -->
      <aside class="articlelist-aside">
        <p>P L A I N</p>
        <p>C O D E R</p>
        <p>B E T T E R</p>
        <p>F A S T E R</p>
        <p>T O G E T H E R</p>
        <button type="button" name="button">Visit me On Github</button>
      </aside>
    </section>
  </div>
</template>


<script>
export default {
  name: 'article',
  data () {
    return {
      msg: 'This is Collection Page!'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scope>
body{
  counter-reset: thecounter
}
.container{
  min-height: 473px;
}
</style>
<style lang="scss">
.icon{
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.icon-list{
  background-image: url('../assets/images/menu.png');
}

.icon-menu{
  background-image: url('../assets/images/windownav.png');
  background-size: 16px 16px;
}
.nav{
  margin: 10px 0;
  text-align: right;
  padding-right: 10px;


  & a{
    width: 24px;
    height: 24px;
    display: inline-block;
    border: 1px solid grey;
    border-radius: 5px;
  }
}
/* 两种方式的article list的展现样式 starts */
/* list style and fold style */
.article-list{
  flex-grow: 1;
  background-color: #ffffff;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
  margin-right: 20px;

  & ul.list{
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;

    & li{
      width: 100%;
      position: relative;
      height: 40px;
      line-height: 40px;
      margin: 10px 0;

      & img{
        display: none;
      }

      & a{
        display: inline-block;
        padding-left: 50px;
        width: 100%;
        padding-right: 20px;
      }

      & .con{
        overflow: hidden;
        border-bottom: 1px dashed grey;
        width: 100%;

        & p{
          display: inline;
        }

        & p:last-child{
          float: right;
        }
      }
    }

    & li:last-child{
      & .con{
        border-bottom-color: transparent;
      }
    }

    & li::before{
      counter-increment: thecounter 1;
      content: counter(thecounter);
      display: inline-block;
      width: 35px;
      position: absolute;
      color: white;
      background-color: #ff8400;
      text-align: center;
    }
  }

  & ul.fold{
    display: flex;
    flex-flow: row wrap;   /* flex-flow: <flex-direction> | <flex-wrap>  它有上述两个参数值的*/

    & li{
      width: 50%;
      height: 252px;

      & a{
        width: 96%;
        display: inline-block;
        box-shadow: 0 0 1px 1px rgba(0, 0, 0 , 0.2);
        height: 234px;
        padding: 10px;
        margin: 10px;
      }
      & a:hover{
        box-shadow: 0 0 1px 1px #ff8400;
        transform: scale(1.01);
      }

      & .con{
        & p:first-child{
          font-size:20px;
        }

        & p:last-child{
          text-align: right;

          >i {
            width: 16px;
            height: 16px;
            background-image: url('../assets/images/calendar.png');
            background-repeat: no-repeat;
            display: inline-block;
            background-size: contain;
            margin-right: 5px;
          }
        }

        & img{
          height: 174px;
          width: 462px;
        }
      }
    }
  }
}


.booklist ul.fold li .con p:last-child{
  text-align: right;
}
.booklist ul.fold li .con img{

}


/* 两种方式的article list的展现样式 ends */
.articlelist-aside{
  width: 300px;
  height: 462px;
  border-radius: 4px;
  background-color: #ffffff;
  background-image: url('../assets/images/slide-inline.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
  text-align: center;

  & p{
    color: #f9f9f9;
    font-size: 32px;
    line-height: 80px;
  }

  & button{
    background-color: transparent;
    outline: none;
    border: 1px solid #ff8400;
    border-radius: 4px;
    width: 233px;
    height: 40px;
    color: #ffffff;
    font-size: 16px;
    margin: 0 10px;
  }
}



</style>
