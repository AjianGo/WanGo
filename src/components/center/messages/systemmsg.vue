<template>
  <div>
    <div v-title data-title="系统消息">
    </div>
    <div class="aui-content aui-margin-b-15 msgbox">
        <ul class="aui-list aui-list-in">   
            <li class="aui-list-item aui-list-item-middle" v-on:click="gonews()">
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <span class="msgtype">未读</span><div class="msgTxt">玩购最新推玩河北棋牌，打比赛赢尚尚劵吃大餐</div><span class="msgtime">2017-06-05</span>
                </div>    
            </li> 
            <li class="aui-list-item aui-list-item-middle">
                <div class="aui-list-item-inner aui-list-item-arrow" v-on:click="gonews()">
                    <span class="msgtype msoktype">已读</span><div class="msgTxt">玩购最新推玩河北棋牌，打比赛赢尚尚劵吃大餐</div><span class="msgtime">2017-06-05</span>
                </div>    
            </li> 
            <li class="aui-list-item aui-list-item-middle">
                <div class="aui-list-item-inner aui-list-item-arrow" v-on:click="gonews()">
                    <span class="msgtype msoktype">已读</span><div class="msgTxt">玩购最新推玩河北棋牌，打比赛赢尚尚劵吃大餐</div><span class="msgtime">2017-06-05</span>
                </div>    
            </li> 
            <li class="aui-list-item aui-list-item-middle">
                <div class="aui-list-item-inner aui-list-item-arrow" v-on:click="gonews()">
                    <span class="msgtype msoktype">已读</span><div class="msgTxt">玩购最新推玩河北棋牌，打比赛赢尚尚劵吃大餐</div><span class="msgtime">2017-06-05</span>
                </div>    
            </li>                                                      
        </ul>
    </div>
  </div>
</template>
<script>
import '../../../../static/css/aui.css'
export default {
  data () {
    return {
    }
  },
  methods: {
    gonews: function () {
      this.$router.push({ path: '/newslist/news' })
    }
  }
}
</script>

<style scoped>
/*距离顶部*/
.msgbox{
	margin-top: 0.64rem;
}
.msgbox li{
	padding-left: 0.64rem !important;
	background-image: none !important;
	font-size: 0.64rem;
	border-bottom : 0.03rem solid #ddd!important;
}
/*消息信息*/
.msgbox ul{
	background-image: none;
}
.msgTxt{
	display: inline-block;
    float: left;
    width: 8.53rem;
    color: #666;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
/*未读*/
.msgtype{
	color: #ff3764;
}
/*已读*/
.msoktype{
	color: #999999;
}
.msgtime{
	font-size: 0.533rem;
	color: #b5b5b5;
}
.msgbox .aui-list-item-inner.aui-list-item-arrow{
	padding-right: 1.28rem;
}
.msgbox .aui-list-item-arrow:before{
	right: 0.64rem;
}

</style>
