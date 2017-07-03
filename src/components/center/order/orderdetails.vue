<template>
  <div>
    <div v-title data-title="订单详情">
    </div>
    <div class="ordersite">
      <!-- 顶部轮播条 -->
      <div class="ordertiao"></div>
      <div class="orderuser">
        <div class="locations"></div>
        <div class="orderuserins">
          <div><span>收货人:&nbsp;&nbsp;</span><span>王艺霏</span><span class="userphone">13867672300</span></div>
          <div class="userdizhi">[默认] 收货地址: <span>河北省廊坊市广阳区爱民东道天利得益大厦1003室</span></div>
        </div>
      </div>
      <div class="aui-card-list-header order aui-card-list-user">
          <div class="aui-card-list-user-avatar orderpic">
            <img src="../../../assets/shopmall/1310.png">
          </div>
          <div class="aui-card-list-user-name">
              <div class="aui-font-size-16 ordertitle">指挥者桌游</div>
          </div>
          <div class="aui-card-list-user-info ordermany"><div class="many"></div><span class="order_price">&nbsp;156.00</span></div>
      </div>
 <div class="aui-content aui-margin-b-15 orderstyle">
            <ul class="aui-list aui-list-in">
              <li class="aui-list-item">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-title juan">抵扣金额 (限10个劵)</div>
                    <div class="aui-list-item-right originallycolor dikou">劵余额<span>200</span>个</div>
                </div>
              </li>
               <li class="aui-list-item">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-title">实付金额</div>
                    <div class="aui-list-item-right originallycolor">¥29.00</div>
                </div>
              </li>
               <li class="aui-list-item pay-wx">
                <div class="aui-list-item-inner" style="border:0;">
                    <div class="aui-list-item-title">支付类型</div>
                    <div class="aui-list-item-right payment"><div class="aui-wx"></div>微信支付</div>
                </div>
              </li>
              </ul>
            </div>             
    </div>
    <!-- 底部付款栏 -->
    <div class="footers">
      <div class="heji">合计: &nbsp;&nbsp;<span class="rmb">¥ <span class="rmbs">27.40</span></span></div>
      <div class="end">确认支付</div>
    </div>
  </div>
</template>
<script>
import '../../../../static/css/aui.css'
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.ordertiao{
  width: 100%;
  height: 0.426rem;
  background-image: url(../../../assets/user/133002.png);
  background-size: 100%;
  background-repeat: no-repeat;

}
.orderuser{
  padding: 0.8106rem 0.64rem;
  background: #fff;
  overflow: hidden;
  position: relative;
}

.orderuser::before{
    content: '';
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    top: 50%;
    right: 0.75rem;
    margin-top: -0.2rem;
    background: transparent;
    border: 1px solid #999999;
    border-top: none;
    border-right: none;
    z-index: 2;
    -webkit-border-radius: 0;
    border-radius: 0;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
}
/*定位*/
.locations{
  width: 1.28rem;
  height: 2.9rem;
  float: left;
  border-right: 0.03rem solid #dddddd;
  background-size: 0.746rem 0.96rem;
  background-image: url(../../../assets/user/dizhis.png);
  background-repeat: no-repeat;
  background-position:left center;
  margin-right: 0.426rem;
}
/*收货人信息*/
.orderuserins{
  float: left;
  width: 12rem;
  height: 2.346rem;
  display: inline-block;
}
.orderuserins{
  font-size: 0.746rem;
  color: #333;
}
.userphone{
  float: right;
}
.userdizhi{
  font-size: 0.64rem;
  color: #999999;
}
/*订单图*/
.order{
  padding-top: 2.773rem;
  background-color: #f8f8f8;
  overflow: hidden;
}
.ordertitle{
  margin-top: 0.426rem;
  font-size: 0.746rem;
  color: #333;
}
.orderpic{
  width: 2.986rem;
  height: 2.986rem;
}
.many{
  width: 0.746rem;
  height: 0.533rem;
  background-image: url(../../../assets/user/many.png);
  background-size: 100%;
  display: inline-block;
  float: left;
  margin-top: 0.2rem;
}
.ordermany{
}
.order_price{
  font-size: 0.533rem;
  color: #5dc9c6;
}
 .orderlists .aui-list .aui-list-item{
  height: 2.206rem;
  padding-left: 0.64rem;
  margin-right: 0.64rem;
 }
 .orderlists .aui-list.aui-list-in{
  background-image: none;
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
    right: 3rem;
  }
  /*微信支付底线*/
  .aui-list.aui-list-in .pay-wx{
    background-image: none;
  }
  .orderstyle .aui-list-item{
    padding: 0 0.64rem;
    background-image: none;
  }
  .orderstyle .aui-list-item-inner{
    border-bottom:0.03rem solid #dddddd;
  }
  /*底部付款栏*/
  .footers{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 2.56rem;
    background: #fff;
    border-top:0.03rem solid #dddddd;
    padding-left: 0.64rem;
  }
  /*heji*/
  .heji{
    font-size: 0.64rem;
    color: #333;
    float: left;
    line-height: 3rem;
  }
  .rmb{
    font-size: 0.64rem;
    color: #ff372c;
  }
  .rmbs{
    font-size: 0.853rem;
  }
  .end{
    width: 5.546rem;
    height: 2.56rem;
    background: #ff393a;
    color: #fff;
    text-align: center;
    line-height: 2.56rem;
    float: right;
  }
  .dikou{
    color: #53c7c4!important;
  }
</style>
