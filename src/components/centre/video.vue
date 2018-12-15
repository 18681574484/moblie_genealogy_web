<template>
    <div class="box">
        <div class="videoBox" v-for="(item) in video_list" :key="item.id">
            <h4>{{item.title}}</h4>
            <div :style="api.imgBG(item.fanNewsUploadFile[0].filePath)" class="videoCenter"></div>
            <!-- <div  class="videoCenter"></div> -->
            <a href="#">视频</a>
            <span>{{item.status}}条评论</span>
            <span>652次播放</span>
            <span>{{item.updateTime.slice(0,10)}}</span>
        </div>
    </div>
    
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            video_list: []
        };
    },
    computed: {
        
    },
    created() {
        this.video_api()         
    },
    mounted() {
       
    },
    watch: {

    },
    methods: {
        video_api() {
            // 家族视频
            this.video_list = this.$store.state.videoArr
        } 
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.box {
    // margin-top: 0.45rem;
    margin-bottom: 1.2rem;
    overflow: hidden;
    overflow-y: auto;
    overflow-x: hidden;
    padding-top: 4rem;
}
.videoBox {
    font-size: 0.2rem;
    padding: 0 0.2rem; 
    margin-top: 0.27rem;
    border-bottom: 0.01rem solid #DEDDDD;
        h4 {
            font-size: 0.32rem;
            font-weight: 500;
            color: #333333;
            margin: 0;
        }
        .videoCenter {
            height: 3.55rem;
            width: 100%;
            margin-top: 0.25rem;
            margin-bottom: 0.24rem;
            // background-color: pink;
            background: no-repeat center / cover;
        }
        a {
            display: inline-block;
            // width: 0.52rem;
            // height: 0.3rem;
            padding: 0.03rem;
            border: 0.01rem solid #0390FD;
            color: #0390FD;
            text-align: center;
            border-radius: 0.05rem;
            line-height: 0.3rem;
            margin-bottom: 0.2rem;
        }
        span {
            color: #A1A1A1;
            margin-left: 0.17rem;
        }
}
</style>
