import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200'
  },
  video: false,
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    }
  },
  defaultCommandTimeout: 10000,
  retries: 1
})
