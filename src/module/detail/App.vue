<template>
  <section class="detail" v-cloak>
    <v-banner :banners="banners"></v-banner>
  </section>
</template>

<script type="text/ecmascript-6">
  import VBanner from 'components/banner/v-banner'

  const ERR_OK = 0
  export default {
    components: {VBanner},
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
