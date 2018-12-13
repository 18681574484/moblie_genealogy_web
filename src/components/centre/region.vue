<template>
    <div class="headerBox">
        <!-- 背景 -->
        <div class="boxBgc"></div>
        <!-- 搜索 -->
        <div class="searchDiv">
            <img class="searImg" src="@/assets/images/logo@2x.png" alt="">

            <div class="inputDiv">
                <img src="@/assets/images/search.png" alt="">
                <input type="text" placeholder="炎黄统谱网"  >
            </div>
        </div>
        <!-- 导入左右滑动模块 -->
        <navigation></navigation>
        <div class="dj" @click="btn">
           
            <van-icon name="location" />
            点击选择其他省份
        </div>
         <van-popup v-model="show" position="bottom" :overlay="false">
             <van-area :area-list="areaList" :columns-num="2" title="当前地区" />
        </van-popup>
    </div>
</template>

<script>
import navigation from '@/components/Header/navigation.vue'

export default {
    props: {

    },
    data() {
        return {
            show:true,
            areaList: {
                province_list: {
                    110000: '北京市',
                    120000: '天津市'
                },
                city_list: {
                    110100: '北京市',
                    110200: '县',
                    120100: '天津市',
                    120200: '县'
                },
                county_list: {
                    110101: '东城区',
                    110102: '西城区',
                    110105: '朝阳区',
                    110106: '丰台区',
                    120101: '和平区',
                    120102: '河东区',
                    120103: '河西区',
                    120104: '南开区',
                    120105: '河北区',
                    // ....
                }
            }
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
        btn() {
            this.show = !this.show
        }
    },
    components: {
        navigation
    }
};
</script>

<style scoped lang="less">
.headerBox {
    margin-top: 0.1rem;
    height: 3.9rem;
    width: 100%;
    position: fixed;
    z-index: 9999;
    top: 0;
        .boxBgc {
            height: 3.9rem;
            width: 100%;
            position: fixed;
            top: 0;
            background-color: #D2211B;
            z-index: -1;
        }
        .searchDiv {
            height: 0.6rem;
            width: 100%;
            padding:  0 0.2rem;
            box-sizing: border-box;
            display: flex;
                img {
                    width: 0.56rem;
                    height: 0.56rem;
                    margin-right: 0.2rem;
                }
                .inputDiv {
                    width: 6.3rem;
                    height: 0.6rem;
                    font-size: 0.26rem;
                    position: relative;
                        img {
                            position: absolute;
                            top: 0.19rem;
                            left: 2rem;
                            width: 0.3rem;
                            height: 0.3rem;
                        }
                        input {
                            width: 100%;
                            height: 100%;
                            border: none;
                            border-radius: 0.2rem;
                            background-color:rgba(0, 52, 52, 0.1);
                            text-align: center;
                            color: white;
                        }
                                        
                        input::-webkit-input-placeholder {
                        /* placeholder颜色  */
                        color: white;

                    }
                }
        }
}
.dj {
    font-size: 0.32rem;
    color: #fff;
    text-align: center;
}
/deep/.van-popup--bottom {
    top: 2.7rem;
}
</style>
