<style scoped>
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
/*意见反馈表头*/
.opinionTitle{
	line-height: 2.133rem;
	color: #333333;
	font-size: 0.746rem;
	padding-left: 0.64rem;
	background-color: #f8f8f8;
}
/*意见框*/
.opinionInput{
	width: 100%;
	height: 8.53rem;
	background-color: #fff;
	padding: 0.64rem;
}
.opinionInput textarea{
	height: 8.53rem;
	font-size: 0.64rem;
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
.fontcolor{
	font-size: 0.64rem;
	width: 6rem;
	line-height: 2.133rem;
}
.passwordbox{
	margin-top: 0.64rem;
	background-image: none;
}
.aui-form-list{
	background-image: none;
}
.aui-list-item{
	background-image: none;
}
.pwfontsize{
	font-size: 0.64rem;
}
</style>
<template>
<div>
  <div v-title data-title="意见反馈">
  </div>
  	<div class="opinionTitle">意见反馈</div>
  	<div class="opinionInput">
  		<textarea placeholder="输入您的意见..." maxLength=100>
  			
  		</textarea>
  	</div>
    <div class="aui-content passwordbox aui-margin-b-15">
        <ul class="aui-list aui-form-list">
            <li class="aui-list-item">
                <div class="aui-list-item-inner pwfontsize">
                    <div class="aui-list-item-label fontcolor">
                        提交人手机号 :
                    </div>
                    <div class="aui-list-item-input">
                        <input type="text"onkeyup="this.value=this.value.replace(/\D/g,'')"  onafterpaste="this.value=this.value.replace(/\D/g,'')" class="pwfontsize"  maxlength="11"  placeholder="输入您的旧手机号">
                    </div>
                </div>
            </li>
        </ul>
    </div> 	
	<!-- 提交按钮      -->
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
