<template>
  <div class="box">
    <div class="videoBox" v-for="(item,index) in video_list" :key="index">
      <h4>{{item.title}}</h4>
      <div
        @click="pop(index)"
        :style="api.imgBG(item.fanNewsUploadFile[0].filePath)"
        class="videoCenter"
      >
        <!-- <video :src="api.imghost"></video> -->
        <van-popup v-model="show">
          <video
            @click="add(index)"
            v-if="videoPop.length ? videoPop[index].list : false"
            :autoplay="videoPop.length ? videoPop[index].list : false"
            controls="controls"
          >
            <source
              :src="item.fanUploadVedioList.length ? api.imghost + item.fanUploadVedioList[0].filePath : ''"
              type="video/mp4"
            >
          </video>
        </van-popup>

        <!-- <video-player  class="video-player vjs-custom-skin"
                    ref="videoPlayer"
                    :playsinline="true"
                    :options="playerOptions"
        ></video-player>-->
      </div>
      <a href="#">视频</a>
      <span>{{item.status}}条评论</span>
      <span>652次播放</span>
      <span>{{item.updateTime.slice(0,10)}}</span>
      <img
        @click="pop(index)"
        v-if="videoPop.length ? !videoPop[index].list : true"
        src="@/assets/images/play.png"
        class="play"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      video_list: [],
      autoplay: false,
      videoPop: [
        { list: false },
        { list: false },
        { list: false },
        { list: false },
        { list: false },
        { list: false }
      ],
      show: false,
      play: true
    };
  },
  computed: {},
  created() {
    this.video_api();
  },
  mounted() {},
  watch: {},
  methods: {
    video_api() {
      let stailAsk = this.$store.state.apiList;
      this.api
        .get(this.api.county.base + stailAsk.index_family_video.apiUrl)
        .then(res => {
          if (res.code == 200) {
            // 家族视频
            this.video_list = res.data.records
            console.log(res)
          }
        });
    },
    pop(index) {
      this.play = !this.play;
      this.show = !this.show;
      var arrList = this.videoPop.length;
      for (var i = 0; i < arrList; i++) {
        this.videoPop[i].list = false;
        console.log(this.videoPop[i].list);
      }
      this.videoPop[index].list = !this.videoPop[index].list;
    },
    add(index) {
      this.videoPop[index].list = !this.videoPop[index].list;
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
video {
  max-width: 7.5rem;
  height: auto;
  source {
    width: 100%;
    height: 100%;
  }
}
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
  position: relative;
  border-bottom: 0.01rem solid #dedddd;
  .play {
    width: 0.9rem;
    height: 0.9rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    z-index: 99;
    border-radius: 50%;
  }
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
    border: 0.01rem solid #0390fd;
    color: #0390fd;
    text-align: center;
    border-radius: 0.05rem;
    line-height: 0.3rem;
    margin-bottom: 0.2rem;
  }
  span {
    color: #a1a1a1;
    margin-left: 0.17rem;
  }
}
</style>
