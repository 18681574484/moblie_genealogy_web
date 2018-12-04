<template>
    <div class="footerDiv">
       <ul class="footUl">
           <li>
                <img src="@/assets/images/home.png" alt="">
                 <p>首页</p>
           </li>
           <li>
                <img src="@/assets/images/chat.png" alt="">
                <p>聊天</p>
           </li>
           <li class="add">
               <img src="@/assets/images/addition.png" alt="">
           </li>
           <li>
                <img src="@/assets/images/home.png" alt="">
                <p>视频</p>
           </li>
           <li>
                <img src="@/assets/images/personage.png" alt="">
                <p>我的</p>
           </li>
       </ul>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            
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

    },
    components: {

    },
};
</script>

<style scoped lang="less">
    .footerDiv {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 97px;
        width: 100%;
        border-top: 1px solid #ccc;
        overflow: hidden;
        .footUl {
            display: flex;
            li {
                height: 97px;
                width: 192px;
                position: relative;
                img {
                    width: 40px;
                    height: 42px;
                    position: absolute;
                    top: 8px;
                    left: 50%;
                    transform: translateX(-50%)
                }
                p {
                    margin: 0;
                    float: left;
                    font-size: 18px;
                    text-align: center;
                    position: absolute;
                    left: 50%;
                    bottom: 12px;
                    transform: translateX(-50%)
                }
            }
            .add {
                img {
                    top: 50%;
                    transform: translate(-50%, -50%)
                }
            }
            
        }
    }
</style>
