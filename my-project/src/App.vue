<template>
  <div id="app">
    <!-- 头部组件模块 -->
    <Header></Header>
    
    

    <!-- 底部组件模块 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped lang="less">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
#app {
  width: 100%;
  height: 100%;
  padding-top: 285px;
  padding-bottom: 98px;
  position: relative;
  box-sizing:border-box;
}
</style>
