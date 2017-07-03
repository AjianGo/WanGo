<style scoped>
.passwordbox{
  margin-top: 0.64rem;
}
.fontcolor{
  color: #666666 !important;
}
.aui-list.aui-form-list{
  background-image: none!important;
}
.aui-list-item{
  background-image: none !important;
  padding: 0 0.64rem !important;
}
.pwfontsize{
  font-size: 0.64rem;
  border-bottom: #333333 solid 0.03rem;
}
input.pwfontsize{
  border: 0;
}
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    font-size: 0.64rem;
    color: #dddddd;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   font-size: 0.64rem;
   color: #dddddd;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   font-size: 0.64rem;
   color: #dddddd;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   font-size: 0.64rem;
   color: #dddddd;
}
/* 提交 */
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
/*标题*/
.telephonetitle{
  font-size: 1.066rem;
  color: #333;
  text-align: center;
  line-height: 6.613rem;
}
.aui-list-item-input{
  position: relative;
}
/*验证码*/
.verification{
  min-width: 3.413rem;
  line-height: 1.28rem;
  color: #666666;
  border:0.03rem solid #666666;
  border-radius: 0.2rem;
  text-align: center;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -0.64rem;
}
</style>
<template>
<div id="shoporder">
  <div v-title data-title="修改密码">
  </div>
<!-- 标题   -->
<div class="telephonetitle">请输入手机号</div>
<!-- 获取验证码   -->
      <div class="aui-content passwordbox aui-margin-b-15">
        <ul class="aui-list aui-form-list">
            <li class="aui-list-item">
                <div class="aui-list-item-inner pwfontsize">
                    <div class="aui-list-item-label fontcolor">
                        手机号
                    </div>
                    <div class="aui-list-item-input">
                        <input type="text"onkeyup="this.value=this.value.replace(/\D/g,'')"  onafterpaste="this.value=this.value.replace(/\D/g,'')" class="pwfontsize"  maxlength="11"  placeholder="输入您的旧手机号">
                    </div>
                </div>
            </li>   
            <li class="aui-list-item">
                <div class="aui-list-item-inner pwfontsize">
                    <div class="aui-list-item-label fontcolor">
                        验证码
                    </div>
                    <div class="aui-list-item-input">
                        <input type="password" maxlength="" class="pwfontsize" maxlength="10" placeholder="输入您的验证码">
                        <div class="verification" v-on:click="startTimer ()">{{verification}}</div>
                    </div>
                </div>
            </li>                  
        </ul>
      </div> 
        <!-- 退出按钮      -->
    <div class="colse-button">立即绑定</div> 
</div>
</template>
<script>
import '../../../../static/css/aui.css'
export default {
  data () {
    return {
      verification: '立即获取',
      timer: 60,
      stop: false
    }
  },
  components: {
  },
  methods: {
  // 倒计时
    getcode: function () {
      if (this.timer <= 0) {
        this.timer = 60
        this.verification = '立即获取'
      } else {
        this.timer--
        this.verification = this.timer
      }
    },
    startTimer () {
      if (this.stop === false) {
        this.verification = setInterval(this.getcode, 1000)
      } else {
        clearInterval(this.verification)
      }
      this.stop = !this.stop
    }
  }
}
</script>
