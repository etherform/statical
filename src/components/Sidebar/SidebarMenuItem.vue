<script setup lang="ts">
import { Router } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router/auto'

const props = defineProps<{ item: RouteRecordRaw }>()

const app = useAppStore()
const route = useRoute()
const { t, te } = useI18n()

const title = props.item.meta?.title && te(props.item.meta.title as string) ? t(props.item.meta.title as string) : `no title ${props.item.path}`
</script>

<template>
  <!-- if item has children  -->
  <el-sub-menu
    v-if="item.children"
    :index="String(item.name)"
    select-none
  >
    <template #title>
      <el-icon v-if="item.meta?.menuIcon" :class="item.meta?.menuIcon ?? ''" />
      <span text-15px>{{ title }}</span>
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
    select-none
  >
    <el-icon v-if="item.meta?.menuIcon" :class="item.meta?.menuIcon ?? ''" />
    <template #title>
      <span text-15px>{{ title }}</span>
    </template>
  </el-menu-item>
</template>

<style lang="scss" scoped>

</style>
