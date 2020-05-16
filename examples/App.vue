
<template>
  <div id="app">
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  mounted() {
    this.$showToast.show('你好2020!')
    // this.$showToast.show()
    // setTimeout(() => {
    //   this.$showToast.hide()
    // }, 3000);
  }
}
</script>
