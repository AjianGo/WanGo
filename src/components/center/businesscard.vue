<style scoped>
/*用户资料卡片样式 start*/
  .aui-content-padded{
    height: 4.266rem;
    background-color: #ddd;
    margin: 0;
    overflow: hidden;
  }
  .userBg{
    background-size: cover; 
  }
  .aui-card-list-user-avatar{
    width: 2.133rem;
  }
  .set{
    width: 0.854rem;
    height: 0.854rem;
    background: url(../../assets/user/setting.png);
    background-size: cover;
    position: absolute;
    right: 0.64rem;
    top: 0.64rem;
  }
  .aui-content-padded .aui-content{
    margin-top: 1.173rem;
  }
  .aui-card-list-user-avatar{
    margin-left: 0.64rem;
  }
  .aui-list-item-title{
    color: #333;
    font-size:0.746rem !important;
    margin-top: 0.32rem;
    display: inline-block;
    float: left;
  }
  .userid{
    font-size: 0.64rem;
    color: #9d9d9d;
    line-height: 0;
    line-height: 0.512rem;
  }
  .userdengji{
    width: 0.768rem;
    height: 0.768rem;
    background: url(../../assets/user/vip2.png);
    background-size: cover;
    float: left;
    margin:0.32rem 0.32rem 0 0.32rem;
    border-radius: 100%;
  }
  .username{
    overflow: hidden;
  }
  .userType{
    font-size:0.64rem !important;
    margin-top: 0.32rem;
    color: #0fc9c0;
  }
  .apply{
    background-image: url(../../assets/user/tuiguangyuan.png);
    background-size: 2.56rem 0.96rem;
    position: absolute;
    right: 0.64rem;
    width: 2.56rem;
    height: 0.96rem;
    top: 2.24rem;
  }
  /*用户资料卡片样式 end*/
  </style>
  <template>
  <div>
    <!-- 用户信息 -->
   <section class="aui-content-padded userBg" :style="{backgroundImage: 'url(' +bg + ')'}">
          <!-- 用户资料 -->
          <section class="aui-content">
              <div class="aui-card-list-user-avatar">
                 <img v-bind:src="wgpic" class="aui-img-round">
              </div> 
              <div class="aui-list-item-inner">
                    <div class="aui-list-item-text username">
                      <div class="aui-list-item-title aui-font-size-14">{{wgname}}</div>
                      <div class="userdengji"></div>
                      <div class="userType">已绑定</div>
                    </div>
                     <div class="userid">
                              玩购ID:{{wguserid}}
                     </div>
              </div>
              <!-- 申请推广员 -->
              <router-link to='/applicant' class="apply">
                
              </router-link>
          </section>
          <!-- 设置 -->
          <router-link to='/setup'  class="set">
          </router-link>
   </section>
  </div>
</template>
<script>
import '../../../static/css/aui.css'
export default {
  data () {
    return {
      bg: require('../../assets/user/backuser.png'),
      wgpic: require('../../assets/user/user.png'),
      wguserid: '未获取信息',
      wgname: '未获取信息'
    }
  },
  methods: {
  },
  mounted () {
    let wgid = localStorage.getItem('wgUserid')
    let wgname = localStorage.getItem('wgName')
    let wgpic = localStorage.getItem('wgPic')
    if (wgid !== 'null') {
      this.wgname = wgname
      this.wguserid = wgid
      this.wgpic = wgpic
    }
  }
}
</script>
