<style scoped>
.passwordbox{
  margin-top: 0.64rem;
}
.fontcolor{
  color: #333 !important;
}
.aui-list.aui-form-list{
  background-image: !important;
}
.aui-list-item{
  background-image: none !important;
  padding: 0 0.64rem !important;
}
.pwfontsize{
  font-size: 0.64rem;
  border-bottom: #dddddd solid 0.03rem;
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
</style>
<template>
<div id="shoporder">
  <div v-title data-title="修改密码">
  </div>
      <div class="aui-content passwordbox aui-margin-b-15">
        <ul class="aui-list aui-form-list">
            <li class="aui-list-item">
                <div class="aui-list-item-inner pwfontsize">
                    <div class="aui-list-item-label fontcolor">
                        旧密码
                    </div>
                    <div class="aui-list-item-input">
                        <input type="password" class="pwfontsize" placeholder="输入您的旧手机号">
                    </div>
                </div>
            </li>   
            <li class="aui-list-item">
                <div class="aui-list-item-inner pwfontsize" style="border-bottom:0;">
                    <div class="aui-list-item-label ">
                        新密码
                    </div>
                    <div class="aui-list-item-input">
                        <input type="password" class="pwfontsize" placeholder="输入您的新手机号">
                    </div>
                </div>
            </li>                  
        </ul>
      </div> 
        <!-- 退出按钮      -->
    <div class="colse-button">提交</div> 
</div>
</template>
<script>
import '../../../../static/css/aui.css'
export default {
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
  }
}
</script>
