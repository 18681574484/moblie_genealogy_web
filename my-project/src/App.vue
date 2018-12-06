<template>
  <div id="app">
      <!-- 头部固定搜索组件 -->
      <Header></Header>


      <router-view></router-view>

      <!-- 底部固定组件 -->
      <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
export default {
  name: 'App',
  components: {
      Footer,
      Header
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
    // height: 100%;
    // position: relative;
    // display:-webkit-box;display:-webkit-flex;
    // display:-ms-flexbox;
    // display:flex;
    // -webkit-box-orient:vertical;
    // -webkit-flex-direction:column;
    // -ms-flex-direction:column;
    // flex-direction:column;
    // width:100%;
    display:-webkit-box;
    display:-webkit-flex;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:vertical;
    -webkit-flex-direction:column;
    -ms-flex-direction:column;
    flex-direction:column;
    width:100%;
    height:100%;
  }

</style>
