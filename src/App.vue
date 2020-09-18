<template>
  <div id="app">
    <Quote />
  </div>
</template>

<script>
import Quote from './components/Quote.vue'

export default {
  name: 'App',
  components: {
    Quote
  },
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Merriweather');

#app {
  font-family: 'Merriweather', serif;
  line-height: 1.6;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  position: fixed;
  width: 100%;
  top: 45%;

}
</style>
