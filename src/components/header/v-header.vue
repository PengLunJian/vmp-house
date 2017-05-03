<template>
  <header class="header">
    <div class="header-left">
      <a href="javascript:void(0)" class="btn-city icon-home">
        <span class="icon-text">上海</span>
      </a>
    </div>
    <h1 class="header-title ellipsis">谷粒家园</h1>
    <div class="header-right">
      <a href="javascript:void(0);" class="btn-search icon-search"></a>
      <a href="javascript:void(0);" class="btn-login icon-link"></a>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'v-header',
    data () {
      return {}
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../assets/less/font";
  @import "../../assets/less/variable";

  .header {
    width: 100%;
    height: 0.45rem;
    position: fixed;
    top: 0rem;
    left: 0rem;
    z-index: 1000;
    text-align: center;
    line-height: 0.45rem;
    background-color: @white;
    -webkit-box-shadow: 0px 0px 20px rgba(0, 0, 0, .15);
    -moz-box-shadow: 0px 0px 20px rgba(0, 0, 0, .15);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, .15);
    .header-left {
      height: 100%;
      font-size: 0rem;
      position: absolute;
      top: 0rem;
      left: 0rem;
      padding-left: 0.15rem;
      .btn-city {
        width: auto;
        height: 0.45rem;
        overflow: hidden;
        &:before {
          height: 0.45rem;
          color: @orange;
          display: inline-block;
          vertical-align: middle;
          font-size: 0.2rem;
          line-height: 0.45rem;
        }
      }
      .icon-text {
        height: 0.45rem;
        margin-left: 0.04rem;
        display: inline-block;
        vertical-align: middle;
        font-size: 0.15rem;
        line-height: 0.44rem;
      }
    }
    .header-title {
      width: 100%;
      height: 100%;
      font-size: 0.16rem;
      font-weight: normal;
      padding: 0rem 0.7rem;
      text-indent: -9999px;
      background-repeat: no-repeat;
      background-size: 0.8rem auto;
      background-position: center center;
      background-image: url('../../assets/img/icon_logo.png');
    }
    .header-right {
      position: absolute;
      top: 0rem;
      right: 0rem;
      width: 0.7rem;
      font-size: 0rem;
      a {
        color: @grey;
        width: 0.35rem;
        height: 100%;
        font-size: 0.2rem;
        line-height: 0.45rem;
        display: inline-block;
        vertical-align: middle;
        &.btn-search {
          font-size: 0.22rem;
        }
      }
    }
  }
</style>
