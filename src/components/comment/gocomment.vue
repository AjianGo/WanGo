<template>
<div>
   <div v-title data-title="评价店铺">
  </div>
  <!-- 订单号 -->
  <div class="ordernum">
    <span>订单号 <span>13151561651651185185</span></span>
    <span class="ordertime"><span>2017-06-20</span>&nbsp;<span>13:02</span></span>
  </div>
  <!-- 店铺信息 -->
  <section class="aui-content">
    <ul class="aui-list aui-media-list orderul">
      <div class="aui-list-item">
        <div class="aui-media-list-item-inner">
        <div class="aui-list-item-media orderpic">
          <img src="../../assets/shopmall/1310.png" />
        </div>  
        <div class="aui-list-item-inner">
          <div class="aui-list-item-text">
            <div class="aui-list-item-title">亨宰汉堡</div>
          </div>
          <div class="aui-list-item-text fu">
            汉堡、小吃、饮品
          </div>
        </div>
        </div>
      </div>
    </ul>
  </section>
  <!-- 输入框 -->
  <div class="inputbox">
    <textarea placeholder="写点评论吧">      
    </textarea>
    <p>您还可以输入120个字</p>
  </div>
  <!-- 添加图片 -->
  <div class="addimg">
    <div class="add" v-if="app>=0"  @click="fileimg(1)">
      <img src="" id="add1" alt="" >
    </div>
    <div class="add" v-if="app>=1" @click="fileimg(2)">
    </div>
    <div class="add"  v-if="app>=2" @click="fileimg(3)">
    </div>
    <div class="add" v-if="app>=3" @click="fileimg(4)">
        
    </div>
  </div>
    <input type="file" style="display:none" :style="{backgroundImage: 'url(' +bg + ')'}" accept="image/*"  ref="chg1" v-on:change="filepic"/>
    <input type="file" style="display:none"  accept="image/*"  ref="chg2" v-on:change="filepic"/>
    <input type="file" style="display:none"  accept="image/*"  ref="chg3" v-on:change="filepic"/>
    <input type="file" style="display:none"  accept="image/*"  ref="chg4" v-on:change="filepic"/>
  <!-- 满意度 -->
  <div class="commentZong">
  <div class="manyi">用户综合满意度</div>
    <div class="storeStart">
      <span class="startfen">综合评分</span>
      <div class="start" :class="start>=1 ? 'start1' : 'start' "></div>
      <div class="start" :class="start>=2 ? 'start1' : 'start' "></div>
      <div class="start" :class="start>=3 ? 'start1' : 'start' "></div>
      <div class="start" :class="start>=4 ? 'start1' : 'start' "></div>
      <div class="start" :class="start>=5 ? 'start1' : 'start' "></div>
    </div>          
   </div>
   <!-- 评论 -->
       <section class="aui-content aui-margin-b-10">
        <div class="aui-grid">
            <div class="aui-row">
                <div class="aui-col-xs-4" v-on:click="pingf(1)">
                    <div class="lian cha" :class="ping==1 ? 'cha1' : 'cha' "></div>
                    <div class="aui-grid-label">差评</div>
                </div>
                <div class="aui-col-xs-4" v-on:click="pingf(3)">
                    <div class="lian zhong" :class="ping==3 ? 'zhong1' : 'zhong' "></div>
                    <div class="aui-grid-label">中评</div>
                </div>
                <div class="aui-col-xs-4" v-on:click="pingf(5)">
                    <div class="lian hao" :class="ping==5 ? 'hao1' : 'hao' "></div>
                    <div class="aui-grid-label">好评</div>
                </div>
            </div>
        </div>
    </section>
 </div>   
</template>
<script>
import '../../../static/css/aui.css'
export default {
  data () {
    return {
    // 店铺评分
      start: 0,
      ping: 0,
      app: 0,
      bg: ''
    }
  },
  methods: {
    pingf: function (e) {
      this.ping = e
      this.start = e
    },
    fileimg: function (e) {
      this.app = e
      if (e === 1) {
        this.$refs.chg1.click()
      }
    },
    filepic: function () {
      let s = this.$refs.chg1.value
      document.getElementById('add1').src = 'file://,' + s
    }
  },
  components: {
  }
}
</script>
<style scoped>
/*订单号*/
.ordernum{
  padding: 0.64rem;
  font-size: 0.533rem;
  color: #333;
  background: #fff;
  border-bottom: 0.03rem solid #eee;
}
.ordernum .ordertime{
  float: right;
}
/*取消默认background*/
.orderul{
  background-image: none;
}
/*店铺图片*/
.orderpic{
  width: 3.413rem;
  height: 3.413rem;
}
.orderul .aui-list-item-title{
  margin: 0.213rem 0;
  font-size: 0.853rem;
  color: #000;
}
.orderul .fu{
  font-size: 0.64rem;
}
.inputbox{
  width: 100%;
  background: #fff;
  margin: 0 auto;
  padding: 0.64rem;
}
.inputbox textarea{
  height: 2.5rem;
  padding: 0.3rem;
  width: 100%;
  border: 0.03rem solid #eee;
  margin: 0 auto;
  border-radius: 0.3rem;
  font-size: 0.64rem;
}
.inputbox p{
  text-align: right;
  margin-top: 0.213rem;
  font-size: 0.5rem;
}
/*晒图*/
.addimg{
  padding: 0 0.64rem;
  background: #fff;
  overflow: hidden;
  margin: 0 auto;
  padding-bottom: 0.8rem;
  border-bottom: 0.03rem solid #eee;
}
.addimg .add{
  width: 3.413rem;
  height: 3.413rem;
  margin-right: 0.2rem;
  background-image:url(../../assets/store/addimgs.png); 
  background-size: cover;
  float: left;
}
.add:last-child{
  margin-right: 0;
}
.commentZong{
    position: relative;
    overflow: hidden;
    background: #fff;
    padding: 0.64rem;
  }
    /*小星星*/
  .storeStart{
    margin-top: 0.213rem;
    font-size: 0.64rem;
  }
  .storeStart span{
    color: #999;
    line-height: 100%;
  }
  .storeStart .start{
    width: 0.64rem;
    height: 0.64rem;
    float: left;
    margin-right: 0.106rem;
    background-image: url(../../assets/shopmall/starsss.png);
    background-size: 100%;
  }
  .storeStart .start1{
    background-image: url(../../assets/shopmall/start0.png);
    background-size: 100%;
  }
  .storeStart .startfen{
    float: left;
    margin-right: 0.2rem;
    line-height: 0.8rem;
  }
  .manyi{
    font-size: 0.7rem;
  }
  .lian{
    width: 1.5rem;
    height: 1.5rem;
    margin:0 auto;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .cha{
    background-image: url(../../assets/comment/cha0.png);
  }
  .zhong{
    background-image: url(../../assets/comment/zhong0.png);
  }
  .hao{
    background-image: url(../../assets/comment/hao0.png);
  }
  .cha1{
    background-image: url(../../assets/comment/cha1.png);
  }
  .zhong1{
    background-image: url(../../assets/comment/zhong1.png);
  }
  .hao1{
    background-image: url(../../assets/comment/hao1.png);
  }
</style>
