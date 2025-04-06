import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    workspace: [
      {
        test: {
          name: 'nuxt-tests',
          include: ['**/*.nuxt.spec.ts'],
          environment: 'nuxt'
        }
      }
    ]
  }
});
