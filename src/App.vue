<template>
  <div id="app">
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col cols="6">
          <recently-crawled></recently-crawled>
        </b-col>
        <b-col cols="6">
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
