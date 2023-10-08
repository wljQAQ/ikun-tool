/*
 * @Author: wlj
 * @Date: 2022-10-20 14:43:15
 * @LastEditors: wlj
 * @LastEditTime: 2022-10-21 10:59:03
 * @Description: 
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteEslint from 'vite-plugin-eslint'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint({
      failOnError: false
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
