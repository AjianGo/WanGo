<template>
  <div>
    <div v-title data-title="添加收货地址">
  </div>
  <form>
    <div class="list">
      <label for="">收货人姓名</label><input type="text" placeholder="限制2-4个汉字" maxlength="4">
    </div>
    <div class="list">
      <label for="">联系电话</label><input type="text" placeholder="限制11个数字" maxlength="11">
    </div>
    <div class="list">
      <label for="">邮箱</label><input type="text" placeholder="输入您的邮箱" maxlength="20">
    </div>
    <router-link class="list sheng" to="/address/province">
      <label for="">{{pro}}</label>
    </router-link>
    <div class="list shi" v-on:click="pansheng(proId)">
      <label for="">{{city}}</label>
    </div>
    <div class="list">
      <label for="">详细地址</label><input type="text" placeholder="限制15个汉字" maxlength="15">
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
    pro () {
      return this.$store.state.pro
    },
    city () {
      return this.$store.state.city
    },
    proId () {
      return this.$store.state.proId
    }
  },
  methods: {
    pansheng: function (id) {
      if (id !== 0) {
        this.$router.push({path: '/address/city'})
      } else {
        alert('请选择省份')
      }
    }
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
  width: 50%;
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
.sheng :before,.shi :before{
    content: '';
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    top: 50%;
    right: 0.75rem;
    margin-top: -0.2rem;
    background: transparent;
    border: 1px solid #dddddd;
    border-top: none;
    border-right: none;
    z-index: 2;
    -webkit-border-radius: 0;
    border-radius: 0;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
}
</style>
