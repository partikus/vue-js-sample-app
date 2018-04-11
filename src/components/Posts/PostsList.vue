<template>
<div>
  <router-link :to="{ name: 'HelloWorld' }">HelloWorld</router-link>
  <h1>Posts</h1>
  <b-table responsive striped hover :items="items" :fields="fields">
    <template slot="actions" slot-scope="cell">
      <!-- We use click.stop here to prevent a 'row-clicked' event from also happening -->

      <router-link :to="{ name: 'Post', params: { id: cell.item.id } }">
        <b-btn size="sm">Details</b-btn>
      </router-link>
    </template>
  </b-table>
</div>
</template>

<script>
export default {
  name: 'PostsList',
  data () {
    return {
      items: [],
      fields: [
        { key: 'id', label: 'ID', sortable: true, 'class': 'text-center' },
        { key: 'title', label: 'Title', sortable: true },
        { key: 'actions', label: 'Actions' }
      ]
    }
  },
  mounted () {
    this.$http
      .get('/api/posts')
      .then(response => { return response.body })
      .then(items => { this.items = items })
  }
}
</script>

<style scoped>

</style>
