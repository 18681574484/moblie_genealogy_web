<template>
  <div class="biography">
    <!-- 头部固定导航 -->
    <header>
      <van-icon @click="returnGo" name="arrow-left"/>
      <h2>人物介绍</h2>
      <img src="@/assets/images/share.png" alt>
    </header>
    <!-- 人物简介 -->
    <div class="characters">
      <div class="message">
        <div :style="api.imgBG(particulars_list.picFileSrc)" class="Img"></div>
        <div>
          <h3>{{particulars_list.ancestorName}}</h3>
          <span>企业家、慈善家</span>
          <div class="scutcheon">千支同源</div>
        </div>
      </div>
      <h2>基本介绍</h2>
      <!-- <p>俞敏洪，1962年9月4日 出生于江苏省江阴市夏港街道，新东方教育集团创始人，英语教学与管理专家。担任新东方教育集团董事长、洪泰基金联合创始人、中国青年企业家协会副会长、中华全国青年联合会委员等职。</p> -->
      <p>{{particulars_list.ancestorSummary}}</p>
      <div class="Character">
        <div>
          <h4>字派</h4>
          <h4>郡望</h4>
          <h4>堂号</h4>
        </div>
        <div>
          <span>富永振江之</span>
          <span>富永振江之</span>
          <span>富永振江之</span>
        </div>
      </div>
      <div class="list">
        <h4>分支后裔</h4>
        <ul class="flgureUl">
          <li>
            <img class="portrait" src="@/assets/images/QQ@2x.png" alt>
            <h5>三叔</h5>
            <span>作家、编剧</span>
            <div class="bunText">加关注</div>
          </li>
          <li>
            <img class="portrait" src="@/assets/images/QQ@2x.png" alt>
            <h5>三叔</h5>
            <span>作家、编剧</span>
            <div class="bunText">加关注</div>
          </li>
          <li>
            <img class="portrait" src="@/assets/images/QQ@2x.png" alt>
            <h5>三叔</h5>
            <span>作家、编剧</span>
            <div class="bunText">加关注</div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 评论 -->
    <div class="comment">
      <img class="zi" src="@/assets/images/reward.png" alt>
      <h5>评论</h5>
      <ul class="commentList">
        <li>
          <div class="Img"></div>
          <div class="listConter">
            <h6>周星</h6>
            <p>家谱是记载一个家族的世系繁衍及重要人物的事迹书</p>
          </div>
          <!-- 赞 -->
          <div class="zan">
            <img src="@/assets/images/praise.png" alt>
            <span>12</span>
          </div>
        </li>
        <li>
          <div class="Img"></div>
          <div class="listConter">
            <h6>周星</h6>
            <p>家谱是记载一个家族的世系繁衍及重要人物的事迹书</p>
          </div>
          <!-- 赞 -->
          <div class="zan">
            <img src="@/assets/images/praise.png" alt>
            <span>12</span>
          </div>
        </li>
        <li>
          <div class="Img"></div>
          <div class="listConter">
            <h6>周星</h6>
            <p>家谱是记载一个家族的世系繁衍及重要人物的事迹书</p>
          </div>
          <!-- 赞 -->
          <div class="zan">
            <img src="@/assets/images/praise.png" alt>
            <span>12</span>
          </div>
        </li>
        <li>
          <div class="Img"></div>
          <div class="listConter">
            <h6>周星</h6>
            <p>家谱是记载一个家族的世系繁衍及重要人物的事迹书</p>
          </div>
          <!-- 赞 -->
          <div class="zan">
            <img src="@/assets/images/praise.png" alt>
            <span>12</span>
          </div>
        </li>
      </ul>
    </div>

    <!-- 底部评论 -->
    <div class="observer">
      <input type="text" placeholder="我来说两句...">
      <img class="pen" src="@/assets/images/pen.png" alt>
      <img class="shang" src="@/assets/images/shang.png" alt>
      <img class="share" src="@/assets/images/share.png" alt>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      particulars_list: []
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.particulars();
  },
  watch: {},
  methods: {
    returnGo() {
      this.$router.go(-1);
    },
    particulars() {
      let id = this.$router.history.current.params.id
      this.api
        .get(this.api.county.base + this.api.county.ancestor_info,{id: id})
        .then(res => {
          console.log(res.data);
          this.particulars_list = res.data;
        });
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.biography {
  font-size: 0.32rem;
  overflow: hidden;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  padding: 1.5rem 0rem 1rem 0;
  // 头部固定
  header {
    font-size: 0.32rem;
    padding: 0.25rem 0.2rem;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.01rem solid #dbd8d8;
    background-color: #fff;
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    h2 {
      margin: 0;
    }
    img {
      width: 0.46rem;
      height: 0.45rem;
    }
    /deep/ .van-icon {
      font-size: 0.32rem;
      color: #000000;
    }
  }
  // 底部固定
  .observer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    z-index: 999;
    padding: 0.13rem 0.2rem;
    background-color: #fff;
    border-top: 0.01rem solid #d0cfcf;
    box-sizing: border-box;
    input {
      outline: none;
      color: #666666;
      width: 5.78rem;
      height: 0.7rem;
      border-radius: 0.3rem;
      border: 0.01rem solid #d0cfcf;
      font-size: 0.26rem;
      padding-left: 0.8rem;
      box-sizing: border-box;
    }
    .pen {
      widows: 0.43rem;
      height: 0.37rem;
      position: absolute;
      left: 0.38rem;
      top: 0.3rem;
    }
    .shang {
      width: 0.51rem;
      height: 0.51rem;
      position: absolute;
      right: 0.85rem;
      top: 0.25rem;
    }
    .share {
      width: 0.46rem;
      height: 0.45rem;
      position: absolute;
      right: 0.2rem;
      top: 0.25rem;
    }
  }
  .characters {
    // margin-bottom: 1.2rem;
    // font-size: 0.24rem;
    // overflow: hidden;
    // overflow-y: auto;
    // overflow-x: hidden;
    // position: relative;
    padding: 0rem 0.2rem 0;
    .message {
      display: flex;
      margin-bottom: 0.5rem;
      .Img {
        width: 2.2rem;
        height: 2.2rem;
        background-color: pink;
        border-radius: 0.05rem;
        margin-right: 0.32rem;
        background: no-repeat center / cover;
      }
      h3 {
        margin: 0.52rem 0 0.1rem 0;
      }
      span {
        font-size: 0.22rem;
        color: #666666;
        margin: 0.2rem 0 0 0;
      }
      .scutcheon {
        height: 0.46rem;
        width: 1.25rem;
        color: white;
        font-size: 0.24rem;
        text-align: center;
        line-height: 0.46rem;
        border-radius: 0.2rem;
        margin-top: 0.17rem;
        background-color: #d2211b;
      }
    }
    h2 {
      margin-bottom: 0.4rem;
    }
    h4 {
      margin: 0.45rem 0 0.25rem 0;
    }
    p {
      font-size: 0.22rem;
      color: #333333;
      letter-spacing: 0.05rem;
    }
    span {
      font-size: 0.22rem;
      color: #666666;
    }
    .list {
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
          h3 {
            margin: 0.23rem 0 0.1rem 0;
          }
          .portrait {
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            vertical-align: top;
          }
          h5 {
            margin: 0.23rem 0 0.16rem 0;
            font-size: 0.26rem;
            color: #333333;
          }
          .bunText {
            margin-top: 0.05rem;
            width: 1.35rem;
            height: 0.42rem;
            background: #d2211b;
            border-radius: 0.2rem;
            font-size: 0.22rem;
            color: white;
            text-align: center;
            line-height: 0.42rem;
            display: inline-block;
          }
        }
        li:nth-child(3) {
          margin-right: 0;
        }
      }
    }
  }
  // 评论内容
  .comment {
    width: 100%;
    position: relative;
    .zi {
      width: 0.88rem;
      height: 0.88rem;
      position: absolute;
      left: 50%;
      top: -1.3rem;
      transform: translateX(-50%);
    }
    h5 {
      margin-top: 2.4rem;
      margin-left: 0.2rem;
      margin: 2.4rem 0 0.3rem 0.2rem;
      font-size: 0.32rem;
    }
    .commentList {
      li {
        height: 2rem;
        width: 100%;
        padding-left: 0.2rem;
        border-top: 0.01rem solid #dbd8d8;
        display: flex;
        position: relative;
        .Img {
          width: 1rem;
          height: 1rem;
          background: pink;
          border-radius: 50%;
          margin: 0.25rem 0.2rem 0 0;
        }
        .listConter {
          padding-right: 0.4rem;
          h6 {
            margin-bottom: 0.3rem;
            color: #0033ff;
            font-size: 0.22rem;
          }
          p {
            font-size: 0.28rem;
            color: #333333;
          }
        }
        .zan {
          position: absolute;
          top: 0.42rem;
          right: 0.4rem;
          color: #b0b0b0;
          font-size: 0.16rem;
          img {
            width: 0.31rem;
            height: 0.3rem;
            display: inline-block;
          }
        }
      }
    }
  }
  // 修改字派方式
  .Character {
    margin: 0.2rem 0;
    :nth-child(1) {
      display: flex;
      justify-content: space-around;
    }
    :nth-child(2) {
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
<style >
/* img {
    margin-left: -0.4rem;
    transform: scale(0.5);
  } */
</style>
