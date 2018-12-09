<template>
  <div id="home">
    <main class="container">
      <v-header></v-header>
      <section class="singlePost">
        <aside class="presentation">
          <v-lazy-image :src="menu[info].src"/>
        </aside>
        <article>
          <div>
            <div class="heading">
              <h3 class="title" v-html="menu[info].caption"></h3>
              <span class="price" v-html="menu[info].price"></span>
            </div>
            <div v-html="menu[info].description" class="description"></div>
          </div>
        </article>
      </section>
      <v-footer></v-footer>
    </main>
  </div>
</template>

<script>
import vHeader from "../components/v-header.vue";
import vFooter from "../components/v-footer.vue";
import items from "../data/data.json";

export default {
  name: "app",
  components: {
    vHeader,
    vFooter
  },
  data() {
    return {
      menu: items.list,
      info: this.$route.params.item
    };
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2.5rem 2.5rem;
}
.singlePost {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 5rem;
}
.presentation {
  margin-right: 1rem;
  width: 30%;
  min-width: 30%;
}
.description {
  margin-top: 0.5rem;
}
img {
  max-width: 100%;
  margin: 0 0 1.45rem;
  padding: 0;
}
@media (max-width: 1023px) {
  .container {
    padding: 0 2rem 2rem;
  }
  .presentation {
    width: 40%;
    min-width: 40%;
  }
}
@media (max-width: 767px) {
  .container {
    padding: 0 0 1.5rem;
  }
  .singlePost {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 0;
  }
  .presentation {
    margin-right: 0;
    width: 100%;
    min-width: 100%;
  }
  .heading {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
  }
}
@media (max-width: 479px) {
  .container {
    padding: 0 0 1rem;
  }
  .heading {
    display: block;
  }
}
</style>