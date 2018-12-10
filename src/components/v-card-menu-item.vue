<template>
  <a class="card-menu" @click="$router.push('/menu'+menu.href)">
    <div class="image">
      <v-lazy-image :src="menu.src"/>
    </div>
    <div class="info">
      <span class="name" v-html="menu.caption"></span>
      <span class="price" v-html="menu.price"></span>
    </div>
  </a>
</template>

<script>
export default {
  name: "v-card-menu-item",
  props: {
    menu: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-menu {
  height: 100%;
  text-align: center;
  padding: 8px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.15));
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.15));
  transition: -webkit-filter 0.15s ease;
  transition: filter 0.15s ease;
  transition: filter 0.15s ease, -webkit-filter 0.15s ease;
}

.image {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  background-color: #fff;
  width: 100%;
  height: 228px;
  overflow: hidden;
  line-height: 0;
}

.image img {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.info {
  background-color: #fff;
  padding: 0.5rem 0;
}
.name {
  display: block;
  font-weight: 700;
}
.price {
  display: block;
}
.card-menu:hover {
  -webkit-filter: drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.25));
  filter: drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.25));
}
@media (max-width: 1023px) {
  .image {
    width: 100%;
    height: calc((((100vw - 5rem) / 2) - 1rem) / 16 * 9);
    overflow: hidden;
  }
}
@media (max-width: 767px) {
  .image {
    width: 100%;
    height: calc((((100vw - 2rem)) - 1rem) / 4 * 3);
    overflow: hidden;
  }
}
</style>
