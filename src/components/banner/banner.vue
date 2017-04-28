<template>
  <div class="banner">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in banners" :key="item['id']">
        <a :href="item['link']" :title="item['title']">
          <img :src="item['src']" :title="item['title']" :alt="item['title']"/>
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: 'banner',
    components: {
      swiper, swiperSlide
    },
    props: ['banners'],
    data () {
      return {
        swiperOption: {
          autoplay: 2000,
          loop: true,
          initialSlide: 1,
          pagination: '.swiper-pagination',
          autoplayDisableOnInteraction: false,
          onSlideChangeStart: swiper => {
            this.index = swiper.realIndex
            this.pageCode = swiper.realIndex + 1
          }
        }
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .banner{
    .swiper-container {
      .swiper-slide {
        font-size: 0rem;
        margin: 0rem !important;
        img {
          height: 2.4rem;
        }
      }
      .swiper-pagination-bullet {
        margin: 0px 0.04rem !important;
      }
      .swiper-pagination-bullet-active {
        background-color: #ffffff !important;
      }
    }
  }
</style>
