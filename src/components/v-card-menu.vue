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
  name: 'v-card-menu',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
