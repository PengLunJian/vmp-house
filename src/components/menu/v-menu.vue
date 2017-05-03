<template>
  <section class="menu group">
    <ul class="nav-menu row">
      <li class="nav-item col-md-3">
        <a href="/module/detail.html" title="新房">
          <img src="../../assets/img/home_nav_icon01.png" alt="新房"/>
          <p class="nav-title">新房</p>
        </a>
      </li>
      <li class="nav-item col-md-3">
        <a href="/module/detail.html" title="二手房">
          <img src="../../assets/img/home_nav_icon02.png" alt="二手房"/>
          <p class="nav-title">二手房</p>
        </a>
      </li>
      <li class="nav-item col-md-3">
        <a href="/module/detail.html" title="别墅">
          <img src="../../assets/img/home_nav_icon03.png" alt="别墅"/>
          <p class="nav-title">别墅</p>
        </a>
      </li>
      <li class="nav-item col-md-3">
        <a href="/module/detail.html" title="租房">
          <img src="../../assets/img/home_nav_icon04.png" alt="租房"/>
          <p class="nav-title">租房</p>
        </a>
      </li>
      <li class="nav-item col-md-3">
        <a href="/module/detail.html" title="小区房价">
          <img src="../../assets/img/home_nav_icon05.png" alt="小区房价"/>
          <p class="nav-title">小区房价</p>
        </a>
      </li>
      <li class="nav-item col-md-3">
        <a href="/module/detail.html" title="在线委托">
          <img src="../../assets/img/home_nav_icon06.png" alt="在线委托"/>
          <p class="nav-title">在线委托</p>
        </a>
      </li>
      <li class="nav-item col-md-3">
        <a href="/module/detail.html" title="商业">
          <img src="../../assets/img/home_nav_icon01.png" alt="商业"/>
          <p class="nav-title">商业</p>
        </a>
      </li>
      <li class="nav-item col-md-3">
        <a href="/module/detail.html" title="地图找房">
          <img src="../../assets/img/home_nav_icon02.png" alt="地图找房"/>
          <p class="nav-title">地图找房</p>
        </a>
      </li>
    </ul>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'v-menu',
    data () {
      return {}
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../assets/less/variable";

  @-webkit-keyframes rotate {
    90% {
      -webkit-transform: rotateY(0deg);
    }
    95% {
      -webkit-transform: rotateY(180deg);
    }
    100% {
      -webkit-transform: rotateY(360deg);
    }
  }

  .nav-menu {
    padding: 0.15rem 0rem 0.05rem;
    .nav-item {
      font-size: 0rem;
      text-align: center;
      margin-bottom: 0.1rem;
      img {
        width: 0.54rem;
        height: 0.54rem;
        border-radius: 100%;
        -webkit-animation-name: rotate;
        -webkit-animation-duration: 6000ms;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear;
      }
      &:nth-child(1) {
        img {
          -webkit-animation-delay: 0ms;
        }
      }
      &:nth-child(2) {
        img {
          -webkit-animation-delay: 100ms;
        }
      }
      &:nth-child(3) {
        img {
          -webkit-animation-delay: 200ms;
        }
      }
      &:nth-child(4) {
        img {
          -webkit-animation-delay: 300ms;
        }
      }
      &:nth-child(5) {
        img {
          -webkit-animation-delay: 400ms;
        }
      }
      &:nth-child(6) {
        img {
          -webkit-animation-delay: 500ms;
        }
      }
      &:nth-child(7) {
        img {
          -webkit-animation-delay: 600ms;
        }
      }
      &:nth-child(8) {
        img {
          -webkit-animation-delay: 700ms;
        }
      }
      .nav-title {
        color: @deepWhite;
        margin-top: 0.1rem;
        font-size: 0.12rem;
        line-height: 0.2rem;
      }
    }
  }
</style>
