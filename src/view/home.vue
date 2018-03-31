<!--首页-->
<template>
    <div>
      <div class="header">
        <mt-header fixed title="滴滴平台"></mt-header>
      </div>
      <div class="wrapper">
        <img src="../assets/shouye.jpg" alt="">
      </div>
      <!--图片结束-->
      <div class="content">
        <ul class="content-first pub">
          <li>
            <router-link to="/items">
              <img src="../assets/icon6.jpg" alt="">
              <h3>创业项目</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/mien">
              <img src="../assets/icon7.jpg" alt="">
              <h3>平台风采</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/apply">
              <img src="../assets/icon8.jpg" alt="">
              <h3>报名流程</h3>
            </router-link>
          </li>
        </ul>
        <ul class="content-second pub">
          <li>
            <router-link to="/clientserver">
              <img src="../assets/icon9.jpg" alt="">
              <h3>客户管理</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/balance">
              <img src="../assets/icon10.jpg" alt="">
              <h3>财务服务</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/news">
              <img src="../assets/icon11.jpg" alt="">
              <h3>新闻公告</h3>
            </router-link>
          </li>
        </ul>
        <ul class="content-third pub">
          <li>
            <router-link to="/project">
              <img src="../assets/icon12.jpg" alt="">
              <h3>工程案例</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/changepwd">
              <img src="../assets/icon13.jpg" alt="">
              <h3>修改密码</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/clientreg">
              <img src="../assets/icon14.jpg" alt="">
              <h3>注册客户</h3>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
.wrapper img{
  display:block;
  width: 100%;
}
.pub{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 87px;
  background-color: #fff;
  margin-bottom: 15px;
}
.content{
  height: 300px;
}
.content img{
  display: block;
  width: 32px;
  margin: 0 auto;
  padding: 5px;
}
.content h3{
  font-size: 14px;
  color: #000;
}
</style>
