<template>
  <div id="app">
    <img alt="Instruct logo" src="./assets/instruct.svg">
    <Page/>
  </div>
</template>

<script>
import Page from './components/Page.vue'


export default {
  name: 'app',
  components: {
    Page
  }
}
</script>

<style>

#app {
  font-family: 'Montserrat';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
