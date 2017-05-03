<template>
  <section class="list" v-cloak>
    <v-tab></v-tab>
    <v-list :list="list"></v-list>
    <v-footer></v-footer>
  </section>
</template>

<script type="text/ecmascript-6">
  import VList from 'components/lists/v-list'
  import VFooter from 'components/footer/v-footer'
  import VTab from 'components/tabs/v-tabs'

  const ERR_OK = 0
  export default {
    components: {VTab, VFooter, VList},
    data () {
      return {list: {}}
    },
    created () {
      this.$http.jsonp('/api/list').then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.list = response.data
        }
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less">

</style>
