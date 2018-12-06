<template>
   <div id="app">
       <!-- 头部组件模块 -->
      <!-- <Header></Header> -->
      
      <!-- 中间内容模块 -->
      <!-- <HomeCentre></HomeCentre> -->
      <HomeList></HomeList>

      <!-- 底部组件模块 -->
      <!-- <Footer></Footer> -->
   </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
import HomeCentre from '@/components/centre/homeCentre.vue'
import HomeList from '@/components/centre/homeList.vue'
export default {
   data() {
       return {}
   },
  components: {
    Header,
    Footer,
    HomeCentre,
    HomeList
  }
}
</script>

<style scoped lang="less">
#app {
  width: 100%;
  height: 100%;
  padding-top: 4rem;
  padding-bottom: 0.98rem;
  position: relative;
  box-sizing:border-box;
  overflow: hidden;
}
</style>
