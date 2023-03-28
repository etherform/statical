<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router/auto'

const props = defineProps<{ item: RouteRecordRaw }>()

const app = useAppStore()
const route = useRoute()
const { t, te } = useI18n()

const title = ref((props.item.meta?.title && te(props.item.meta.title as string)) ? t(props.item.meta.title as string) : `no title ${props.item.path}`)
</script>

<template>
  <!-- TODO: Fix icons moving when sidebar gets expanded, they should stay in place instead -->
  <!-- if item has children  -->
  <q-expansion-item
    v-if="item.children"
    :icon="item.meta?.menuIcon as string ?? undefined"
    :label="title"
    :index="String(item.name)"
    select-none
  >
    <!-- TODO: Handle background color change of nested lists -->
    <!-- loop through children -->
    <q-list>
      <sidebar-menu-item
        v-for="child in item.children"
        :key="String(child.name)"
        :item="child"
      />
    </q-list>
  </q-expansion-item>

  <!-- if item has no children -->
  <q-item
    v-else
    :index="String(item.name)"
    clickable
    select-none
    flex
  >
    <q-item-section v-if="item.meta?.menuIcon" flex avatar>
      <q-icon :class="item.meta.menuIcon" />
    </q-item-section>
    <q-item-section flex>
      {{ title }}
    </q-item-section>
  </q-item>
</template>

<style lang="scss" scoped>

</style>
