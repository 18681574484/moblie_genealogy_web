<template>
    <div class="celebrity">
        <!-- 右边按钮 -->
        <van-icon name="arrow-down" />
       <van-tabs v-model="active">
            <van-tab title="关注">
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
                   <div class="gz">+关注</div>
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
                   <div class="gz">+关注</div>
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
                   <div class="gz">+关注</div>
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
                   <div class="gz">+关注</div>
                   </div>
                   <p>周星是中国慈善名人帮第一人，是 《中国慈善家》 杂志年度重量级榜单人物之一。</p>
                </div>
            </van-tab>
            <van-tab title="全国张氏"></van-tab>
            <van-tab title="省级张氏"></van-tab>
            <van-tab title="崇阳张氏"></van-tab>
            <van-tab title="标签 1"> </van-tab>
            <van-tab title="标签 2"> </van-tab>
            <van-tab title="标签 3"> </van-tab>
            <van-tab title="标签 4"> </van-tab>
        </van-tabs>
        <img src="@/assets/images/home_cbb@2x.png" alt="">
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            active:0
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
                    background-color: pink;
                    text-align: center;
                    line-height: 1.36rem;
                    color: #fff;
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
                }
                p {
                    font-size: 0.24rem;
                    color: #333333;
                }
        }

        .gz {
            width: 1.7rem;
            height: 0.55rem;
            border: 0.01rem solid #D2211B;
            border-radius: 0.3rem;
            font-size: 0.24rem;
            color: #D2211B;
            text-align: center;
            line-height: 0.55rem;
        }
}

</style>
