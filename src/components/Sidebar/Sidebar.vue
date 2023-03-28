<script setup lang="ts">
const app = useAppStore()
</script>

<template>
  <q-drawer
    v-model="app.sidebar.shown"
    show-if-above
    elevated
    mini-to-overlay
    z-7000
    bg-truegray-600

    :mini="app.sidebar.mini"
    :width="200"
    :breakpoint="500"

    @mouseover="app.sidebar.mini = false"
    @mouseout="app.sidebar.mini = true"
  >
    <q-scroll-area
      :thumb-style="{ right: '2px', borderRadius: '5px', backgroundColor: '#027be3', width: '5px', opacity: '0.75' }"
      h-full
    >
      <q-list color-white flex flex-col>
        <sidebar-menu-item
          v-for="item in app.sidebarMenuMap"
          :key="String(item.name)"
          :item="item"
        />
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<style lang="scss" scoped>
.el-menu--vertical:not(.el-menu--collapse) {
  width: 13rem;
}
</style>
