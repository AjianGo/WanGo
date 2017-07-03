<style scoped>
  #index{
    margin-bottom: 0!important;
  }
  .swiper-container{
    height: 8.533rem;
  }
  .swiper-slide {
    background-repeat: no-repeat;
    background-size: 100% 4.48rem;
  }
  .exchange .aui-list-item-media{
    width: 2.56rem;
    height: 2.56rem;
    padding: 0;
    margin-right: 0.533rem;
  }
  .exchange .aui-list-item{
    padding: 0.64rem 0.64rem 0.64rem 0;
    margin-left: 0.64rem;
  }
  /*轮播图外层*/
  .swiperbox{
    overflow: hidden;
    position: relative;
  }
  /*轮播右下角*/
  .picLogo{
    width: 1.706rem;
    height: 0.853rem;
    position: absolute;
    right: 0.64rem;
    bottom: 0.512rem;
    z-index: 200;
    color: #fff;
    font-size: 0.533rem;
  }
  .imgPic{
    width: 0.853rem;
    height: 0.746rem;
    background: url(../../assets/shopmall/image.png);
    background-size: 100%;
    background-repeat: no-repeat;
    margin-right: 0.426rem;
    float: left;
  }
  /*买单*/
  .check{
    width: 100%;
    position: relative;
    background: #fff;
    margin-top: 0.64rem;
    padding: 0.96rem 0.64rem 0.64rem;
  }
  .check .checkTitle{
    font-size: 0.853rem;
    color: #000000;
    font-weight: 700;
  }
  /*小星星*/
  .storeStart{
    margin-top: 0.64rem;
    font-size: 0.533rem;
    color: #f5a623;
  }
  .storeStart span{
    margin-left: 0.426rem;
    line-height: 100%;
  }
  .storeStart .start{
    width: 0.64rem;
    height: 0.64rem;
    float: left;
    margin-right: 0.106rem;
    background-image: url(../../assets/shopmall/starsss.png);
    background-size: 100%;
  }
  .storeStart .start1{
    background-image: url(../../assets/shopmall/start0.png);
    background-size: 100%;
  }
  /*消费  营业时间*/
  .storedata,.storeTime{
  font-size: 0.576rem;
  color: #999999;
  margin-top: 0.426rem;
 }
 .storedata .renjun{
  margin-right: 0.853rem;
 }
.introduce{
  padding: 0.96rem 0.64rem 0.533rem;
  background: #fff;
  overflow: hidden;
}
.buyBtn{
  width: 4.266rem;
  line-height: 1.706rem;
  background: #ff393a;
  text-align: center;
  color: #fff;
  font-size: 0.64rem;
  position: absolute;
  right: 0.64rem;
  top: 2.773rem;
}
 .storebr{
  width: 100%;
  height: 0.05rem;
  background: #eeeeee;
  margin-top: 0.853rem;
 }
 .introduce .storebr{
  margin-top: 0;
 }
 /*地址*/
 .introduce .address{
  width: 81.1%;
  padding-left: 0.96rem;
  background-image: url(../../assets/shopmall/dizhi.png);
  height: 2.133rem;
  background-repeat: no-repeat;
  background-position:0 0.32rem;
  background-size: 0.533rem 0.64rem;
  font-size: 0.533rem;
  padding-top: 0.15rem;
  border-right:0.03rem solid #eeeeee;
  float: left;
 }
 .introduce .address p{
  color: #333333;
 }
.introduce  .phone{
  width: 18.9%;
  min-height: 2.133rem;
  height: 100%;
  float: left;
  background-image: url(../../assets/shopmall/phone.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1.066rem;
}
/*店铺特色*/
.characteristic{
  margin-top: 0.64rem;
  padding: 0.853rem 0.64rem;
  background: #fff;
}
.characteristic .characteristicTxt{
  font-size: 0.64rem;
  text-align: center;
  color: #333333;
}
.characteristic .heng{
  width: 1.28rem;
  height: 0.213rem;
  background: #cccccc;
  border-radius: 0.213rem;
  margin: 0.213rem auto;
}
  .characteristicCon{
    font-size: 0.64rem;
    color: #333333;
    padding-left: 0.64rem;
    position: relative;
    margin-top: 0.64rem;
  }
  .characteristicCon::after{
    content: '';
    position:absolute;
    width: 0.213rem;
    height: 0.213rem;
    left: 0;
    top: 50%;
    margin-top: -0.1065rem;
    border-radius: 0.213rem;
    background: #666666;
  }
  /*评论*/
  .comment{
    margin-top: 0.64rem;
    padding: 0.64rem;
    background: #fff;
  }
  .comment .commentNum{
    float: right;
    margin-right: 0.64rem;
    color: #999999;
  }
  .comment .commentZong{
    position: relative;
    overflow: hidden;
  }
  .comment .commentZong::after{
    content: '';
    width: 0.32rem;
    height: 0.32rem;
    position: absolute;
    top: 50%;
    right: 0.1rem;
    margin-top: -0.32rem;
    background: transparent;
    border: 1px solid #dddddd;
    border-top: none;
    border-right: none;
    z-index: 2;
    -webkit-border-radius: 0;
    border-radius: 0;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }
  .comment .storeStart{
    margin-top: 0;
  }
  /*评论*/
  .aui-card-list-header,.aui-card-list-content-padded{
    padding-left: 0;
    padding-right: 0;
  }
  .aui-card-list-content-padded{
    color: #666;
  }
  .aui-row-padded{
    padding: 0;
  }
  .aui-row-padded .aui-col-xs-4{
    width: 3.512rem;
    height: 3.512rem;
    background-image: url(http://p1.meituan.net/460.280/deal/5d9541357d2662793bf939f49bfebe8293662.jpg@460w_280h_1e_1c);
    background-size: cover;
    background-position: center;
    margin-right: 0.298rem;
  }
  .aui-row-padded .aui-col-xs-4:nth-child(2){
    background-image: url(http://p0.meituan.net/dealwaterb/a31bc08647d3df7f46ff57cbf20dcc3944183.jpg@660h_440w_2e_90Q%7Cwatermark=1&&p=7&x=8&y=8);
  }
  .aui-row-padded .aui-col-xs-4:nth-child(3){
    background-image: url(http://p0.meituan.net/dealwatera/ab06e961620ded4a5641ae859677e4ff473095.jpg@702h_702w_2e_90Q%7Cwatermark=1&&p=4);
  }
  .aui-row-padded .aui-col-xs-4:nth-child(4){
    background-image: url(http://p0.meituan.net/dealwatera/1fb6974b6513b241c3e26f30b26560d730798.jpg@467h_702w_2e_90Q%7Cwatermark=1&&p=4);
  }
  .aui-row-padded .aui-col-xs-4:last-child{
    margin-right: 0;
  }
.comment .aui-text-info{
  font-size: 0.64rem;
  color: #333!important;
}
.comment .aui-card-list-user-avatar{
  width: 1.92rem;
}
/*查看评论*/
.seebtn{
  width: 100%;
  line-height: 1.706rem;
  font-size: 0.533rem;
  color: #999999;
  text-align: center;
  background: #fff;
  padding:0 0.64rem;
  display: block;
}

.storebr.dizhi,.seebtn .storebr{
  margin-top: 0;
}
/*联系电话弹窗*/
.rodiasex{
  position:fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(0,0,0,.8); 
  z-index: 200;

}
.sexs{
  z-index: 500;
  position: absolute;
  top: 50%;
  margin-top: -5rem;
  left: 50%;
  margin-left: -6rem;
  background: #fff;  
  width: 12rem;
  height: 6rem;
  border-radius: .3rem;
    overflow: hidden;
}
.sexTitle{
  line-height: 2rem;
  text-align: center;
}
label{
  margin: 2rem;
}
/*按钮组*/
.btnsArr{
  width: 100%;
  height: 2.2rem;
  position: absolute;
  bottom: 0;
  border-top: 0.03rem solid #eee;
}
.btnsArr div{
  width: 50%;
  float: left;
  line-height: 2.2rem;
  border-right:0.03rem solid #eee; 
  text-align: center;
}
.btnsArr a{
  width: 100%;
  height: 100%;
  color: #333;
  display: block;
}
/*悬浮框*/
.checkfu{
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 0;
  background: #fff;
  z-index: 500;
}
/*占位框*/
.zhanwei{
  display: block;
  height: 0.01rem;
  width: 100%;
  transition:all 0.2s;
}
.zhanweis{
  display:block;
  visibility:hidden;
  height: 6.4rem;
}
</style>
<style>
   .storeints .swiper-pagination-bullet{
    width: 0.426rem!important;
    height: 0.426rem!important;
    border-radius: 0.426rem!important;
    background: transparent;
    border: 0.01rem solid #fff;
    box-sizing: border-box;
    opacity: 1;
 }
 .storeints .swiper-pagination-bullet-active{
    background: #db413b;
    border:0;
 }
 .storeints .swiper-pagination-bullets{
  bottom:2.5rem;
 }
</style>
<template>
  <div id="index">
  <div v-title data-title="店铺详情(非连锁)">
  </div>
<!-- 轮播图 -->
    <div class="swiperbox">
      <swiper class="storeints" :options="swiperOption"  ref="mySwiper">
            <swiper-slide v-for="item in items">
              <img :src="item.imgs" alt="">
            </swiper-slide> 
<!-- 这是轮播的小圆点 -->  
      <div class="swiper-pagination" slot="pagination"></div>       
      </swiper>
      <!-- 轮播右下角  -->
      <div class="picLogo">
        <div class="imgPic"></div>
        <span>5</span>
      </div>
    </div>
    <!-- 占位框 -->
    <div class="zhanwei" :class="checkfu ? 'zhanweis' : ''"></div>
<!-- 店铺买单     -->
    <div class="check" :class="checkfu ? 'checkfu' : 'check'">
<!-- 标题 -->
      <div class="checkTitle">雪冰小屋冰激凌1号店</div>
<!-- 小星星  -->
      <div class="storeStart">
        <div class="start" :class="start>=1 ? 'start1' : 'start' "></div>
        <div class="start" :class="start>=2 ? 'start1' : 'start' "></div>
        <div class="start" :class="start>=3 ? 'start1' : 'start' "></div>
        <div class="start" :class="start>=4 ? 'start1' : 'start' "></div>
        <div class="start" :class="start>=5 ? 'start1' : 'start' "></div>
        <span>4分</span>
      </div>
 <!-- 消费水平      -->
      <div class="storedata">
        <span class="renjun">人均: ¥<span>50</span></span>
        <span>月消费人次: <span>13</span></span>
      </div> 
 <!-- 营业时间      -->
      <div class="storeTime">
        <span>营业时间：<span>10:00-21:00</span></span>
      </div>
<!-- 买单       -->
    <div class="buyBtn" v-on:click="gobuy">买单</div>
    </div>
<!-- 横线 -->
      <div class="storebr dizhi"></div>
<!-- 店铺地址以及电话       -->
      <div class="introduce">
        <div class="address">
          <p>朝阳区幸福村杰作大厦底商209号</p>
          <p>距离您：<span>25m</span></p>
        </div>
        <div class="phone" v-on:click="call()"></div>
      </div>    
<!-- 店铺特色     -->
      <div class="characteristic">
        <div class="characteristicTxt">店铺特色</div>
        <div class="heng"></div>
        <div class="characteristicCon">有免费Wi-Fi</div>
        <div class="characteristicCon">自助小吃免费</div>
        <div class="characteristicCon">服务周到</div>
      </div>
<!-- 评论       -->
      <div class="comment">
        <div class="commentZong">
          <div class="storeStart">
            <div class="start" :class="start>=1 ? 'start1' : 'start' "></div>
            <div class="start" :class="start>=2 ? 'start1' : 'start' "></div>
            <div class="start" :class="start>=3 ? 'start1' : 'start' "></div>
            <div class="start" :class="start>=4 ? 'start1' : 'start' "></div>
            <div class="start" :class="start>=5 ? 'start1' : 'start' "></div>
            <span>4分</span>
            <span class="commentNum"><span>1230</span>条 评价</span>
          </div>          
        </div>
        <div class="storebr"></div>
        <!-- 评论详情 -->
        <section class="aui-content">
          <div class="aui-card-list">
            <div class="aui-card-list-header aui-card-list-user">
                <div class="aui-card-list-user-avatar">
                    <img src="../../assets/user/user.png" class="aui-img-round">
                </div>
                <div class="aui-card-list-user-name">
                    <div class="aui-text-info">寂寞空庭</div>
                </div>
                <div class="aui-card-list-user-info text-light">
                    <div class="storeStart">
                      <div class="start" :class="start>=1 ? 'start1' : 'start' "></div>
                      <div class="start" :class="start>=2 ? 'start1' : 'start' "></div>
                      <div class="start" :class="start>=3 ? 'start1' : 'start' "></div>
                      <div class="start" :class="start>=4 ? 'start1' : 'start' "></div>
                      <div class="start" :class="start>=4 ? 'start1' : 'start' "></div>
                      <span style="color:#9d9d9d">2017-06-25</span>
                </div>        
                </div>
            </div>
            <div class="aui-card-list-content-padded aui-padded-t-5 aui-padded-b-5">
                正一味烧肉饭，去的是大兴旧宫店，在地下一层，地方挺好找的，到了店里先扫码验证，等了几分钟服务员就把烧肉饭端上来了，味道挺好吃的，还有一杯饮料，烧肉饭吃起来孜然味，有点像羊肉串的味道，喜欢团购正一味烧肉饭的可以来尝尝.
            </div>
            <div class="aui-card-list-content">
                <div class="aui-row aui-row-padded">
                    <div class="aui-col-xs-4">
                    </div>
                    <div class="aui-col-xs-4">
                    </div>
                    <div class="aui-col-xs-4">
                    </div>
                    <div class="aui-col-xs-4">
                    </div>
                </div>
            </div>
          </div>
        </section>        
      </div>
<!-- 查看更多评论       -->
      <router-link class="seebtn" to="/comment/index"><div class="storebr"></div><p>查看全部评价</p></router-link>
      <!-- 弹框 -->
    <div class="rodiasex" :style="{display: displays}">
      <div class="sexs">
        <div class="sexTitle">呼叫电话</div>
         <div class="aui-list-item-inner" style="margin:0 auto;display:block;text-align:center;font-size:0.64rem;line-height:1.2rem;">
                15033145454
          </div>
          <!-- 确定按钮框 -->
          <div class="btnsArr">
          <div v-on:click="tijiao()">取消</div>
          <div v-on:click="tijiao()"><a href="tel:15033145454">确定</a></div>
          </div>
      </div>
    </div>      
  </div>
</template>
<script>
import '../../../static/css/aui.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
let store = require('../../assets/map.png')
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
      // 店铺评分
      start: 4,
      displays: 'none',
      // 浮动
      checkfu: false
    }
  },
  computed: {
    // 轮播调用
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.swiper.slideTo(0, 0, false)
    window.addEventListener('scroll', this.menu)
  },
  methods: {
    tijiao: function () {
      this.displays = 'none'
    },
    call: function () {
      this.displays = 'block'
    },
    menu: function () {
      let sco = document.getElementsByClassName('zhanwei')[0].offsetTop
      this.scroll = document.body.scrollTop
      console.log(sco)
      if (this.scroll >= sco) {
        this.checkfu = true
      } else {
        this.checkfu = false
      }
    },
    // 买单
    gobuy: function () {
      this.$router.push({ path: '/checkout' })
    }
  }
}
</script>

