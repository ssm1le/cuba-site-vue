<template>
  <div id="home">
    <main class="container">
      <v-header></v-header>
      <ul class="event-list">
        <li class="event-item" v-for="(item, index) in eventsList" :key="index">
          <v-card-event-item :event="item"></v-card-event-item>
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
import myEvents from "../data/data.json";

export default {
  name: "app",
  components: {
    vHeader,
    vFooter,
    vCardEventItem
  },
  data: () => {
    return {
      eventsList: myEvents.items
    };
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
.event-item:first-child,
.event-item:nth-child(2) {
  width: 50%;
}
.event-item {
  width: 25%;
  margin: 0;
}
@media (max-width: 1023px) {
  .container {
    padding: 0 2rem 2rem;
  }
  .event-item {
    width: 50%;
    margin: 0;
  }
  .event-item:first-child,
  .event-item:nth-child(2) .image {
    height: calc((((100vw - 5rem) / 2) - 1rem) / 16 * 9);
  }
  .event-item:first-child,
  .event-item:nth-child(2) .image {
    height: 351px;
  }
}
@media (max-width: 767px) {
  .container {
    padding: 0 0 1.5rem;
  }
  .event-item:first-child,
  .event-item:nth-child(2) {
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