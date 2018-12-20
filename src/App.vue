<template>
  <div id="app">
   
    <router-view v-if="apiList"></router-view>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Footer from "@/components/footer/Footer.vue";
export default {
  name: "App",
  components: {
    Footer
  },
  created() {
   
  },
  watch:{
    
  },
   computed: {
        apiList() {
            return this.$store.state.apiList;
        }
    },
    beforeCreate() {
        this.$store.dispatch("getHomeApi");
    }
};
</script>

<style scoped lang="less">
#app {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
