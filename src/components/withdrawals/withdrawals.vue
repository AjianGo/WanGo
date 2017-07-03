<template>
<div>
   <div v-title data-title="我要提现">
  </div>
  <!-- header -->
  <div class="wgheader" :style="{backgroundImage: 'url(' +bg + ')'}">
    <!-- 提现列表 -->
    <router-link class="moneyList" to="/moneyrecord">提现列表</router-link>
    <div class="money">129.00</div>
    <div class="yue">业绩余额(元)</div>        
  </div>

<!-- 银行     -->
    <section class="aui-content" style="margin-top:0.64rem;"> 
        <ul class="aui-list aui-list-noborder userlist">
<!-- 提现银行 -->
            <li class="aui-list-item" >
                <router-link class="aui-list-item-inner aui-list-item-arrow" to="/banklist">
                    <div class="aui-list-item-title usertxtsize"><div class="bankicon"></div><span class="tibans" style="color:#666666">提现银行</span> <span class="banknum">招商银行(4853)</span></div>
                    <div class="aui-list-item-right" style="color:#cccccc;">更换银行</div>
                </router-link>
            </li>
<!-- 提现金额 -->
            <li class="aui-list-item">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-title usertxtsize"><div class="bankicon limoney"></div><span class="tibans" style="color:#666666">提现金额</span></div>
                    <input type="number" class="aui-list-item-right" oninput="if(value.length>5)value=value.slice(0,5)" maxlength="5" placeholder="129.00" style="color:#f96268;font-size:0.746rem;text-align:right;"/>
                </div>
            </li>
        </ul>
    </section> 
<!-- 提示 -->
    <div class="prompt">
      {{msg}}
    </div>
<!-- 确认提现 -->
    <div class="extractbtn">确认提现</div>
 </div>   
</template>
<script>
import '../../../static/css/aui.css'
let pic = require('../../assets/user/rec.png')
export default {
  data () {
    return {
      msg: '提示: 提现金额都必须大于100.00元,每笔限额10000.00元',
      bg: pic
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
<style scoped>
.wgheader{
  width: 100%;
  height: 7.893rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
/*提现列表*/
.moneyList{
  font-size: 0.746rem;
  color: #fff;
  padding-top: 0.64rem;
  padding-right: 0.64rem;
  display: block;
  text-align: right;
}
/*用户金额*/
.money{
  font-size: 1.92rem;
  color: #fff;
  font-weight: 600;
  text-align: center;
  margin: 0.64rem 0 0.3rem 0;
}
.yue{
  text-align: center;
  color: #c5edec;
  font-size: 0.64rem;
}
/*清除默认li高度*/
.aui-list .aui-list-item,.aui-list .aui-list-item-inner{
  min-height: 0;
  background-image: none;
}
.userlist li{
  padding:0.64rem;
}
.aui-list-item:first-child{
  border-bottom:0.03rem solid #eee;
}
/*右侧字*/
.aui-list .aui-list-item-right{
  line-height: 0.746rem;
  height: auto;
}
/*银行图标*/
.bankicon{
  width: 0.96rem;
  height: 0.96rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(../../assets/withdrawals/bank.png);
  background-position:  center;
  float: left;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -0.48rem;
}
.usertxtsize{
  font-size: 0.64rem;
}
.banknum{
  font-size: 0.746rem;
  color: #333;
  margin-left: 0.64rem;
}
.tibans{
  margin-left: 1.386rem;
}
/*提现金额*/
.usertxtsize .limoney{
  background-image: url(../../assets/withdrawals/jine.png);
}
/*提现提示*/
.prompt{
  margin-top: 0.64rem;
  font-size: 0.597rem;
  color: #fb0007;
  text-align: center;
}
/*确认提现*/
.extractbtn{
  width: 93%;
  background-color: #53c7c4;
  color: #fff;
  border-radius: 1.92rem;
  text-align: center;
  line-height: 1.92rem;
  margin: 6.4rem auto 0;
}
</style>
