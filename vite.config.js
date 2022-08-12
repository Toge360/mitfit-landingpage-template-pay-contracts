import { defineConfig } from 'vite'
import { splitVendorChunkPlugin } from 'vite'
export default defineConfig({
  base: './',
  plugins: [splitVendorChunkPlugin()],
  build: {
    target: 'es2017', // es2015 is lowest https://esbuild.github.io/content-types/#javascript
    rollupOptions: {
    }
  }
})