<!--银牌创业者-->
<template>
  <div>
    <div class="wrapper">
      <img src="../assets/silcy1.jpg" alt="">
    </div>
    <div class="servercon">
      <h2>服务内容</h2>
      <div class="items">
        <ul>
          <li><img src="../assets/chuangye2.jpg" alt=""></li>
          <li class="add">+</li>
          <li><img src="../assets/chuangye3.jpg" alt=""></li>
        </ul>
        <p>提供以上两个学院的技术支持、咨询服务、课件学习等内容。</p>
      </div>
    </div>
    <div class="content"><img src="../assets/silcy2.jpg" alt=""></div>
  </div>
</template>

<script>
export default {
  name: 'golditems'
}
</script>

<style scoped>
  .wrapper{
    margin-top: 6px;
  }
  .wrapper img {
    width: 100%;
    display: block;
  }
  h2{
    text-align: center;
    font-weight: 400;
  }
  .servercon{
    background-color: #fff;
  }
  .items>ul{
    display: flex;
    justify-content: space-around;
    padding: 10px 60px 0px;
  }
  .items>ul li img{
    width: 60px;
  }
  .items>ul .add{
    font-size: 50px;
    font-weight: 100;
    text-align: center;
    line-height: 58px;
    width: 36px;
  }
  .items p{
    padding: 10px 25px;
    font-size: 12px;
    color: #6b6b6b;
    text-align: center;
  }
  .content img{
    width: 100%;
  }
</style>
