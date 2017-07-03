<template>
<div>
    <div v-title data-title="提现列表">
    </div>
    <!-- 用户信息 -->
    <component :is="currentView" transition="fade" transition-mode="out-in"></component>
     <table class="tables" border="0" cellspacing="0" cellpadding="0" >
     <tr><th>提现金额</th><th>提现时间</th><th>审核状态</th></tr>
     <tr><td>500.00</td><td>2017-02-03<br>18:05:21</td><td :class="active==1 ? 'examineing' : 'notexamine'">审核中</td></tr>
     <tr><td>300.00</td><td>2017-02-03<br>18:05:21</td><td :class="active==2 ? 'examineing' : 'notexamine'">未通过</td></tr>
     <tr><td>200.00</td><td>2017-02-03<br>18:05:21</td><td :class="active==1 ? 'examineing' : 'notexamine'">审核中</td></tr>
     <tr><td>600.00</td><td>2017-02-03<br>18:05:21</td><td :class="active==1 ? 'examineing' : 'notexamine'">审核中</td></tr>
     <tr><td>800.00</td><td>2017-02-03<br>18:05:21</td><td :class="active==2 ? 'examineing' : 'notexamine'">未通过</td></tr>
   </table>
</div>
</template>
<script>
import '../../../static/css/aui.css'
export default {
  data () {
    return {
      currentView: 'businesscard',
      active: 1
    }
  },
  methods: {
  },
  components: {
    // 名片
    'businesscard': require('../center/businesscard.vue')
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
  }
  table tr{
    line-height: 1.2rem;
  }
  table tr th{
    font-size: 0.597rem;
    border:0;
    color: #999!important;
    font-weight: 100;
    text-align: center;
  }
  .tables td{
    color: #666!important;
  }
  .tables tr td:first-child{
    color: #333!important;
  }
  table, td, th{
    padding: 0.64rem 0;
    border:0 !important;
  }
  table tr:nth-child(odd) {  
            background-color: #fff; 
  }  
  table tr:nth-child(even) {  
   background-color: #f2f6f5; 
  }
  /*审核中颜色*/
  .tables .examineing{
    color: #4fcf78!important;
  }
  /*未通过*/
  .tables .notexamine{
    color: #fc474b!important;
  }
</style>
