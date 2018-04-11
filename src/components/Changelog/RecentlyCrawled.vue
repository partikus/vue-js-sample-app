<template>
  <div>
    <h1>Recently Crawled</h1>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  name: 'RecentlyCrawled',
  data () {
    return {
      items: []
    }
  },
  mounted () {
    // Vue.http.get('http://cors-proxy.htmldriven.com/?url=https://changelogs.md/api/recently-crawled/').then(response => {
    this.$http.get('https://crossorigin.me/https://changelogs.md/api/recently-crawled/')
      .then(response => {
        this.items = response.body.content
      })
  }
}
</script>

<style scoped>

</style>
