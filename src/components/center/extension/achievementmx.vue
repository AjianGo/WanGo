<template>
  <div>
    <div v-title data-title="业绩明细">
    </div>
    <!-- 用户信息 -->
    <component :is="currentView" transition="fade" transition-mode="out-in"></component>
    <!-- 列表 -->
    <!-- 房卡 -->
    <div class="aui-content achieve aui-margin-b-15">
        <ul class="aui-list aui-media-list">
            <li class="aui-list-item mingxili">
                <div class="aui-media-list-item-inner">
                    <div class="aui-list-item-media wgpic">
                        <img src="../../../assets/user/card.png">
                    </div>
                    <div class="aui-list-item-inner">
                        <div class="aui-list-item-text">
                            <div class="aui-list-item-title cardtitle">用户房卡购买</div>
                            <div class="aui-list-item-right cardtime">2017-08-08 08:00</div>
                        </div>
                        <div class="aui-list-item-text cardBalance">
                            余额:&nbsp70.46 <span>+ 0.63</span>
                        </div>
                    </div>
                </div>
            </li>        
        </ul>
    </div>  
    <!-- 游戏币      -->
     <div class="aui-content achieve aui-margin-b-15">
        <ul class="aui-list aui-media-list">
            <li class="aui-list-item mingxili">
                <div class="aui-media-list-item-inner">
                    <div class="aui-list-item-media wgpic">
                        <img src="../../../assets/user/gamecz.png">
                    </div>
                    <div class="aui-list-item-inner">
                        <div class="aui-list-item-text">
                            <div class="aui-list-item-title cardtitle">用户游戏币充值</div>
                            <div class="aui-list-item-right cardtime">2017-08-08 08:00</div>
                        </div>
                        <div class="aui-list-item-text cardBalance">
                            余额:&nbsp70.46 <span>+ 9.20</span>
                        </div>
                    </div>
                </div>
            </li>        
        </ul>
    </div>
    <!-- 商城兑换 -->
    <div class="aui-content achieve aui-margin-b-15">
        <ul class="aui-list aui-media-list">
            <li class="aui-list-item mingxili">
                <div class="aui-media-list-item-inner">
                    <div class="aui-list-item-media wgpic">
                        <img src="../../../assets/user/shopmall.png">
                    </div>
                    <div class="aui-list-item-inner">
                        <div class="aui-list-item-text">
                            <div class="aui-list-item-title cardtitle">用户商城兑奖</div>
                            <div class="aui-list-item-right cardtime">2017-08-08 08:00</div>
                        </div>
                        <div class="aui-list-item-text cardBalance">
                            余额:&nbsp70.46 <span>+ 19.78</span>
                        </div>
                    </div>
                </div>
            </li>        
        </ul>
    </div>
    <!-- 店铺消费     -->
    <div class="aui-content achieve aui-margin-b-15">
        <ul class="aui-list aui-media-list">
            <li class="aui-list-item mingxili">
                <div class="aui-media-list-item-inner">
                    <div class="aui-list-item-media wgpic">
                        <img src="../../../assets/user/yejimx.png">
                    </div>
                    <div class="aui-list-item-inner">
                        <div class="aui-list-item-text">
                            <div class="aui-list-item-title cardtitle">用户店铺消费</div>
                            <div class="aui-list-item-right cardtime">2017-08-08 08:00</div>
                        </div>
                        <div class="aui-list-item-text cardBalance">
                            余额:&nbsp70.46 <span>+ 10.63</span>
                        </div>
                    </div>
                </div>
            </li>        
        </ul>
    </div>
    <!-- 业绩提成      -->
    <div class="aui-content achieve aui-margin-b-15">
        <ul class="aui-list aui-media-list">
            <li class="aui-list-item mingxili">
                <div class="aui-media-list-item-inner">
                    <div class="aui-list-item-media wgpic">
                        <img src="../../../assets/user/yjtx.png">
                    </div>
                    <div class="aui-list-item-inner">
                        <div class="aui-list-item-text">
                            <div class="aui-list-item-title cardtitle">业绩提成</div>
                            <div class="aui-list-item-right cardtime">2017-08-08 08:00</div>
                        </div>
                        <div class="aui-list-item-text cardBalance">
                            余额:&nbsp70.46 <span class="expenditure">- 100.00</span>
                        </div>
                    </div>
                </div>
            </li>        
        </ul>
    </div>    
  </div>
</template>
<script>
import '../../../../static/css/aui.css'
export default {
  data () {
    return {
      currentView: 'businesscard'
    }
  },
  methods: {
  },
  components: {
    // 名片
    'businesscard': require('../businesscard.vue')
  }
}
</script>
<style scoped> 
/*每行*/
.mingxili{
  background-image: url(../../../assets/user/rectangle.png);
  background-size: 100% 100%;
  padding: 0.64rem;
}
.achieve{
  width: 93.3%;
  margin: 0.64rem auto 0;
}
.achieve .aui-media-list{
  background-image: none;
  background: transparent;
}
.aui-list-item .aui-media-list-item-inner{
  border: 0!important;
}
/*图片*/
.aui-list .aui-list-item-media.wgpic{
  width: 2.133rem;
  height: 2.133rem;
  padding: 0;
  margin-right: 0.384rem;
}
.cardtitle{
  margin-top: 0.113rem;
  font-size: 0.746rem;
  color: #333;
}
/*取消自带padding*/
.aui-list .aui-list-item-inner{
  padding: 0;
}
.cardBalance{
  font-size: 0.533rem;
  color: #53c7c4;
}
.cardtime{
  color: #999;
}
.cardBalance span{
  font-size: 0.64rem;
  color: #ff393a;
}
/*支出*/
.cardBalance .expenditure{
  color: #00c73a;
}
</style>
