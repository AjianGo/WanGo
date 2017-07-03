<template>
  <div>
    <div v-title data-title="设置">
  </div>
  <!-- 二维码 -->
    <div class="qrcode">
      <div class="codeImg" :style="{backgroundImage: 'url(' +bg + ')'}"></div>
    </div>
  <!-- 列表 -->
    <section class="aui-content">
        <ul class="aui-list aui-list-noborder userlist">
            <li class="aui-list-item">
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-title usertxtsize">更改头像</div>
                    <div class="aui-list-item-right userhead"></div>
                    
                </div>
                <input  type="file" name="file" accept="image/*" class="filephone" >
            </li>
            <li class="aui-list-item" onclick="openDialog('username')">
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-title usertxtsize">昵称</div>
                    <div class="aui-list-item-right" style="color:#cccccc;">未填写</div>
                </div>
            </li>
            <li class="aui-list-item" v-on:click="sexr()">
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-title usertxtsize">性别</div>
                    <div class="aui-list-item-right" style="color:#666;">男</div>
                </div>
            </li>
            <li class="aui-list-item">
                <router-link class="aui-list-item-inner aui-list-item-arrow" to="/modifypw">
                    <div class="aui-list-item-title usertxtsize">修改密码</div>
                    <div class="aui-list-item-right"></div>
                </router-link>
            </li>
            <router-link class="aui-list-item" to="/bindmobile">
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-title usertxtsize">绑定手机</div>
                </div>
            </router-link>
            <li class="aui-list-item" tapmode onclick="openDialog('text')">
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-title usertxtsize">在线客服</div>
                </div>
            </li> 
             <router-link class="aui-list-item" to="opinion">
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-title usertxtsize">意见反馈</div>
                </div>
            </router-link>       
        </ul>
    </section>   
    <!-- 性别选择 -->
    <div class="rodiasex" :style="{display: displays}">
      <div class="sexs">
        <div class="sexTitle">修改性别</div>
         <div class="aui-list-item-inner" style="margin:0 auto;display:block;text-align:center;font-size:0.64rem;line-height:1.2rem;">
                <label><input class="aui-radio" type="radio" name="radio2" checked> 男</label>
                <label><input class="aui-radio" type="radio" name="radio2"> 女</label>
          </div>
          <!-- 确定按钮框 -->
          <div class="btnsArr">
          <div v-on:click="tijiao()">取消</div>
          <div v-on:click="tijiao()">确定</div>
          </div>
      </div>
    </div>
  <!-- 退出按钮      -->
    <div class="colse-button">退出登录</div>
  </div>
</template>
<script>
import '../../../static/css/aui.css'
export default {
  data () {
    return {
      bg: require('../../assets/user/erbg.png'),
      displays: 'none'
    }
  },
  methods: {
    tijiao: function () {
      this.displays = 'none'
    },
    sexr: function () {
      this.displays = 'block'
    }
  }
}
</script>

<style scoped>
/* 二维码 */
.qrcode{
  position: relative;
  width: 100%;
  height: 7.893rem;
  background: #f8f8f8;
}
.qrcode .codeImg{
  position: absolute;
  width: 4.586rem;
  height: 4.586rem;
  background-size: 100%;
  left: 50%;
  margin-left: -2.293rem;
  top: 50%;
  margin-top: -2.293rem;
}
/* 头像 */
.userhead{
  width: 1.386rem;
  height: 1.386rem;
  background-image: url(../../assets/user/userpoto.png);
  background-size: 100%;
}
/* 信息列表 */
.userlist .aui-list-item{
  height: 2.1333rem;
  padding-left:0.64rem;
}
.aui-list .usertxtsize{
  font-size: 0.64rem;
  color: #666666;
}
.aui-list .aui-list-item-inner{
  border:0;
}
/* 箭头颜色 */
.aui-list-item-arrow:before{
  border-color: #cdcdcd;
  width: 0.32rem;
  height: 0.32rem;
  margin-top: -0.16rem;
  right: 0.64rem;
}
.aui-list-item-inner.aui-list-item-arrow{
  padding-right: 1.28rem;
}
/* 退出登录 */
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
.filephone{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  opacity: 0;
}
/*性别选择*/
.rodiasex{
  position:fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(0,0,0,.8); 
  z-index: 200;

}
.sexs{
  z-index: 500;
  position: absolute;
  top: 50%;
  margin-top: -5rem;
  left: 50%;
  margin-left: -6rem;
  background: #fff;  
  width: 12rem;
  height: 6rem;
  border-radius: .3rem;
    overflow: hidden;
}
.sexTitle{
  line-height: 2rem;
  text-align: center;
}
.aui-radio{
  width: 0.8rem;
  height: 0.8rem;
  margin-top: 0.2rem;
}
label{
  margin: 2rem;
}
/*按钮组*/
.btnsArr{
  width: 100%;
  height: 2.2rem;
  position: absolute;
  bottom: 0;
  border-top: 0.03rem solid #eee;
}
.btnsArr div{
  width: 50%;
  float: left;
  line-height: 2.2rem;
  border-right:0.03rem solid #eee; 
  text-align: center;
}
</style>
