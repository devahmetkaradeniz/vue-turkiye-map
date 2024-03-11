import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({ rollupTypes: true })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/TurkeyMap.vue'),
      name: 'VueTurkiyeMap',
      formats: ['es'],
      fileName: 'vue-turkiye-map'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
