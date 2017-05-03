<template>
  <section class="news group">
    <div class="news-left pull-left">
      <img src="../../assets/img/icon_news.png" alt=""/>
    </div>
    <div class="news-right pull-right">
      <ul class="news-inside" :style="style">
        <li class="news-item" v-for="item in getNewsList()" :key="item['id']">
          <a :href="item['link']">
            <p class="ellipsis">{{item['title']}}</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="clearfix"></div>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'v-news',
    props: ['news'],
    data () {
      return {
        style: ''
      }
    },
    methods: {
      getNewsList: function () {
        var list = []
        for (var i = 0; i < 2; i++) {
          for (var j = 0; j < this.news.length; j++) {
            list.push(this.news[j])
          }
        }
        return list
      },
      autoPlay: function () {
        var value = 0
        var tempObj = this
        setInterval(() => {
          value = Math.round(10 * (value + 0.2)) / 10
          tempObj.style = 'transform:translateY(' + (-value) + 'rem);'
          if (value >= 0.2 * this.getNewsList().length / 2) {
            var timer = setInterval(() => {
              value = 0
              tempObj.style += 'transform:translateY(' + (-value) + 'rem);transition:none;'
              clearInterval(timer)
            }, 400)
          }
        }, 3000)
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.autoPlay()
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../assets/less/variable";

  .news {
    padding: 0.15rem;
    border-top: 1px solid @borderColorGray;
    .news-left {
      width: 16.235%;
      font-size: 0rem;
      padding-right: 0.15rem;
      border-right: 1px solid @borderColorGray;
    }
    .news-right {
      width: 83.765%;
      height: 0.4rem;
      overflow: hidden;
      font-size: 0.12rem;
      line-height: 0.2rem;
      padding-left: 0.15rem;
      .news-inside {
        transition: all 400ms linear;
      }
      a {
        color: @deepWhite;
      }
    }
  }
</style>
