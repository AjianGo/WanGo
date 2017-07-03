<template>
  <div>
    <div v-title data-title="管理收货地址">
    </div>
  <!-- 地址列表  -->
    <div class="dizhi">
    <div class="addreelist">
      <!-- 基本信息 -->
      <div class="addreeIns">
        <div class="addreename">收货人 ：<span>王艺霏</span></div>
        <div class="addreephone">15011456214</div>
      </div>
      <!-- 地址 -->
      <div class="addrees">
        <span>河北省廊坊市广阳区爱民道天利得益大厦1003室</span>
      </div>
    </div>
      <!-- 操作 -->
      <div class="operation">
        <div class="setDefault" :class="okbtn==1 ? 'oksetDefault' : 'oksetDefaults'"><div class="circular" :class="okbtn==1 ? 'okcircular' : 'okcirculars'" v-on:click="choice(1)"></div>&nbsp;<span>{{okbtn==1 ?"默认地址":"设为默认"}}</span></div>
        <div class="eidtbtn">
          <!-- 编辑 -->
          <div class="caozuo">
            <div class="eitdbtn"></div><span>&nbsp;编辑</span>
          </div>
          <div class="caozuo">
            <div class="eitdbtn dels"></div><span>&nbsp;删除</span>
          </div>
        </div>
      </div>       
    </div>   
        <div class="dizhi">
    <div class="addreelist">
      <!-- 基本信息 -->
      <div class="addreeIns">
        <div class="addreename">收货人 ：<span>王艺霏</span></div>
        <div class="addreephone">15011456214</div>
      </div>
      <!-- 地址 -->
      <div class="addrees">
        <span>河北省廊坊市广阳区爱民道天利得益大厦1003室</span>
      </div>
    </div>
      <!-- 操作 -->
      <div class="operation">
        <div class="setDefault" :class="okbtn==2 ? 'oksetDefault' : 'oksetDefaults'"><div class="circular" :class="okbtn==2 ? 'okcircular' : 'okcirculars'" v-on:click="choice(2)"></div>&nbsp;<span>{{okbtn==2 ?"默认地址":"设为默认"}}</span></div>
        <div class="eidtbtn">
          <!-- 编辑 -->
          <div class="caozuo">
            <div class="eitdbtn"></div><span>&nbsp;编辑</span>
          </div>
          <div class="caozuo">
            <div class="eitdbtn dels"></div><span>&nbsp;删除</span>
          </div>
        </div>
      </div>       
    </div>
        <div class="dizhi">
    <div class="addreelist">
      <!-- 基本信息 -->
      <div class="addreeIns">
        <div class="addreename">收货人 ：<span>王艺霏</span></div>
        <div class="addreephone">15011456214</div>
      </div>
      <!-- 地址 -->
      <div class="addrees">
        <span>河北省廊坊市广阳区爱民道天利得益大厦1003室</span>
      </div>
    </div>
      <!-- 操作 -->
      <div class="operation">
        <div class="setDefault" :class="okbtn==3 ? 'oksetDefault' : 'oksetDefaults'"><div class="circular" :class="okbtn==3 ? 'okcircular' : 'okcirculars'" v-on:click="choice(3)"></div>&nbsp;<span>{{okbtn==3 ?"默认地址":"设为默认"}}</span></div>
        <div class="eidtbtn">
          <!-- 编辑 -->
          <div class="caozuo">
            <div class="eitdbtn"></div><span>&nbsp;编辑</span>
          </div>
          <div class="caozuo">
            <div class="eitdbtn dels"></div><span>&nbsp;删除</span>
          </div>
        </div>
      </div>       
    </div>
  <router-link class="colse-button" to="/apendaddress">添加新地址</router-link>
  </div>
</template>
<script>
import '../../../static/css/aui.css'
export default {
  data () {
    return {
      okbtn: 1,
      nomoren: '设为默认',
      moren: '默认地址'
    }
  },
  methods: {
    choice: function (e) {
      this.okbtn = e
    }
  }
}
</script>

<style scoped>
.dizhi{
  background: #fff;
  margin-bottom: 0.64rem;
}
.addreelist{
  border-bottom: 0.03rem solid #eee;
  overflow: hidden;
  background-color: #fff;
  padding: 0.64rem;
}
/*默认*/
.addrees{
  margin-top: 0.32rem;
  font-size: 0.64rem;
  color: #666666;
}
.addreelist .addreeIns{
  width: 100%;
  font-size: 0.682rem;
  color: #333333;
  overflow: hidden;
}
.addreelist .addreename{
  float: left;
}
.addreelist .addreephone{
  float: right;
  display: inline-block;
}
/*操作*/
.operation{
  padding: 0.64rem;
  font-size: 0.746rem;
}
/*选择框*/
.setDefault{
  display: inline-block;
  color: #666;
}
.circular{
  margin-top: 0.2rem;
  display: inline-block;
  color: #666;
  width: 0.7rem;
  height: 0.7rem;
  font-size: 0.64rem;
  background: url(../../assets/user/yuan.png);
  background-size: 100%;
  float: left;
}
/*选中*/
.okcircular{
   background: url(../../assets/user/yuan1.png);
   background-size: 100%;
   color: #53c7c4;
}
.oksetDefault{
  color: #53c7c4;
}
/*编辑删除*/
.eidtbtn{
  float: right;
}
.caozuo{
  float: left;
  width: 2.6rem;
  color: #999999;
  margin-left: 0.746rem;
}
.eitdbtn{
  margin-top: 0.05rem;
  width: 0.853rem;
  height: 0.96rem;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(../../assets/user/edit.png);
  float: left;
}
.dels{
  background-image: url(../../assets/user/del.png);
}
/*添加新地址*/
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
