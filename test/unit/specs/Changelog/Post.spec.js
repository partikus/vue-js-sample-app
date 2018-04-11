import Vue from 'vue'
import Post from '@/components/Posts/Post'
import { mount } from '@vue/test-utils'

describe('Post.vue', () => {
  Vue.prototype.$route = {
    params: {
      id: 1
    }
  }

  Vue.http.interceptors.unshift((request, next) => {
    next(
      request.respondWith(
        {
          userId: 1,
          id: 1,
          title: "A sample title",
          body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          status: 200
        }
      )
    )
  })

  const wrapper = mount(Post)
  const vm = wrapper.vm

  it('should render correct contents', () => {
    expect(vm.$el.querySelector('h1').textContent).toContain('A sample title')
    expect(vm.$el.querySelector('p').textContent).toContain('quia et suscipit')
  })
})
