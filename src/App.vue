<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myFooter from '@/components/myFooter.vue'
export default {
  name: 'App',
  components: {
    myFooter
  }
}
</script>

<style>
@import 'css/init.css';
.header .mint-header{
  background-color: #006db8;
  height: 44px;
}
.header{
  height: 44px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all .5s linear;
}
.fade-leave-active{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all .5s linear;
}
.fade-leave-to{
  opacity: 0;
  /*transform: translate3d(-100%,0,0);*/
}
</style>
