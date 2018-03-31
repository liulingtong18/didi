<template>
    <div>
      <div class="myfooter" v-show="isshow">
        <ul class="footer">
          <li>
            <router-link to="/" :class="{active: $route.name === 'home'}">
              <i class="iconfont icon-shouye"></i>
              <h3>首页</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/items" :class="{active: $route.name === 'items'||$route.name === 'jewelitems'||$route.name === 'golditems'||$route.name === 'silveritems'}" >
              <i class="iconfont icon-xiangmu"></i>
              <h3>创业项目</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/apply" :class="{active: $route.name === 'apply'}">
              <i class="iconfont icon-web-icon-" ></i>
              <h3>报名流程</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/mien" :class="{active: $route.name === 'mien'}">
              <i class="iconfont icon-liucheng"></i>
              <h3>平台风采</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/mydidi" :class="{active: $route.name === 'mydidi'||$route.name === 'login'}">
              <i class="iconfont icon-wode"></i>
              <h3>我的滴滴</h3>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import bus from '../util/bus'
export default {
  name: 'my-footer',
  data () {
    return {
      isshow: true
    }
  },
  created () {
    bus.$on('goodCount', (val) => {
      this.isshow = val
    })
    // bus.$on('good', (val) => {
    //   this.isshow = val
    // })
  }
}
</script>

<style scoped>
  .myfooter{
    height: 58px;
  }
  .footer{
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(50,51,52);
  text-align: center;
  height: 58px;
  width: 100%;
  color: white;
}
.footer li{
  padding-top: 4px;
  min-width: 60px;
}
.footer i{
  font-size: 22px;
}
.footer h3{
  font-size: 12px;
  font-weight: 400;
}
a{
  color: #fff;
}
.active{
  color: #f00;
}
</style>
