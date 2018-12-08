<template>
    <div class="footerDiv">
       <ul class="footUl">
           <router-link to="/home"  tag="li">
                <img src="@/assets/images/home.png" alt="">
                 <p>首页</p>
           </router-link>
           <router-link to="/chatting" tag="li">
                <img src="@/assets/images/chat.png" alt="">
                <p>聊天</p>
           </router-link>
           <router-link to="/add" tag="li" class="add">
               <img src="@/assets/images/addition.png" alt="">
           </router-link>
           <router-link to="/video" tag="li">
                <img src="@/assets/images/home.png" alt="">
                <p>视频</p>
           </router-link>
           <router-link to="personal" tag="li">
                <img src="@/assets/images/personage.png" alt="">
                <p>我的</p>
           </router-link>
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
        height: 0.97rem;
        width: 100%;
        border-top: 0.01rem solid #ccc;
        padding: 0 0.2rem;
        overflow: hidden;
        box-sizing:border-box;
        z-index: 999;
        background-color: #fff;
        .footUl {
            display: flex;
            li {
                height: 0.97rem;
                width: 1.5rem;
                position: relative;
                img {
                    width: 0.44rem;
                    height: 0.44rem;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    top: 0.1rem;
                }
                p {
                    font-size: 0.18rem;
                    position: absolute;
                    left: 50%;
                    bottom: -0.15rem;
                    transform: translateX(-50%);
                    margin-top: 0.5rem;
                }
            }
            .add {
                flex-grow: 1;
              img {
                    width: 0.69rem;
                    height: 0.69rem;
              }
            }
            
        }
    }
</style>


