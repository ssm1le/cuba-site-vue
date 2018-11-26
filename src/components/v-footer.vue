<template>
  <footer>
    <v-actions></v-actions>
    <v-caption text="Социальные сети"></v-caption>
    
  </footer>
</template>

<script>
import vActions from "./v-actions.vue";
import vCaption from "./v-caption.vue";

export default {
  name: 'v-footer-menu',
  components: {
    vCaption,
    vActions,

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
  font-size: .8rem;
  width: 100%;
  margin: 40px auto;
}
</style>
