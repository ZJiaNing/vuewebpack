<template>
  <div class="">
    <h1>This is Article list page!</h1>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'articlelist',
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
