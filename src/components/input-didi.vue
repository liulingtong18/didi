<template>
    <div>
      <span>
        {{label}}
      </span>
      <input :type="type" v-model="currentvalue" :name="name" class="didi-input">
    </div>
</template>

<script>
export default {
  name: 'input-didi',
  props: {
    value: {
      type: String
    },
    label: {
      type: String,
      default: 'text'
    },
    type: {
      type: String
    },
    name: {
      type: String
    },
    val: {
      type: String
    }
  },
  data () {
    return {
      currentvalue: this.value
    }
  },
  watch: {
    value (val) {
      this.currentvalue = val
    },
    currentvalue (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style>
.didi-input{
  font-size: 14px;
  outline: none;
  margin-left: 10px;
  width: 70%;
}
</style>
