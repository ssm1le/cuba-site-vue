<template>
  <div id="home">
    <main class="container">
      <v-header></v-header>
      <ul class="menu-list">
        <li class="menu-item firstline">
          <v-card-menu-item href="/" caption="Клубничный дайкири" price="350 руб."><img src="../../public/menu01.jpg" alt="image"></v-card-menu-item>
        </li>
        <li class="menu-item firstline">
          <v-card-menu-item href="/" caption="Завтрак" price="300 руб."><img src="../../public/menu02.jpg" alt="image"></v-card-menu-item>
        </li>
        <li class="menu-item">
          <v-card-menu-item href="/" caption="Ягодо-свекольный смузи" price="250 руб."><img src="../../public/menu03.jpg" alt="image"></v-card-menu-item>
        </li>
        <li class="menu-item">
          <v-card-menu-item href="/" caption="Сэндвич с ветчиной" price="295 руб."><img src="../../public/menu04.jpg" alt="image"></v-card-menu-item>
        </li>
        <li class="menu-item">
          <v-card-menu-item href="/" caption="Креветки с овозами" price="400 руб."><img src="../../public/menu05.jpg" alt="image"></v-card-menu-item>
        </li>
        <li class="menu-item">
          <v-card-menu-item href="/" caption="Конгри или Морос" price="430 руб."><img src="../../public/menu06.jpg" alt="image"></v-card-menu-item>
        </li>
        <li class="menu-item">
          <v-card-menu-item href="/" caption="Кубинское мясное рагу" price="450 руб."><img src="../../public/menu07.jpg" alt="image"></v-card-menu-item>
        </li>
        <li class="menu-item">
          <v-card-menu-item href="/" caption="Жареные ананасы" price="330 руб."><img src="../../public/menu08.jpg" alt="image"></v-card-menu-item>
        </li>
        <li class="menu-item">
          <v-card-menu-item href="/" caption="Ветчина по-кубински" price="400 руб."><img src="../../public/menu09.jpg" alt="image"></v-card-menu-item>
        </li>
        <li class="menu-item">
          <v-card-menu-item href="/" caption="Бургер" price="300 руб."><img src="../../public/menu010.jpg" alt="image"></v-card-menu-item>
        </li>
        <li class="menu-item">
          <v-card-menu-item href="/" caption="Виные ребра" price="480 руб."><img src="../../public/menu011.jpg" alt="image"></v-card-menu-item>
        </li>
        <li class="menu-item">
          <v-card-menu-item href="/" caption="Тыквенный суп" price="350 руб."><img src="../../public/menu012.jpg" alt="image"></v-card-menu-item>
        </li>
        <li class="menu-item">
          <v-card-menu-item href="/" caption="Креветки" price="400 руб."><img src="../../public/menu013.jpg" alt="image"></v-card-menu-item>
        </li>
        <li class="menu-item">
          <v-card-menu-item href="/" caption="Бурито" price="350 руб."><img src="../../public/menu014.jpg" alt="image"></v-card-menu-item>
        </li>
      </ul>

      <v-footer></v-footer>
    </main>
  </div>
</template>

<script>
import vHeader from "../components/v-header.vue";
import vFooter from "../components/v-footer.vue";
import vCardMenuItem from "../components/v-card-menu-item.vue";

export default {
  name: "app",
  components: {
    vHeader,
    vFooter,
    vCardMenuItem
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
.menu-list {
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
.menu-item:first-child, .menu-item:nth-child(2) {
  width: 50%;
}
.menu-item {
    width: 25%;
    margin: 0;
}
@media (max-width: 1023px){
.container {
  padding: 0 2rem 2rem;
}
.menu-item {
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
  .menu-item:first-child, .menu-item:nth-child(2) {
    width: 100%;
}
.menu-item {
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