<style scoped>
  .swiper-container{
    height: 8.533rem;
  }
  .swiper-slide {
    background-repeat: no-repeat;
    background-size: 100% 8.533rem;
  }
  .aui-4img{
    width: 2.176rem;
    height: 2.176rem;
    margin-right: 0.64rem;
    float: left;
  }
  .roomcard{
    position: relative;
    width: 96%;
    height: 3.626rem;
    background-size: 100% 100%;
    background-image: url(../assets/shopmall/rectangle.png);
    margin:0.64rem auto 0;
    padding: 0.64rem;
  }
  .card_ints{
    float: left;
    position: relative;
  }
  .card_ints .card_title{
    margin-top: 0.256rem;
    float: left;
    font-size: 0.682rem;
    color: #333333;
    width: 100%;
  }
  .card_ints .card_txt{
    font-size: 0.533rem;
    color: #ccc;
    margin-top: 0.32rem;
    width: 100%;
  }
   .card_btn {
    width: 2.666rem;
    height: 1.36rem;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url(../assets/shopmall/bugbtn.png);
    position: absolute;
    right: 0.64rem;
    top: 50%;
    margin-top: -0.69rem;
  }
 .recharge{
    background-image: url(../assets/shopmall/recharge.png)
  }
  .nomore{
    font-size: 0.469rem;
    color: #ccc;
    text-align: center;
    line-height: 1.706rem;
    background: #f8f8f8;
  }
  /*广告图*/
  .sop_sdvertisement{
    margin-top: 0.64rem;
    display: block;
    overflow: hidden;
  }
  /*物品*/
  .goods{
    padding:0.64rem 4%;
    background-color: #fff;
    margin-top: 0.64rem;
  }
  .goods .goods_price span{
    float: left;
  }
  .goods .goodstit{
    font-size: 0.746rem;
    margin-top: 0.64rem;
    color: #333333;
  }
  .goods .aui-exchange-img{
    float: left;
    font-size: 0.512rem;
    color: #53c7c4;
    display: inline-block;
    padding-left: 0.96rem;
    background-size: 0.746rem 0.469rem;
    background-repeat: no-repeat;
    background-position: center left;
    background-image: url(../assets/shopmall/many.png);
    margin-left: 0.64rem;
  }
  .goods .goods_price{
    overflow: hidden;
    margin-top: 0.64rem;
        line-height: 0.746rem
  }
  .goods .goods_price .price{
    font-size: 0.64rem;
    color: #ff405d;
    font-weight: 700;
  }
</style>
<style>
  .shopmall_swipers .swiper-pagination-bullet{
    width: 0.32rem;
    height:0.32rem;
    background: #999;
    opacity: 1;
    transition:all 0.2s;
  }
  .shopmall_swipers span.swiper-pagination-bullet.swiper-pagination-bullet-active{
    width: 0.64rem;
    height: 0.32rem;
    background-color: #50e3c2!important;
    border-radius: 0.15rem;
  }
</style>
<template>
  <div id="index">
  <div v-title data-title="商城">
  </div>
<!-- 底部 -->
  <componentName></componentName>   
<!-- 轮播图 -->
      <div class="shopmall_swipers">
      <swiper :options="swiperOption"  ref="mySwiper">
            <swiper-slide v-for="item in items" v-bind:style="{'background-image':'url('+item.imgs+')'}">
            </swiper-slide>  
                          <!-- 这是轮播的小圆点 -->  
            <div class="swiper-pagination" slot="pagination"></div> 
      </swiper>  
      </div>
<!-- 房卡 -->
      <div class="roomcard aui-media-list-item-inner">
        <div class="aui-list-item-media">
<!-- 图标 -->
          <div class="aui-4img">
            <img src="../assets/shopmall/card2.png" alt="">
          </div>
<!-- 卡信息 -->
          <div class="card_ints">
            <div class="card_title">房卡购买</div>
            <div class="card_txt">购买多多，福利多多</div>
            
          </div>

        </div>
        <div class="card_btn" v-on:click="buyroomcard"></div>
      </div>
      <!-- 游戏币购买 -->
      <div class="roomcard aui-media-list-item-inner ">
        <div class="aui-list-item-media">
<!-- 图标 -->
          <div class="aui-4img">
            <img src="../assets/shopmall/gold.png" alt="">
          </div>
<!-- 卡信息 -->
          <div class="card_ints">
            <div class="card_title">游戏币购买</div>
            <div class="card_txt">每购买1天会员，赠送1万游戏币</div>
  
          </div>
          <div class="card_btn recharge" v-on:click="buygame"></div>
        </div>
      </div>
<!-- 广告 -->
      <router-link class="aui-card-list-content sop_sdvertisement" to="/buygames">
        <img :src="sdvertisement" alt="">
      </router-link>
<!-- 商品 -->
      <div class="aui-card-list-content goods" v-for="item in goodsarr" v-on:click="goprizeInt">
        <div>
          <img :src="item.imgs" alt="">
        </div>
        <div class="goodstit">
          三眼猫浪漫小台灯，漫长黑夜不在孤单。
        </div>
        <div class="goods_price"><span class="price">¥119</span><div class="aui-exchange-img"><span>可用抵扣价格</span><span>&nbsp;¥59.00</span></div></div>
      </div>
  </div>
</template>
<script>
import '../../static/css/aui.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
let sdvertisement = require('../assets/shopmall/shopmall_gg.png')
let goodspic = require('../assets/shopmall/goodspic.png')
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        autoplayDisableOnInteraction: false,
        autoplay: 2000,
        loop: true,
        spaceBetween: 30,
        onSlideChangeEnd: swiper => {
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      },
      items: [
        { 'imgs': 'https://a.vimage1.com/upload/brand/upcb/2017/06/28/110/ias_149864593278705_604x290_80.jpg' },
        { 'imgs': 'https://a.vimage1.com/upload/brand/upcb/2017/06/29/30/ias_149872368157946_604x290_80.jpg' },
        { 'imgs': 'https://a.vimage1.com/upload/brand/upcb/2017/06/28/1/ias_149864388227755_604x290_80.jpg' },
        { 'imgs': 'https://a.vimage1.com/upload/brand/upcb/2017/06/29/30/ias_149872368157946_604x290_80.jpg' }
      ],
      goodsarr: [
      {'imgs': goodspic},
      {'imgs': goodspic},
      {'imgs': goodspic}
      ],
      sdvertisement: sdvertisement
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.swiper.slideTo(0, 0, false)
  },
  methods: {
    // 购买房卡
    buyroomcard: function () {
      this.$router.push({ path: '/roomcard' })
    },
    //  购买游戏币
    buygame: function () {
      this.$router.push({ path: '/gamerech' })
    },
    goprizeInt: function () {
      this.$router.push({ path: '/prize/prizeint' })
    }
  }
}
</script>

