<template>
  <div>
    <h1>Recently Crawled</h1>
    <b-table responsive striped hover :items="items"></b-table>
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
    this.$http
      .get('/api/changelogs/recently-crawled/')
      .then(response => { this.items = response.body.content })
  }
}
</script>

<style scoped>

</style>
