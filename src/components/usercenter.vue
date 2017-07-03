<style scoped>
  .aui-card-list-content-padded{
    margin: 0.64rem;
    background-size: 100%;
    border-radius: 5px;
    padding: 0;
    height: 4.266rem;
  }
  .userCard{
    width: 50%;
    float: left;
    text-align: center;
    color: #fff;
  }
  .userCard .cardnum{
    margin-top: 1.066rem;
  }
  .aui-card-list-content-padded{
    overflow: hidden;
  }
 .cardnum{
    font-size: 0.853rem;
    font-weight: 700;
  }
  .aui-grid{
    background: transparent;
  }
  .fangka{
    background-image: url(../assets/user/fangka.png);

  }
  .huiyuan{
    background-image: url(../assets/user/huiyuan.png);
  }
  .jinbi{
     background-image: url(../assets/user/jinbi.png);
  }
  .aui-grid [class*=aui-col-]{
    padding: 0
  }
  .usergames{
    height: 4.48rem;
    background: #fff;
  }
  .gameicon{
    background-size: contain;
    background-repeat: no-repeat;
    width: 1.173rem;
    height: 1.173rem;
    margin: 0.64rem auto 0;
  }
  .aui-margin-b-10{
    margin-bottom: 0!important;
    border-bottom: 1px solid #eeeeee;
  }
  .aui-col-xs-4{
    height: auto;
  }
  .aui-col-xs-4 .gameName{
    color: #0fc9c0;
    margin: 0.533rem 0 0.2rem;
    font-size: 0.533rem;
  }
  .aui-col-xs-4 p,.aui-grid .my_fonts{
    color: #666666;
    font-size: 0.512rem;
  }
 .cardImg{
    width: 1.28rem;
    height: 1.28rem;
    margin: 0.64rem auto;
   background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom center;
  }
  .chongzhi{
    background-image: url(../assets/user/chongzhi.png);
  }
  .aui-grid-label{
    margin-bottom: 0.64rem;
    color: #666666;
  }
  .jiangpin{
    background-image: url(../assets/user/jiangpin.png);
  }
  .dingdan{
    background-image: url(../assets/user/dingdan.png);
  }
  .tuiguang{
    background-image: url(../assets/user/tuiguang.png);
  }
  .dizhi{
    background-image: url(../assets/user/dizhi.png);
  }
  .bankcard{
    background-image: url(../assets/user/bankcard.png);
  }
  .message{
    background-image: url(../assets/user/message.png);
  }
  .kefu{
     background-image: url(../assets/user/kefu.png);
  }
</style>
<template>
  <div id="index">
  <div v-title data-title="个人中心">
  </div>  
<!-- 底部   -->
<componentName></componentName>
<component :is="currentView" transition="fade" transition-mode="out-in"></component>
<!-- 名片 -->
   <!-- 优惠卷 -->
   <div class="aui-card-list" style="background:none;">
    <div class="aui-card-list-content-padded" :style="{backgroundImage: 'url(' +carbg + ')'}">
      <div class="userCard">
        <div class="cardnum">129</div>
        <div class="cardname">红利券 &nbsp; (省)</div>
      </div>    
      <div class="userCard">
        <div class="cardnum">3400</div>
        <div class="cardname">公众券</div>
      </div>    
     </div>
   </div>
   <!-- 用户的游戏房卡会员游戏币 -->
    <section class="aui-content aui-margin-b-10 usergames">
        <div class="aui-grid">
            <div class="aui-row">
                <div class="aui-col-xs-4">
                   <div class="gameicon fangka"></div>
                   <div class="gameName">940</div>
                     <p>我的房卡</p>
                </div>
                <div class="aui-col-xs-4">
              <div class="gameicon huiyuan"></div>
                   <div class="gameName">2017-09-21</div>
                     <p>我的会员</p>
                </div>
                <div class="aui-col-xs-4">
                 <div class="gameicon jinbi"></div>
                   <div class="gameName">908900</div>
                     <p>我的游戏币</p>
               </div>
            </div>
        </div>
    </section>
    <!-- 用户的余额 -->
       <section class="aui-content aui-margin-b-10" style="background:#fff;">
        <div class="aui-grid">
            <div class="aui-row">
                <router-link class="aui-col-xs-3"  to='/recharge'>
                <div class="cardImg chongzhi"></div>
                <div class="aui-grid-label my_fonts">我的充值</div>
                </router-link>
                <router-link class="aui-col-xs-3" to='/prize'>
                    <div class="cardImg jiangpin"></div>
                    <div class="aui-grid-label my_fonts">我的奖品</div>
                </router-link>
                <router-link class="aui-col-xs-3" to='/shoporder'>
                    <div class="cardImg dingdan"></div>
                    <div class="aui-grid-label my_fonts">我的订单</div>
                </router-link>
                <router-link  class="aui-col-xs-3" to='/exension'>
                    <div class="cardImg tuiguang"></div>
                    <div class="aui-grid-label my_fonts">我的推广</div>
                </router-link >
            </div>
        </div>
    </section>
     </section>
    <!-- 用户的余额 -->
       <section class="aui-content aui-margin-b-10" style="background:#fff;">
        <div class="aui-grid">
            <div class="aui-row">
                <router-link class="aui-col-xs-3" to="/manaddress">
                <div class="cardImg dizhi"></div>
                <div class="aui-grid-label my_fonts">收货地址</div>
                </router-link>
                <router-link class="aui-col-xs-3" to="/banklist">
                    <div class="cardImg bankcard"></div>
                    <div class="aui-grid-label my_fonts">银行卡</div>
                </router-link>
                <router-link  class="aui-col-xs-3" to="/message">
                    <div class="cardImg message"></div>
                    <div class="aui-grid-label my_fonts">系统消息</div>
                </router-link >
                <div class="aui-col-xs-3" tapmode onclick="openDialog('text')">
                <div class="cardImg kefu"></div>
                    <div class="aui-grid-label my_fonts">在线客服</div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import '../../static/css/aui.css'
export default {
  name: 'index',
  data () {
    return {
      bg: require('../assets/user/backuser.png'),
      carbg: require('../assets/user/cardbg.png'),
      msg: '玩购项目正式启动',
      currentView: 'businesscard'
    }
  },
  methods: {
  },
  mounted () {
  },
  components: {
    // 名片
    'businesscard': require('./center/businesscard.vue')
  }
}
</script>
