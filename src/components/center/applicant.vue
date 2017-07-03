<template>
  <div>
    <div v-title data-title="我的推广">
    </div>
    <!-- 用户信息 -->
   <section class="aui-content-padded userBg" :style="{backgroundImage: 'url(' +bg + ')'}">
          <!-- 用户资料 -->
          <section class="aui-content">
              <div class="aui-card-list-user-avatar">
                 <img src="../../assets/user/user.png" class="aui-img-round">
              </div> 
              <div class="aui-list-item-inner">
                    <div class="aui-list-item-text username">
                      <div class="aui-list-item-title aui-font-size-14">会飞的屋子</div>
                      <div class="userdengji"></div>
                      <div class="userType">已绑定</div>
                    </div>
                     <div class="userid">
                              玩购ID:43335555
                     </div>
              </div>
              <!-- 申请推广员 -->
              <router-link to='/applicant' class="apply">
                
              </router-link>
          </section>
          <!-- 设置 -->
          <router-link to='/setup'  class="set">
            
          </router-link>
   </section>
   <!-- 通知消息 -->
   <div class="notice">
     {{msg}}
   </div>
   <!-- 个人信息卡 -->
    <div class="aui-content-padded applicant_usercard">
        <ul class="aui-list">
            <li class="aui-list-header">个人身份信息</li>
            <li class="aui-list-item aui-arrow-right">
              <label for="name">姓名:</label><input maxlength="10" type="text" id="name" placeholder="请输入姓名">
            </li>
            <li class="aui-list-item aui-arrow-right">
            <label for="usernumber">身份证号:</label><input type="text" maxlength="18" id="usernumber" placeholder="请输入18为身份证号">
            </li>
            <li class="aui-list-item aui-arrow-right">
            <label for="usertelephone">联系电话:</label><input type="text" maxlength="11" id="usertelephone" placeholder="请输入手机号">
            </li>
        </ul>
    </div>
    <!-- 个人银行卡        -->
    <div class="aui-content-padded applicant_usercard">
        <ul class="aui-list">
            <li class="aui-list-header">收款银行信息</li>
            <li class="aui-list-item aui-arrow-right">
              <label for="bancard">银行选择:</label><select><option value="">下拉列表</option><option value="建设银行">建设银行</option><option value="张家口银行">张家口银行</option></select>
            </li>
            <li class="aui-list-item aui-arrow-right">
            <label for="banknum">银行卡号:</label><input type="text" maxlength="20" id="banknum" placeholder="请输入银行卡号">
            </li>
            <li class="aui-list-item aui-arrow-right">
            <label for="bankhome">开户行:</label><input type="text" maxlength="18" id="bankhome" placeholder="请输入开户行">
            </li>
        </ul>
    </div>
  <!-- 确认按钮      -->
  <div class="colse-button">确认申请</div>
  </div>      
  </div>
</template>
<script>
import '../../../static/css/aui.css'
export default {
  data () {
    return {
      bg: require('../../assets/user/backuser.png'),
      msg: '成为我们公众号推广员，开启你的玩购之旅，请完善下面信息：'
    }
  },
  methods: {
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
  /*通知消息框*/
  .notice{
    width: 100%;
    background-color: #f8f8f8;
    color: #fb004d;
    font-size: 0.533rem;
    text-align: center;
    line-height: 2.023rem;
  }
  /*个人信息卡*/
  .applicant_usercard{
    width: 14.72rem;
    height: 7.253rem;
    margin:0.597rem auto 0;
    border:0.03rem solid #eeeeee;
    border-radius: 0.213rem;
    overflow: hidden;
  }
  .applicant_usercard .aui-list-header{
    background-color: #f2f6f5;
    color: #333;
    font-size: 0.597rem;
    padding: 0.64rem;
  }
  .applicant_usercard .aui-arrow-right{
    height: 1.706rem;
    min-height: 1.706rem;
    padding-right: 0;
    background-image: none;
  }
  .applicant_usercard label{
    width: 4.413rem;
    line-height: 1.706rem;
    font-size: 0.64rem;
    color: #333333;
  }
  .applicant_usercard input,.applicant_usercard select{
    height: 1.706rem;
    max-width: 10.66rem;
    font-size: 0.64rem;
    margin-right: 0.64rem;
    text-align: center;
  }
  .applicant_usercard select {
    direction: rtl;
  }
  .applicant_usercard option{
     direction: rtl;
  }
input:-moz-placeholder,   
textarea:-moz-placeholder {  
    color: #ddd;   
    font-size: 0.64rem;
    text-align: right;
}
input:-ms-input-placeholder,   
textarea:-ms-input-placeholder {   
    color: #ddd;  
    font-size: 0.64rem;
    text-align: right;
}   
  
input::-webkit-input-placeholder,   
textarea::-webkit-input-placeholder {   
    color: #ddd; 
    font-size: 0.64rem;
    text-align: right;
}  
.colse-button{
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #53c7c4;
  text-align: center;
  line-height: 2.133rem;
  font-size: 0.682rem;
  color: #fff;
}
</style>
