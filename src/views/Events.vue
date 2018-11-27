<template>
  <div id="home">
    <main class="container">
      <v-header></v-header>
      <ul class="event-list">
        <li class="event-item firstline">
          <v-card-event-item href="/" caption="Вечер Сальсы" date="25 Января в 20:00"><img src="../../public/salsa.jpg" alt="image"></v-card-event-item>
        </li>
        <li class="event-item firstline">
          <v-card-event-item href="/" caption="Вечер латины" date="7 Июля в 20:00"><img src="../../public/latina.jpg" alt="image"></v-card-event-item>
        </li>
        <li class="event-item">
          <v-card-event-item href="/" caption="Первая суббота лета" date="2 Июня в 20:00"><img src="../../public/saturday.jpg" alt="image"></v-card-event-item>
        </li>
        <li class="event-item">
          <v-card-event-item href="/" caption="Вечер Кубинского Рома" date="24 Мая в 20:00"><img src="../../public/rome.jpg" alt="image"></v-card-event-item>
        </li>
        <li class="event-item">
          <v-card-event-item href="/" caption="Зажигательные кубинские танцы" date="19 Апреля в 20:00"><img src="../../public/dancing.jpg" alt="image"></v-card-event-item>
        </li>
        <li class="event-item">
          <v-card-event-item href="/" caption="День святого Патрика" date="17 Марта в 20:00"><img src="../../public/patrick.jpg" alt="image"></v-card-event-item>
        </li>
        <li class="event-item">
          <v-card-event-item href="/" caption="Танцы по случаю среды" date="13 Февраля в 20:00"><img src="../../public/wednesday.jpg" alt="image"></v-card-event-item>
        </li>
        <li class="event-item">
          <v-card-event-item href="/" caption="Вечер живой музыки" date="19 Апреля в 20:00"><img src="../../public/music.jpg" alt="image"></v-card-event-item>
        </li>
        <li class="event-item">
          <v-card-event-item href="/" caption="День независимости Кубы" date="10 Октября в 20:00"><img src="../../public/event09.jpg" alt="image"></v-card-event-item>
        </li>
        <li class="event-item">
          <v-card-event-item href="/" caption="День взятия казарм Монкада" date="26 Июля в 20:00"><img src="../../public/event010.jpg" alt="image"></v-card-event-item>
        </li>
        <li class="event-item">
          <v-card-event-item href="/" caption="День рабочих" date="1 Мая в 20:00"><img src="../../public/event011.jpg" alt="image"></v-card-event-item>
        </li>
        <li class="event-item">
          <v-card-event-item href="/" caption="Рождество" date="7 Января в 20:00"><img src="../../public/event012.jpg" alt="image"></v-card-event-item>
        </li>
        <li class="event-item">
          <v-card-event-item href="/" caption="День Святого Валентина" date="14 Февраля в 20:00"><img src="../../public/event013.jpg" alt="image"></v-card-event-item>
        </li>
        <li class="event-item">
          <v-card-event-item href="/" caption="8 марта" date="8 Марта в 20:00"><img src="../../public/event014.jpg" alt="image"></v-card-event-item>
        </li>
        <li class="event-item">
          <v-card-event-item href="/" caption="Новый год" date="31 Декабря в 22:59"><img src="../../public/event015.jpg" alt="image"></v-card-event-item>
        </li>
      </ul>

      <v-footer></v-footer>
    </main>
  </div>
</template>

<script>
import vHeader from "../components/v-header.vue";
import vFooter from "../components/v-footer.vue";
import vCardEventItem from "../components/v-card-event-item.vue";

export default {
  name: "app",
  components: {
    vHeader,
    vFooter,
    vCardEventItem
  }
};
</script>

<style>
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2.5rem 2.5rem;
}
.event-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: wrap row;
  flex-flow: row wrap;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}
.event-item:first-child, .event-item:nth-child(2) {
  width: 50%;
}
.event-item {
    width: 25%;
    margin: 0;
}
@media (max-width: 1023px){
.container {
  padding: 0 2rem 2rem;
}
.event-item {
    width: 50%;
    margin: 0;
}
.firstline .image {
    height: calc((((100vw - 5rem) / 2) - 1rem) / 16 * 9);
}
.firstline .image {
    height: 351px;
}
}
@media (max-width: 767px){
  .container {
    padding: 0 0 1.5rem;
  }
  .event-item:first-child, .event-item:nth-child(2) {
    width: 100%;
}
.event-item {
    width: 100%;
    margin: 0;
}
.firstline .image {
    height: calc((((100vw - 2rem)) - 1rem) / 4 * 3);
}
}
@media (max-width: 479px) {
  .container {
    padding: 0 0 1rem;
  }
}

</style>