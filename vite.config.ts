import { rmSync } from 'fs'
import path from 'path'
import type { ConfigEnv, UserConfigExport } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import UnoCSS from 'unocss/vite'
import Electron from 'vite-electron-plugin'
import { /* customStart, */ loadViteEnv } from 'vite-electron-plugin/plugin'
import { generateThemeVars } from './src/styles/theme'

rmSync('build/dist-electron', { recursive: true, force: true })

export default ({ mode }: ConfigEnv): UserConfigExport => {
  const productionMode = mode === 'production'

  const root = process.cwd()
  const env = loadEnv(mode, root)
  process.env = { ...process.env, ...env }

  /* console.log(`HERE ${JSON.stringify(process.env)}`)
  console.log(`HERE ${JSON.stringify(mode)}`) */
  const url = process.env.VITE_DEV_SERVER_URL
    ? new URL(process.env.VITE_DEV_SERVER_URL)
    : undefined

  const build = {
    assetsDir: '', // #287
    sourcemap: mode !== 'production',
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
    outDir: 'build/dist',
  }

  const css = {
    preprocessorOptions: {
      scss: {
        additionalData: generateThemeVars(),
      },
    },
  }

  const plugins = [
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),
    Pages({
      pagesDir: 'src/views',
      extendRoute(route) {
        return route?.meta?.requiresAuth === false
          ? route
          : { ...route, meta: { requiresAuth: true } }
      },
    }),
    Layouts(),
    AutoImport({
      dts: 'types/auto-imports.d.ts',
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'vue/macros',
      ],
      dirs: ['src/database', 'src/store', 'src/composables'],
      /* resolvers: [], */
      vueTemplate: true,
    }),
    Components({
      dts: 'types/components.d.ts',
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
    }),
    UnoCSS(),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(root, './locales/**')],
    }),
    /* Electron({
      include: ['electron'],
      transformOptions: {
        sourcemap: mode !== 'production',
      },
      plugins: [loadViteEnv()],
      outDir: 'build/dist-electron',
    }), */
  ]

  const resolve = {
    alias: {
      '~/': `${path.resolve(root, './src')}/`,
    },
  }

  const server = {
    fs: {
      strict: true,
    },
    host: productionMode ? process.env.VITE_HOST ?? 'localhost' : url?.hostname ?? 'localhost',
    port: productionMode ? Number(process.env.VITE_PORT) ?? 3030 : Number(url?.port) ?? 3344,
    cors: false,
    strictPort: true,
  }

  return defineConfig({ resolve, plugins, css, build, server, clearScreen: false })
}
