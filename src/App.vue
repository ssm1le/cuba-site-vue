<template>
  <div id="app">
    <main class="container">
      <v-header></v-header>
      <carousel class="carousel" :autoplay='true' :perPage='1' :autoplayHoverPause='true' :navigationEnabled='true'>
        <slide class="slide1"></slide>
        <slide class="slide2"></slide>
        <slide class="slide3"></slide>
        <slide class="slide4"></slide>
      </carousel>
      <v-caption text="О кубе"></v-caption>
      <v-caption text="Зажигательные Вечеринки"></v-caption>
      <v-caption text="Вкуснейшие Блюда"></v-caption>
    </main>
  </div>
</template>

<script>
import vHeader from "./components/v-header.vue";
import vCaption from "./components/v-caption.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "app",
  components: {
    vHeader,
    Carousel,
    Slide,
    vCaption
  }
};
</script>

<style>
@import url(style/main.css);
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2.5rem 2.5rem;
}
@media (max-width: 1279px) {
  .carousel {
    height: 31.25vw;
  }
}
@media (max-width: 1023px) {
  .container {
    padding: 0 2rem 2rem;
  }
}
@media (max-width: 767px) {
  .container {
    padding: 0 0 1.5rem;
  }
  .carousel {
    margin-top: 60px;
    padding: 0;
  }
}

@media (max-width: 479px) {
  .container {
    padding: 0 0 1rem;
  }
}

.carousel {
  width: 100%;
  height: 400px;
  padding-top: 1rem;
}
.VueCarousel-wrapper{
  width: 100%;
  height: 400px;
}
.VueCarousel-slide{
  width: 100%;
  height: 400px;
}
.slide1 {
  background: url('../public/1.jpg') no-repeat;
  background-size: contain;
  background-position: center;
}
.slide2 {
  background: url('../public/2.jpg') no-repeat;
  background-size: contain;
  background-position: center;
}
.slide3 {
  background: url('../public/3.jpg') no-repeat;
  background-size: contain;
  background-position: center;
}
.slide4 {
  background: url('../public/4.jpg') no-repeat;
  background-size: contain;
  background-position: center;
}
#app .VueCarousel-navigation-prev, #app .VueCarousel-navigation-next {
  transform: none;
}
#app .VueCarousel-pagination {
  position: absolute;
  bottom: -10%;
}
#app .VueCarousel-dot-button {
  transition: opacity .25s ease-in;
  opacity: .3;
  box-shadow: 1px 1px 2px rgba(0,0,0,.9);
  background: #fff!important;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  cursor: pointer;
}
#app .VueCarousel-dot.VueCarousel-dot--active .VueCarousel-dot-button {
  opacity: 1;
}
</style>
