<template>
   <table class="tables" border="0" cellspacing="0" cellpadding="0" >
     <tr><th>用户信息</th><th>业绩次数</th><th>业绩产出</th></tr>
     <tr><td>山楂树的味道</td><td>254</td><td class="chanchu">30.14</td></tr>
     <tr><td>细雨霏霏123</td><td>138</td><td class="chanchu">40.06</td></tr>
     <tr><td>欢乐的大福</td><td>541</td><td class="chanchu">50.41</td></tr>
     <tr><td>危机四伏</td><td>23</td><td class="chanchu">44.05</td></tr>
     <tr><td>大内密探</td><td>445</td><td class="chanchu">44.01</td></tr>
   </table>
</template>
<script>
import '../../../../static/css/aui.css'
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
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
    color: #666666!important;
    font-weight: 100;
    text-align: center;
  }
  .tables td{
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
  .tables .chanchu{
    color: #fc474b!important;
  }
</style>
