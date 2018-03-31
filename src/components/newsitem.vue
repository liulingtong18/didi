<!--新闻公告详情-->
<template>
  <div>
    <div class="header">
      <mt-header fixed title="新闻公告">
        <router-link to="/news" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="container">
      <h2 v-text="item.title" class="title"></h2>
      <div v-html="item.contentText" class="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newsitem',
  data () {
    return {
      item: []
    }
  },
  methods: {
    getdata () {
      var myid = this.$route.query.id
      this.$axios.get('getArticle', {id: myid}).then(res => {
        this.item = res.data[0]
      })
    }
  },
  mounted () {
    this.getdata()
  }
}
</script>

<style>
  .content p img{
    width: 100%;
    display: block;
    text-indent: 0;
  }
  .content p{
    text-indent: 2em;
  }
</style>

<style scoped>
.container{
  padding: 20px;
}
.title{
  font-size: 20px;
  color: #343434;
  line-height: 1.5;
}
.content {
  margin-top: 20px;
  line-height: 1.5;
}
</style>
