<template>
   <table class="tables" border="0" cellspacing="0" cellpadding="0" >
     <tr><th>用户信息</th><th>注册日期</th><th>最后登录</th></tr>
     <tr><td>山楂树的味道</td><td>2017-02-03<br>18:05:21</td><td>2017-02-03<br>18:05:21</td></tr>
     <tr><td>细雨霏霏123</td><td>2017-02-03<br>18:05:21</td><td>2017-02-03<br>18:05:21</td></tr>
     <tr><td>欢乐的大福</td><td>2017-02-03<br>18:05:21</td><td>2017-02-03<br>18:05:21</td></tr>
     <tr><td>危机四伏</td><td>2017-02-03<br>18:05:21</td><td>2017-02-03<br>18:05:21</td></tr>
     <tr><td>大内密探</td><td>2017-02-03<br>18:05:21</td><td>2017-02-03<br>18:05:21</td></tr>
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
</style>
