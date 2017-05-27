<template>
  <div id="app">
    <div>
      <navbar></navbar>
    </div>
    <div class="router-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar'
export default {
  name: 'app',
  data: function () {
    return {
      msg: 'Welcome to the Flower Shop',
      hlw: 'hello, world!'
    }
  },
  components: {
    'navbar': NavBar   // 或者可以这么写： 'topbar': Topbar
  }
}
</script>
