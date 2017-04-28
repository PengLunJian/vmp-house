<template>
  <div class="list-page">
    <banner :banners="banners"></banner>
  </div>
</template>

<script type="text/ecmascript-6">
  import Banner from 'components/banner/banner'

  const ERR_OK = 0
  export default {
    components: {Banner},
    data () {
      return {banners: {}}
    },
    created () {
      this.$http.jsonp('/api/banner').then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.banners = response.data
        }
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less">

</style>
