<template>
  <h2 v-html="text"></h2>
</template>

<script>
export default {
  name: 'v-caption-text',
  props: {
    text: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  margin: 1rem 0;
}
h1:before, h2:before {
  margin-right: 1em;
}

h1:after, h1:before, h2:after, h2:before {
  content: "";
  background-image: url("../../public/star.svg");
  background-size: contain;
  width: .5em;
  height: .5em;
  display: inline-block;
}

h1:after, h2:after {
  margin-left: 1em;
}

h1:after, h1:before, h2:after, h2:before {
  content: "";
  background-image: url("../../public/star.svg");
  background-size: contain;
  width: .5em;
  height: .5em;
  display: inline-block;
}
</style>
