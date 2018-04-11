<template>
  <b-table striped hover :items="items"></b-table>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'RecentlyCrawled',
  data: () => {
    return {
      items: []
    }
  },
  created: () => {
    // Vue.http.get('http://cors-proxy.htmldriven.com/?url=https://changelogs.md/api/recently-crawled/').then(response => {
    Vue.http.get('https://crossorigin.me/https://changelogs.md/api/recently-crawled/')
      .then(response => {
        this.items = response.content
        console.log(this.items)
      })
  }
}
</script>

<style scoped>

</style>
