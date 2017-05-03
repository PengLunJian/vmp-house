<template>
  <section class="home" v-cloak>
    <v-header></v-header>
    <v-banner :banners="banners"></v-banner>
    <v-menu></v-menu>
    <v-news :news="news"></v-news>
    <v-tops></v-tops>
    <v-items></v-items>
    <v-footer></v-footer>
  </section>
</template>

<script type="text/ecmascript-6">
  import VHeader from 'components/header/v-header'
  import VBanner from 'components/banner/v-banner'
  import VMenu from 'components/menu/v-menu'
  import VNews from 'components/news/v-news'
  import VFooter from 'components/footer/v-footer'
  import VItems from 'components/items/v-items'
  import VTops from 'components/tops/v-tops'

  const ERR_OK = 0
  export default {
    components: {VTops, VItems, VFooter, VNews, VMenu, VHeader, VBanner},
    data () {
      return {banners: {}, news: {}}
    },
    created () {
      this.$http.jsonp('/api/home').then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.banners = response.data['banners']
          this.news = response.data['news']
        }
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  [v-cloak] {
    display: none;
  }

  .home {
    padding-top: 0.45rem;
  }
</style>
