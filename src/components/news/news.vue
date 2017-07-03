<template>
<div class="newsbg" :style="{height: winH + 'px'}">
  <div v-title data-title="消息详情">
  </div>
  <!-- 弹框 -->
  <div class="bomb" >
    <div class="title">
      <span>标题：<span>如何成为会员？</span><span class="newsTime">2017-05-20</span></span>
    </div>
    <div class="newsContent">
      河北乐聪网络科技股份有限公司一直以追求一流的技术为目标，本着高起点、高技术、高信誉、优质服务“三高一优”的宗旨在激烈的动漫游戏行业竞争中脱颖而出，成为河北省动漫游戏行业集研发、运营兼备的一支发展势头强劲的生力军。

经过多年发展，公司拥有自主知识产权70多项，荣获国家高新技术企业、河北省级众创空间、河北省级版权示范基地、廊坊市游戏动漫大数据研发中心、廊坊市众创空间、廊坊市文化创意产业示范基地等荣誉称号，作为省市“十三五”规划重点项目单位、省市文化产业协会副会长单位，公司已在新三板正式挂牌上市，成为河北省首家互联网文化科技融合上市企业。
  河北乐聪网络科技股份有限公司一直以追求一流的技术为目标，本着高起点、高技术、高信誉、优质服务“三高一优”的宗旨在激烈的动漫游戏行业竞争中脱颖而出，成为河北省动漫游戏行业集研发、运营兼备的一支发展势头强劲的生力军。

经过多年发展，公司拥有自主知识产权70多项，荣获国家高新技术企业、河北省级众创空间、河北省级版权示范基地、廊坊市游戏动漫大数据研发中心、廊坊市众创空间、廊坊市文化创意产业示范基地等荣誉称号，作为省市“十三五”规划重点项目单位、省市文化产业协会副会长单位，公司已在新三板正式挂牌上市，成为河北省首家互联网文化科技融合上市企业。
    </div>
  </div>
  <div class="cosle" v-on:click="closebtn()"></div>
</div>
</template>
<script>
let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
export default {
  data () {
    return {
      winH: h
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    closebtn: function () {
      history.go(-1)
    }
  }
}
</script>
<style scoped>
.newsbg{
  background: #49494b;
  overflow: hidden;
  margin: 0 !important;
}
.bomb{
  width: 93.3%;
  height: 20.48rem;
  background: #ffffff;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 0.810rem auto 0.853rem;
  box-shadow:5px -80px 80px #f0f0f0 inset;
}
/*标题*/
.bomb .title{
  width: 100%;
  padding: 0.64rem;
  color: #fff;
  font-size: 0.746rem;
  background: #0fc9bf;
}
/*时间*/
.newsTime{
  float: right;
}
.newsContent{
  padding: 0.853rem 0.746rem;
  color: #999999;
  height: 88%;
  font-size: 0.64rem;
  text-indent:2em;
  line-height: 1.2rem;
  overflow:scroll;
  position: relative;
}
.cosle{
  width: 1.813rem;
  height: 1.813rem;
  background: url(../../assets/close.png);
  background-size: 100%;
  margin: 0  auto;
}
</style>
