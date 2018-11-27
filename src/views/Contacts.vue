<template>
  <div id="home">
    <main class="container">
      <v-header></v-header>
      <div>
        <section class="contacts">
          <ul>
            <li>
              <strong>Адрес:</strong>
              <a
                href="https://maps.google.com?q=Cuba28,+Gorohovaya+28"
              >Санкт-Петербург, Гороховая, 28</a>
            </li>
            <li>
              <strong>Метро:</strong>
              Сенная площадь, Садовая, Спасская
            </li>
            <li>
              <strong>Телефон:</strong>
              <a href="tel:+71234567890">+7 (123) 456-78-90</a>
            </li>
            <li>
              <strong>Время работы:</strong>
              15:00 - 03:00
            </li>
          </ul>
        </section>
        <section class="google-maps">
          <GmapMap
            :center="{lat: 59.930161, lng: 30.319891}"
            :zoom="15"
            style="width:100%;  height: 400px;"
            map-type-id="terrain"
          >
            <GmapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
            />
          </GmapMap>
        </section>
      </div>
      <v-footer></v-footer>
    </main>
  </div>
</template>

<script>
import vHeader from "../components/v-header.vue";
import vFooter from "../components/v-footer.vue";

export default {
  name: "app",
  components: {
    vHeader,
    vFooter,
  },
  data() {
    return {

      center: { lat: 59.930161, lng: 30.319891 },
      markers: [{ lat: 45.508, lng: -73.587 }],
      places: [],
      currentPlace: null
    };
  }
};
</script>

<style scoped>
.google-maps {
    margin-top: 4rem;
    margin-bottom: 4rem;
}
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2.5rem 2.5rem;
}
.contacts {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
}
@media (max-width: 1023px){
.container {
  padding: 0 2rem 2rem;
}
}
@media (max-width: 767px){
  .container {
    padding: 0 0 1.5rem;
  }
}
@media (max-width: 479px) {
  .container {
    padding: 0 0 1rem;
  }
}

</style>