<template>
    <a class="event" @click="$router.push('/events'+event.href)">
        <div class="wrapp" :style="events.css">
            <div class="image"><v-lazy-image :src="events.src"/></div>
            <div class="info">
                <div class="name" v-html="events.caption"></div>
                <div class="date-wrapp">
                    <span v-html="events.date"></span>
                    <span v-html="events.time"></span>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
export default {
  name: 'v-card-event',
  props: {
    events: Object,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event {
    display: block;
    text-decoration: none;
}

element.style {
    transform: rotate(2deg);
}
.wrapp {
    min-width: 100%;
    transition: -webkit-transform .15s ease,-webkit-filter .15s ease;
    transition: transform .15s ease,filter .15s ease;
    transition: transform .15s ease,filter .15s ease,-webkit-transform .15s ease,-webkit-filter .15s ease;
    -webkit-transform: scale(1),rotate(0);
    -ms-transform: scale(1),rotate(0);
    transform: scale(1),rotate(0);
    -webkit-filter: drop-shadow(1px 1px 2px rgba(0,0,0,.15));
    filter: drop-shadow(1px 1px 2px rgba(0,0,0,.15));
    z-index: 1;
    position: relative;
    will-change: transform,filter;
}

.wrapp {
    width: 300px;
    max-width: 25%;
    background: #fff;
    padding: 1rem 1rem 1.25rem;
    position: relative;
    box-sizing: border-box;
}
.image {
    line-height: 0;
    overflow: hidden;
}


.image img {
    margin: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: calc(300px - 2rem);
    height: calc(300px - 2rem);
}
.info {
    max-width: calc(300px - 2rem);
}
.name {
    color: #222d5b;
    font-family: Podkova,serif;
    font-size: 1.25rem;
    margin: .5rem 0;
}
.date {
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-line-pack: center;
    align-content: center;
    bottom: 0;
    line-height: 1;
    width: calc(100% - 2rem);
    height: 1.75rem;
    right: 1rem;
    font-size: .75rem;
    color: #6b1808;
    font-family: Podkova,serif;
}
.wrapp:hover {
    transform: scale(1.2) rotate(0)!important;
    z-index: 100!important;
}
.date-wrapp {
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-line-pack: center;
    align-content: center;
    bottom: 0;
    line-height: 1;
    width: calc(100% - 2rem);
    height: 1.75rem;
    right: 1rem;
    font-size: .75rem;
    color: #6b1808;
    font-family: Podkova,serif;
}
</style>
