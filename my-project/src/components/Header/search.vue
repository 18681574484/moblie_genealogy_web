<template>
    <div class="searchDiv">
        
        <img src="@/assets/images/logo@2x.png" alt="">
<!--         
        <van-search 
        placeholder="炎黄统谱网" 
        input-align="center"
        
         /> -->
         <!-- <div class="inputDiv">
             <input type="text" placeholder="炎黄统谱网"  >
         </div> -->
         <div class="inputDiv">
             <img src="@/assets/images/search.png" alt="">
             <input type="text" placeholder="炎黄统谱网"  >
         </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            value:'',
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        onSearch() {

        },
        onCancel() {

        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
   .searchDiv {
       width: 100%;
       height: 60px;
       position: relative;
       padding-left: 55px;
       box-sizing:border-box;

        img {
            width: 55px;
            height: 55px;
            margin-right: 22px;
            position: absolute;
            left: 0;

        }
        .inputDiv {
            position: relative;
            padding: 0 20px;
            box-sizing:border-box;
            img {
                position: absolute;
                top: 15px;
                left: 35%;
                width: 33px;
                height: 33px;
            }
            input {
                width: 100%;
                height: 60px;
                border: none;
                border-radius: 20px;
                background-color:rgba(0, 52, 52, 0.1);
                text-align: center;
                color: white;
                font-size: 24px;
            }
        }
        
        input::-webkit-input-placeholder {
          /* placeholder颜色  */
          color: white;

      }
        
   }
</style>
