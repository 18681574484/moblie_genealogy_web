<template>
    <div class="box">
      <div class="celebrity">
        <!-- 右边按钮 -->
        <van-icon name="arrow-down" />
       <van-tabs v-model="active">
            <van-tab title="家族长老">
                <div v-for="(item,index) in elder" :key="index" class="titleCenter">
                   <div class="titleTop">
                       <div class="centerLeft">
                       <router-link to="/characterDeatils" tag="div" :style="api.imgBG(item.picFileSrc)" class="img"></router-link>
                       <div class="celebrity">
                           <h5>{{item.personName}}</h5>
                            <span>慈善名人</span>
                            <span>{{item.visitNum}}万粉丝关注</span>
                       </div>
                   </div>
                   <div class="gz">
                       <div>分支后裔</div>
                       <div>千支同源</div>
                   </div>
                   </div>
                   <!-- <p>周星是中国慈善名人帮第一人，是 《中国慈善家》 杂志年度重量级榜单人物之一。</p> -->
                   <p>{{item.personSummary.slice(0,100)}}</p>
                </div>
            </van-tab>
            <van-tab title="家族栋梁">
                <!-- <div class="titleCenter">
                   <div class="titleTop">
                       <div class="centerLeft">
                       <router-link to="/characterDeatils" tag="div" class="img">头像</router-link>
                       <div class="celebrity">
                           <h5></h5>
                            <span></span>
                            <span>125万粉丝关注</span>
                       </div>
                   </div>
                   <div class="pillar">+关注</div>
                   </div>
                   <p></p>
                </div>
                <div class="titleCenter">
                   <div class="titleTop">
                       <div class="centerLeft">
                       <div class="img">头像</div>
                       <div class="celebrity">
                           <h5>周星</h5>
                            <span>慈善名人</span>
                            <span>125万粉丝关注</span>
                       </div>
                   </div>
                   <div class="pillar">+关注</div>
                   </div>
                   <p>周星是中国慈善名人帮第一人，是 《中国慈善家》 杂志年度重量级榜单人物之一。</p>
                </div>
                <div class="titleCenter">
                   <div class="titleTop">
                       <div class="centerLeft">
                       <div class="img">头像</div>
                       <div class="celebrity">
                           <h5>周星</h5>
                            <span>慈善名人</span>
                            <span>125万粉丝关注</span>
                       </div>
                   </div>
                   <div class="pillar">+关注</div>
                   </div>
                   <p>周星是中国慈善名人帮第一人，是 《中国慈善家》 杂志年度重量级榜单人物之一。</p>
                </div>
                <div class="titleCenter">
                   <div class="titleTop">
                       <div class="centerLeft">
                       <div class="img">头像</div>
                       <div class="celebrity">
                           <h5>周星</h5>
                            <span>慈善名人</span>
                            <span>125万粉丝关注</span>
                       </div>
                   </div>
                   <div class="pillar">+关注</div>
                   </div>
                   <p>周星是中国慈善名人帮第一人，是 《中国慈善家》 杂志年度重量级榜单人物之一。</p>
                </div> -->
                <div v-for="(item,index) in pillar" :key="index" class="titleCenter">
                   <div class="titleTop">
                       <div class="centerLeft">
                       <router-link to="/characterElite" tag="div" :style="api.imgBG(item.picFileSrc)" class="img"></router-link>
                       <div class="celebrity">
                           <h5>{{item.personName}}</h5>
                            <span>慈善名人</span>
                            <span>{{item.visitNum}}万粉丝关注</span>
                       </div>
                   </div>
                   <div class="pillar">+关注</div>
                   </div>
                   <!-- <p>周星是中国慈善名人帮第一人，是 《中国慈善家》 杂志年度重量级榜单人物之一。</p> -->
                   <p>{{item.personSummary}}</p>
                </div>
            </van-tab>
            <van-tab title="组织架构">
                <!-- <div class="titleCenter">
                   <div class="titleTop">
                       <div class="centerLeft">
                        <div class="img">头像</div>
                        <div class="celebrity">
                                <h5>周星</h5>
                                <span>慈善名人</span>
                                <span>125万粉丝关注</span>
                        </div>
                       </div>
                    <div class="rank">[副会长]</div>
                   <div class="gz">
                       <div class="organization">个人主页</div>
                   </div>
                   </div>
                   <p>周星是中国慈善名人帮第一人，是 《中国慈善家》 杂志年度重量级榜单人物之一。</p>
                </div>
                <div class="titleCenter">
                   <div class="titleTop">
                       <div class="centerLeft">
                        <div class="img">头像</div>
                        <div class="celebrity">
                                <h5>周星</h5>
                                <span>慈善名人</span>
                                <span>125万粉丝关注</span>
                        </div>
                       </div>
                    <div class="rank">[会长]</div>
                   <div class="gz">
                       <div class="organization">个人主页</div>
                   </div>
                   </div>
                   <p>周星是中国慈善名人帮第一人，是 《中国慈善家》 杂志年度重量级榜单人物之一。</p>
                </div>
                <div class="titleCenter">
                   <div class="titleTop">
                       <div class="centerLeft">
                        <div class="img">头像</div>
                        <div class="celebrity">
                                <h5>周星</h5>
                                <span>慈善名人</span>
                                <span>125万粉丝关注</span>
                        </div>
                       </div>
                    <div class="rank">[副会长]</div>
                   <div class="gz">
                       <div class="organization">个人主页</div>
                   </div>
                   </div>
                   <p>周星是中国慈善名人帮第一人，是 《中国慈善家》 杂志年度重量级榜单人物之一。</p>
                </div>
                <div class="titleCenter">
                   <div class="titleTop">
                       <div class="centerLeft">
                        <div class="img">头像</div>
                        <div class="celebrity">
                                <h5>周星</h5>
                                <span>慈善名人</span>
                                <span>125万粉丝关注</span>
                        </div>
                       </div>
                    <div class="rank">[会长]</div>
                   <div class="gz">
                       <div class="organization">个人主页</div>
                   </div>
                   </div>
                   <p>周星是中国慈善名人帮第一人，是 《中国慈善家》 杂志年度重量级榜单人物之一。</p>
                </div> -->
                <!-- <div v-for="(item,key) in organization" :key="item.id" class="titleCenter">
                   <div class="titleTop">
                       <div class="centerLeft">
                        <div class="img">头像</div>
                        <div class="celebrity">
                                <h5>周星</h5>
                                <span>慈善名人</span>
                                <span>125万粉丝关注</span>
                        </div>
                       </div>
                    <div class="rank">{{key}}</div>
                   <div class="gz">
                       <div class="organization">个人主页</div>
                   </div>
                   </div>
                   <p>周星是中国慈善名人帮第一人，是 《中国慈善家》 杂志年度重量级榜单人物之一。</p>
                </div> -->
                <!-- <div v-for="(item,key) in organization" :key="item.id" class="organization">
                     <h2>{{key}}</h2>
                     <div @click="btn" ref="h" class="conter">
                         <div class="left">
                             <div class="Img"></div>
                            <p>sdsfsdf</p>
                         </div>
                        <div class="right">
                            <div class="Img"></div>
                            <p>sdsfsdf</p>
                        </div>
                     </div>
                </div> -->
                <!-- <div class="architect">
                    <h2>会长</h2>
                    <div class="conter">
                       <div>
                           <div class="Img"></div>
                            <h5>周星</h5>
                            <p>
                                sdfsfsdfsdfdsfdsfsfdsfsfdsfdsffsdfsfsdfsdfdsfdsfsfdsfsfdsfdsff
                                sdfsfsdfsdfdsfdsfsfdsfsfdsfdsffsdfsfsdfsdfdsfdsfsfdsfsfdsfdsff
                                sdfsfsdfsdfdsfdsfsfdsfsfdsfdsffsdfsfsdfsdfdsfdsfsfdsfsfdsfdsff
                                sdfsfsdfsdfdsfdsfsfdsfsfdsfdsffsdfsfsdfsdfdsfdsfsfdsfsfdsfdsff
                            </p>
                       </div>
                  
                    </div>
                </div> -->
                <div  v-for="(item,key) in organization" :key="key" class="architect">
                    <h2>{{key}}</h2>
                    <div class="conter">
                       <div v-for="(item,index) in item" :key="index">
                           <div :style="api.imgBG(item.picFileSrc)" class="Img"></div>
                            <h5>{{item.personName}}</h5>
                            <p>
                               {{item.personSummary.slice(0,70)}}
                            </p>
                       </div>
                  
                    </div>
                </div>
                <!-- <div v-for="(item,index) in organization" :key="index" class="architect">
                    <h2>{{index}}</h2>
                    <div class="conter">
                       <div>1</div>
                       <div>2</div>
                    </div>
                </div> -->
            </van-tab>
        </van-tabs>
        <img src="@/assets/images/home_cbb@2x.png" alt="">
      </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            active:0,
            organization: [],
            elder: [],
            pillar:[]
            
        };
    },
    computed: {

    },
    created() {
        this.branch()        
    },
    mounted() {
        this.urlPath()
    },
    watch: {
         "$route": "branch"
    },
    methods: {
        branch() {
            // 家族长老
            this.elder = this.$store.state.elder
            // 家族栋梁
            this.pillar = this.$store.state.pillar
            console.log(this.elder)
            this.api.get(this.api.county.base +"genogram/fanIndex/getFamilyStructureList?siteId=100")
            .then( res => {
                this.organization = res.data
            })
        },
        btn() {
        // //     var height= this.$refs.h.offsetHeight; //100
        // //     console.log(height)
        // //    this.$refs.text.style.height = 2 + 'rem'
         },
        urlPath() {
            let url = this.$route.path
            if(url = "personal/1"){
                this.active = 1
            }
            if(url = "personal/0"){
                this.active = 0
            }
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.box {
    padding-top: 4rem;
}
.celebrity {
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
        }
        // 父元素
        /deep/.van-tabs__nav--line {
          background: none;   
        }
        // 每一个内容的标签
        /deep/.van-tab {
            background: none;
            font-size: 0.32rem;
            color:#333333;
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
            color: #D2211B !important;
            
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
                    flex-direction:  column; 
                    margin: 0 0 0 0.2rem;
                    h5 {
                        font-size: 0.32rem;
                        margin: 0.12rem 0 0.15rem 0;
                     }
                     span {
                         font-size: 0.25rem;
                         color: #B0B0B0;
                     }
                }
               
        }
     
        .titleCenter {
            padding: 0 0.2rem;
            position: relative;
            margin-bottom: 0.26rem;
            border-bottom: 0.01rem solid #DEDDDD;
                .titleTop {
                        display: flex;
                        justify-content: space-between;
                    .rank {
                        position: absolute;
                        color: #0066FF;
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

        .gz {
            width: 2.7rem;
            height: 0.55rem;
            font-size: 0.24rem;
            color: #D2211B;
            text-align: center;
            line-height: 0.55rem;
            display: flex;
            justify-content: space-between;
                div {
                    width: 1.24rem;
                    height: 100%;
                    border-radius: 0.3rem;
                    border: 0.01rem solid #D2211B;
                }
        }
        // 组织架构
        .organization {
           width: 100%;
        //    padding: 0 0.2rem;
           box-sizing: border-box;
           text-align: center;
               .conter {
                   padding: 0 0.2rem;
                   box-sizing: border-box;
                   display: flex;
                   justify-content: space-between;
                    div {
                        width: 50%;
                        flex-grow: 1;
                        height: 3rem;
                        margin: 0 0.1rem;
                        background-color: pink;
                        position: relative;
                            .Img {
                                width: 1rem;
                                height: 1rem;
                                // background-color: red;
                                border-radius: 50%;
                                position: absolute;
                                left: 50%;
                                transform: translateX(-50%);
                                top: -0.3rem;
                                background: no-repeat center / cover;
                            }
                            p {
                                margin-top: 1rem;
                            }
                    }

               }
        }
        // 家族栋梁
        .pillar {
            width: 1.7rem;
            height: 0.55rem;
            border: 0.01rem solid #D2211B;
            border-radius: 0.3rem;
            font-size: 0.24rem;
            color: #D2211B;
            text-align: center;
            line-height: 0.55rem;
        }
        // 组织架构修改
        .architect {
            width: 100%;
            padding: 0.3rem 0.2rem;
            box-sizing: border-box;
            height: 100%;
            clear:both;
            border-left: 0.01rem dashed #ccc;
            margin-left: 0.5rem;
                h2 {
                    margin:0 0 0 -0.6rem;
                    background-color: red;
                    display: inline;
                    padding: 0.05rem;
                    font-size: 0.32rem;
                    border-radius: 0.1rem;
                    color: #fff;
                    // margin-top: 0.3rem;
                }
                .conter {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                   div {
                       width: 42%;
                       height: 4rem;
                       box-shadow: 0 0 8px #ccc;
                       border-radius: 0.2rem;
                       margin: 0.1rem 0.1rem  0.5rem;
                       position: relative;
                       padding: 0 0.2rem;
                       box-sizing: border-box;
                            .Img {
                                width: 1rem;
                                height: 1rem;
                                background-color: red;
                                border-radius: 50%;
                                position: absolute;
                                // left: 0.78rem;
                                left: 50%;
                                transform: translateX(-50%);
                                top: -0.5rem;
                                background: no-repeat center / cover;
                            }
                            h5 {
                                position: absolute;
                                left: 50%;
                                transform: translateX(-50%);
                                top:0.3rem;
                                font-size: 0.32rem;
                            }
                            p {
                                height: 2.5rem;
                                width: 88%;
                                word-wrap : break-word;
                                position: absolute;
                                top: 1.2rem;
                                overflow: hidden;
                                font-size: 0.16rem;
                                color: #666666;
                             
                            }
                   }
                }
        }
}
</style>
