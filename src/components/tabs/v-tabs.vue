<template>
  <section class="tab">
    <ul class="tab-sort clearfix">
      <li class="tab-item col-md-4">地区</li>
      <li class="tab-item col-md-4">筛选</li>
      <li class="tab-item col-md-4">排序</li>
    </ul>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'v-tab',
    data () {
      return {}
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../assets/less/variable";

  .tab {
    color: @grey;
    font-size: 0.14rem;
    text-align: center;
    line-height: 0.4rem;
    background-color: @white;
    .tab-item {
      position: relative;
      &:before {
        content: '';
        width: 0rem;
        height: 0.16rem;
        position: absolute;
        top: 50%;
        right: 0px;
        margin-top: -0.08rem;
        border-right: 1px solid @borderColorDed;
      }
      &:last-child {
        &:before {
          border: none;
        }
      }
      &:after {
        content: '';
        display: inline-block;
        vertical-align: middle;
        margin-left: 0.04rem;
        margin-top: -0.02rem;
        border-top: 0.06rem solid @grey;
        border-left: 0.04rem solid transparent;
        border-right: 0.04rem solid transparent;
        -webkit-transition: all 300ms ease;
        -moz-transition: all 300ms ease;
        -ms-transition: all 300ms ease;
        -o-transition: all 300ms ease;
        transition: all 300ms ease;
      }
      &.active {
        color: @orange;
        &:after {
          border-top-color: @orange;
          -webkit-transform: rotate(180deg);
          -moz-transform: rotate(180deg);
          -ms-transform: rotate(180deg);
          -o-transform: rotate(180deg);
          transform: rotate(180deg);
        }
      }
    }
  }
</style>
