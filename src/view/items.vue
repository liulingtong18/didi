<!--创业项目-->
<template>
    <div>
      <div class="header">
        <mt-header fixed title="创业项目">
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
      </div>
      <items-nav></items-nav>
      <transition name="items">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
import itemsNav from '@/components/itemsNav.vue'
export default {
  name: 'items',
  components: {
    itemsNav
  }
}
</script>

<style scoped>
  .items-enter{
    opacity: 0;
  }
  .items-enter-active {
    position: fixed;
    left: 0;
    right: 0;
    transition: all 1s linear;
  }
  .items-leave-active{
    position: fixed;
    left: 0;
    right: 0;
    transition: all 1s linear;
  }
  .items-leave-to{
    opacity: 0;
  }
</style>
