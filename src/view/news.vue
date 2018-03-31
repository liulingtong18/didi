<template>
    <div>
      <div class="header">
        <mt-header fixed title="新闻公告">
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
      </div>
      <router-link :to="'/newsitem?id='+item._id" class="items" v-for="item in arr" :key="item._id">
        <h2 class="title" v-text="item.title">习近平访美前瞻：将广泛接触美国社会</h2>
        <div class="content" v-html="item.content">在中国国家主席习近平访美前夕.</div>
        <p class="time" v-text="item.updateTime"></p>
        <!--<div class="btn">查看详情</div>-->
      </router-link>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'news',
  data () {
    return {
      arr: []
    }
  },
  methods: {
    getdata () {
      this.$axios.get('getArticle').then(res => {
        var data = res.data
        this.arr = data
        // for (var i = 0; i < data.length; i++) {
        //   var unixTimestamp = new Date(this.arr[i].updatetime) ;
        //   this.arr[i].updatetime = unixTimestamp.toLocaleString();
        // }
      })
    }
  },
  mounted () {
    this.getdata()
  }
}
</script>

<style scoped>
.items{
  display: block;
  margin: 15px;
  padding: 15px;
  border: 2px solid #c9c9c9;
  border-left: 3px solid #006eb8;
  background: #fff;
}
.title{
  color: #343434;
  margin-bottom: 15px;
}
.content{
  height: 60px;
  text-overflow:ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #b0b0b0;
}
.time{
  text-align: right;
  line-height: 2;
  color: #888888;
}
</style>
