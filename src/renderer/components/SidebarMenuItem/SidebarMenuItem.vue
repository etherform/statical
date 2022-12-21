<script setup lang="ts">
import { Router } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router/auto'

const props = withDefaults(defineProps<{ item: RouteRecordRaw }>(), {})

const app = useAppStore()
const route = useRoute()
const { t, te } = useI18n()

const title = props.item.meta?.title && te(props.item.meta.title as string) ? t(props.item.meta.title as string) : `no title ${props.item.path}`
</script>

<template>
  <!-- if item has children -->
  <el-sub-menu
    v-if="item.children"
    :index="String(item.name)"
    :collapse-close-icon="item.meta?.menuIcon ?? undefined"
    h-12
    w-full
    select-none
  >
    <template #title>
      <el-icon v-if="item.meta?.menuIcon" :class="item.meta?.menuIcon ?? ''" w-6 h-6 />
      <span text-4>{{ title }}</span>
    </template>
    <!-- loop through children -->
    <sidebar-menu-item
      v-for="child in item.children"
      :key="String(child.name)"
      :item="child"
    />
  </el-sub-menu>
  <!-- if item has no children -->
  <el-menu-item
    v-else
    :index="String(item.name)"
    h-12
    w-full
    select-none
  >
    <el-icon v-if="item.meta?.menuIcon" :class="item.meta?.menuIcon ?? ''" w-6 h-6 />
    <template #title>
      <span text-4>{{ title }}</span>
    </template>
  </el-menu-item>
  <el-divider v-if="item === app.sidebarMenuMap[0]" m-0 style="width: 80%" />
</template>

<style lang="scss" scoped>

</style>
