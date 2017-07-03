<template>
  <div>
    <div v-title data-title="我的充值">
    </div>
    <!-- 用户信息 -->
    <component :is="currentView" transition="fade" transition-mode="out-in"></component>
   <table border="0" cellspacing="0" cellpadding="0" >
     <tr><th>类型</th><th>金额</th><th>时间</th><th>支付方式</th></tr>
     <tr><td>房卡</td><td>1000.00</td><td>2017-02-08</td><td>微信</td></tr>
     <tr><td>游戏币</td><td>910.00</td><td>2017-02-08</td><td>微信</td></tr>    
     <tr><td>房卡</td><td>1000.00</td><td>2017-02-08</td><td>微信</td></tr>
     <tr><td>游戏币</td><td>910.00</td><td>2017-02-08</td><td>微信</td></tr> 
     <tr><td>房卡</td><td>1000.00</td><td>2017-02-08</td><td>微信</td></tr>
     <tr><td>游戏币</td><td>910.00</td><td>2017-02-08</td><td>微信</td></tr> 
     <tr><td>房卡</td><td>1000.00</td><td>2017-02-08</td><td>微信</td></tr>
     <tr><td>游戏币</td><td>910.00</td><td>2017-02-08</td><td>微信</td></tr> 
     <tr><td>房卡</td><td>1000.00</td><td>2017-02-08</td><td>微信</td></tr>
     <tr><td>游戏币</td><td>910.00</td><td>2017-02-08</td><td>微信</td></tr> 
     <tr><td>房卡</td><td>1000.00</td><td>2017-02-08</td><td>微信</td></tr>
     <tr><td>游戏币</td><td>910.00</td><td>2017-02-08</td><td>微信</td></tr> 
     <tr><td>房卡</td><td>1000.00</td><td>2017-02-08</td><td>微信</td></tr>
     <tr><td>游戏币</td><td>910.00</td><td>2017-02-08</td><td>微信</td></tr> 
     <tr><td>房卡</td><td>1000.00</td><td>2017-02-08</td><td>微信</td></tr>
     <tr><td>游戏币</td><td>910.00</td><td>2017-02-08</td><td>微信</td></tr> 
   </table>
  </div>
</template>
<script>
import '../../../static/css/aui.css'
export default {
  data () {
    return {
      bg: require('../../assets/user/backuser.png'),
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
  table{
    margin-top: 0.64rem;
    width: 100%;
    border:0;
  }
  table td{
    border:0;
    text-align: center;
    font-size: 0.64rem;
    color: #666;
  }
  table tr{
    line-height: 2.133rem;
  }
  table tr th{
    font-size: 0.597rem;
    border:0;
    color: #999999;
    font-weight: 100;
    text-align: center;
  }
  table, td, th{
    border:0 !important;
  }
  table tr:nth-child(odd) {  
            background-color: #fff; 
  }  
  table tr:nth-child(even) {  
   background-color: #f2f6f5; 
  }  
</style>
