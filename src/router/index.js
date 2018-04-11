import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PostsList from '@/components/Posts/PostsList'
import Post from '@/components/Posts/Post'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/posts',
      name: 'PostsList',
      component: PostsList
    },
    {
      path: '/posts/:id',
      name: 'Post',
      component: Post
    }
  ]
})
