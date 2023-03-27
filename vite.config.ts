import path from 'node:path'
import type { ConfigEnv, UserConfig, UserConfigExport } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import CSP from 'vite-plugin-csp'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import UnoCSS from 'unocss/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  /* const productionMode = mode === 'production' */

  const projectRoot = process.cwd()
  const root = path.resolve(projectRoot, 'src')
  const publicDir = path.resolve(projectRoot, 'public')

  const env = loadEnv(mode, projectRoot)
  process.env = { ...process.env, ...env }

  const url = process.env.VITE_DEV_SERVER_URL
    ? new URL(process.env.VITE_DEV_SERVER_URL)
    : undefined

  const resolve: UserConfig['resolve'] = {
    alias: {
      '~/': `${path.resolve(projectRoot, './src')}/`,
    },
  }

  const build: UserConfig['build'] = {
    // See https://tauri.app/v1/references/webview-versions for details
    target: ['es2021', 'chrome100', 'safari13'],
    sourcemap: command === 'serve' ? 'inline' : false,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        sourcemap: command === 'serve' ? 'inline' : false,
      },
    },
    outDir: 'dist',
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
      routesFolder: 'src/views',
      routeBlockLang: 'yaml',
      dts: 'src/types/typed-router.d.ts',
      importMode: 'async',
    }),
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: 'src/styles/quasar.variables.scss',
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
      eslintrc: { enabled: true },
    }),
    Components({
      dirs: ['components'],
      dts: 'types/components.d.ts',
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [],
      version: 3,
    }),
    UnoCSS(),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(projectRoot, 'translations/**')],
    }),
    // TODO: read into CSP and configure it later
    CSP({
      enabled: true,
      onDev: 'permissive',
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
