<template>
  <div id="appList">
    <div class="centre">
      <div class="centreDiv">
        <span class="newest">最新</span>
        <h5 class="zx">{{familyList.length ? familyList[0].newsTitle : ''}}</h5>

        <p>{{familyList.length ? familyList[0].newsText : ''}}</p>
        <div class="centreImg">
          <div
            :style="api.imgBG(familyList.length ? familyList[0].newsUploadFileList[0].filePath : '' )"
            class="imgDiv"
          ></div>
          <div
            :style="api.imgBG(familyList.length ? familyList[0].newsUploadFileList[0].filePath : '' )"
            class="imgDiv"
          ></div>
          <div
            :style="api.imgBG(familyList.length ? familyList[0].newsUploadFileList[0].filePath : '' )"
            class="imgDiv"
          ></div>
        </div>
        <div class="axisCentre">
          <span>家族产业</span>
          <van-icon name="location"/>
          <p>湖北省大鹏村腾睿大厦</p>
          <div class="centreSolid"></div>
        </div>
      </div>

      <div v-for="(item,key) in familyIndustry" :key="key">
        <div>
          <div v-for="(item,i) in familyList" :key="i" class="centerDiv">
            <div class="centerText">
              <router-link
                :to="{ name: 'IndustryInDetails', params: { id: item.id }}"
                tag="h5"
              >{{item.newsTitle}}</router-link>
              <div class="axisCentre">
                <span>家族产业</span>
                <van-icon name="location"/>
                <p>{{item.industryLocation}}</p>
                <div class="centreSolid"></div>
              </div>
            </div>
            <div
              :style="api.imgBG(item.newsUploadFileList.length ? item.newsUploadFileList[0].filePath : '' )"
              class="centerImg"
            ></div>
          </div>
        </div>
        <div>
          <div v-for="(item,e) in personage" :key="e" class="centerDiv">
            <div class="centerText">
              <router-link
                :to="{ name: 'IndustryInDetails', params: { id: item.id }}"
                tag="h5"
              >{{item.newsTitle}}</router-link>
              <div class="axisCentre">
                <span>个人产业</span>
                <van-icon name="location"/>
                <p>{{item.industryLocation}}</p>
                <div class="centreSolid"></div>
              </div>
            </div>
            <div
              :style="api.imgBG(item.newsUploadFileList.length ? item.newsUploadFileList[0].filePath : '' )"
              class="centerImg"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      familyIndustry: [], // 家族产业一级
      familyList: [], // 家族产业
      personage: [] // 个人产业
    };
  },
  computed: {},
  created() {
    this.$store.dispatch("family");
    this.dynamic();
  },
  mounted() {},
  watch: {},
  methods: {
    dynamic() {
      // 家族产业
      this.api
        .get(
          this.api.county.base +
            "genogram/fanMenu/getTitlesByMenuId?siteId=111&menuId=4"
        )
        .then(res => {
          if (res.code == 200) {
            this.familyIndustry = res.data;
            console.log(res);
          }
          return this.api.get(
            this.api.county.base +
              "genogram/fanNewsIndustry/getFamilyIndustryPage?showId=1119919"
          );
        })
        .then(res => {
          if (res.code == 200) {
            this.familyList = res.data.records;
            console.log(res);
          }
          return this.api.get(
            this.api.county.base +
              "genogram/fanNewsIndustry/getFamilyIndustryPage?&showId=1119920"
          );
        })
        .then(res => {
          if (res.code == 200) {
            this.personage = res.data.records;
          }
        });
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
::-webkit-scrollbar {
  display: none; /*隐藏滚轮*/
}
#appList {
  .homeList {
    height: 2.85rem;
    width: 100%;
    background-color: red;
    position: absolute;
    top: -1.85rem;
    left: 0;
  }
  .appBox {
    flex: 1;
    padding-top: 2rem;
    background-color: pink;
  }
  .centre {
    padding: 4.2rem 0.2rem 0.98rem 0.2rem;
    flex: 1;
    box-sizing: border-box;
    overflow: hidden;
    font-size: 0.16rem;
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    h5 {
      font-size: 0.32rem;
      font-weight: 500;
      margin: 0 0.1rem 0 0rem;
    }
    .zx {
      margin-left: 1rem;
      text-align: left;
    }
    /deep/ .van-icon-location::before {
      width: 0.44rem;
      height: 0.44rem;
      color: #afafaf;
      font-size: 0.29rem;
    }
    .centerDiv {
      position: relative;
      height: 1.67rem;
      display: flex;
      margin-top: 0.25rem;
      .centerText {
        flex: 1;
        .axisCentre {
          margin-top: 0.2rem;
        }
      }
      .centerImg {
        width: 2.3rem;
        height: 1.44rem;
        justify-content: flex-end;
        background: no-repeat center / cover;
        background-color: pink;
      }
      .centerHr {
        width: 200%;
        border: 0.01rem solid #ccc;
        position: absolute;
        left: -0.2rem;
        bottom: 0;
      }
    }
    .centreDiv {
      width: 100%;
      height: 4.67rem;
      position: relative;
      text-align: center;
      .newest {
        position: absolute;
        width: 0.8rem;
        height: 0.42rem;
        background: #d2211b;
        top: 0;
        left: 0;
        border-radius: 0.1rem;
        color: white;
        font-size: 0.22rem;
        line-height: 0.42rem;
      }
      p {
        text-align: left;
        color: #767676;
        font-size: 0.26rem;
        margin: 0.3rem 0 0 0;
        letter-spacing: 0.02rem;
      }
      .centreImg {
        display: flex;
        overflow: hidden;
        .imgDiv {
          width: 2.3rem;
          height: 1.45rem;
          //   background-color: #d2211b;
          margin: 0.28rem 0 0.22rem 0.1rem;
          background: no-repeat center / cover;
        }
        :nth-child(1) {
          margin-left: 0;
        }
      }
    }
    .axisCentre {
      width: 100%;
      height: 0.55rem;
      position: relative;
      display: flex;
      span {
        display: inline-block;
        height: 0.3rem;
        width: 0.9rem;
        font-size: 0.16rem;
        border: 0.01rem solid #d2211b;
        border-radius: 0.03rem;
        margin-right: 0.28rem;
        color: #d2211b;
        text-align: center;
        line-height: 0.3rem;
      }
      /deep/ .van-icon-location::before {
        margin-top: 0.02rem;
      }
      p {
        margin: 0;
        color: #afafaf;
      }
      .centreSolid {
        position: absolute;
        width: 200%;
        height: 0.02rem;
        background: #dedddd;
        bottom: -0.26rem;
        left: -0.33rem;
      }
    }
  }
  // 关注人物样式
  .centerLeft {
    display: flex;
    .img {
      width: 1.36rem;
      height: 1.36rem;
      border-radius: 50%;
      background-color: pink;
      text-align: center;
      line-height: 1.36rem;
      color: #fff;
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

  .gz {
    width: 1.7rem;
    height: 0.55rem;
    border-radius: 0.3rem;
    font-size: 0.24rem;
    color: white;
    text-align: center;
    line-height: 0.55rem;
    background-color: #d2211b;
  }
}
</style>
