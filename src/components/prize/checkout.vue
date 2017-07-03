<template>
<div>
    <div v-title data-title="结账买单">
    </div>
    <!-- 输入框  -->
    <div class="settlement">
      <div class="settlementInt">
          <span>消费总额:</span><input type="number" placeholder="询问后输入金额" v-model="total"   oninput="if(value.length>5)value=value.slice(0,5)" >
      </div>
    </div>
    <!-- 抵扣劵 -->
    <div class="deductible">
      <div class="deductibleli">
        <span>抵扣金额 (限10个劵)</span>
        <span class="yue dikou"><input type="number" :placeholder="holder" v-model="num"  oninput="if(value.length>5)value=value.slice(0,5)" v-on:input="calculation"></span>
      </div>
      <div class="deductibleli">
        <span class="">支付类型</span>
        <span class="yue zhifu">
        <select>
          <option>微信支付</option>
          <option>现金支付</option>
        </select>
        </span>
      </div>      
    </div>

    <div class="deductible roidtype">
      <div class="deductibleli xianjin">
        <span>现金支付</span>
        <span class="yue"><input class="aui-radio" type="radio" name="radio" checked=""></span>
      </div>
      <div class="deductibleli weixin">
        <span class="">微信</span>
        <span class="yue"><input class="aui-radio" type="radio" name="radio"></span>
      </div>      
    </div>
    <!-- 实付金额 -->
    <div class="shifu">
      <span>实付金额</span>
      <span class="jin">¥{{pr}}</span>
    </div> 
    <!-- 确认买单 -->
    <div class="buybtn">确认买单</div>
</div>
</template>
<script>
export default {
  data () {
    return {
      // 输入金额
      total: '',
      // 劵书
      num: '',
      holder: '劵余额200个',
      // 金额
      pr: '00.00'
    }
  },
  methods: {
    calculation: function () {
      if (this.num > 10) {
        alert('你只可消费10个劵')
        this.num = ''
        this.pr = ''
      } else
      if (this.total - this.num < 0) {
        this.pr = '00.00'
      } else {
        this.pr = this.total - this.num
      }
    }
  },
  components: {
  }
}
</script>

<style scoped>
/*结算*/
.settlement{
  padding: 0.64rem;
}
/*输入框*/
.settlementInt{
  width: 100%;
  overflow: hidden;
  padding: 0.64rem;
  border:0.03rem solid #cccccc;
  border-radius: 0.1rem;
  background: #fff;
  margin: 0 auto;
}
.settlementInt span{
  font-size: 0.853rem;
  color: #333333;
  float: left;
}
.settlementInt input{
  width: 60%;
  height: auto;
  margin-top: 0.2rem;
  margin-left: 0.64rem;
  font-size: 0.746rem;
  float: left;
  text-align: right;
}
/*抵扣劵*/
.deductible{
  padding: 0 0.64rem;
  background: #fff;
}
.deductibleli{
  padding: 0.853rem 0;
  font-size: 0.64rem;
  color: #999999;
}
.deductibleli:first-child{
  border-bottom: 0.03rem solid #dddddd;
}
.deductibleli .yue{
  color: #53c7ca;
  position: relative;
  float: right;
}
.deductibleli .dikou input{
  color: #53c7ca;
  font-size: 0.64rem;
  height: 0.8rem;
  text-align: right;  
}
/*下拉框*/
.yue select{
  height: auto;
  font-size: 0.64rem;
  padding-right: 1.06rem;
  color: #333;
}
.zhifu select{
  line-height: 1rem;
}
.zhifu::after{
    content: '';
    width: 0.32rem;
    height: 0.3rem;
    position: absolute;
    top: 50%;
    right: 0.1rem;
    margin-top: -0.3rem;
    background: transparent;
    border: 1px solid #dddddd;
    border-top: none;
    border-right: none;
    z-index: 2;
    border-radius: 0;
    transform: rotate(-45deg)
}
/*选择按钮*/
.roidtype{
  background: transparent;
}
.roidtype span{
  color: #333;
}
.roidtype .deductibleli{
  padding-left: 1.386rem;
}
.xianjin,.weixin{
  background-image: url(../../assets/shopmall/xj.png);
  background-repeat: no-repeat;
  background-position: left 0.9rem;
  background-size: 0.96rem 0.64rem;
}
.weixin{
  background-image: url(../../assets/shopmall/wx.png);
  background-position: left 0.8rem;
  background-size: 1.066rem;
}
.aui-radio:checked, .aui-radio.aui-checked, .aui-checkbox:checked, .aui-checkbox.aui-checked{
  background-color: #53c7c4;
  border:0;
}
.shifu{
  padding:0.853rem 0.64rem;
  background: #fff;
  font-size: 0.64rem;
  color: #999999;
}
.shifu .jin{
  float: right;
  font-weight: 600;
  color: #ff372c;
}
.yue ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #53c7ca;
}
.yue :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    #53c7ca;
}
.yue ::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #53c7ca;
}
.yue :-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:    #53c7ca;
}
/*确认买单*/
.buybtn{
  line-height: 2.133rem;
  width: 93.3%;
  text-align: center;
  background: #ff393a;
  margin: 1.493rem auto 0;
  color: #fff;
  font-size: 0.746rem;
  font-weight: 100;
  border-radius: 0.3rem;
}
</style>
