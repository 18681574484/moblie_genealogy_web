<template>
  <div>
    <div @click="conceal" class="home">
      <!-- 背景 -->
      <div class="bgc"></div>
      <div class="homeHeader">
        <!-- 搜索 -->
        <div class="searchDiv">
          <img class="searImg" src="@/assets/images/logo@2x.png" alt>

          <div class="inputDiv">
            <img src="@/assets/images/search.png" alt>
            <input type="text" placeholder="炎黄统谱网">
          </div>
        </div>
        <!-- 滑动 -->
        <div class="navigation">
          <van-tabs v-model="active">
            <van-tab title="关注"></van-tab>
            <van-tab title="全国张氏"></van-tab>
            <van-tab title="省级张氏"></van-tab>
            <van-tab title="崇阳张氏"></van-tab>
            <van-tab title="寻根"></van-tab>
            <van-tab title="家谱"></van-tab>
          </van-tabs>
          <van-icon name="wap-nav"/>
        </div>
        <div class="region">
          <div class="regionLeft" @click.stop="pop">
            <span>选择地区</span>
            <van-icon name="arrow-down"/>
          </div>
          <div>
            <van-icon name="location"/>
            <span>武汉江夏</span>
          </div>
          <div class="cloce" @click="followed" >{{attention}}</div>
        </div>
      </div>
      <!-- 内容滑动区域 -->
      <div class="content">
        <!-- 背景 -->
        <div class="top-bgc"></div>
        <div class="contentTop">
          <h2>湖北省咸宁市崇阳县张氏联谊会</h2>
          <!-- 轮播图 -->
          <div class="swipeTop">
            <van-swipe :autoplay="3000" indicator-color="white">
              <van-swipe-item v-for="item in this.$store.state.lunbo" :key="item.id">
                <div class="div1" :style="api.imgBG(item.picUrl)"></div>
              </van-swipe-item>
            </van-swipe>
          </div>
          <!-- 置顶公告 -->
          <div class="notice">
            <div class="noticeSogin">
              <div>
                顶 置
                <span>公</span> 告
              </div>
              <h4>{{ stick.newsTitle }}</h4>
              <!-- <h4>{{brief.data.siteName}}</h4> -->
            </div>
            <router-link :to="{ name: 'notice', params: { id: stick.id }}" tag="p"  v-html=" stick.newsText"></router-link>
          </div>
          <!-- 联谊情况 -->
          <router-link to="/announcement" tag="div" class="fellowship">
            <h4>联谊概况</h4>
            <van-swipe :autoplay="3000" indicator-color="white">
              <van-swipe-item v-for="item in general" :key="item.id">
                  <!-- <div class="item_bgc"></div> -->
                  <div class="swipeBox">
                    <span>{{item.rootGroup}}</span>
                    <b>ZANWU</b>
                    <img src="@/assets/images/goose.png" alt="">
                  </div>
              </van-swipe-item>
            </van-swipe>
            
          </router-link>
          <div class="count">
            <router-link to="/" tag="div" class="cpf">
              <h2>公益基金</h2>
              <span>总金额</span>
              <img src="@/assets/images/solid.png" alt>

              <div class="cpfBottom">
                <span class="bottomRight">￥{{this.$store.state.fund.remain}}</span>
                <span class="sss">捐助</span>
              </div>
            </router-link>
            <div class="flgure">
              <div class="flgureText">
                <h5>刚刚捐款完亲</h5>
                <div class="textLeft">
                  <router-link to="/personnel" tag="span">共{{celebrity.length}}人</router-link>
                  <van-icon name="arrow"/>
                  <van-icon name="arrow"/>
                </div>
              </div>
              <ul class="flgureUl">
                <li v-for="item in celebrity" :key="item.id">
                  <router-link
                    to="/characterElite"
                    tag="div"
                    class="div1 portrait"
                    :style="api.imgBG(item.allUserLogin.picSrc)"
                  ></router-link>
                  <h5>{{item.allUserLogin.nickName}}</h5>
                  <span>捐助 {{item.allUserLogin.role}}元</span>
                  <div class="bunText">
                    <span>+关注</span>
                    <img src="@/assets/images/praise.png" alt>
                    <span>{{item.allUserLogin.status}}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="contentBottom">
          <div class="dynamic">
            <h3>
              家族
              <b>动</b>态
            </h3>
            <span>
                {{dynamic.length ? dynamic[0].updateTime.slice(0,4) : ''}}
                年
                {{dynamic.length ? dynamic[0].updateTime.slice(5,7) : ''}}
                月
                {{dynamic.length ? dynamic[0].updateTime.slice(8,10) : ''}}
                日星期五
            </span>
          </div>
          <router-link
           :to="{ name: 'dynamicDetails', params: { id: dynamic.length ? dynamic[0].id : '' }}"
            tag="div" class="centerDiv">
            <div class="centerText">
              <h5>{{dynamic.length ? dynamic[0].newsTitle : ''}}</h5>
              <div class="axisCentre">
                <span class="xu">家族动态</span>
                <span>{{dynamic.length ? dynamic[0].status : ''}}条评论</span>
                <span>{{dynamic.length ? dynamic[0].visitNum : ''}}浏览</span>
              </div>
            </div>
            <div :style="api.imgBG(dynamic.length ? dynamic[0].fanNewsUploadFileList[0].filePath : '')" class="centerImg"></div>
          </router-link>
          <div class="slideshow">
            <ul class="swipeUl">
              <router-link to="/announcement" tag="li">
                <img src="@/assets/images/notice.png" alt>
                <p>家族公告</p>
              </router-link>
              <router-link to="/dynamic" tag="li">
                <img src="@/assets/images/dynamic.png" alt>
                <p>家族动态</p>
              </router-link>
              <router-link to="/county" tag="li">
                <img src="@/assets/images/gold.png" alt>
                <p>慈善公益</p>
              </router-link>
              <router-link to="/culture" tag="li">
                <img src="@/assets/images/book.png" alt>
                <p>家族文化</p>
              </router-link>
            </ul>
            <ul class="swipeUl ui-bottom">
              <router-link to="/industry" tag="li">
                <img src="@/assets/images/family.png" alt>
                <p>家族产业</p>
              </router-link>

              <router-link to="/branch" tag="li">
                <img src="@/assets/images/person.png" alt>
                <p>家族名人</p>
              </router-link>
              <router-link to="/" tag="li">
                <img src="@/assets/images/branch.png" alt>
                <p>祖先分支</p>
              </router-link>
              <router-link to="/video" tag="li">
                <img src="@/assets/images/shi@2x.png" alt>
                <p>家族视频</p>
              </router-link>
              <router-link to="/articleCharacterDetails" tag="li">
                <img src="@/assets/images/help.png" alt>
                <p>慈善帮扶</p>
              </router-link>
            </ul>
          </div>
          <!-- <div class="centerDiv" v-for="item in dynamic" :key="item.id">
            <div class="centerText">
              <h5>{{item.newsTitle}}</h5>
              <div class="axisCentre">
                <span class="xu">家族动态</span>
                <span>{{item.status}}条评论</span>
                <span>{{item.visitNum}}浏览</span>
              </div>
            </div>
            <div 
                :style="api.imgBG(item.length || item.fanNewsUploadFileList.length ? item.fanNewsUploadFileList[0].filePath : '')"
                class="centerImg"></div>
          </div> -->
          <div class="centerDiv" v-for="item in article" :key="item.id">
            <router-link to="/theArticleDetails" tag="div" class="centerText">
              <h5>{{item.title}}</h5>
              <div class="axisCentre">
                <span class="xu">家族动态</span>
                <span>{{item.sysStatus}}条评论</span>
                <span>0浏览</span>
              </div>
            </router-link>
            <div 
                :style="api.imgBG(item.newsFaceUrl)"
                class="centerImg"></div>
          </div>

          <div class="titleCenter">
            <div class="titleTop">
              <div class="centerLeft">
                <router-link
                  :to="{ name: 'characterElite', params: { id: pillar.length ? pillar[0].id : '' }}"
                  tag="div"
                  :style="api.imgBG(pillar.length ? pillar[0].picFileSrc : '')"
                  class="img"
                ></router-link>
                <div class="celebrity">
                  <h5>{{pillar.length ? pillar[0].personName : ''}}</h5>
                  <span>慈善名人</span>
                  <span>{{pillar.length ? pillar[0].visitNum : ''}}万粉丝关注</span>
                </div>
              </div>
              <div class="pillar">+关注</div>
            </div>
            <p>{{pillar.length ? pillar[0].personSummary.slice(0,50) : ''}}</p>
          </div>
          <div class="videoBox">
            <h4>{{video_list.length ? video_list[0].title : ''}}</h4>
            <div
              @click="play($event)"
              :style="api.imgBG(video_list.length  ? video_list[0].fanNewsUploadFile[0].filePath  : '')"
              class="videoCenter">
             <video 
                :src="video_list.length ? api.imghost + video_list[0].fanUploadVedioList[0].filePath : ''"
                v-if="autoplay"
                :autoplay="autoplay"
                >
              </video>
            </div>
            <a href="#">视频</a>
            <span>{{video_list.length ? video_list[0].status : ''}}条评论</span>
            <span>666次播放</span>
            <span>{{video_list.length ? video_list[0].createTime.slice(0,10) : ''}}</span>
          </div>
          <div class="titleCenter">
            <div class="titleTop">
              <div class="centerLeft">
                <router-link
                  to="/characterDeatils"
                  tag="div"
                  class="img"
                  :style="api.imgBG(elder.length ? elder[0].picFileSrc : '')"
                ></router-link>
                <div class="celebrity">
                  <h5>{{elder.length ? elder[0].personName : ''}}</h5>
                  <span>慈善名人</span>
                  <span>{{elder.length ? elder[0].visitNum : ''}}万粉丝关注</span>
                </div>
              </div>
              <div class="gz">
                <div>分支后裔</div>
                <div>千支同源</div>
              </div>
            </div>
            <p>{{elder.length ? elder[0].personSummary.slice(0,50) : ''}}</p>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
    <!-- 弹出层 -->
    <van-popup v-model="show" position="bottom" :overlay="false">
      <van-area @change="reset" :area-list="areaList" :columns-num="3" title="选择地区"/>
    </van-popup>
  </div>
</template>

<script>
import Footer from "@/components/footer/Footer.vue";
export default {
  props: {},
  data() {
    return {
      active: 3,
      bulletin: {}, // 公告栏
      show: false,
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市"
        },
        city_list: {
          110100: "北京市",
          110200: "县",
          120100: "天津市",
          120200: "县"
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区"
          // ....
        }
      },
      video_list: [], // 家族视频
      elder: [], // 家族长老
      pillar: [], // 家族栋梁
      dynamic: [], // 家族动态
      celebrity: [], // 捐款名人
      general: [], // 联谊概况
      autoplay: false, // 视频控制开关
      stick: [], // 置顶共告
      attention: '关注',
      article: [] // 首页文章
    };
  },
  computed: {},
  created() {
    this.$store.dispatch("increment");
    this.$store.dispatch('bulletin')
    this.video_api();
    this.article_get()
  },
  mounted() {},
  watch: {},
  methods: {
    change() {
      console.log(111);
    },
    // 选择地区弹框
    pop() {
      this.show = !this.show;
    },
    // 全局关闭选择地区
    conceal() {
      this.show = false
    },
    // 选择地区
    reset(e) {
      console.log(e);
    },
    // 关注事件
    followed() {
      this.attention = "已关注"
    },
    video_api() {
      this.api
        .get(
          this.api.county.base +
            "/genogram/fanNewsFamilyRecord/selectVedioPage?showId=10025"
        )
        .then(res => {
          if (res.code == 200) {
            // 家族视频
            this.video_list = res.data.records;
            this.$store.state.videoArr = res.data.records;
          }
          // 置顶公告
          this.stick = this.$store.state.announcement.records[0]
          console.log(this.stick)
          return this.api.get(
            this.api.county.base +
              "/genogram/fanNewsFamous/selectPersonPage?showId=10021"
          );
        })
        .then(res => {
          if (res.code == 200) {
            // 家族长老
            this.elder = res.data.records;
            this.$store.state.elder = res.data.records;
          }
          return this.api.get(
            this.api.county.base +
              "/genogram/fanNewsFamous/selectPersonPage?showId=10022"
          );
        })
        .then(res => {
            if(res.code == 200) {
                // 家族产业
                this.pillar = res.data.records;
                this.$store.state.pillar = res.data.records;
            }
            return  this.api.get(this.api.county.base + '/genogram/fanNewsFamilyRecord/selectRecortPage?showId=10023')
        })
        .then( res => {
            if(res.code == 200) {
               // 家族动态
                this.dynamic = res.data.records
                this.$store.state.dynamic = res.data.records
            }
            return this.api.get(this.api.county.base + "genogram/fanNewsCharity/index/getPayUser?order=time&label=desc&pageSize=4&showId=10018")
        })
        .then( res => {
            // 捐款名人
           if(res.code == 200) {
              this.$store.state.celebrity = res.data.records
              this.celebrity = res.data.records
           }
            return this.api.get(this.api.county.base + "/genogram/fanIndex/index/getFanIndexFamilySummarysPage?siteId=111")
        })
        .then( res => {
            // 联谊概况
            this.general = res.data.records
            this.$store.state.general = res.data.records
            console.log(this.general)
        })
    },
    article_get() {
      this.api.get(this.api.county.base + '/genogram/fanIndex/getAllUserNewsInfoPage?siteId=111&pageNo=1&pageSize=6')
      .then( res => {
        if(res.code == 200) {
          this.article = res.data.records
          console.log(this.article)
        }
      })
    },
    play(e) {
      console.log(e.target)
      this.autoplay = !this.autoplay
    }
   
  },
  components: {}
};
</script>

<style scoped lang="less">
.home {
  .bgc {
    height: 2.5rem;
    width: 100%;
    background-color: #d2211b;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  }
  // 轮播图
  .div1 {
    height: 100%;
    height: 100%;
    background: no-repeat center / cover;
  }
  .homeHeader {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 99;
    .searchDiv {
      width: 100%;
      height: 0.6rem;
      padding: 0 0.2rem;
      box-sizing: border-box;
      overflow: hidden;
      display: flex;
      margin-top: 0.1rem;
      .searImg {
        width: 0.56rem;
        height: 0.56rem;
      }
      .inputDiv {
        margin-left: 0.2rem;
        position: relative;
        img {
          position: absolute;
          top: 0.15rem;
          left: 2.15rem;
          width: 0.33rem;
          height: 0.33rem;
        }
        input {
          width: 6.32rem;
          height: 0.6rem;
          border: none;
          border-radius: 0.2rem;
          background-color: rgba(0, 52, 52, 0.1);
          text-align: center;
          font-size: 0.24rem;
          position: absolute;
          color: #fff;
        }
      }

      input::-webkit-input-placeholder {
        /* placeholder颜色  */
        color: white;
      }
    }
    .navigation {
      margin-top: 0.38rem;
      position: relative;
      overflow: hidden;
      height: 0.88rem;
      width: 100%;
      font-size: 0.32rem;
      padding: 0 0.2rem;
      box-sizing: border-box;
      // 下划线元素
      /deep/.van-tabs__line {
        background: none;
      }
      // 父元素
      /deep/.van-tabs__nav--line {
        background: none;
      }
      // 每一个内容的标签
      /deep/.van-tab {
        background: none;
        font-size: 0.32rem;
        color: white;
      }
      /deep/.van-hairline--top-bottom::after {
        border: none;
      }
      /deep/.van-tab--active {
        color: #fbbb0e !important;
      }
      /deep/.van-icon {
        left: 6.7rem;
        top: -0.56rem;
        color: white;
      }
    }
    .region {
      display: flex;
      font-size: 0.26rem;
      padding: 0 0.2rem;
      box-sizing: border-box;
      color: #fff;
      justify-content: space-between;
      .cloce {
        width: 0.9rem;
        height: 0.4rem;
        border: 0.01rem solid #ffffff;
        border-radius: 0.5rem;
        text-align: center;
        line-height: 0.4rem;
      }
      /deep/.van-icon {
        top: 0.06rem;
      }
      span {
        margin: 0 0.05rem;
      }
    }
  }
  .content {
    padding-top: 2.4rem;
    padding-bottom: 1.2rem;
    font-size: 0.24rem;
    overflow: hidden;
    overflow-y: auto;
    overflow-x: hidden;
    .top-bgc {
      height: 1.8rem;
      width: 100%;
      background-color: #d2211b;
      position: absolute;
      z-index: -1;
    }
    .contentTop {
      padding: 0 0.2rem;
      box-sizing: border-box;
      text-align: center;
      h2 {
        font-size: 0.32rem;
        color: #fff;
      }
      .swipeTop {
            /deep/.van-swipe {
            height: 4rem;
            border-radius: 0.2rem;
            .van-swipe-item {
              background-color: pink;
            }

            // 标记点父元素
            .van-swipe__indicators {
              // 标记点子元素
              .van-swipe__indicator {
                width: 0.12rem;
                height: 0.12rem;
                background-color: #999999 !important;
              }
              .van-swipe__indicator--active {
                opacity: none;
                background-color: #d2211b !important;
              }
              .van-swipe__indicator {
                opacity: none;
              }
            }
          }
      }
      .notice {
        width: 7.1rem;
        height: 3.92rem;
        border-radius: 0.2rem;
        margin-top: 0.2rem;
        margin-bottom: 0.35rem;
        padding: 0.2rem 0.35rem 0;
        box-sizing: border-box;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
        overflow: hidden;
        .noticeSogin {
          height: 1.1rem;
          width: 100%;
          // display: flex;
          font-size: 0.32rem;
          text-align: left;
          margin-bottom: 0.4rem;
          div {
            height: 1.1rem;
            width: 1.1rem;
            border-right: 0.01rem solid #ccc;
            padding: 0 0.06rem;
            box-sizing: border-box;
            letter-spacing: 0.01rem;
            float: left;
            margin-right: 0.3rem;
            color: #010101;
            font-weight: bolder;
            span {
              color: #d2211b;
            }
          }
          h4 {
            display: inline;
            color: #333333;
          }
        }
        p {
          color: #767676;
          font-size: 0.26rem;
          margin: 0;
          text-align: left;
        }
      }
      .fellowship {
        font-size: 0.32rem;
        text-align: center;
        margin-bottom: 0.4rem;
        img {
          width: 3.95rem;
          height: 2.35rem;
        }
      }
      .count {
        .cpf {
          width: 7.1rem;
          height: 2.5rem;
          border-radius: 0.2rem;
          background-size: cover;
          background-image: url(../../assets/images/cpf.png);
          background-repeat: no-repeat;
          background-position: center;
          position: relative;
          padding: 0.4rem 0.7rem 0;
          box-sizing: border-box;
          color: #fff;
          text-align: left;
          h2 {
            font-size: 0.32rem;
            margin: 0;
          }
          span {
            font-size: 0.22rem;
          }
          img {
            width: 0.9rem;
            height: 0.9rem;
            position: absolute;
            right: 0.72rem;
            top: 0.52rem;
          }
          .cpfBottom {
            margin-top: 0.2rem;
            .bottomRight {
              font-size: 0.45rem;
            }
            .sss {
              position: absolute;
              right: 0.96rem;
              bottom: 0.52rem;
            }
          }
        }
        .flgure {
          height: 3.8rem;
          width: 100%;
          box-sizing: border-box;
          margin-top: 0.55rem;
          .flgureText {
            display: flex;
            position: relative;
            h5 {
              font-size: 0.32rem;
              margin: 0;
            }
            .textLeft {
              position: absolute;
              right: 0;
              top: 0.03rem;
              span {
                color: #ccc;
                margin-right: 0.2rem;
                letter-spacing: 1px;
              }
              /deep/.van-icon {
                color: #767676;
                margin-left: -0.22rem;
              }
            }
          }
          .flgureUl {
            margin-top: 0.4rem;
            display: flex;
            li {
              width: 33.33%;
              height: 3.1rem;
              margin-right: 0.1rem;
              text-align: center;
              padding-top: 0.25rem;
              color: #767676;
              box-sizing: border-box;
              box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.4);
              .portrait {
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
                vertical-align: top;
                margin-left: 0.6rem;
              }
              h5 {
                margin: 0.2rem 0 0.3rem 0;
                font-size: 0.26rem;
                color: #333333;
              }
              .bunText {
                margin-top: 0.05rem;
                img {
                  width: 0.31rem;
                  height: 0.31rem;
                  margin: 0.1rem 0.01rem -0.03rem 0.3rem;
                }
              }
            }
            li:nth-child(3) {
              margin-right: 0;
            }
          }
        }
      }
    }
    .contentBottom {
      margin-top: 0.38rem;
      .dynamic {
        padding: 0 0.2rem;
        display: flex;
        text-align: center;
        align-items: center;
        h3 {
          margin: 0 0.25rem 0 0;
        }
        b {
          color: #d2211b;
        }
        span {
          color: #666666;
          font-size: 0.22rem;
          margin-top: 0.05rem;
        }
      }
      .centerDiv {
        position: relative;
        // height: 1.67rem;
        padding: 0 0.2rem;
        border-bottom: 0.01rem solid #dedddd;
        display: flex;
        margin-top: 0.25rem;
        h5 {
          margin: 0 0.2rem 0 0;
          font-size: 0.32rem;
        }
        .centerText {
          flex: 1;
          .axisCentre {
            margin: 0.2rem 0 0.32rem 0;
            :nth-child(1) {
              display: inline-block;
              color: #d2211bed;
              width: 1rem;
              height: 0.3rem;
              border: 0.01rem solid #d2211b;
              text-align: center;
              line-height: 0.3rem;
              border-radius: 0.05rem;
            }
            span {
              color: #666666;
              margin-right: 0.18rem;
            }
          }
        }
        .centerImg {
          width: 2.3rem;
          height: 1.44rem;
          justify-content: flex-end;
          background: pink;
          background: no-repeat center / cover;
        }
        .centerHr {
          width: 200%;
          border: 0.01rem solid #ccc;
          position: absolute;
          left: -0.2rem;
          bottom: 0;
        }
      }
      .slideshow {
        padding: 0 0.2rem;
        margin-top: 0.3rem;
        box-sizing: border-box;
        ul {
          display: flex;
          text-align: center;
          margin-bottom: 0.3rem;
          img {
            width: 0.88rem;
            height: 0.88rem;
          }
          li {
            width: 25%;
            p {
              margin: 0;
              font-weight: bolder;
            }
          }
        }
      }
      .centerLeft {
        display: flex;
        .img {
          width: 1.36rem;
          height: 1.36rem;
          border-radius: 50%;
          background: no-repeat center / cover;
        }
        .celebrity {
          display: flex;
          flex-direction: column;
          margin: 0 0 0 0.2rem;
          h5 {
            font-size: 0.32rem;
            margin: 0.12rem 0 0.15rem 0;
          }
          span {
            font-size: 0.25rem;
            color: #b0b0b0;
          }
        }
      }

      .titleCenter {
        padding: 0 0.2rem;
        position: relative;
        margin: 0.38rem 0 0.26rem 0;
        border-bottom: 0.01rem solid #dedddd;
        .titleTop {
          display: flex;
          justify-content: space-between;
          .rank {
            position: absolute;
            color: #0066ff;
            font-size: 0.26rem;
            font-weight: bolder;
            left: 2.5rem;
            top: 0.16rem;
          }
        }
        p {
          font-size: 0.24rem;
          color: #333333;
        }
      }
      .pillar {
        width: 1.7rem;
        height: 0.55rem;
        background-color: #d2211b;
        border-radius: 0.3rem;
        font-size: 0.24rem;
        color: #fff;
        text-align: center;
        line-height: 0.55rem;
      }
      .videoBox {
        font-size: 0.2rem;
        padding: 0 0.2rem;
        margin-top: 0.27rem;
        border-bottom: 0.01rem solid #dedddd;
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
            video {
              width: 100%;
              height: 100%;
            }
        }
        a {
          display: inline-block;
          width: 0.52rem;
          height: 0.3rem;
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
      .gz {
        width: 2.7rem;
        height: 0.55rem;
        font-size: 0.24rem;
        color: #d2211b;
        text-align: center;
        line-height: 0.55rem;
        display: flex;
        justify-content: space-between;
        div {
          width: 1.24rem;
          height: 100%;
          border-radius: 0.3rem;
          border: 0.01rem solid #d2211b;
        }
      }
    }
  }
  .ui-bottom {
    li {
      width: 20%;
    }
  }

  // /deep/.van-picker__cancel, .van-picker__confirm {
  //     display: none;
  // }
}
// 弹框
/deep/.van-popup--bottom {
  top: 2.7rem;
}
/deep/.van-picker__cancel {
  opacity: 0;
}
/deep/.van-picker__confirm {
  opacity: 0;
}
// 联谊概况
.swipeBox {
    position: relative;
    color: #fff;
    font-size: 0.26rem;
      span {
        position: absolute;
        top: 0.6rem;
        right: 2.3rem;
      }
      b {
        position: absolute;
        right: 2rem;
        top: 1.3rem;
      }
}
</style>

