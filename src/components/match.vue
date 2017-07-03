<style scoped>
  .swiper-container{
    height: 4.48rem;
  }
  .swiper-slide {
    background-repeat: no-repeat;
    background-size: 100% 4.48rem;
  }
 .aui-list-item .game_time_nobr,.wggamelist .aui-list-item-inner{
    border:0;
  }
    .gamebg{
    width: 2.56rem;
    height: 2.56rem;
    background-size: 100%;
  }
  .aui-card-list-user-info{
    font-size: 0.512rem;
    color: #999999;
  }
  .wggamelist .aui-list-item-title{
    font-size: 0.64rem;

  }
  .swiper-pagination-bullet{
    width: 0.32rem;
    height:0.32rem;
  }
    .swiper-pagination-bullet{
    transition:all 0.2s;
    width: 0.32rem;
    height:0.32rem;
    background: #999;
    opacity: 1;
  }
  span.swiper-pagination-bullet.swiper-pagination-bullet-active{
    width: 0.64rem;
    height: 0.32rem;
    background-color: #50e3c2!important;
    border-radius: 0.15rem;
  }
    .advertisement_heng,.advertisement_heng1{
    width: 0.64rem;
    height: 0.05rem;
    background: #333;
    position: absolute;
    top: 50%;
    margin-top:-0.025rem;
  }
    .aui-tui{
    width: 4.266rem;
    line-height: 2.133rem;
    position: relative;
    font-size: 0.64rem;
    color: #666666;
    text-align: center;
    margin:0 auto;
  }
  .advertisement_heng{
    left: -0.64rem;
  }
  .advertisement_heng1{
    right: -0.64rem;
  }
    .hometowngame .aui-list .aui-list-item{
    padding:0 0.64rem;
    border-bottom:0.05rem solid #eeeeee;
  }
  .aui-shops-header{
    width: 3.2rem;
  }
    .aui-card-list{
    margin-bottom: 0;
  }
    .aui-heng{
    width: 1.173rem;
    height: 0.03rem;
    background: #cccccc;
    position: absolute;
    left: -1.493rem;
    top: 50%;
    margin-top: -0.0107rem;
  }
  .heng2 {
    width: 1.173rem;
    height: 0.03rem;
    background: #cccccc;
    position: absolute;
    right: -1.493rem;
    top: 50%;
    margin-top: -0.0107rem;
  }
  .stargame{
    position: absolute;
    width: 2.986rem;
    height: 1.28rem;
    right: 0;
    top: 50%;
    margin-top: -0.64rem;
    background-size: 2.986rem 1.2rem;
    background-image: url(../assets/match/gogame.png);
    background-repeat: no-repeat;
  }
  .aui-list-item .aui-media-list-item-inner{
    border: 0;
  }
  .aui-list .aui-list-item-inner{
    border-bottom: 0.05rem solid #eeeeee;
    padding-right: 0;
  }
  .aui-list .aui-list-item-media{
    width: auto;
  }
  .aui-list .aui-list-item{
    background-image: none;
  }
  /*人数*/
  .bumber{
    width: 1.386rem;
    margin-left: 1.28rem;
    margin-top: 0.6rem;
    height: 0.810rem;
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url(../assets/match/numberof.png);
  }
  .aui-list-item-text .game_num{
    line-height: 2rem;
    font-size: 0.64rem;
    color: #f5a66b;
  }
  .game_time{
    background-image: url(../assets/match/game_time.png);
  }
  .aui-list-item-text .game_times{
    color: #4a90e5;
  }
  .game_time_nobr .aui-list-item-inner{
    border-bottom: 0;
  }
  .tui-v{
    margin-top: 0.64rem;
    background: #fff;
  }
  .aui-media-list{
    background-image: none;
  }
  .wggamelist .gameli{
    padding: 0;
  }
  .wggamelist .gamepi{
    padding: 0 0.75rem 0 0;
  }
</style>
<style>
  .swipers .swiper-pagination-bullet{
    width: 0.32rem;
    height:0.32rem;
    background: #999;
    opacity: 1;
    transition:all 0.2s;
  }
  .swipers span.swiper-pagination-bullet.swiper-pagination-bullet-active{
    width: 0.64rem;
    height: 0.32rem;
    background-color: #50e3c2!important;
    border-radius: 0.15rem;
  }
</style>
<template>
  <div id="index">
  <div v-title data-title="比赛">
  </div>
<!-- 底部   -->
<componentName></componentName>
<!-- 轮播图 -->
      <div class="swipers">
      <swiper :options="swiperOption"  ref="mySwiper">
            <swiper-slide v-for="item in items" v-bind:style="{'background-image':'url('+item.imgs+')'}">
            </swiper-slide>  
              <!-- 这是轮播的小圆点 -->  
            <div class="swiper-pagination" slot="pagination"></div>  
      </swiper> 
      </div> 
<!-- 比赛列表     -->
      <div class="aui-timeline-item hometowngame">
                <div class="aui-timeline-item-inner">
                    <div class="aui-card-list tui-v">
                        <div class="aui-tui aui-shops-header"><div class="aui-heng"></div>比赛列表<div class="heng2"></div></div>
                        </div>
                      <div class="aui-content aui-margin-b-15">
                      <ul class="aui-list aui-media-list">
                        <li class="aui-list-item" v-for='item in gamearr'>
                          <div class="aui-media-list-item-inner wggamelist">
                          <!-- 游戏图 -->
                            <div class="aui-list-item-media">
                              <div class="aui-4img shopsback gamebg" v-bind:style="{'background-image':'url('+item.imgs+')'}"></div>
                            </div>
                         <!-- 游戏信息    -->
                        <div class="aui-list-item-inner">
                            <div class="aui-list-item-text game_titie">
                               <div class="aui-list-item-title">{{item.txt}}</div>
                            </div>
                                <div class="aui-card-list-user-info">第一名15公众劵</div>
                                <div class="aui-card-list-user-info">第二名5张房卡</div>
                                <div class="aui-card-list-user-info">第三名50000游戏币</div>
                         <!-- 开启游戏        -->
                         <div class="stargame"></div>
                        </div>
                        </div>
                        <!-- 人数 -->
                        <div class="aui-media-list-item-inner wggamelist">
                          <div class="aui-list-item-media gamepi"> 
                                <div class="bumber"></div>                     
                          </div>
                          <div class="aui-list-item-inner gameli">
                            <div class="aui-list-item-text"> 
                              <span class='game_num'>3000人参加</span>
                            </div>
                          </div>
                        </div>
                        <!-- 时间 -->
                        <div class="aui-media-list-item-inner wggamelist game_time_nobr">
                          <div class="aui-list-item-media gamepi"> 
                                <div class="bumber game_time"></div>                     
                          </div>
                          <div class="aui-list-item-inner gameli">
                            <div class="aui-list-item-text"> 
                              <span class='game_num game_times'>19:20开始</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                </div>
                </div>
        </div>       
  </div>
</template>
<script>
import '../../static/css/aui.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
let store = require('../../src/assets/store/shorebanner.png')
let gamebg = require('../../src/assets/index/gamebg_07.png')
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
        loop: true,
        spaceBetween: 30,
        autoplayDisableOnInteraction: false,
        autoplay: 2000,
        onSlideChangeEnd: swiper => {
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      },
      items: [
        { 'imgs': store },
        { 'imgs': store },
        { 'imgs': store },
        { 'imgs': store }
      ],
      gamearr: [
       { 'imgs': gamebg, 'txt': '廊坊麻将' },
       { 'imgs': gamebg, 'txt': '廊坊麻将' },
       { 'imgs': gamebg, 'txt': '廊坊麻将' }
      ]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.swiper.slideTo(0, 0, false)
  }
}
</script>

