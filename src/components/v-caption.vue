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

@media (max-width: 767px){
  h2 {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    max-width: calc(100% - 3rem);
    margin: 0 auto 1rem;
  }
}
@media (max-width: 767px){
h1:before, h2:before {
    right: -1em;
}}
@media (max-width: 767px){
h1:after, h2:after {
    left: -1em;
}}

@media (max-width: 767px){
h1:after, h1:before, h2:after, h2:before {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    margin: 0;
}}
</style>
