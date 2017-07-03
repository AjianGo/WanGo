<template>
  <div>
    <div v-title data-title="添加银行卡详情">
  </div>
  <form>
    <div class="list">
      <label for="">持卡人姓名</label><input type="text" placeholder="请输入用户真实姓名" maxlength="4">
    </div>
    <div class="list">
      <label for="">卡号</label><input type="number" placeholder="请输入姓名对应的银行卡号" maxlength="20">
    </div>
    <div class="list">
      <label for="">手机号</label><input type="text" placeholder="输入银行卡绑定的手机号码" maxlength="11">
    </div>
  </form>
  <!-- 确认按钮      -->
  <div class="colse-button">确认添加</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
/* 确认 */
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
.list{
  padding: 0.64rem;
  width: 100%;
  display: block;
  overflow: hidden;
  background: #ffffff;
  position: relative;
  border-bottom: 0.03rem solid #dddddd;
}
.list:first-child{
  margin-top: 0.64rem;
}
.list:last-child{
  border: 0;
}
.list label{
  display: inline-block;
  font-size: 0.64rem;
  margin-right: 0.64rem;
  float: left;
  color: #999999;
}
.list input{
  float: left;
  width: 70%;
  font-size: 0.64rem;
  height: 1rem;
}
::-webkit-input-placeholder { /* WebKit browsers */
    color:    #cecece;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    #cecece;
   opacity:  1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #cecece;
   opacity:  1;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
   color:    #cecece;
}
</style>
