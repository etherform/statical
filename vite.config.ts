import path from 'path'
import { builtinModules } from 'module'
import { rmSync } from 'fs'
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
import Electron from 'vite-plugin-electron'
/* import Inspect from 'vite-plugin-inspect' */
import { generateThemeVars } from './src/renderer/styles/theme'

rmSync('build/dist', { recursive: true, force: true })

export default ({ mode }: ConfigEnv): UserConfigExport => {
  const productionMode = mode === 'production'

  const root = process.cwd()
  const env = loadEnv(mode, root)
  process.env = { ...process.env, ...env }

  const url = process.env.VITE_DEV_SERVER_URL
    ? new URL(process.env.VITE_DEV_SERVER_URL)
    : undefined

  const resolve = {
    alias: {
      '~/': `${path.resolve(root, './src/renderer')}/`,
      '@/': `${path.resolve(root, './src/main')}/`,
      '#/': `${path.resolve(root, './src/common')}/`,
    },
  }

  const build = {
    assetsDir: '', // #287
    sourcemap: !productionMode,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
    outDir: 'build/dist/renderer',
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
      pagesDir: 'src/renderer/views',
      extendRoute(route) {
        return route?.meta?.requiresAuth === false
          ? route
          : { ...route, meta: { requiresAuth: true } }
      },
    }),
    Layouts({ layoutsDirs: 'src/renderer/layouts' }),
    AutoImport({
      dts: 'src/common/types/auto-imports.d.ts',
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'vue/macros',
      ],
      dirs: ['src/renderer/store'],
      /* resolvers: [], */
      vueTemplate: true,
    }),
    Components({
      dirs: ['src/renderer/components'],
      dts: 'src/common/types/components.d.ts',
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
    }),
    UnoCSS(),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(root, './src/common/locales/**')],
    }),
    Electron(
      {
        entry: [path.resolve(root, './src/main/main.ts'), path.resolve(root, './src/main/preload.ts')],
        onstart: (options) => {
          options.startup(['.', '--inspect=5858', '--remote-debugging-port=9227'])
        },
        vite: {
          build: {
            assetsDir: '',
            outDir: path.resolve('./build/dist/main'),
            rollupOptions: {
              external: [
                'electron',
                'leveldown',
                ...builtinModules,
              ],
            },
          },
          resolve,
        },
      },
    ),
    /* Inspect({
      build: true,
      outputDir: 'build/.vite-inspect',
    }), */
  ]

  const server = {
    fs: {
      strict: true,
    },
    host: url?.hostname ?? 'localhost',
    port: Number(url?.port) ?? 3344,
    cors: false,
    strictPort: true,
  }

  return defineConfig({ resolve, plugins, css, build, server, clearScreen: false })
}
