<!--mien平台风采-->
<template>
  <div>
    <div class="header">
      <mt-header fixed title="平台风采">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="wrapper">
      <img src="../assets/pingtai.jpg" alt="">
    </div>
    <div class="contents">
      <h2>公司简介</h2>
      <hr>
      <h3>鸿鑫互联科技（北京）股份有限公司</h3>
      <p>
        是一个建筑工程领域万众创业者的开放性互联网电子商户平台-----滴滴工程平台。我们的口号是干工程就上滴滴。滴滴工程平台是公司核心管理平台，平台集企业资质品牌、CRM、线上OA办公线上ERP、线上采购、资源整合与一体。实现创业者项目管理：<span>高效、降低成本、安全</span>。为创业者提供建筑行业生态链一站式服务，为自身创造千万价值的同时，成为平台的股东，享受平台上市资本带来数倍回报。
      </p>
      <br>
      <p>
        我们秉承“<span>专注、创新、服务、分享</span>”的企业精神，打破行业传统管理理念，为行业创造一个良好的服务环境，打造国内建筑领域各专业的孵化平台、管理平台、数据平台（目前专业有：门窗幕墙、装饰、钢结构等）；以全新的管理模式，完善的技术，周到的服务呈现，我们始终坚持用户至上，全心服务，创业者成功平台才成功的企业核心价值观。
      </p>
      <br>
      <p>欢迎各位创业者到平台，如您对平台感兴趣或有疑问，请您联系我们</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mien'
}
</script>

<style scoped>
.wrapper img{
  width: 100%;
}
.contents{
  padding: 0 10px;
}
.contents p{
  line-height: 2;
  color: rgb(101,102,103);
}
.contents h2{
  color: #ff6700;
  font-weight: 400;
}
.contents p span{
  color: #ff6708;
}
</style>
