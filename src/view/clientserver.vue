<!--客户管理-->
<template>
    <div>
      <div class="header">
        <mt-header title="客户管理">
          <router-link to="/mydidi" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
      </div>
      <div v-for="val in arr" :key="val.id" class="content">
        <div class="item1">
          <p class="name">姓名：<span v-text="val.name"></span></p>
          <p>联系电话：<span v-text="val.phone"></span></p>
          <p>身份证号：<span v-text="val.idNum"></span></p>
          <p>客户状态：<span v-text="val.status"></span></p>
          <p>添加时间：<span v-text="val.updateTime"></span></p>
        </div>
        <div class="item2" v-text="val.level"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'clientserver',
  data () {
    return {
      arr: [],
      levels: ''
    }
  },
  mounted () {
    this.$axios.get('userlist').then(res => {
      var data = res.data
      this.arr = data
      for (var i = 0; i < data.length; i++) {
        switch (data[i].level) {
          case 0 :
            this.arr[i].level = '钻石会员'
            break
          case 1 :
            this.arr[i].level = '黄金会员'
            break
          case 2:
            this.arr[i].level = '白银会员'
            break
        }
      }
    })
    this.$axios.get('login').then(res => {
      if (!res.data.ret) {
        this.$router.push({path: '/login'})
      } else {
        this.$router.push({path: '/clientserver'})
      }
    })
  }
}
</script>

<style scoped>
.content{
  display: flex;
  justify-content: flex-start;
  margin: 15px 15px 0;
}
.item1{
  width: 70%;
  font-size: 12px;
  padding: 10px;
  line-height: 1.5;
  border: 1px solid #cfcfcf;
  border-left: 3px solid #006eb8;
}
.item2{
  width: 70px;
  height: 50px;
  background: #ff7200;
  margin: auto 0;
  text-align: center;
  line-height: 50px;
  font-size: 13px;
  color: #fff;
}
.name{
 font-size: 16px;
}
</style>
