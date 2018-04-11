<template>
<div>
  <b-link :to="{ name: 'PostsList' }">Posts</b-link>
  <h1>{{ title }}</h1>
  <p>{{ body }}</p>
</div>
</template>

<script>
export default {
  name: 'Post',
  data () {
    return {
      title: '',
      body: ''
    }
  },
  created () {
    // window.scrollTo(0, 0)
  },
  mounted () {
    const postId = this.$route.params.id

    this.$http
      .get(`/api/posts/${postId}`)
      .then(response => { return response.body })
      .then(post => {
        this.title = post.title
        this.body = post.body
      })
      .catch(err => { console.error(err) })
  }
}
</script>

<style scoped>

</style>
