<template>
  <div id="app">
    <CountDown
        id="countDown1"
        @startCallback="startCallback"
        @endCallback="endCallback"
        :start="start"
        :end="end"
        endTxt="活动已结束"
        countingTxt="活动剩余："
        startTxt="距离活动开始："
    ></CountDown>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      start: Date.now() + 5000,
      end: Date.now() + 9000
    }
  },
  mounted() {
    /**
     * my-showtoast
     * this.$showToast.show('你好2020!')
        setTimeout(() => {
          this.$showToast.hide()
        }, 3000);
     */
  },
  methods: {
    startCallback(params) {
      console.log(params)
    },
    endCallback(params) {
      console.log(params)
    }
  }
}
</script>
