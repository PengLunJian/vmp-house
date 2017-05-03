<template>
  <section class="items group">
    <div class="items-header row">
      <div class="pull-left clearfix">
        <h3 class="items-title pull-left">新房</h3>
        <p class="items-desc pull-left">新房之选，为您坚守</p>
      </div>
      <div class="pull-right">
        <a href="http://www.baidu.com" class="items-more">
          <span>更多</span><i class="icon-link"></i>
        </a>
      </div>
    </div>
    <div class="items-content">
      <div class="item-house row">
        <a href="http://www.baidu.com" class="clearfix">
          <div class="item-img col-md-5">
            <img src="../../assets/img/timg1.jpg" alt=""/>
          </div>
          <div class="item-info col-md-7">
            <div class="item-group clearfix">
              <h2 class="item-title col-md-7">碧桂园浦东星作</h2>
              <em class="item-total col-md-5">总价待定</em>
            </div>
            <div class="item-group clearfix">
              <span class="item-addr col-md-7">上海周边-其他</span>
              <em class="item-unit col-md-5">30000元/m²</em>
            </div>
            <div class="item-group clearfix">
              <p class="item-layout">三室 别墅</p>
            </div>
            <div class="item-group clearfix">
              <ul class="item-features clearfix">
                <li class="item-sub-feature">不限购</li>
                <li class="item-sub-feature">旅游地产</li>
                <li class="item-sub-feature">投资地产</li>
              </ul>
            </div>
          </div>
        </a>
      </div>
      <div class="item-house row">
        <a href="http://www.baidu.com" class="clearfix">
          <div class="item-img col-md-5">
            <img src="../../assets/img/timg1.jpg" alt=""/>
          </div>
          <div class="item-info col-md-7">
            <div class="item-group clearfix">
              <h2 class="item-title ellipsis col-md-7">碧桂园浦东星作</h2>
              <em class="item-total ellipsis col-md-5">总价待定</em>
            </div>
            <div class="item-group clearfix">
              <span class="item-addr ellipsis col-md-7">上海周边-其他</span>
              <em class="item-unit ellipsis col-md-5">30000元/m²</em>
            </div>
            <div class="item-group clearfix">
              <p class="item-layout ellipsis">三室 别墅</p>
            </div>
            <div class="item-group clearfix">
              <ul class="item-features clearfix">
                <li class="item-sub-feature">不限购</li>
                <li class="item-sub-feature">旅游地产</li>
                <li class="item-sub-feature">投资地产</li>
              </ul>
            </div>
          </div>
        </a>
      </div>
      <div class="item-house row">
        <a href="http://www.baidu.com" class="clearfix">
          <div class="item-img col-md-5">
            <img src="../../assets/img/timg1.jpg" alt=""/>
          </div>
          <div class="item-info col-md-7">
            <div class="item-group clearfix">
              <h2 class="item-title col-md-7">碧桂园浦东星作</h2>
              <em class="item-total col-md-5">总价待定</em>
            </div>
            <div class="item-group clearfix">
              <span class="item-addr col-md-7">上海周边-其他</span>
              <em class="item-unit col-md-5">30000元/m²</em>
            </div>
            <div class="item-group clearfix">
              <p class="item-layout">三室 别墅</p>
            </div>
            <div class="item-group clearfix">
              <ul class="item-features clearfix">
                <li class="item-sub-feature">不限购</li>
                <li class="item-sub-feature">旅游地产</li>
                <li class="item-sub-feature">投资地产</li>
              </ul>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'v-items',
    data () {
      return {}
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../assets/less/variable";

  .items {
    padding-top: 0.15rem;
    border-top: 1px solid @borderColorGray;
    .items-header {
      color: @deepWhite;
      line-height: 0.2rem;
      margin-bottom: 0.15rem;
      .items-title {
        color: @black;
        font-size: 0.16rem;
        padding-right: 0.05rem;
      }
      .items-more {
        color: @deepWhite;
      }
    }
    .items-content {

    }
    .item-house {
      margin-bottom: 0.15rem;
      .item-img {
        font-size: 0rem;
        padding-right: 0.15rem;
        img {
          height: 0.9rem;
          border-radius: 0.05rem;
        }
      }
      .item-info {
        color: @deepWhite;
        line-height: 0.22rem;
        .item-title {
          color: @black;
          font-size: 0.15rem;
          font-weight: normal;
        }
        .item-total {
          color: @orange;
          text-align: right;
          font-size: 0.16rem;
        }
        .item-unit {
          text-align: right;
        }
        .item-features {
          font-size: 0.12rem;
          line-height: 0.18rem;
          margin-top: 0.04rem;
          .item-sub-feature {
            float: left;
            padding: 0rem 0.08rem;
            border-radius: 0.1rem;
            margin-right: 0.05rem;
            border: 1px solid @borderColorGray;
          }
        }
      }
    }
  }
</style>
