import path from 'node:path'
import { rmSync } from 'node:fs'
import type { ConfigEnv, UserConfig, UserConfigExport } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
/* import Pages from 'vite-plugin-pages' */
import VueRouter from 'unplugin-vue-router/vite'
/* import Layouts from 'vite-plugin-vue-layouts' */
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import UnoCSS from 'unocss/vite'
import Electron from 'vite-electron-plugin'
import { alias, loadViteEnv } from 'vite-electron-plugin/plugin'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import { chrome, node } from './.electron-vendors.cache.json'

rmSync('build/main', { recursive: true, force: true })
rmSync('build/preload', { recursive: true, force: true })
rmSync('build/shared', { recursive: true, force: true })

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  /* const productionMode = mode === 'production' */

  const projectRoot = process.cwd()
  /* const electronRoot = path.resolve(projectRoot, 'src/main')
  const sharedRoot = path.resolve(projectRoot, 'src/shared') */
  const buildRoot = path.resolve(projectRoot, 'build')
  const root = path.resolve(projectRoot, 'src/renderer')
  const publicDir = path.resolve(projectRoot, 'public')
  const env = loadEnv(mode, projectRoot)
  process.env = { ...process.env, ...env }

  const url = process.env.VITE_DEV_SERVER_URL
    ? new URL(process.env.VITE_DEV_SERVER_URL)
    : undefined

  const resolve: UserConfig['resolve'] = {
    alias: {
      '~/': `${path.resolve(projectRoot, './src/renderer')}/`,
      '@/': `${path.resolve(projectRoot, './src/main')}/`,
      '&/': `${path.resolve(projectRoot, './src/preload')}/`,
      '#/': `${path.resolve(projectRoot, './src/shared')}/`,
    },
  }

  const build: UserConfig['build'] = {
    assetsDir: '', // #287
    sourcemap: command === 'serve' ? 'inline' : false,
    target: [`chrome${chrome}`, `node${node}`],
    emptyOutDir: true,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        sourcemap: command === 'serve' ? 'inline' : false,
      },
    },
    outDir: path.resolve(buildRoot, './renderer'),
  }

  const css: UserConfig['css'] = {
    /* preprocessorOptions: {
      scss: {
        additionalData: '@use "~/styles/element.scss" as *;',
      },
    }, */
  }

  const plugins: UserConfig['plugins'] = [
    VueRouter({
      routesFolder: ['src/renderer/views'],
      routeBlockLang: 'yaml',
      dts: 'src/renderer/types/router.d.ts',
      importMode: 'async',
    }),
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),
    AutoImport({
      dts: 'types/auto-imports.d.ts',
      imports: [
        'vue',
        'vue-i18n',
        'vue/macros',
        VueRouterAutoImports,
        { 'vue-router/auto': ['useLink'] },
      ],
      dirs: ['composables', 'store'],
      /* resolvers: [], */
      vueTemplate: true,
    }),
    Components({
      dirs: ['components'],
      dts: 'types/components.d.ts',
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [ElementPlusResolver({ importStyle: false /* 'sass' */ })],
    }),
    UnoCSS(),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(projectRoot, 'src/shared/locales/**')],
    }),
    Electron({
      root: path.resolve(projectRoot, 'src'),
      include: ['shared', 'main', 'preload'],
      outDir: buildRoot,
      plugins: [
        alias([
          { find: '~', replacement: path.resolve(__dirname, 'src/renderer') },
          { find: '@', replacement: path.resolve(__dirname, 'src/main') },
          { find: '&', replacement: path.resolve(__dirname, 'src/preload') },
          { find: '#', replacement: path.resolve(__dirname, 'src/shared') },
        ]),
        loadViteEnv(),
      ],
      transformOptions: {
        sourcemap: command === 'serve' ? 'inline' : false,
        target: [`chrome${chrome}`, `node${node}`],
      },
    }),
  ]

  const server: UserConfig['server'] = {
    fs: {
      strict: true,
    },
    host: url?.hostname ?? 'localhost',
    port: Number(url?.port) ?? 3344,
    cors: false,
    strictPort: true,
  }

  return defineConfig({
    root,
    publicDir,
    resolve,
    plugins,
    css,
    build,
    server,
    clearScreen: false,
  })
}
