<template>
  <div>
    <ul class="nav">
      <li>
        <router-link to="/items/" :class="{active: $route.name === 'jewelitems'}">
          钻石创业者
        </router-link>
      </li>
      <li>
        <router-link to="/items/golditems"  :class="{active: $route.name === 'golditems'}">
          金牌创业者
        </router-link>
      </li>
      <li>
        <router-link to="/items/silveritems"  :class="{active: $route.name === 'silveritems'}">
          银牌创业者
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'items-nav',
  data () {
    return {
      color: 'white'
    }
  }
}
</script>

<style scoped>
.nav{
  display :flex;
  justify-content: space-around;
  background-color: rgb(241,242,243);
}
.nav>li{
  /*width: 92px;*/
  height: 51px;
  text-align: center;
  line-height: 51px;
}
a{
  padding: 15px;
  color:#333 ;
}
  .active{
    background-color: #fff;
    color: #006dba;
  }
</style>
