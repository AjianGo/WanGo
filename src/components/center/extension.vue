<template>
  <div>
    <div v-title data-title="我的推广">
    </div>
    <!-- 用户信息 -->
  <component :is="currentView" transition="fade" transition-mode="out-in"></component>
   <!-- 卡片 -->
   <div class="dataList" :style="{backgroundImage: 'url(' +carbg + ')'}">
     <div class="dataBox">
       <div class="dataNUmber">1928</div>
       <div class="dataTxt">推广人数</div>
     </div>
        <div class="dataBox">
       <div class="dataNUmber">34000.00</div>
       <div class="dataTxt">业绩总收入</div>
     </div>
        <div class="dataBox">
       <div class="dataNUmber">1420.00</div>
       <div class="dataTxt">业绩余额</div>
     </div>
   </div>
   <!-- 推广分享 -->
   <div class="userShare">
     <div class="qrCode" :style="{backgroundImage: 'url(' +ercodr + ')'}"></div>
     <div class="shareBtn">
       <div class="oneshare"></div>
       <div class="preservation"></div>
     </div>
   </div>
   <!-- 查看推广 -->
       <section class="aui-content aui-margin-b-10 sharesee">
        <div class="aui-grid">
            <div class="aui-row">
                <router-link class="aui-col-xs-4" to="/seeextension">
                    <div class="shareimg tuiguang"></div>
                    <div class="aui-grid-label">查看推广</div>
                </router-link>
                <router-link class="aui-col-xs-4" to="/achievementmx">
                    <div class="shareimg yeji"></div>
                    <div class="aui-grid-label">业绩明细</div>
                </router-link>
                <router-link  class="aui-col-xs-4" to="/withdrawals">
                    <div class="shareimg tixian"></div>
                    <div class="aui-grid-label">我要提现</div>
                </router-link >
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
      ercodr: require('../../assets/user/erbg.png'),
      carbg: require('../../assets/user/cardbg.png'),
      msg: '成为我们公众号推广员，开启你的玩购之旅，请完善下面信息：',
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
  /*用户卡片数据*/
  .dataList{
    width: 93.3%;
    height: 4.266rem;
    margin: 0.64rem auto;
    background-image: url(../../assets/user/cardbg.png);
    background-size: 100% 100%;
  }
  .dataBox{
    float: left;
    width: 33.33%;
    height: 100%;
    overflow: hidden;
  }
  .dataBox .dataNUmber{
    margin-top: 0.96rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
  }
  .dataBox .dataTxt{
    margin-top: 0.533rem;
    font-size: 0.64rem;
    color: #eaedec;
    text-align: center;
  }
  .userShare{
    padding: 1.28rem 0;
    background: #fff;
    overflow: hidden;
    border-bottom: 0.03rem solid #eeeeee;
  }
  .userShare .qrCode{
    float: left;
    width: 4.586rem;
    height: 4.586rem;
    background-size: 100%;
    margin-left: 3.093rem;
  }
  .userShare .shareBtn{
    margin-left: 2.453rem;
    float: left;
  }
  .shareBtn div{
    width: 2.986rem;
    height: 1.28rem;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .shareBtn .oneshare{
    margin-top: 0.533rem;
    background-image: url(../../assets/user/oneshare.png);
  }
  .shareBtn .preservation{
    margin-top: 0.64rem;
    background-image: url(../../assets/user/preservation.png);
  }
  /*查看推广*/
  .shareimg{
    width: 1.493rem;
    height: 1.8rem;
    margin: 0 auto;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .tuiguang{
    background-image: url(../../assets/user/tuiguang2.png);
  }
  .tixian{
    background-image: url(../../assets/user/tixian.png);    
  }
  .yeji{
    background-image: url(../../assets/user/yeji.png);    
  }
  .sharesee .aui-col-xs-4{
    padding: 0.853rem 0;
  }
  .sharesee .aui-grid .aui-grid-label{
    margin-top: 0.426rem;
    font-size: 0.64rem;
    color: #333333;
  }
</style>
