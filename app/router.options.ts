import type { RouterConfig } from '@nuxt/schema'
import { promiseTimeout } from '@vueuse/core'

export default <RouterConfig>{
  async scrollBehavior (...args) {
    const [, , savedPosition] = args
    if (savedPosition) {
      await promiseTimeout(50)
      return savedPosition
    } else {
      return {
        top: 0
      }
    }
  }
}
