<style>
</style>
<template>
  <div id="shoporder">
  <div v-title data-title="待评论">
  </div>
   <!-- 订单列表 -->
   <section class="aui-content orderlists">
        <div class="aui-card-list aui-border-t aui-border-b">
            <div class="order-txt">
              <div>订单号：111894451651</div>
              <div>订单时间：2017-05-03 12:30</div>
            </div>
            <div class="aui-card-list-header aui-card-list-user">
                <div class="aui-card-list-user-avatar">
                    <img src="../../../assets/shopmall/1310.png">
                </div>
                <div class="aui-card-list-user-name">
                    <div class="aui-font-size-16 ordertitle">指挥者桌游</div>
                </div>
                <div class="aui-card-list-user-info">价格：<span class="order_price">156.00</span></div>
          </div>
          <div class="aui-content aui-margin-b-15 orderstyle">
            <ul class="aui-list aui-list-in">
              <li class="aui-list-item">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-title">订单金额</div>
                    <div class="aui-list-item-right originallycolor">¥156</div>
                </div>
              </li>
               <li class="aui-list-item">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-title">抵扣卷</div>
                    <div class="aui-list-item-right discount">-¥49</div>
                </div>
              </li>
               <li class="aui-list-item">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-title">实付金额</div>
                    <div class="aui-list-item-right originallycolor">¥107</div>
                </div>
              </li>
               <li class="aui-list-item pay-wx">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-title">支付类型</div>
                    <div class="aui-list-item-right payment"><div class="aui-wx"></div>微信</div>
                </div>
              </li>
              <div class="listbtn">
                    <div class="orderButtton goPayment" v-on:click="gocom">去评论</div>
              </div>             
            </ul>
            </div>   

        </div>

   </section>
</div>
</template>
<script>
import '../../../../static/css/aui.css'
export default {
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    // 评论
    gocom: function () {
      this.$router.push({ path: '/comment/goocomment' })
    }
  }
}
</script>
<style scoped>
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
  .orderlists .aui-card-list-header {
    padding: 0;
  }
  .orderlists .aui-card-list-user{
    padding: 0.64rem;
  }
  .orderlists .aui-card-list-user-avatar{
    margin-left: 0;
    margin-right: 0.64rem;
  }
  .orderlists .ordertitle{
    font-size: 0.746rem !important;
  }
  .orderlists .aui-list.aui-list-in{
  background-image: none;
 }
  .orderlists .aui-card-list-user-info{
    font-size: 0.533rem;
  }
  .order_price{
    font-size: 0.64rem;  
    color: #fc474b;
  }
  .aui-card-list-user-avatar{
    border: 0.03rem solid #eee;
  }
  /*商品图片大小*/  
  .orderlists .aui-card-list-user-avatar{
    width: 2.56rem;
    height: 2.56rem;
  }
  .orderlists .aui-card-list-user-name{
    margin-top: 0.32rem;
  }
  /*待付款订单背景*/
  .order-txt{
    border: 0;
  }
  .orderlists .aui-card-list-user{
    background: #f8f8f8;
  }
  /*订单列表高度*/
 .orderlists .aui-list .aui-list-item{
  height: 2.206rem;
  padding-left: 0.64rem;
  margin-right: 0.64rem;
 }
 .orderstyle .aui-list-item-title,.orderstyle .aui-list-item-right{
  font-size: 0.597rem;
  color: #999999;
 }
  .orderstyle .aui-list .aui-list-item-inner{
    padding-right: 0;
  }
  /*订单金额颜色*/
  .orderstyle .originallycolor{
    color: #ff372c;
  }
  .orderstyle .discount{
    color: #4fc73a;
  }
  .orderstyle .payment{
    color: #333333;
  }
  .orderstyle .payment .aui-wx{
    width: 1.066rem;
    height: 1.066rem;
    background: url(../../../assets/user/weixin.png);
    background-size: 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    margin-top: -0.533rem;
    right: 1.706rem;
  }
  /*微信支付底线*/
  .aui-list.aui-list-in .pay-wx{
    background-image: none;
  }
  /*订单按钮*/
  .orderButtton{

    width: 2.986rem;
    height: 1.28rem;
    background-color: #ddf4f3;
    text-align: center;
    line-height: 1.28rem;
    font-size: 0.554rem;
    border: 0.05rem solid #53c7c4;
    color: #53c7c4;
    border-radius: 0.8rem;
    position: absolute;
    top: 50%;
    margin-top: -0.64rem;
  }
  .aui-card-list-footer{
    padding: 0;
  }
  .listbtn{
    border-top: 0.03rem solid #dddddd;
    width: 100%;
    height: 2.773rem;
    position: relative;
  }
  .goPayment{
    right: 0.64rem;
  }
</style>

