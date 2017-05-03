<template>
  <footer class="footer" :class="{hide:isHide}">
    <div class="col-md-9">
      <div class="col-md-3 app-logo">
        <img src="../../assets/img/app_logo.png" alt="app"/>
      </div>
      <div class="col-md-9 app-info">
        <p class="big-title ellipsis">谷粒家园APP</p>
        <p class="sub-title ellipsis">用客戶端，好房源抢先一步</p>
      </div>
    </div>
    <div class="col-md-3">
      <a href="javascript:void(0);" class="btn-app">打开APP</a>
      <a href="javascript:void(0);" class="btn-close" @click="hideFooter()">&times;</a>
    </div>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'v-footer',
    data () {
      return {
        isHide: false
      }
    },
    methods: {
      hideFooter: function () {
        this.isHide = true
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../assets/less/variable";

  .footer {
    width: 100%;
    position: fixed;
    left: 0px;
    bottom: 0rem;
    padding: 0.1rem 0.15rem;
    background-color: rgba(0, 0, 0, .8);
    -webkit-transition: all 150ms linear;
    -moz-transition: all 150ms linear;
    -ms-transition: all 150ms linear;
    -o-transition: all 150ms linear;
    transition: all 150ms linear;
    &.hide {
      -webkit-transform: translateY(0.6rem);
      -moz-transform: translateY(0.6rem);
      -ms-transform: translateY(0.6rem);
      -o-transform: translateY(0.6rem);
      transform: translateY(0.6rem);
    }
    .app-logo {
      font-size: 0rem;
      padding-left: 0.25rem;
    }
    .app-info {
      color: @white;
      font-size: 0.15rem;
      letter-spacing: 1px;
      line-height: 0.2rem;
      padding: 0rem 0.1rem;
      .sub-title {
        color: @deepWhite;
        font-size: 0.12rem;
      }
    }
    .btn-app {
      width: 0.88rem;
      color: @white;
      text-align: center;
      line-height: 0.32rem;
      margin-top: 0.04rem;
      border-radius: 0.05rem;
      background-color: @orange;
    }
    .btn-close {
      position: absolute;
      top: 0.05rem;
      left: 0.1rem;
      width: 0.2rem;
      height: 0.2rem;
      color: @white;
      font-size: 0.3rem;
      text-align: center;
      line-height: 0.2rem;
    }
  }
</style>
