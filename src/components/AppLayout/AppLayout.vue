<script setup lang="ts">
import LayoutDefault from '~/layouts/default.vue'
import LayoutEmpty from '~/layouts/empty.vue'

const layout = ref(markRaw(LayoutDefault))
const route = useRoute()

watch(
  () => route.meta?.layout as string | undefined,
  (metaLayout) => {
    if (metaLayout === 'empty')
      layout.value = markRaw(LayoutEmpty)
    else
      layout.value = markRaw(LayoutDefault)
  },
  { immediate: true },
)
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
