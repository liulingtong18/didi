<!--报名流程-->
<template>
    <div>
      <div class="header">
        <mt-header fixed title="报名流程">
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
      </div>
      <div class="wrapper">
        <img src="../assets/baoming.jpg" alt="">
      </div>
      <div class="contents">
        <img src="../assets/liucheng.jpg" alt="">
      </div>
    </div>
</template>

<script>
export default {
  name: 'apply'
}
</script>

<style scoped>
.wrapper img{
  width: 100%;
}
.wrapper{
  margin-bottom: 10px;
}
.contents img{
  width: 100%;
}
</style>
