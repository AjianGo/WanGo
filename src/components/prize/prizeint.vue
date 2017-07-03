<style>
   .swiperbox .swiper-container{
    height: 7.253rem;
   } 
   .storeintx .swiper-pagination-bullet{
    width: 0.32rem !important;
    height: 0.32rem !important;
    background: #999;
    opacity: 1;
    transition:all 0.2s;
 }
 .storeintx .swiper-pagination-bullet-active{
    background: #000;
    width: 0.64rem !important;
    border-radius: 0.32rem;
 }
</style>
<style scoped>
  .artCard{
    padding: 0.64rem 0 0.426rem 0.64rem;
    background: #fff;
  }
  .artCard .artTitle{
    font-size: 0.746rem;
    color: #333333;
  }
  .artCard .deductible{
    font-size: 0.64rem;
    color: #999999;
    margin-top: 0.426rem;
  }
  .artmoney{
    padding-left: 0.96rem;
    background-image: url(../../assets/shopmall/many.png);
    background-size: 0.746rem 0.5rem;
    background-repeat: no-repeat;
    font-size: 0.469rem;
    line-height: 100%;
    color: #5ec9c6;
    margin-top: 0.213rem;
  }
  /*产品介绍*/
  .artInt{
    padding-top: 0.64rem;
    margin-top: 0.64rem;
    background: #fff;
    min-height: 5rem;
  }
 .artInt .artar{
  padding-left: 0.64rem;
 }
 .artar div{
  height: 0.64rem;
  font-size: 0.64rem;
  border-left: 0.213rem solid #53c7c4;
  line-height: 100%;
  padding-left: 0.213rem;
 }
 .artInt img{
  width: 100%;
 }
 #index{
  margin-bottom: 0!important;
 }
 /*兑换*/
 .duihuan{
  width: 100%;
  line-height: 2.133rem;
  background: #53c7c4;
  font-size: 0.746rem;
  color: #fff;
  text-align: center;
 }
</style>
<template>
  <div id="index">
  <div v-title data-title="奖品详情">
  </div>
<!-- 轮播图 -->
    <div class="swiperbox">
      <swiper class="storeintx" :options="swiperOption"  ref="mySwiper">
            <swiper-slide v-for="item in items">
              <img :src="item.imgs" alt="">
            </swiper-slide> 
<!-- 这是轮播的小圆点 -->  
      <div class="swiper-pagination" slot="pagination"></div>       
      </swiper>
    </div>
<!-- 奖品信息       -->
    <div class="artCard">
      <div class="artTitle">三眼猫手机壳6S、7、7P</div>
      <div class="deductible">支持:抵扣劵（限10个劵）</div>
      <div class="artmoney">¥29.00</div>
      <div class="deductible">配送方式：<span>包邮</span></div>
    </div>
 <!-- 产品介绍    -->
    <div class="artInt">
      <div class="artar">
        <div>产品介绍</div>
      </div>
      <img :src="xiang" alt="">
    </div>
    <div class="duihuan">立即兑换</div>
  </div>
</template>
<script>
import '../../../static/css/aui.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
let store = require('../../assets/1320_02.png')
let xiang = require('../../assets/1322.png')
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      // 轮播插件
      swiperOption: {
        notNextTick: true,
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        loop: true,
        spaceBetween: 30,
        autoplayDisableOnInteraction: false,
        autoplay: 2000,
        onSlideChangeEnd: swiper => {
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      },
      // 轮播图
      items: [
        { 'imgs': store },
        { 'imgs': store },
        { 'imgs': store }
      ],
      xiang: xiang
    }
  },
  computed: {
    // 轮播调用
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

