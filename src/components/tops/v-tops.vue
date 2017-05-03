<template>
  <section class="tops group">
    <div class="tops-content row">
      <div class="pull-left col-md-6">
        <div class="tops-lg-item">
          <a href="http://www.baidu.com">
            <h3 class="tops-title ellipsis">臻藏上海</h3>
            <p class="tops-desc ellipsis">低密度8层美宅</p>
            <img src="../../assets/img/timg2.jpg" alt=""/>
          </a>
        </div>
      </div>
      <div class="pull-right col-md-6">
        <div class="tops-sm-item">
          <a href="http://www.baidu.com" class="clearfix">
            <div class="col-md-7 tops-sm-info">
              <h3 class="tops-title ellipsis">国际生态岛</h3>
              <p class="tops-desc ellipsis">养老度假休闲区</p>
            </div>
            <div class="col-md-5 tops-sm-img">
              <img src="../../assets/img/timg3.jpg" alt=""/>
            </div>
          </a>
        </div>
        <div class="tops-sm-item">
          <a href="http://www.baidu.com" class="clearfix">
            <div class="col-md-7 tops-sm-info">
              <h3 class="tops-title ellipsis">桐乡高铁旁</h3>
              <p class="tops-desc ellipsis">不限购叠加公寓</p>
            </div>
            <div class="col-md-5 tops-sm-img">
              <img src="../../assets/img/timg4.jpg" alt=""/>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'v-tops',
    data () {
      return {}
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../assets/less/variable";

  .tops {
    text-align: center;
    padding: 0.15rem 0rem;
    border-top: 1px solid @borderColorGray;
    .tops-content {
      > .pull-right {
        padding-left: 0.15rem;
      }
      .tops-title {
        font-size: 0.14rem;
        line-height: 0.2rem;
      }
      .tops-desc {
        color: @deepWhite;
        font-size: 0.12rem;
        line-height: 0.24rem;
      }
    }
    .tops-lg-item {
      font-size: 0rem;
      border-right: 1px solid @borderColorGray;
      img {
        width: 0.8rem;
        height: 0.8rem;
        margin-top: 0.06rem;
        border-radius: 100%;
      }
    }
    .tops-sm-item {
      height: 0.65rem;
      font-size: 0rem;
      text-align: left;
      padding-bottom: 0.2rem;
      border-bottom: 1px solid @borderColorGray;
      &:last-child {
        border: none;
        padding-top: 0.2rem;
        padding-bottom: 0rem;
      }
      .tops-sm-img {
        text-align: center;
      }
      img {
        width: 0.45rem;
        height: 0.45rem;
        border-radius: 100%;
      }
    }
  }
</style>
