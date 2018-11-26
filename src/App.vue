<template>
  <div id="app">
    <main class="container">
      <v-header></v-header>
      <carousel class="carousel" :autoplay='true' :perPage='1' :navigationEnabled='true'>
        <slide class="slide1"></slide>
        <slide class="slide2"></slide>
        <slide class="slide3"></slide>
        <slide class="slide4"></slide>
      </carousel>
      <v-actions></v-actions>
      <v-caption text="О кубе"></v-caption>
      <p class="info-cuba">
        Russian Lorem ipsum dolor sit amet, veniam expetenda intellegebat quo&nbsp;et, mel ei&nbsp;nostro volutpat facilisis. Pro eros solet ornatus&nbsp;ea. Mel graecis commune maluisset&nbsp;cu, illum iuvaret principes eam&nbsp;in, an&nbsp;qui nisl justo neglegentur. Cum at&nbsp;mentitum accommodare.
        Et&nbsp;tota falli epicurei per, ea&nbsp;tibique ponderum eam. Usu te&nbsp;causae impedit, idque vitae vis&nbsp;ea. Ne&nbsp;mutat putant habemus cum. Duo bonorum laoreet&nbsp;ex. Veri facilisis accusamus vis&nbsp;ex, ad&nbsp;est cetero audiam democritum. Ea&nbsp;vel admodum accusamus, an&nbsp;vim virtute repudiandae, dico dignissim sit&nbsp;te. Mei putent probatus&nbsp;cu.
        Simul altera nostrud mel&nbsp;et, ex&nbsp;delenit laoreet quo, mundi facilis vivendum vim&nbsp;ex. Qui id&nbsp;commune consulatu urbanitas. Usu cu&nbsp;vocent impetus aliquando, nonumy petentium consequuntur eu&nbsp;eam. Et&nbsp;his primis sensibus torquatos, audire epicuri id&nbsp;per. Ei&nbsp;ius civibus accusata constituam, est et&nbsp;vivendo consetetur.
        Id&nbsp;ius atqui populo, cu&nbsp;saperet suscipit copiosae mei. Vis no&nbsp;debet erant moderatius, augue inermis docendi at&nbsp;mei. Mel autem idque menandri&nbsp;et. Duo dictas alterum&nbsp;at.
        Idque molestiae his&nbsp;ut, an&nbsp;mel corrumpit voluptatum. No&nbsp;pri hendrerit inciderint, eu&nbsp;mazim tempor efficiendi ius. Eu&nbsp;case ferri autem mel, mea lucilius incorrupte neglegentur&nbsp;ut. Ne&nbsp;mel nibh semper latine, vero doming eam&nbsp;ad, iudico melius eu&nbsp;sea. Nam graece dolorem mandamus&nbsp;ea.
        Usu te&nbsp;evertitur vulputate. Eu&nbsp;quaeque efficiantur eos. Cu&nbsp;dolorem iracundia gloriatur quo. Ad&nbsp;augue virtute vel, ius cu&nbsp;dicam animal, cum tota aeque&nbsp;ne.
        Duo ei&nbsp;sale nonumes. Qui ad&nbsp;congue admodum. Utroque laoreet similique ei&nbsp;per, altera scripta admodum qui&nbsp;no, ut&nbsp;aliquam molestie ius. Dolore ubique ei&nbsp;mei. Legere viderer vim&nbsp;et. Eum id&nbsp;voluptatum delicatissimi.
        Ne&nbsp;choro nominati vim. An&nbsp;vix omnes feugiat senserit, eos amet patrioque gubergren&nbsp;ei, laboramus conclusionemque nam&nbsp;et. Nec ad&nbsp;veri doming admodum, suas augue movet vix&nbsp;at, in&nbsp;brute reprehendunt mea. Duo ad&nbsp;brute dicit reprimique, malis consetetur an&nbsp;ius.
      </p>
      <section class="events">
        <v-caption text="Зажигательные Вечеринки"></v-caption>
        <p class="events-info">
          RU-Mauris finibus cursus justo, sit amet eleifend libero gravida eget.
          Aliquam lobortis, tortor ut lobortis bibendum, urna ante tristique odio, vel vestibulum turpis dolor non libero.
        </p>
      </section>
      <v-caption text="Вкуснейшие Блюда"></v-caption>
    </main>
  </div>
</template>

<script>
import vHeader from "./components/v-header.vue";
import vCaption from "./components/v-caption.vue";
import vActions from "./components/v-actions.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "app",
  components: {
    vHeader,
    Carousel,
    Slide,
    vCaption,
    vActions
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
.info-cuba {
  text-align: center;
  -webkit-column-count: 2;
  column-count: 2;
  color: #222d5b;
}
@media (max-width: 767px){
  .info-cuba {
    width: calc(100% - 2rem);
    max-width: 100%;
    margin: 0 auto;
    -webkit-column-count: 1;
    column-count: 1;
    color: #222d5b;
  }
}
.events-info {
  width: (100% - 4rem);
  max-width: 768px;
  margin: 0 auto 3rem;
  text-align: center;
  color: #222d5b;
}

@media (max-width: 767px){
  .events-info {
    width: calc(100% - 2rem);
    max-width: 100%;
  }
}
@media (max-width: 1023px){
  .events-info {
    width: calc(100% - 4rem);
    max-width: 100%;
  }
}
</style>
