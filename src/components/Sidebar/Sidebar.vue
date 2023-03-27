<script setup lang="ts">
const app = useAppStore()
</script>

<template>
  <q-drawer bg-bluegray-700 shadow h-full w-auto>
    <el-menu
      h-full
      :default-active="app.route.current.path"
      :collapse="app.sidebar.collapsed"
      :unique-opened="true"
      :collapse-transition="true"
      :router="true"
    >
      <sidebar-menu-item
        v-for="item in app.sidebarMenuMap"
        :key="String(item.name)"
        :item="item"
      />
    </el-menu>
  </q-drawer>
</template>

<style lang="scss" scoped>
.el-menu--vertical:not(.el-menu--collapse) {
  width: 13rem;
}
</style>
