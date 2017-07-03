<template>
  <div>
    <div v-title data-title="银行卡列表">
    </div>
  <!-- 地址列表  -->
    <div class="addreelist">
      <!-- 基本信息 -->
      <div class="addreeIns">
        <div class="addreename">卡号&nbsp;&nbsp;<span>6228 4810 0612 3124 667</span></div>
      </div>
      <!-- 地址 -->
      <div class="addrees">
        <span class="moren">[默认]</span>
        <span>兴业银行</span>
      </div>
    </div> 
    <div class="addreelist">
      <!-- 基本信息 -->
      <div class="addreeIns">
        <div class="addreename material-design" data-color="#000000">卡号&nbsp;&nbsp;<span>6228 4810 0612 3124 667</span></div>
      </div>
      <!-- 地址 -->
      <div class="addrees">
        <span class="moren"></span>
        <span>兴业银行</span>
      </div>
      <!-- 设为默认 -->
      <div class="setups">设为默认</div>
    </div>
    <router-link class="addbtn" to="/addbank">
    	<div class="addbtnImg">
    	</div>
    	<span>添加提现银行</span>
    </router-link>          
  </div>
</template>

<script>
import '../../../static/css/aui.css'
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
.addreelist{
	position: relative;
  overflow: hidden;
  background-color: #fff;
  padding: 0.746rem 0 0.746rem 0.746rem;
  margin-bottom: 0.64rem;
}
.addreelist .addreeIns{
  font-size: 0.682rem;
  color: #333333;
  overflow: hidden;
}
.addreelist .addreename{
  float: left;
}
/*默认*/
.addrees{
  margin-top: 0.32rem;
  font-size: 0.64rem;
  color: #666666;
}
.addrees .moren{
	display: inline-block;
	width: 1.706rem;
  	color: #fc476b;
}
/*设为默认*/
.setups{
	position: absolute;
	right: 0.64rem;
	top: 0.746rem;
	width: 3.626rem;
	line-height: 2rem;
	float: right;
	text-align: center;
	border-left: 0.03rem solid #eeeeee;
	font-size: 0.64rem;
}
/*添加银行卡*/
.addbtn{
  display: block;
	padding:0.32rem 0.597rem;
	background-color: #fff;
	color: #666666;
	font-size: 0.64rem;
	line-height: 1.4rem;
}
.addbtnImg{
	width:1.28rem;
	float: left;
	margin-right: 0.426rem;
	height:1.28rem;
	background-image: url(../../assets/user/addbtn.png);
	background-size: 100%;
}
</style>
