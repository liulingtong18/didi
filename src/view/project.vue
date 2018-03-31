<template>
    <div>
      <div class="header">
        <mt-header fixed title="工程案例">
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
      </div>
      <div class="item" v-for="val in item" :key = "val.id">
        <img :src='val.img'>
        <div class="titlet"><span>项目名称：</span><span v-text="val.title"></span></div>
        <div class="content"><span>施工内容：</span><span v-text="val.content"></span></div>
        <div class="site"><span>工程地点：</span><span v-text="val.site"></span></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'project',
  data () {
    return {
      item: []
    }
  },
  methods: {
    getdata () {
      this.$axios.get('projects').then(res => {
        console.log(res)
        this.item = res.data.data
      })
    }
  },
  mounted () {
    this.getdata()
  }
}
</script>

<style scoped>
.item {
  padding: 15px;
  border-bottom:1px solid #888888 ;
}
.item img{
  width: 100%;
}
.content{
  color: #888888;
}
.site{
 color: #888888;
}
</style>
