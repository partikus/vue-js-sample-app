<template>
  <div id="app">
    <img src="./assets/logo.png">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <recently-crawled></recently-crawled>
        </b-col>
        <b-col>
          <router-view/>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import RecentlyCrawled from '@/components/Changelog/RecentlyCrawled'

export default {
  components: {RecentlyCrawled},
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
