<template>
  <div class="celebrity">
    <van-tabs v-model="active" @click="tabClick">
      <van-tab v-for="(val,key) in familyCulture" :key="key" :title="val.menuName">
        <div @change="tabClick" class="centerDiv" v-for="item in modification" :key="item.id">
          <div class="centerText">
            <router-link
              :to="{ name: 'characterIntroduction', params: { id: item.id }}"
              tag="h5"
            >{{item.newsTitle}}</router-link>
            <div class="axisCentre">
              <span class="xu">{{val.menuName}}</span>
              <span>{{item.status}}条评论</span>
              <span>{{item.visitNum}}浏览</span>
            </div>
          </div>
          <div
            :style="item.newsUploadFileList.length ? api.imgBG(item.newsUploadFileList[0].filePath) : ''"
            class="centerImg"
          ></div>
        </div>
      </van-tab>
    </van-tabs>
    <img src="@/assets/images/home_cbb@2x.png" alt>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      familyCulture: [], // 家族文化
      active: 0,
      cultural: [], // 家族祠堂
      origin: [], // 源流
      category: [], // 序
      modification: [], //家族祠堂
      list: [],
      aboutTheFamily: [] // 宗规族约
    };
  },
  computed: {},
  created() {
    this.culturala();
  },
  mounted() {},
  watch: {},
  methods: {
    culturala() {
      let siteId = this.$store.state.id;
      if (siteId) {
        // 家族文化
        this.api
          .get(
            this.api.county.base +
              "/genogram/fanMenu/getTitlesByMenuId",{siteId:siteId,menuId:2}
          )
          .then(res => {
            if (res.code == 200) {
              let arr = res.data;
              arr.shift()
              this.familyCulture = arr
              console.log(arr);
            }
            return this.api.get(
              this.api.county.base +
                "/genogram/fanNewsCulture/getFamilyCulturePage?showId=1119911"
            );
          })
          .then(res => {
            if (res.code == 200) {
              this.modification = res.data.records;
            }
          });
      }
    },
    tabClick(e, i) {
      let id = this.familyCulture[e].showId;
      this.api
        .get(
          this.api.county.base +
            "/genogram/fanNewsCulture/getFamilyCulturePage",
          { showId: id }
        )
        .then(res => {
          if (res.code == 200) {
            this.modification = res.data.records;
          }
        });
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.celebrity {
  margin-top: 4rem;
  margin-bottom: 1.2rem;
  font-size: 0.24rem;
  overflow: hidden;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  // 右边按钮
  /deep/.van-icon {
    left: 7rem;
    top: 0.5rem;
    color: #666666;
  }
  // 下划线元素
  /deep/.van-tabs__line {
    display: none;
    span {
      width: 1.4rem;
    }
  }
  // 父元素
  /deep/.van-tabs__nav--line {
    background: none;
  }
  // 每一个内容的标签
  /deep/.van-tab {
    background: none;
    font-size: 0.32rem;
    color: #333333;
    span {
      width: 1.4rem;
    }
  }
  // 内容父元素
  /deep/.van-tabs--line {
    padding-top: 0.8rem;
  }
  /deep/.van-tabs__wrap {
    padding: 0 0.55rem 0 0.2rem;
  }
  /deep/.van-hairline--top-bottom::after {
    border: none;
  }
  /deep/.van-tab--active {
    color: #d2211b !important;
  }
  .cultureList {
    width: 100%;
    padding: 0 0.2rem;
    box-sizing: border-box;
    border-bottom: 0.01rem solid #dedddd;
    .centerImg {
      width: 2.3rem;
      height: 1.44rem;
      justify-content: flex-end;
      background: pink;
      background: no-repeat center / cover;
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
          width: 0.9rem;
          height: 0.3rem;
          border: 0.01rem solid #d2211b;
          text-align: center;
          line-height: 0.3rem;
          border-radius: 0.05rem;
          font-size: 0.16rem;
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
}
</style>

