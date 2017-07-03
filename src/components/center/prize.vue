<template>
  <div>
    <div v-title data-title="我的奖品">
    </div>
    <!-- 用户信息 -->
    <component :is="currentView" transition="fade" transition-mode="out-in"></component>
   <!-- 订单列表 -->
   <section class="aui-content orderlist">
        <div class="aui-card-list aui-border-t aui-border-b">
            <div class="order-txt">
              <div>订单号：111894451651</div>
              <div>订单时间：2017-05-03 12:30</div>
            </div>
            <div class="aui-card-list-header aui-card-list-user artbox">
                <div class="aui-card-list-user-avatar artpic">
                    <img src="../../assets/shopmall/1310.png">
                </div>
                <div class="aui-card-list-user-name">
                    <div class="aui-font-size-16 ordertitle">指挥者桌游</div>
                </div>
                <div class="aui-card-list-user-info">价格：<span class="order_price">64.00</span></div>
                <!-- 查看物流 -->
                <router-link class="logistics" to="/logistics"></router-link>
        </div>   
        </div>
         <div class="aui-card-list aui-border-t aui-border-b">
            <div class="order-txt">
              <div>订单号：111894451651</div>
              <div>订单时间：2017-05-03 12:30</div>
            </div>
            <div class="aui-card-list-header aui-card-list-user artbox">
                <div class="aui-card-list-user-avatar artpic">
                    <img src="../../assets/shopmall/1310.png">
                </div>
                <div class="aui-card-list-user-name">
                    <div class="aui-font-size-16 ordertitle">指挥者桌游</div>
                </div>
                <div class="aui-card-list-user-info">价格：<span class="order_price">64.00</span></div>
                <!-- 查看物流 -->
                <router-link class="logistics" to="/logistics"></router-link>
        </div>   
        </div>
         <div class="aui-card-list aui-border-t aui-border-b artbox">
            <div class="order-txt">
              <div>订单号：111894451651</div>
              <div>订单时间：2017-05-03 12:30</div>
            </div>
            <div class="aui-card-list-header aui-card-list-user">
                <div class="aui-card-list-user-avatar artpic">
                    <img src="../../assets/shopmall/1310.png">
                </div>
                <div class="aui-card-list-user-name">
                    <div class="aui-font-size-16 ordertitle">指挥者桌游</div>
                </div>
                <div class="aui-card-list-user-info">价格：<span class="order_price">64.00</span></div>
                <!-- 查看物流 -->
                <router-link class="logistics" to="/logistics"></router-link>
        </div>   
        </div>
   </section>
  </div>
</template>
<script>
import '../../../static/css/aui.css'
export default {
  data () {
    return {
      bg: require('../../assets/user/backuser.png'),
      currentView: 'businesscard'
    }
  },
  methods: {
  },
  components: {
    // 名片
    'businesscard': require('./businesscard.vue')
  }
}
</script>

<style scoped>
/*用户资料卡片样式 start*/
  .aui-content-padded{
    height: 4.266rem;
    background-color: #ddd;
    margin: 0;
    overflow: hidden;
  }
  .userBg{
    background-size: cover; 
  }
  .aui-card-list-user-avatar{
    width: 2.133rem;
  }
  .set{
    width: 0.854rem;
    height: 0.854rem;
    background: url(../../assets/user/setting.png);
    background-size: cover;
    position: absolute;
    right: 0.64rem;
    top: 0.64rem;
  }
  .aui-content-padded .aui-content{
    margin-top: 1.173rem;
  }
  .aui-card-list-user-avatar{
    margin-left: 0.64rem;
  }
  .aui-list-item-title{
    color: #333;
    font-size:0.64rem !important;
    margin-top: 0.32rem;
    margin-bottom: 0.426rem;
    display: inline-block;
    float: left;
  }
  .userid{
    font-size: 0.512rem;
    color: #9d9d9d;
    line-height: 0;
    line-height: 0.512rem;
  }
  .userdengji{
    width: 0.768rem;
    height: 0.768rem;
    background: url(../../assets/user/vip2.png);
    background-size: cover;
    float: left;
    margin:0.32rem 0.32rem 0 0.32rem;
    border-radius: 100%;
  }
  .username{
    overflow: hidden;
  }
  .userType{
    font-size:0.64rem !important;
    margin-top: 0.32rem;
    color: #0fc9c0;
  }
  .apply{
    background-image: url(../../assets/user/tuiguangyuan.png);
    background-size: 2.56rem 0.96rem;
    position: absolute;
    right: 0.64rem;
    width: 2.56rem;
    height: 0.96rem;
    top: 2.24rem;
  }
  /*用户资料卡片样式 end*/
  /*订单信息*/
  .order-txt{
    padding: 0.32rem 0 0.32rem 0.64rem;
    font-size: 0.554rem;
    color: #999999;
    line-height: 0.853rem;
    border-bottom: 0.03rem solid #eeeeee;
  }
  .aui-card-list{
    background-image: none;
    margin-top: 0.64rem;
  }
  .orderlist .aui-card-list-header {
    padding: 0;
  }
  .orderlist .aui-card-list-user{
    padding: 0.64rem;
  }
  .orderlist .aui-card-list-user-avatar{
    margin-left: 0;
    margin-right: 0.64rem;
  }
  .orderlist .ordertitle{
    font-size: 0.746rem !important;
    margin-top: 0.32rem;
  }
  .orderlist .aui-card-list-user-info{
    font-size: 0.533rem;
  }
  .order_price{
    font-size: 0.64rem;  
    color: #fc474b;
  }
  .logistics{
    width: 2.986rem;
    height:1.28rem;
    background-image: url(../../assets/user/wuliu.png);
    background-size: 100%;
    background-repeat: no-repeat;
    position: absolute;
    right:0.64rem;
    top: 50%;
    margin-top: -0.64rem; 
  }
  /*商品图片*/
  .artpic{
    width: 2.56rem;
    height: 2.56rem;
  }
  .artbox{
    overflow: hidden;
  }
</style>
