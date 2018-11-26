<template>
<div class="actions">
    <a class="items module1" href="https://maps.google.com?q=Cuba28,+Gorohovaya+28" target="_blank">
        <img src="../../public/place.svg" alt="">
        <p class="header-text">Адрес</p>
        <p class="info">Санкт-Петербург, Гороховая, 28</p>
    </a>
    <a class="items module2" href="tel:+79754565585" target="_blank">
        <img src="../../public/call.svg" alt="">
        <p class="header-text">Телефон</p>
        <p class="info">+7 (123) 456-78-90</p>
    </a>
    <span class="items module3">
        <img src="../../public/clock.svg" alt="">
        <p class="header-text">Время работы</p>
        <p class="info">15:00 - 03:00</p>
    </span>
    <span class="items module4">
        <img src="../../public/dinner.svg" alt="">
        <p class="header-text">Забронировать столик</p>
    </span>
</div>
</template>

<script>
export default {
  name: "v-actions"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.actions {
  font-size: 0.8rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  color: #222d5b;
  margin-top: 30px;
  margin-left: 32px;
  margin-right: 32px;
}
@media (max-width: 767px) {
  .actions {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-left: 16px;
    margin-right: 16px;
  }
}
@media (max-width: 1023px) {
  .actions {
    margin-left: 24px;
    margin-right: 24px;
  }
}
.items {
  text-align: center;
  font-size: 1em;
  text-decoration: none;
  color: currentColor;
  padding: 20px;
  transition: all 0.15s;
}
.items:hover {
    box-shadow: 0 0 3px rgba(0,0,0,.1);
    border-radius: 3px;
}
@media (max-width: 767px){
.items {
    width: 50%;
}}
.module1,
.module2,
.module4 {
  cursor: pointer;
}
.items img {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.header-text {
  font-weight: 700;
  margin-bottom: 0;
  font-family: Podkova, serif;
  font-size: 18px;
  color: currentColor;
}
.info {
  margin-bottom: 0;
}
</style>
